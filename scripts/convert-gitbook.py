#!/usr/bin/env python3
"""
Convert GitBook documentation to MkDocs Material format.

This script:
1. Copies all markdown files to site-content/
2. Copies .gitbook/assets/ to site-content/assets/images/
3. Transforms GitBook-specific syntax to MkDocs Material equivalents
4. Parses SUMMARY.md to generate mkdocs.yml nav section
"""

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
ASSETS_DEST = DEST / "assets" / "images"

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
    """Copy .gitbook/assets/ to site-content/assets/images/."""
    if ASSETS_SRC.exists():
        if ASSETS_DEST.exists():
            shutil.rmtree(ASSETS_DEST)
        shutil.copytree(ASSETS_SRC, ASSETS_DEST)
    print(f"  Copied {sum(1 for _ in ASSETS_DEST.rglob('*') if _.is_file())} assets")


def clean_frontmatter(content):
    """Remove GitBook-specific frontmatter fields, keep description."""
    if not content.startswith("---"):
        return content

    end = content.find("---", 3)
    if end == -1:
        return content

    fm_text = content[3:end].strip()
    rest = content[end + 3:]

    # Parse and filter frontmatter
    try:
        fm = yaml.safe_load(fm_text)
        if not isinstance(fm, dict):
            return content
    except yaml.YAMLError:
        return content

    # Keep only useful fields
    keep_keys = {"description", "title"}
    cleaned = {k: v for k, v in fm.items() if k in keep_keys and v}

    if cleaned:
        fm_str = yaml.dump(cleaned, default_flow_style=False, allow_unicode=True).strip()
        return f"---\n{fm_str}\n---{rest}"
    else:
        return rest.lstrip("\n")


def convert_hints(content):
    """Convert {% hint style="X" %}...{% endhint %} to MkDocs admonitions."""
    pattern = r'{%\s*hint\s+style="(\w+)"\s*%}(.*?){%\s*endhint\s*%}'

    def replace_hint(match):
        style = match.group(1)
        body = match.group(2).strip()

        # Map GitBook styles to MkDocs admonition types
        style_map = {
            "info": "info",
            "warning": "warning",
            "success": "success",
            "danger": "danger",
        }
        admonition_type = style_map.get(style, "note")

        # Indent each line of the body by 4 spaces
        indented_lines = []
        for line in body.split("\n"):
            if line.strip():
                indented_lines.append(f"    {line}")
            else:
                indented_lines.append("")
        indented_body = "\n".join(indented_lines)

        return f"!!! {admonition_type}\n\n{indented_body}\n"

    return re.sub(pattern, replace_hint, content, flags=re.DOTALL)


def convert_tabs(content):
    """Convert {% tabs %}...{% endtabs %} to MkDocs Material content tabs."""

    def replace_tabs_block(match):
        tabs_content = match.group(1)
        result_parts = []

        # Find all tab blocks
        tab_pattern = r'{%\s*tab\s+title="([^"]+)"\s*%}(.*?)(?={%\s*(?:endtab|tab\s+title)\s*%})'
        tabs = re.findall(tab_pattern, tabs_content, re.DOTALL)

        for title, body in tabs:
            body = body.strip()
            # Indent each line by 4 spaces for the tab content
            indented_lines = []
            for line in body.split("\n"):
                if line.strip():
                    indented_lines.append(f"    {line}")
                else:
                    indented_lines.append("")
            indented_body = "\n".join(indented_lines)
            result_parts.append(f'=== "{title}"\n\n{indented_body}\n')

        return "\n".join(result_parts)

    tabs_block_pattern = r'{%\s*tabs\s*%}(.*?){%\s*endtabs\s*%}'
    content = re.sub(tabs_block_pattern, replace_tabs_block, content, flags=re.DOTALL)

    # Clean up any remaining endtab tags
    content = re.sub(r'{%\s*endtab\s*%}', '', content)

    return content


def rewrite_asset_paths(content):
    """Rewrite .gitbook/assets/ paths to assets/images/."""
    # Handle various relative path patterns to .gitbook/assets/
    # e.g., ../../.gitbook/assets/, ../.gitbook/assets/, .gitbook/assets/
    content = re.sub(
        r'(?:\.\./)*\.gitbook/assets/',
        'assets/images/',
        content
    )
    return content


def clean_entities(content):
    """Clean GitBook-specific entities, preserving code blocks."""
    # Replace &#x20; with space
    content = content.replace("&#x20;", " ")

    # Replace trailing backslash line breaks with two spaces,
    # but NOT inside fenced code blocks (where \ is line continuation)
    parts = re.split(r'(```[\s\S]*?```)', content)
    for i, part in enumerate(parts):
        if i % 2 == 0:  # Not inside a code block
            parts[i] = re.sub(r'\\\n', '  \n', part)
    content = ''.join(parts)

    return content


