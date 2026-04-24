#!/usr/bin/env python3
"""
Convert GitBook documentation to VitePress format.

This script:
1. Copies all markdown files to site-content/
2. Copies .gitbook/assets/ to site-content/public/images/
3. Renames README.md -> index.md (VitePress convention)
4. Transforms GitBook-specific syntax to VitePress equivalents
5. Parses SUMMARY.md to generate .vitepress/config.mjs sidebar
6. Creates VitePress theme files (custom CSS)
"""

import json
import os
import re
import shutil
import sys
import yaml
from pathlib import Path
from bs4 import BeautifulSoup

# Directories
ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT
DEST = ROOT / "site-content"
ASSETS_SRC = ROOT / ".gitbook" / "assets"
ASSETS_DEST = DEST / "public" / "images"

# Files/dirs to skip when copying
SKIP = {
    ".git", ".gitbook", "site-content", "site", "node_modules",
    "scripts", "docs", ".claude", ".github", "CLAUDE.md",
    "CLAUDE_INSTRUCTIONS.md", "mkdocs.yml", "requirements.txt",
    "package.json", "package-lock.json", ".gitignore",
    "product-docs", "media",
}

# Files to remove from site-content after copying (not documentation)
CLEANUP_PATTERNS = [
    "GENERATION_REPORT.md",
    "IMPLEMENTATION_PLAN.md",
    "IMPLEMENTATION_SUMMARY.md",
    "BLURBS_IMPLEMENTATION_PLAN.md",
    "BLURBS_IMPLEMENTATION_SUMMARY.md",
    "DEPLOYMENT_SUMMARY.md",
    "GITHUB_ACTIONS_INTEGRATION.md",
]


def copy_source_files():
    """Copy markdown and related files to site-content/."""
    if DEST.exists():
        shutil.rmtree(DEST)

    for item in SRC.iterdir():
        if item.name in SKIP or item.name.startswith("."):
            continue
        dest_item = DEST / item.name
        if item.is_dir():
            shutil.copytree(item, dest_item)
        elif item.is_file() and item.suffix in (".md", ".txt", ".html"):
            DEST.mkdir(parents=True, exist_ok=True)
            shutil.copy2(item, dest_item)


def copy_assets():
    """Copy .gitbook/assets/ to site-content/public/images/."""
    if ASSETS_SRC.exists():
        if ASSETS_DEST.exists():
            shutil.rmtree(ASSETS_DEST)
        shutil.copytree(ASSETS_SRC, ASSETS_DEST)
    print(f"  Copied {sum(1 for _ in ASSETS_DEST.rglob('*') if _.is_file())} assets")


def rename_readmes_to_index():
    """Rename all README.md files to index.md (VitePress convention)."""
    count = 0
    for readme in list(DEST.rglob("README.md")):
        target = readme.parent / "index.md"
        readme.rename(target)
        count += 1
    print(f"  Renamed {count} README.md -> index.md")


def move_colocated_assets_to_public():
    """Move non-markdown files from content dirs to public/ and rewrite paths.

    VitePress treats relative image paths in HTML as module imports, which breaks
    during SSR. Moving them to public/ and using absolute paths avoids this.
    """
    public_dir = DEST / "public"
    image_exts = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".mp4", ".webm", ".pdf", ".ico"}
    moved = 0

    for f in list(DEST.rglob("*")):
        if f.is_file() and f.suffix.lower() in image_exts:
            # Skip files already in public/
            try:
                f.relative_to(public_dir)
                continue
            except ValueError:
                pass

            # Compute the path relative to DEST
            rel = f.relative_to(DEST)
            dest = public_dir / "colocated" / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(f), str(dest))
            moved += 1

    print(f"  Moved {moved} co-located assets to public/colocated/")


def clean_frontmatter(content):
    """Remove GitBook-specific frontmatter fields, keep description."""
    if not content.startswith("---"):
        return content

    end = content.find("---", 3)
    if end == -1:
        return content

    fm_text = content[3:end].strip()
    rest = content[end + 3:]

    try:
        fm = yaml.safe_load(fm_text)
        if not isinstance(fm, dict):
            return content
    except yaml.YAMLError:
        return content

    keep_keys = {"description", "title"}
    cleaned = {k: v for k, v in fm.items() if k in keep_keys and v}

    if cleaned:
        fm_str = yaml.dump(cleaned, default_flow_style=False, allow_unicode=True).strip()
        return f"---\n{fm_str}\n---{rest}"
    else:
        return rest.lstrip("\n")


def normalize_pre_code_blocks(content):
    """Convert <pre class="language-X"><code class="lang-X">...</code></pre> to fenced code blocks."""
    pattern = r'<pre[^>]*class="language-(\w+)"[^>]*>\s*<code[^>]*>(.*?)</code>\s*</pre>'

    def replace_pre(match):
        lang = match.group(1)
        code = match.group(2).strip()
        # Unescape HTML entities in code
        code = code.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")
        # Remove <strong> tags that GitBook adds
        code = re.sub(r'</?strong>', '', code)
        return f"```{lang}\n{code}\n```"

    return re.sub(pattern, replace_pre, content, flags=re.DOTALL)


def convert_hints(content):
    """Convert {% hint style="X" %}...{% endhint %} to VitePress custom containers."""
    pattern = r'{%\s*hint\s+style="(\w+)"\s*%}(.*?){%\s*endhint\s*%}'

    def replace_hint(match):
        style = match.group(1)
        body = match.group(2).strip()

        # Map GitBook styles to VitePress container types
        style_map = {
            "info": "info",
            "warning": "warning",
            "success": "tip",
            "danger": "danger",
        }
        container_type = style_map.get(style, "info")

        return f"::: {container_type}\n{body}\n:::\n"

    return re.sub(pattern, replace_hint, content, flags=re.DOTALL)


def convert_tabs(content):
    """Convert {% tabs %}...{% endtabs %} to VitePress code-group."""

    def replace_tabs_block(match):
        tabs_content = match.group(1)

        # Find all tab blocks
        tab_pattern = r'{%\s*tab\s+title="([^"]+)"\s*%}(.*?)(?={%\s*(?:endtab|tab\s+title)\s*%})'
        tabs = re.findall(tab_pattern, tabs_content, re.DOTALL)

        if not tabs:
            return ""

        result_parts = ["::: code-group\n"]

        for title, body in tabs:
            body = body.strip()

            # Check if body contains a fenced code block
            code_match = re.match(r'^```(\w*)\n(.*?)```\s*$', body, re.DOTALL)
            if code_match:
                lang = code_match.group(1) or "text"
                code = code_match.group(2)
                result_parts.append(f"```{lang} [{title}]\n{code}```\n")
            else:
                # Non-code tab content: wrap as text
                result_parts.append(f"```text [{title}]\n{body}\n```\n")

        result_parts.append(":::\n")
        return "\n".join(result_parts)

    tabs_block_pattern = r'{%\s*tabs\s*%}(.*?){%\s*endtabs\s*%}'
    content = re.sub(tabs_block_pattern, replace_tabs_block, content, flags=re.DOTALL)

    # Clean up any remaining endtab tags
    content = re.sub(r'{%\s*endtab\s*%}', '', content)

    return content


def rewrite_asset_paths(content, filepath):
    """Rewrite image paths to absolute paths served from public/."""
    # .gitbook/assets/ -> /images/
    content = re.sub(
        r'(?:\.\./)*\.gitbook/assets/',
        '/images/',
        content
    )

    # Rewrite relative image paths in HTML img tags to /colocated/ absolute paths
    # e.g., src="api/linkedin-api.jpg" -> src="/colocated/media-assets/snapshots/BWS.Blockchain.Badges/api/linkedin-api.jpg"
    try:
        file_rel_dir = filepath.relative_to(DEST).parent
    except ValueError:
        return content

    def fix_html_img(match):
        prefix = match.group(1)
        src = match.group(2)
        # Skip absolute paths and external URLs
        if src.startswith(("/", "http://", "https://")):
            return match.group(0)
        # Skip markdown images (handled by VitePress)
        abs_path = f"/colocated/{file_rel_dir}/{src}"
        return f'{prefix}"{abs_path}"'

    # Fix all HTML src attributes (img, source, video, etc.)
    content = re.sub(r'(<(?:img|source|video)[^>]*\bsrc=)"([^"]+)"', fix_html_img, content)
    return content


def clean_gitbook_anchors(content):
    """Remove GitBook-generated anchor tags like <a href="#x" id="x"></a>."""
    content = re.sub(r'\s*<a\s+href="#[^"]*"\s+id="[^"]*"\s*>\s*</a>', '', content)
    return content