def convert_card_tables(content):
    """Convert GitBook card tables to MkDocs Material grid cards."""
    # Find card tables
    pattern = r'<table\s+data-view="cards"[^>]*>.*?</table>'

    def replace_card_table(match):
        html = match.group(0)
        soup = BeautifulSoup(html, "html.parser")

        cards = []
        for row in soup.find_all("tr"):
            cells = row.find_all("td")
            if not cells:
                continue

            # Extract card data from cells
            title = ""
            description = ""
            link = ""
            image = ""

            # First pass: get hidden data cells
            for cell in cells:
                if cell.get("data-card-target") is not None:
                    a = cell.find("a")
                    if a:
                        link = a.get("href", "")
                    continue
                if cell.get("data-card-cover") is not None:
                    a = cell.find("a")
                    if a:
                        image = a.get("href", "")
                    continue

            # Second pass: get visible content cells (those without data-hidden)
            visible_cells = [c for c in cells
                            if c.get("data-card-target") is None
                            and c.get("data-card-cover") is None]
            for cell in visible_cells:
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
                if image:
                    image = re.sub(r'(?:\.\./)*\.gitbook/assets/', 'assets/images/', image)

                card_md = f"-   **{title}**\n\n    ---\n\n    {description}\n"
                if link:
                    if not link.startswith("http"):
                        if not link.endswith(".md") and not link.endswith("/"):
                            link = link + "/README.md"
                        elif link.endswith("/"):
                            link = link + "README.md"
                    card_md += f"\n    [:octicons-arrow-right-24: Learn more]({link})\n"

                cards.append(card_md)

        if not cards:
            return match.group(0)  # Return original if parsing failed

        cards_content = "\n".join(cards)
        return f'<div class="grid cards" markdown>\n\n{cards_content}\n</div>'

    return re.sub(pattern, replace_card_table, content, flags=re.DOTALL)


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
    """Fix internal markdown links for MkDocs."""
    file_dir = file_path.parent

    def resolve_md_path(path_str):
        """Resolve a path to an existing .md file."""
        # Split anchor if present
        anchor = ""
        base = path_str
        if "#" in path_str:
            base, anchor = path_str.split("#", 1)
            anchor = f"#{anchor}"

        if not base:
            return path_str  # anchor-only link

        # Already has .md extension
        if base.endswith(".md"):
            return path_str

        # Try path.md first, then path/README.md
        test_base = base.rstrip("/")
        resolved = file_dir / f"{test_base}.md"
        if resolved.exists():
            return f"{test_base}.md{anchor}"

        resolved = file_dir / test_base / "README.md"
        if resolved.exists():
            if base.endswith("/"):
                return f"{base}README.md{anchor}"
            return f"{test_base}/README.md{anchor}"

        # Default: try .md extension
        return f"{test_base}.md{anchor}"

    def fix_link(match):
        prefix = match.group(1)
        path = match.group(2)

        # Skip external links, anchors, and asset links
        if path.startswith(("http://", "https://", "#", "assets/", "mailto:")):
            return match.group(0)

        # Skip image extensions
        if any(path.lower().endswith(ext) for ext in (".png", ".jpg", ".jpeg", ".gif", ".svg", ".pdf")):
            return match.group(0)

        if not path.endswith(".md"):
            path = resolve_md_path(path)

        return f"[{prefix}]({path})"

    # Match markdown links: [text](path) but not images ![text](path)
    content = re.sub(r'(?<!!)\[((?:[^\[\]]|\[[^\]]*\])*)\]\(([^)]+)\)', fix_link, content)
    return content


def process_file(filepath):
    """Apply all transformations to a single markdown file."""
    content = filepath.read_text(encoding="utf-8")

    content = clean_frontmatter(content)
    content = convert_hints(content)
    content = convert_tabs(content)
    content = convert_card_tables(content)
    content = convert_stepper(content)
    content = rewrite_asset_paths(content)
    content = clean_entities(content)
    content = fix_internal_links(content, filepath)

    filepath.write_text(content, encoding="utf-8")