def clean_entities(content):
    """Clean GitBook-specific entities, preserving code blocks."""
    content = content.replace("&#x20;", " ")

    # Replace trailing backslash line breaks with two spaces,
    # but NOT inside fenced code blocks
    parts = re.split(r'(```[\s\S]*?```)', content)
    for i, part in enumerate(parts):
        if i % 2 == 0:
            parts[i] = re.sub(r'\\\n', '  \n', part)
    content = ''.join(parts)

    return content


def convert_card_tables(content):
    """Convert GitBook card tables to plain HTML card grid."""
    pattern = r'<table\s+data-view="cards"[^>]*>.*?</table>'

    def replace_card_table(match):
        html = match.group(0)
        soup = BeautifulSoup(html, "html.parser")

        # Determine which columns are hidden (card-target, card-cover) from header
        target_cols = set()
        cover_cols = set()
        header_row = soup.find("thead")
        if header_row:
            for i, th in enumerate(header_row.find_all("th")):
                if th.get("data-card-target") is not None:
                    target_cols.add(i)
                if th.get("data-card-cover") is not None:
                    cover_cols.add(i)

        cards = []
        for row in soup.find_all("tr"):
            cells = row.find_all("td")
            if not cells:
                continue

            title = ""
            description = ""
            link = ""

            for i, cell in enumerate(cells):
                # Check by column index (from header) or by cell attribute
                if i in target_cols or cell.get("data-card-target") is not None:
                    a = cell.find("a")
                    if a:
                        link = a.get("href", "")
                    continue
                if i in cover_cols or cell.get("data-card-cover") is not None:
                    continue

                # Visible content cell
                text = cell.get_text(strip=True)
                if not text:
                    continue
                strong = cell.find("strong")
                if strong and not title:
                    title = strong.get_text(strip=True)
                elif text and not title:
                    title = text
                elif text and not description:
                    description = text

            if title:
                # Fix internal links
                if link and not link.startswith("http"):
                    if not link.endswith(".md") and not link.endswith("/"):
                        link = link + "/"
                    # README.md -> index.md
                    link = link.replace("README.md", "index.md")

                card_html = f'  <div class="card">\n    <h3>{title}</h3>\n    <p>{description}</p>\n'
                if link:
                    card_html += f'    <a href="{link}">Learn more →</a>\n'
                card_html += '  </div>'
                cards.append(card_html)

        if not cards:
            return match.group(0)

        cards_content = "\n".join(cards)
        return f'<div class="card-grid">\n{cards_content}\n</div>'

    return re.sub(pattern, replace_card_table, content, flags=re.DOTALL)


def convert_code_blocks(content):
    """Convert {% code title="X" %}...{% endcode %} to plain fenced code blocks."""
    content = re.sub(r'{%\s*code\s+title="[^"]*"\s*%}\s*', '', content)
    content = re.sub(r'{%\s*endcode\s*%}', '', content)
    return content


def convert_file_embeds(content):
    """Convert {% file src="X" %} to download links."""
    def replace_file(match):
        src = match.group(1)
        filename = src.rsplit("/", 1)[-1] if "/" in src else src
        return f'[📄 {filename}]({src})'

    content = re.sub(r'{%\s*file\s+src="([^"]+)"\s*%}', replace_file, content)
    return content


def convert_stepper(content):
    """Convert {% stepper %}...{% endstepper %} to numbered list."""
    pattern = r'{%\s*stepper\s*%}(.*?){%\s*endstepper\s*%}'

    def replace_stepper(match):
        body = match.group(1)
        steps = re.findall(r'{%\s*step\s*%}(.*?)(?={%\s*(?:endstep|step)\s*%})', body, re.DOTALL)
        result = []
        for i, step_content in enumerate(steps, 1):
            step_content = step_content.strip()
            result.append(f"{i}. {step_content}")
        return "\n\n".join(result)

    return re.sub(pattern, replace_stepper, content, flags=re.DOTALL)


def fix_internal_links(content, file_path):
    """Fix internal markdown links for VitePress."""
    file_dir = file_path.parent

    def resolve_md_path(path_str):
        """Resolve a path to an existing .md file."""
        anchor = ""
        base = path_str
        if "#" in path_str:
            base, anchor = path_str.split("#", 1)
            anchor = f"#{anchor}"

        if not base:
            return path_str

        if base.endswith(".md"):
            # Replace README.md with index.md
            base = base.replace("README.md", "index.md")
            return f"{base}{anchor}"

        # Try path.md first, then path/index.md
        test_base = base.rstrip("/")
        resolved = file_dir / f"{test_base}.md"
        if resolved.exists():
            return f"{test_base}.md{anchor}"

        resolved = file_dir / test_base / "index.md"
        if resolved.exists():
            if base.endswith("/"):
                return f"{base}index.md{anchor}"
            return f"{test_base}/index.md{anchor}"

        # Check for README.md (pre-rename, in case called before rename)
        resolved = file_dir / test_base / "README.md"
        if resolved.exists():
            if base.endswith("/"):
                return f"{base}README.md{anchor}"
            return f"{test_base}/README.md{anchor}"

        return f"{test_base}.md{anchor}"

    def fix_link(match):
        prefix = match.group(1)
        path = match.group(2)

        if path.startswith(("http://", "https://", "#", "/images/", "mailto:")):
            return match.group(0)

        if any(path.lower().endswith(ext) for ext in (".png", ".jpg", ".jpeg", ".gif", ".svg", ".pdf")):
            return match.group(0)

        if not path.endswith(".md"):
            path = resolve_md_path(path)
        else:
            path = path.replace("README.md", "index.md")

        return f"[{prefix}]({path})"

    content = re.sub(r'(?<!!)\[((?:[^\[\]]|\[[^\]]*\])*)\]\(([^)]+)\)', fix_link, content)
    return content


def process_file(filepath):
    """Apply all transformations to a single markdown file."""
    content = filepath.read_text(encoding="utf-8")

    content = clean_frontmatter(content)
    content = normalize_pre_code_blocks(content)
    content = convert_code_blocks(content)
    content = convert_file_embeds(content)
    content = convert_hints(content)
    content = convert_tabs(content)
    content = convert_card_tables(content)
    content = convert_stepper(content)
    content = rewrite_asset_paths(content, filepath)
    content = clean_gitbook_anchors(content)
    content = clean_entities(content)
    content = fix_internal_links(content, filepath)

    filepath.write_text(content, encoding="utf-8")


def parse_summary():
    """Parse SUMMARY.md to generate VitePress sidebar structure."""
    summary_path = ROOT / "SUMMARY.md"
    content = summary_path.read_text(encoding="utf-8")

    entries = []
    current_section_header = None

    for line in content.split("\n"):
        stripped = line.strip()
        if not stripped:
            continue

        if stripped.startswith("# "):
            continue

        if stripped.startswith("## "):
            section_title = re.sub(r'\s*<a[^>]*>.*?</a>\s*', '', stripped[3:]).strip()
            current_section_header = section_title
            continue

        match = re.match(r'^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)', line)
        if match:
            indent = len(match.group(1))
            title = match.group(2)
            path = match.group(3)

            if "#" in path:
                base = path.split("#")[0]
                if not base:
                    continue
                path = base
                # Skip anchor sub-items that point to same page as any previous entry
                normalized = _normalize_path(path).replace("README.md", "index.md")
                if any(e["path"] == normalized for e in entries):
                    continue

            path = _normalize_path(path)

            # Convert README.md to index.md for VitePress
            path = path.replace("README.md", "index.md")

            if not (DEST / path).exists() and DEST.exists():
                print(f"  WARN: Skipping nav entry '{title}' -> '{path}' (file not found)")
                continue

            entries.append({
                "indent": indent,
                "title": title,
                "path": path,
                "section_header": current_section_header,
            })
            if current_section_header:
                current_section_header = None
            continue

        continue

    return _build_vitepress_sidebar(entries)


def _normalize_path(path):
    """Ensure path ends with .md."""
    if not path.endswith(".md"):
        if path.endswith("/"):
            path = path + "README.md"
        else:
            path = path + "/README.md"
    return path


def _path_to_link(path):
    """Convert a file path to a VitePress link."""
    # Remove .md extension and convert index to /
    link = "/" + path
    if link.endswith("/index.md"):
        link = link[:-len("index.md")]
    elif link.endswith(".md"):
        link = link[:-3]
    return link