def parse_summary():
    """Parse SUMMARY.md to generate mkdocs.yml nav structure with proper nesting."""
    summary_path = ROOT / "SUMMARY.md"
    content = summary_path.read_text(encoding="utf-8")

    # Parse all entries with their indent level
    entries = []
    current_section_header = None

    for line in content.split("\n"):
        stripped = line.strip()
        if not stripped:
            continue

        # Skip the ToC header
        if stripped.startswith("# "):
            continue

        # Section headers like ## PLATFORM APIs
        if stripped.startswith("## "):
            section_title = re.sub(r'\s*<a[^>]*>.*?</a>\s*', '', stripped[3:]).strip()
            current_section_header = section_title
            continue

        # Parse list items with links: * [Title](path)
        match = re.match(r'^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)', line)
        if match:
            indent = len(match.group(1))
            title = match.group(2)
            path = match.group(3)

            # Skip anchor-only sub-items (they're just page sections, not separate pages)
            if "#" in path:
                base = path.split("#")[0]
                if not base:
                    continue
                # Skip if same file as parent (anchor sub-sections)
                path = base
                # Check if this is a duplicate of the parent
                if entries and entries[-1]["path"] == _normalize_path(path):
                    continue

            path = _normalize_path(path)

            # Check if the file actually exists in site-content
            if not (DEST / path).exists() and DEST.exists():
                print(f"  WARN: Skipping nav entry '{title}' -> '{path}' (file not found)")
                continue

            entries.append({
                "indent": indent,
                "title": title,
                "path": path,
                "section_header": current_section_header,
            })
            # Clear section header after first use
            if current_section_header:
                current_section_header = None
            continue

        # Label-only items (no link): * Platform APIs
        # These are grouping labels in GitBook - skip them
        continue

    # Build nested nav structure
    return _build_nested_nav(entries)


def _normalize_path(path):
    """Ensure path ends with .md."""
    if not path.endswith(".md"):
        if path.endswith("/"):
            path = path + "README.md"
        else:
            path = path + "/README.md"
    return path


def _build_nested_nav(entries):
    """Build nested MkDocs nav from flat entries with indent levels."""
    if not entries:
        return []

    nav = []
    i = 0
    last_section_header = None

    while i < len(entries):
        entry = entries[i]

        # Check if this entry starts a new section (## header)
        if entry.get("section_header") and entry["section_header"] != last_section_header:
            last_section_header = entry["section_header"]
            # Collect all entries under this section header
            section_entries = []
            while i < len(entries):
                e = entries[i]
                # Stop if we hit a new section header (but not the current one)
                if (e.get("section_header")
                        and e["section_header"] != last_section_header
                        and i > 0):
                    break
                section_entries.append(e)
                i += 1
            section_nav = _build_nav_level(section_entries, 0)
            nav.append({last_section_header: section_nav})
            continue

        # Top-level entry with potential children
        children = []
        base_indent = entry["indent"]
        j = i + 1
        while j < len(entries) and entries[j]["indent"] > base_indent:
            # Stop if we hit a section header
            if entries[j].get("section_header"):
                break
            children.append(entries[j])
            j += 1

        if children:
            child_nav = _build_nav_level(children, base_indent + 2)
            child_nav.insert(0, {"Overview": entry["path"]})
            nav.append({entry["title"]: child_nav})
        else:
            nav.append({entry["title"]: entry["path"]})

        i = j

    return nav


def _build_nav_level(entries, base_indent):
    """Recursively build nav for a group of entries at a given indent level."""
    result = []
    i = 0

    while i < len(entries):
        entry = entries[i]

        # Find children (entries with deeper indent)
        children = []
        j = i + 1
        while j < len(entries) and entries[j]["indent"] > entry["indent"]:
            children.append(entries[j])
            j += 1

        if children:
            child_nav = _build_nav_level(children, entry["indent"] + 2)
            child_nav.insert(0, {"Overview": entry["path"]})
            result.append({entry["title"]: child_nav})
        else:
            result.append({entry["title"]: entry["path"]})

        i = j

    return result