def _build_vitepress_sidebar(entries):
    """Build VitePress sidebar from flat entries with indent levels."""
    if not entries:
        return []

    sidebar = []
    i = 0
    last_section_header = None

    while i < len(entries):
        entry = entries[i]

        if entry.get("section_header") and entry["section_header"] != last_section_header:
            last_section_header = entry["section_header"]
            section_entries = []
            while i < len(entries):
                e = entries[i]
                if (e.get("section_header")
                        and e["section_header"] != last_section_header
                        and i > 0):
                    break
                section_entries.append(e)
                i += 1
            section_items = _build_sidebar_level(section_entries, 0)
            sidebar.append({
                "text": last_section_header,
                "collapsed": False,
                "items": section_items,
            })
            continue

        children = []
        base_indent = entry["indent"]
        j = i + 1
        while j < len(entries) and entries[j]["indent"] > base_indent:
            if entries[j].get("section_header"):
                break
            children.append(entries[j])
            j += 1

        if children:
            child_items = _build_sidebar_level(children, base_indent + 2)
            child_items.insert(0, {"text": "Overview", "link": _path_to_link(entry["path"])})
            sidebar.append({
                "text": entry["title"],
                "collapsed": True,
                "items": child_items,
            })
        else:
            sidebar.append({
                "text": entry["title"],
                "link": _path_to_link(entry["path"]),
            })

        i = j

    return sidebar


def _build_sidebar_level(entries, base_indent):
    """Recursively build sidebar for a group of entries at a given indent level."""
    result = []
    i = 0

    while i < len(entries):
        entry = entries[i]

        children = []
        j = i + 1
        while j < len(entries) and entries[j]["indent"] > entry["indent"]:
            children.append(entries[j])
            j += 1

        if children:
            child_items = _build_sidebar_level(children, entry["indent"] + 2)
            child_items.insert(0, {"text": "Overview", "link": _path_to_link(entry["path"])})
            result.append({
                "text": entry["title"],
                "collapsed": True,
                "items": child_items,
            })
        else:
            result.append({
                "text": entry["title"],
                "link": _path_to_link(entry["path"]),
            })

        i = j

    return result


def generate_vitepress_config(sidebar):
    """Generate .vitepress/config.mjs."""
    config_dir = DEST / ".vitepress"
    config_dir.mkdir(parents=True, exist_ok=True)

    sidebar_json = json.dumps(sidebar, indent=6, ensure_ascii=False)

    config_content = f"""\
import {{ defineConfig }} from 'vitepress'

export default defineConfig({{
  title: 'Blockchain Web Services',
  description: 'BWS Documentation - Simplifying blockchain integration through a unified REST API',

  head: [
    ['link', {{ rel: 'icon', href: '/images/logo.svg' }}],
  ],

  themeConfig: {{
    logo: '/images/logo-large.svg',
    siteTitle: '| documentation',

    nav: [],

    sidebar: {sidebar_json},

    search: {{
      provider: 'local',
    }},

    outline: 'deep',
  }},
}})
"""

    (config_dir / "config.mjs").write_text(config_content, encoding="utf-8")
    print(f"  Generated .vitepress/config.mjs with {len(sidebar)} top-level sidebar entries")