def generate_mkdocs_yml(nav):
    """Generate mkdocs.yml configuration."""
    config = {
        "site_name": "Blockchain Web Services",
        "site_url": "https://docs.bws.ninja",
        "site_description": "BWS Documentation - Simplifying blockchain integration through a unified REST API",
        "docs_dir": "site-content",
        "theme": {
            "name": "material",
            "palette": [
                {
                    "scheme": "default",
                    "primary": "indigo",
                    "accent": "indigo",
                    "toggle": {
                        "icon": "material/brightness-7",
                        "name": "Switch to dark mode",
                    },
                },
                {
                    "scheme": "slate",
                    "primary": "indigo",
                    "accent": "indigo",
                    "toggle": {
                        "icon": "material/brightness-4",
                        "name": "Switch to light mode",
                    },
                },
            ],
            "features": [
                "navigation.instant",
                "navigation.instant.progress",
                "navigation.tracking",
                "navigation.tabs",
                "navigation.sections",
                "navigation.expand",
                "navigation.top",
                "search.suggest",
                "search.highlight",
                "content.tabs.link",
                "content.code.copy",
            ],
            "icon": {
                "repo": "fontawesome/brands/github",
            },
        },
        "markdown_extensions": [
            "admonition",
            "pymdownx.details",
            {"pymdownx.superfences": {}},
            {"pymdownx.tabbed": {"alternate_style": True}},
            "attr_list",
            "md_in_html",
            "tables",
            {"pymdownx.highlight": {"anchor_linenums": True}},
            "pymdownx.inlinehilite",
            "pymdownx.snippets",
            {"pymdownx.emoji": {
                "emoji_index": "!!python/name:material.extensions.emoji.twemoji",
                "emoji_generator": "!!python/name:material.extensions.emoji.to_svg",
            }},
        ],
        "plugins": [
            "search",
            "glightbox",
        ],
        "extra_css": [
            "stylesheets/extra.css",
        ],
        "nav": nav,
    }

    mkdocs_path = ROOT / "mkdocs.yml"

    # Use yaml dump but we need to handle the !!python/name specially
    yaml_str = yaml.dump(config, default_flow_style=False, allow_unicode=True, sort_keys=False)

    # Fix the python/name references that yaml escapes
    yaml_str = yaml_str.replace("'!!python/name:material.extensions.emoji.twemoji'",
                                 "!!python/name:material.extensions.emoji.twemoji")
    yaml_str = yaml_str.replace("'!!python/name:material.extensions.emoji.to_svg'",
                                 "!!python/name:material.extensions.emoji.to_svg")

    mkdocs_path.write_text(yaml_str, encoding="utf-8")
    print(f"  Generated mkdocs.yml with {len(nav)} top-level nav entries")


def create_extra_css():
    """Create custom CSS for mark tags and card grids."""
    css_dir = DEST / "stylesheets"
    css_dir.mkdir(parents=True, exist_ok=True)

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

/* Card grid enhancements */
.grid.cards > ul > li {
    border: 1px solid var(--md-default-fg-color--lightest);
    border-radius: 8px;
    transition: box-shadow 0.2s;
}

.grid.cards > ul > li:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
    color: var(--md-default-fg-color--light);
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
[data-md-color-scheme="slate"] mark[style*="color:green"] {
    color: #85e89d !important;
    background-color: #1b3a26 !important;
}

[data-md-color-scheme="slate"] mark[style*="color:red"] {
    color: #f97583 !important;
}

[data-md-color-scheme="slate"] figure img {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
"""
    (css_dir / "extra.css").write_text(css_content, encoding="utf-8")
    print("  Created stylesheets/extra.css")


def create_cname():
    """Create CNAME file for custom domain."""
    (DEST / "CNAME").write_text("docs.bws.ninja\n", encoding="utf-8")
    print("  Created CNAME file")


def main():
    print("=== GitBook to MkDocs Material Converter ===\n")

    print("Step 1: Copying source files...")
    copy_source_files()
    print(f"  Copied files to {DEST}")

    print("Step 2: Copying assets...")
    copy_assets()

    print("Step 3: Creating custom CSS...")
    create_extra_css()

    print("Step 4: Creating CNAME...")
    create_cname()

    print("Step 5: Cleaning up non-documentation files...")
    cleaned = 0
    for pattern in CLEANUP_PATTERNS:
        for f in DEST.rglob(pattern):
            f.unlink()
            cleaned += 1
    print(f"  Removed {cleaned} non-documentation files")

    print("Step 6: Converting markdown files...")
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

    print("Step 7: Parsing SUMMARY.md and generating mkdocs.yml...")
    nav = parse_summary()
    generate_mkdocs_yml(nav)

    # Remove SUMMARY.md from site-content (not needed by MkDocs)
    summary_dest = DEST / "SUMMARY.md"
    if summary_dest.exists():
        summary_dest.unlink()

    print("\n=== Conversion complete! ===")
    print(f"  Output directory: {DEST}")
    print(f"  Config file: {ROOT / 'mkdocs.yml'}")
    print("\nNext steps:")
    print("  1. pip install -r requirements.txt")
    print("  2. mkdocs serve")
    print("  3. Open http://localhost:8000")

    if errors:
        print(f"\n  WARNING: {len(errors)} files had errors:")
        for f, e in errors:
            print(f"    - {f.relative_to(DEST)}: {e}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