def create_vitepress_theme():
    """Create VitePress theme extension with custom CSS."""
    theme_dir = DEST / ".vitepress" / "theme"
    theme_dir.mkdir(parents=True, exist_ok=True)

    # Theme index.js
    index_js = """\
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
}
"""
    (theme_dir / "index.js").write_text(index_js, encoding="utf-8")

    # Custom CSS
    css_content = """\
/* GitBook mark tag compatibility */
mark {
    padding: 0.1em 0.3em;
    border-radius: 3px;
}

/* HTTP method badges */
mark[style*="color:green"] {
    color: #22863a !important;
    background-color: #dcffe4 !important;
    font-weight: 600;
}

mark[style*="color:blue"] {
    color: #0366d6 !important;
    background-color: #dbedff !important;
    font-weight: 600;
}

mark[style*="color:red"] {
    color: #cb2431 !important;
    background-color: transparent !important;
    font-weight: 600;
}

mark[style*="color:orange"] {
    color: #e36209 !important;
    background-color: #fff8e1 !important;
    font-weight: 600;
}

/* Background color marks (status badges) */
mark[style*="background-color:green"],
mark[style*="background-color: green"] {
    background-color: #dcffe4 !important;
    color: #22863a !important;
    padding: 0.15em 0.5em;
    border-radius: 3px;
    font-weight: 600;
}

mark[style*="background-color:red"],
mark[style*="background-color: red"] {
    background-color: #ffdce0 !important;
    color: #cb2431 !important;
    padding: 0.15em 0.5em;
    border-radius: 3px;
    font-weight: 600;
}

mark[style*="background-color:yellow"],
mark[style*="background-color: yellow"] {
    background-color: #fff8c5 !important;
    color: #735c0f !important;
    padding: 0.15em 0.5em;
    border-radius: 3px;
    font-weight: 600;
}

/* Card grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
}

.card-grid .card {
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 1.25rem;
    transition: box-shadow 0.2s, border-color 0.2s;
}

.card-grid .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: var(--vp-c-brand-1);
}

.card-grid .card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.05rem;
    font-weight: 600;
}

.card-grid .card p {
    margin: 0 0 0.75rem 0;
    color: var(--vp-c-text-2);
    font-size: 0.9rem;
    line-height: 1.5;
}

.card-grid .card a {
    color: var(--vp-c-brand-1);
    font-weight: 500;
    font-size: 0.9rem;
    text-decoration: none;
}

.card-grid .card a:hover {
    text-decoration: underline;
}

/* Figure captions */
figure {
    text-align: center;
    margin: 1.5em 0;
}

figure img {
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

figcaption {
    font-size: 0.85em;
    color: var(--vp-c-text-2);
    margin-top: 0.5em;
    font-style: italic;
}

/* Data size original images */
img[data-size="original"] {
    max-width: 100%;
}

/* HTML table improvements */
table th, table td {
    padding: 0.5em 1em;
}

/* Dark mode adjustments */
.dark mark[style*="color:green"] {
    color: #85e89d !important;
    background-color: #1b3a26 !important;
}

.dark mark[style*="color:red"] {
    color: #f97583 !important;
}

.dark figure img {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.dark .card-grid .card {
    border-color: var(--vp-c-divider);
}

.dark .card-grid .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
"""
    (theme_dir / "custom.css").write_text(css_content, encoding="utf-8")
    print("  Created .vitepress/theme/index.js and custom.css")


def create_cname():
    """Create CNAME file for custom domain."""
    public_dir = DEST / "public"
    public_dir.mkdir(parents=True, exist_ok=True)
    (public_dir / "CNAME").write_text("docs.bws.ninja\n", encoding="utf-8")
    print("  Created public/CNAME")


def main():
    print("=== GitBook to VitePress Converter ===\n")

    print("Step 1: Copying source files...")
    copy_source_files()
    print(f"  Copied files to {DEST}")

    print("Step 2: Copying assets...")
    copy_assets()

    print("Step 3: Renaming README.md -> index.md...")
    rename_readmes_to_index()

    print("Step 4: Moving co-located assets to public/...")
    move_colocated_assets_to_public()

    print("Step 5: Creating VitePress theme...")
    create_vitepress_theme()

    print("Step 6: Creating CNAME...")
    create_cname()

    print("Step 7: Cleaning up non-documentation files...")
    cleaned = 0
    for pattern in CLEANUP_PATTERNS:
        for f in DEST.rglob(pattern):
            f.unlink()
            cleaned += 1
    print(f"  Removed {cleaned} non-documentation files")

    print("Step 8: Converting markdown files...")
    md_files = list(DEST.rglob("*.md"))
    converted = 0
    errors = []
    for md_file in md_files:
        try:
            process_file(md_file)
            converted += 1
        except Exception as e:
            errors.append((md_file, str(e)))
            print(f"  ERROR: {md_file.relative_to(DEST)}: {e}")

    print(f"  Converted {converted} files ({len(errors)} errors)")

    print("Step 9: Parsing SUMMARY.md and generating VitePress config...")
    sidebar = parse_summary()

    # Inject external links into Marketplace Solutions sidebar section
    for section in sidebar:
        if isinstance(section, dict) and section.get("text") == "Marketplace Solutions":
            section["items"].insert(0, {
                "text": "IPFS Ninja",
                "link": "https://ipfs.ninja/docs/overview",
            })
            section["items"].insert(1, {
                "text": "Badges.Ninja",
                "link": "https://badges.ninja",
            })
            break

    generate_vitepress_config(sidebar)

    # Remove SUMMARY.md from site-content
    summary_dest = DEST / "SUMMARY.md"
    if summary_dest.exists():
        summary_dest.unlink()

    print("\n=== Conversion complete! ===")
    print(f"  Output directory: {DEST}")
    print("\nNext steps:")
    print("  1. npm install")
    print("  2. npx vitepress dev site-content")
    print("  3. Open http://localhost:5173")

    if errors:
        print(f"\n  WARNING: {len(errors)} files had errors:")
        for f, e in errors:
            print(f"    - {f.relative_to(DEST)}: {e}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
