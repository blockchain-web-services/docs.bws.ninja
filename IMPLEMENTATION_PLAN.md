# Media Assets Integration Plan
## GitBook Documentation Integration for Product Media Assets

**Date:** 2025-11-29
**Worktree:** product-media-assets
**Objective:** Integrate automated product media assets into GitBook documentation with proper organization and accessibility

---

## 1. Executive Summary

This plan outlines the integration of automatically generated product media assets (snapshots, section captures, social media formats, workflow videos) into the main GitBook documentation repository at `/media-assets/snapshots/`.

### Current State
- ✅ Media capture system operational in `.trees/product-media-assets/` worktree
- ✅ Generating snapshots with section extraction for Blockchain Badges
- ✅ Weekly GitHub Actions workflow captures fresh media
- ✅ Social media formats (Twitter, LinkedIn, Instagram) automated
- ✅ Currently captures 2 sections: hero, api (4 other sections configured but not captured)
- ❌ Assets NOT integrated into GitBook documentation structure
- ❌ No systematic organization for multiple products

### Target State
- ✅ All product media assets organized in `/media-assets/snapshots/{product}/`
- ✅ GitBook pages for each product's media gallery
- ✅ Automated deployment from worktree to main repo
- ✅ **Dynamic section discovery** - works with whatever sections are actually captured
- ✅ Social media-ready assets accessible via docs
- ✅ Updated weekly via GitHub Actions

### Key Design Decision: Dynamic Section Discovery

**Problem:** Configuration specifies 6 sections (hero, features, benefits, pricing, api, testimonials), but only 2 sections are actually being captured (hero, api).

**Solution:** Use **dynamic section discovery** - the deployment script scans the worktree media directory to discover what sections were actually captured, then:
- Organizes only the captured sections
- Reports discrepancies between config and actual captures
- Generates gallery pages based on real content
- Gracefully handles incomplete captures

**Benefits:**
- Resilient to partial captures
- No manual sync required between config and actual files
- Easy to add new sections - just capture them
- Clear visibility into what's missing

---

## 2. Proposed Directory Structure

### 2.1 Main Repository Structure

```
docs.bws.ninja/
├── .gitbook/assets/                          # GitBook managed assets
├── media-assets/
│   ├── README.md                             # Media assets overview
│   ├── bws-logo.md                           # BWS branding
│   └── snapshots/
│       ├── README.md                         # Snapshots gallery overview
│       │
│       ├── BWS.Blockchain.Badges/
│       │   ├── README.md                     # Product media gallery page
│       │   ├── hero/                         # ✅ CAPTURED
│       │   │   ├── desktop-hero.png          # Section snapshot
│       │   │   ├── twitter-hero.jpg          # Social media optimized
│       │   │   ├── linkedin-hero.jpg
│       │   │   └── instagram-post-hero.jpg
│       │   ├── api/                          # ✅ CAPTURED
│       │   │   ├── desktop-api.png
│       │   │   ├── twitter-api.jpg
│       │   │   └── linkedin-api.jpg
│       │   └── videos/
│       │       ├── workflow-demo.webm
│       │       └── workflow-demo.mp4         # Converted for compatibility
│       │
│       │   # NOTE: Other sections (features, benefits, pricing, testimonials)
│       │   # are configured but not yet captured - will be added when available
│       │
│       ├── BWS.NFT.GameCube/
│       │   ├── README.md
│       │   ├── hero/
│       │   ├── gameplay/
│       │   ├── rewards/
│       │   └── videos/
│       │
│       ├── BWS.ESG.Credits/
│       │   ├── README.md
│       │   ├── hero/
│       │   ├── dashboard/
│       │   ├── portfolio/
│       │   └── videos/
│       │
│       ├── BWS.X.Bot/
│       │   ├── README.md
│       │   ├── bot-interface/
│       │   ├── analytics/
│       │   └── videos/
│       │
│       ├── BWS.IPFS.Upload/
│       │   └── README.md
│       │
│       ├── BWS.Blockchain.Save/
│       │   └── README.md
│       │
│       ├── BWS.Blockchain.Hash/
│       │   └── README.md
│       │
│       └── BWS.NFT.zK/
│           └── README.md
```

### 2.2 Naming Conventions

**File naming pattern:**
```
{viewport}-{section-name}.{format}
{social-platform}-{section-name}.{format}
workflow-demo.{format}
```

**Examples:**
- `desktop-hero.png` - Desktop viewport hero section
- `mobile-api.png` - Mobile viewport API section
- `twitter-hero.jpg` - Twitter-optimized hero section
- `linkedin-features.jpg` - LinkedIn-optimized features section
- `instagram-post-testimonials.jpg` - Instagram post format
- `workflow-demo.webm` - Workflow demonstration video

**Date-stamped originals (in worktree):**
- `blockchain-badges-desktop-2025-11-29-section-hero.png`
- `blockchain-badges-desktop-2025-11-29-section-hero-twitter.jpg`

---

## 3. GitBook Page Structure

### 3.1 Product Media Gallery Page Template

Each product gets a dedicated gallery page: `/media-assets/snapshots/BWS.{Product}/README.md`

**Template Structure:**

```markdown
---
description: Media assets and snapshots for BWS.{Product} - product screenshots, section captures, and social media formats
---

# BWS.{Product}

Product media assets including website snapshots, section captures optimized for social media, and workflow demonstration videos.

**Last Updated:** {YYYY-MM-DD}
**Product Website:** {websiteUrl}
**Documentation:** [BWS.{Product} Docs]({docsUrl})

---

## Available Sections

The following sections are automatically generated based on captured media assets.

{DYNAMIC_SECTIONS_GENERATED_HERE}

---

## Example Section: Hero

Main hero section showcasing the product value proposition.

<table data-view="cards">
  <thead>
    <tr>
      <th>Desktop</th>
      <th>Twitter</th>
      <th>LinkedIn</th>
      <th>Instagram</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="hero/desktop-hero.png" alt="Desktop hero section" data-size="original"></td>
      <td><img src="hero/twitter-hero.jpg" alt="Twitter optimized" data-size="original"></td>
      <td><img src="hero/linkedin-hero.jpg" alt="LinkedIn optimized" data-size="original"></td>
      <td><img src="hero/instagram-post-hero.jpg" alt="Instagram optimized" data-size="original"></td>
    </tr>
  </tbody>
</table>

## Example Section: API

API integration section - Connect Your In-House Tools

<table data-view="cards">
  <thead>
    <tr>
      <th>Desktop</th>
      <th>Twitter</th>
      <th>LinkedIn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="api/desktop-api.png" alt="Desktop API section" data-size="original"></td>
      <td><img src="api/twitter-api.jpg" alt="Twitter optimized" data-size="original"></td>
      <td><img src="api/linkedin-api.jpg" alt="LinkedIn optimized" data-size="original"></td>
    </tr>
  </tbody>
</table>

> **Note:** Sections are dynamically generated based on what media was actually captured. Only sections with available media are displayed.

---

## Workflow Videos

Demonstration videos showing typical product workflows.

### Workflow: {workflow description}

<figure>
  <video src="videos/workflow-demo.mp4" controls></video>
  <figcaption>{workflow description from config}</figcaption>
</figure>

---

## Usage Guidelines

### For Social Media Posts

All social media formats are optimized for their respective platforms:
- **Twitter:** 1200x675px (16:9 aspect ratio)
- **LinkedIn:** 1200x627px (1.91:1 aspect ratio)
- **Instagram Post:** 1080x1080px (1:1 square)

### For Documentation

Desktop and mobile snapshots can be embedded in documentation pages to illustrate product features.

### Download Original Assets

Full-resolution original captures are available in the repository under:
`.trees/product-media-assets/media/{product-slug}/`

---

## Automated Updates

These assets are automatically updated weekly via GitHub Actions workflow.
Next scheduled update: {next Sunday date}

Manual updates can be triggered via: [GitHub Actions Workflow](https://github.com/blockchain-web-services/docs.bws.ninja/actions)
```

### 3.2 Snapshots Overview Page

Update `/media-assets/snapshots/README.md`:

```markdown
---
description: Product snapshots and media assets for all BWS products - optimized for documentation and social media
---

# Snapshots

Browse media assets for all BWS products including website snapshots, section captures, and workflow demonstrations.

---

## Platform API Products

<table data-card-size="large" data-view="cards">
  <thead>
    <tr>
      <th></th>
      <th data-hidden data-card-target data-type="content-ref"></th>
      <th data-hidden data-card-cover data-type="files"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BWS.IPFS.Upload</strong></td>
      <td><a href="BWS.IPFS.Upload/">BWS.IPFS.Upload</a></td>
      <td><a href="BWS.IPFS.Upload/hero/desktop-hero.png">hero preview</a></td>
    </tr>
    <tr>
      <td><strong>BWS.Blockchain.Save</strong></td>
      <td><a href="BWS.Blockchain.Save/">BWS.Blockchain.Save</a></td>
      <td><a href="BWS.Blockchain.Save/hero/desktop-hero.png">hero preview</a></td>
    </tr>
    <tr>
      <td><strong>BWS.Blockchain.Hash</strong></td>
      <td><a href="BWS.Blockchain.Hash/">BWS.Blockchain.Hash</a></td>
      <td><a href="BWS.Blockchain.Hash/hero/desktop-hero.png">hero preview</a></td>
    </tr>
    <tr>
      <td><strong>BWS.NFT.zK</strong></td>
      <td><a href="BWS.NFT.zK/">BWS.NFT.zK</a></td>
      <td><a href="BWS.NFT.zK/hero/desktop-hero.png">hero preview</a></td>
    </tr>
  </tbody>
</table>

## Marketplace Solutions

<table data-card-size="large" data-view="cards">
  <thead>
    <tr>
      <th></th>
      <th data-hidden data-card-target data-type="content-ref"></th>
      <th data-hidden data-card-cover data-type="files"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BWS.Blockchain.Badges</strong></td>
      <td><a href="BWS.Blockchain.Badges/">BWS.Blockchain.Badges</a></td>
      <td><a href="BWS.Blockchain.Badges/hero/desktop-hero.png">hero preview</a></td>
    </tr>
    <tr>
      <td><strong>BWS.NFT.GameCube</strong></td>
      <td><a href="BWS.NFT.GameCube/">BWS.NFT.GameCube</a></td>
      <td><a href="BWS.NFT.GameCube/hero/desktop-hero.png">hero preview</a></td>
    </tr>
    <tr>
      <td><strong>BWS.ESG.Credits</strong></td>
      <td><a href="BWS.ESG.Credits/">BWS.ESG.Credits</a></td>
      <td><a href="BWS.ESG.Credits/hero/desktop-hero.png">hero preview</a></td>
    </tr>
  </tbody>
</table>

## Telegram Bots

<table data-card-size="large" data-view="cards">
  <thead>
    <tr>
      <th></th>
      <th data-hidden data-card-target data-type="content-ref"></th>
      <th data-hidden data-card-cover data-type="files"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BWS.X.Bot</strong></td>
      <td><a href="BWS.X.Bot/">BWS.X.Bot</a></td>
      <td><a href="BWS.X.Bot/bot-interface/desktop-bot-interface.png">preview</a></td>
    </tr>
  </tbody>
</table>

---

## Updates

All snapshots are automatically updated weekly via GitHub Actions.
**Last Update:** {YYYY-MM-DD HH:MM UTC}
**Next Update:** {next Sunday at 3 AM UTC}

---

## Using These Assets

### In Documentation
Reference assets in your documentation pages using relative paths:

\`\`\`markdown
![Blockchain Badges Hero](../media-assets/snapshots/BWS.Blockchain.Badges/hero/desktop-hero.png)
\`\`\`

### For Social Media
Download social media optimized formats:
- Twitter: 1200x675px JPG files
- LinkedIn: 1200x627px JPG files
- Instagram: 1080x1080px JPG files

### Commercial Use
These assets are part of BWS brand materials. For usage guidelines, see [BWS Brand Guidelines](../BWS%20Brand%20Guideline%20v0.1.pdf).
```

---

## 4. Implementation Scripts

### 4.1 Media Deployment Script

Create: `scripts/media-capture/deploy-to-gitbook.cjs`

**Purpose:** Copy and organize media from worktree to main repo GitBook structure

**Key Design Principle:** The script uses **dynamic section discovery** - it scans what sections were actually captured rather than relying solely on configuration. This makes it resilient to incomplete captures.

```javascript
#!/usr/bin/env node

/**
 * Deploy media assets from worktree to GitBook documentation structure
 *
 * This script:
 * 1. Scans worktree media directory to discover what was actually captured
 * 2. For each product with captured media:
 *    - Creates organized directory structure in /media-assets/snapshots/
 *    - Copies section snapshots with simplified naming
 *    - Copies social media optimized formats
 *    - Copies workflow videos (converts WebM to MP4 if available)
 * 3. Generates/updates product README.md gallery pages based on actual content
 * 4. Updates /media-assets/snapshots/README.md overview
 * 5. Updates SUMMARY.md with new snapshot pages
 *
 * Usage:
 *   node scripts/media-capture/deploy-to-gitbook.cjs [--product="Product Name"] [--dry-run]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const {
  loadDocsIndex,
  getProductsWithMediaCapture,
  productNameToSlug,
  getCurrentDateStamp
} = require('./utils/config-loader.cjs');

// Configuration
const WORKTREE_MEDIA_DIR = 'media'; // Worktree media directory
const GITBOOK_SNAPSHOTS_DIR = '../../media-assets/snapshots'; // GitBook snapshots base

/**
 * Convert product name to GitBook directory name
 * "Blockchain Badges" -> "BWS.Blockchain.Badges"
 */
function productToGitBookDir(productName) {
  // Map product names to their GitBook directory conventions
  const mapping = {
    'Blockchain Badges': 'BWS.Blockchain.Badges',
    'NFT Game Cube': 'BWS.NFT.GameCube',
    'Fan Game Cube': 'BWS.NFT.GameCube',
    'ESG Credits': 'BWS.ESG.Credits',
    'X Bot': 'BWS.X.Bot',
    'BWS IPFS': 'BWS.IPFS.Upload',
    'Blockchain Save': 'BWS.Blockchain.Save',
    'Blockchain Hash': 'BWS.Blockchain.Hash',
    'NFT.zK': 'BWS.NFT.zK'
  };

  return mapping[productName] || `BWS.${productName.replace(/\s+/g, '.')}`;
}

/**
 * Discover what sections were actually captured for a product
 * @returns {Map<string, {formats: string[], files: Map<string, string>}>}
 */
function discoverCapturedSections(worktreeProductDir) {
  const sectionsDir = path.join(worktreeProductDir, 'sections', 'desktop');

  if (!fs.existsSync(sectionsDir)) {
    return new Map();
  }

  const files = fs.readdirSync(sectionsDir);
  const sections = new Map();

  // Pattern: {slug}-desktop-{date}-section-{sectionName}[-{socialFormat}].{ext}
  const sectionPattern = /-section-([a-z-]+?)(?:-([a-z-]+?))?\.(\w+)$/;

  files.forEach(filename => {
    const match = filename.match(sectionPattern);
    if (!match) return;

    const [, sectionName, socialFormat, ext] = match;
    const format = socialFormat || 'desktop';

    if (!sections.has(sectionName)) {
      sections.set(sectionName, {
        formats: [],
        files: new Map()
      });
    }

    const sectionData = sections.get(sectionName);
    if (!sectionData.formats.includes(format)) {
      sectionData.formats.push(format);
    }

    // Keep track of latest file per format (sorted alphabetically, latest date last)
    const existing = sectionData.files.get(format);
    if (!existing || filename > existing) {
      sectionData.files.set(format, filename);
    }
  });

  return sections;
}

/**
 * Organize section files by section name
 * Now uses dynamic discovery instead of relying on config
 */
function organizeMediaFiles(productSlug, productGitBookDir, configuredSections, dryRun = false) {
  const worktreeProductDir = path.join(WORKTREE_MEDIA_DIR, productSlug);
  const gitbookProductDir = path.join(GITBOOK_SNAPSHOTS_DIR, productGitBookDir);

  console.log(`\n📁 Organizing media for: ${productGitBookDir}`);
  console.log(`   Source: ${worktreeProductDir}`);
  console.log(`   Target: ${gitbookProductDir}`);

  if (!fs.existsSync(worktreeProductDir)) {
    console.log(`   ⚠️  No media found, skipping...`);
    return { organized: 0, skipped: true, sections: new Map() };
  }

  let filesOrganized = 0;

  // Create base directory
  if (!dryRun) {
    fs.mkdirSync(gitbookProductDir, { recursive: true });
  }

  // DYNAMIC DISCOVERY: Scan what sections were actually captured
  const capturedSections = discoverCapturedSections(worktreeProductDir);
  console.log(`   📊 Discovered ${capturedSections.size} captured section(s)`);

  // Validate against configuration
  const configuredSectionNames = new Set(configuredSections.map(s => s.name));
  capturedSections.forEach((data, sectionName) => {
    if (!configuredSectionNames.has(sectionName)) {
      console.log(`   ⚠️  Section "${sectionName}" was captured but not in config`);
    }
  });

  configuredSectionNames.forEach(sectionName => {
    if (!capturedSections.has(sectionName)) {
      console.log(`   ⚠️  Section "${sectionName}" is configured but was not captured`);
    }
  });

  // Process each captured section
  const sectionsSourceDir = path.join(worktreeProductDir, 'sections', 'desktop');

  capturedSections.forEach((sectionData, sectionName) => {
    const sectionDir = path.join(gitbookProductDir, sectionName);

    console.log(`\n   📂 Section: ${sectionName}`);
    console.log(`      Formats: ${sectionData.formats.join(', ')}`);

    if (!dryRun) {
      fs.mkdirSync(sectionDir, { recursive: true });
    }

    // Copy each format's latest file
    sectionData.files.forEach((sourceFilename, format) => {
      const ext = path.extname(sourceFilename);
      const targetFilename = `${format}-${sectionName}${ext}`;
      const sourcePath = path.join(sectionsSourceDir, sourceFilename);
      const targetPath = path.join(sectionDir, targetFilename);

      console.log(`      ✓ ${format}: ${targetFilename}`);

      if (!dryRun) {
        fs.copyFileSync(sourcePath, targetPath);
      }

      filesOrganized++;
    });
  });

  // Process videos
  const videosSourceDir = path.join(worktreeProductDir, 'videos');
  const videosTargetDir = path.join(gitbookProductDir, 'videos');

  if (fs.existsSync(videosSourceDir)) {
    console.log(`\n   🎬 Videos`);

    if (!dryRun) {
      fs.mkdirSync(videosTargetDir, { recursive: true });
    }

    const videoFiles = fs.readdirSync(videosSourceDir)
      .filter(f => f.endsWith('.webm'))
      .sort()
      .reverse();

    if (videoFiles.length > 0) {
      const latestVideo = videoFiles[0];
      const webmSource = path.join(videosSourceDir, latestVideo);
      const webmTarget = path.join(videosTargetDir, 'workflow-demo.webm');
      const mp4Target = path.join(videosTargetDir, 'workflow-demo.mp4');

      console.log(`      ✓ workflow-demo.webm`);
      if (!dryRun) {
        fs.copyFileSync(webmSource, webmTarget);
      }
      filesOrganized++;

      // Convert to MP4 for better compatibility (optional)
      console.log(`      ⏳ Converting to MP4...`);
      if (!dryRun) {
        try {
          execSync(`ffmpeg -i "${webmSource}" -c:v libx264 -preset medium -crf 23 "${mp4Target}" -y`, {
            stdio: 'ignore'
          });
          console.log(`      ✓ workflow-demo.mp4`);
          filesOrganized++;
        } catch (err) {
          console.log(`      ⚠️  MP4 conversion failed (ffmpeg not available, WebM only)`);
        }
      }
    }
  }

  console.log(`\n   📊 Total files organized: ${filesOrganized}`);

  return { organized: filesOrganized, skipped: false, sections: capturedSections };
}

/**
 * Generate product README.md gallery page based on actual captured sections
 */
function generateProductGalleryPage(productName, productGitBookDir, config, capturedSections) {
  // Implementation for generating the markdown gallery page
  // Now data-driven based on capturedSections instead of config
  // (Template from section 3.1 above, modified to iterate capturedSections)
}

/**
 * Update snapshots overview README.md
 */
function updateSnapshotsOverview(products) {
  // Implementation for updating the overview page
  // (Template from section 3.2 above)
}

/**
 * Update SUMMARY.md with snapshot pages
 */
function updateSummary(products) {
  // Implementation for adding snapshot pages to SUMMARY.md
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const productFilter = args.find(a => a.startsWith('--product='))?.split('=')[1];

  console.log('🚀 Deploying media assets to GitBook structure\n');
  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  const docsIndex = loadDocsIndex();
  const products = getProductsWithMediaCapture(docsIndex);

  let totalOrganized = 0;
  const deployedProducts = [];

  for (const [productName, config] of Object.entries(products)) {
    if (productFilter && productName !== productFilter) {
      continue;
    }

    const productSlug = productNameToSlug(productName);
    const productGitBookDir = productToGitBookDir(productName);
    const configuredSections = config.mediaCapture.snapshot.sections || [];

    const result = organizeMediaFiles(productSlug, productGitBookDir, configuredSections, dryRun);

    if (!result.skipped) {
      totalOrganized += result.organized;
      deployedProducts.push({
        productName,
        productGitBookDir,
        config,
        capturedSections: result.sections
      });

      if (!dryRun) {
        generateProductGalleryPage(productName, productGitBookDir, config, result.sections);
      }
    }
  }

  if (!dryRun && deployedProducts.length > 0) {
    updateSnapshotsOverview(deployedProducts);
    updateSummary(deployedProducts);
  }

  console.log(`\n✅ Deployment complete!`);
  console.log(`   Products processed: ${deployedProducts.length}`);
  console.log(`   Files organized: ${totalOrganized}`);
}

main().catch(console.error);
```

### 4.2 Update GitHub Actions Workflow

Modify `.github/workflows/update-product-media.yml` to include deployment step:

```yaml
- name: Deploy media to GitBook structure
  run: |
    node scripts/media-capture/deploy-to-gitbook.cjs

- name: Check for changes in GitBook docs
  id: check_gitbook_changes
  run: |
    git add media-assets/
    if git diff --staged --quiet; then
      echo "has_changes=false" >> $GITHUB_OUTPUT
    else
      echo "has_changes=true" >> $GITHUB_OUTPUT
      git status --short
    fi
```

---

## 5. SUMMARY.md Updates

Add snapshot pages under Media Assets section:

```markdown
* [Media Assets](media-assets/README.md)
  * [BWS Logo](media-assets/bws-logo.md)
  * [Snapshots](media-assets/snapshots/README.md)
    * [BWS.Blockchain.Badges](media-assets/snapshots/BWS.Blockchain.Badges/README.md)
    * [BWS.NFT.GameCube](media-assets/snapshots/BWS.NFT.GameCube/README.md)
    * [BWS.ESG.Credits](media-assets/snapshots/BWS.ESG.Credits/README.md)
    * [BWS.X.Bot](media-assets/snapshots/BWS.X.Bot/README.md)
    * [BWS.IPFS.Upload](media-assets/snapshots/BWS.IPFS.Upload/README.md)
    * [BWS.Blockchain.Save](media-assets/snapshots/BWS.Blockchain.Save/README.md)
    * [BWS.Blockchain.Hash](media-assets/snapshots/BWS.Blockchain.Hash/README.md)
    * [BWS.NFT.zK](media-assets/snapshots/BWS.NFT.zK/README.md)
```

---

## 6. Implementation Phases

### Phase 1: Foundation (Week 1)
- [x] Create `deploy-to-gitbook.cjs` script
- [ ] Implement file organization logic
- [ ] Test with Blockchain Badges product
- [ ] Validate directory structure

### Phase 2: Gallery Pages (Week 2)
- [ ] Create product gallery page template
- [ ] Implement gallery page generator
- [ ] Generate Blockchain Badges gallery page
- [ ] Test GitBook rendering

### Phase 3: Automation (Week 3)
- [ ] Update GitHub Actions workflow
- [ ] Add deployment step
- [ ] Test end-to-end automated workflow
- [ ] Validate weekly updates

### Phase 4: Scale to All Products (Week 4)
- [ ] Configure media capture for NFT GameCube
- [ ] Configure media capture for ESG Credits
- [ ] Configure media capture for X Bot
- [ ] Generate gallery pages for all products
- [ ] Update snapshots overview page

### Phase 5: Enhancements (Week 5)
- [ ] Add video conversion (WebM → MP4)
- [ ] Create usage documentation
- [ ] Add metadata tracking (last updated dates)
- [ ] Implement cleanup of old assets

---

## 7. Testing Strategy

### 7.1 Unit Testing
- Test file organization logic with mock data
- Test naming convention transformations
- Test gallery page generation

### 7.2 Integration Testing
- Test full deployment for Blockchain Badges
- Verify GitBook rendering of gallery pages
- Test social media format accessibility
- Validate internal links

### 7.3 End-to-End Testing
- Trigger GitHub Actions workflow manually
- Verify automated deployment
- Check committed files in main repo
- Validate GitBook publication

---

## 8. Success Criteria

### Must Have
- ✅ Organized directory structure in `/media-assets/snapshots/`
- ✅ Automated deployment from worktree to main repo
- ✅ GitBook gallery pages for each product
- ✅ Weekly automated updates via GitHub Actions
- ✅ Social media optimized formats accessible

### Should Have
- ✅ Video format conversion (WebM → MP4)
- ✅ Metadata tracking (last updated timestamps)
- ✅ Usage documentation for content team
- ✅ SUMMARY.md integration

### Nice to Have
- ⏳ CDN/S3 upload for large media files
- ⏳ Telegram notifications on updates
- ⏳ Analytics on asset downloads
- ⏳ Automated social media posting

---

## 9. Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Large media files bloat git repo | High | Implement git-lfs or CDN hosting |
| GitBook asset limits | Medium | Monitor asset count, use external hosting if needed |
| ffmpeg not available in CI | Low | Make MP4 conversion optional, fallback to WebM |
| Naming conflicts | Low | Use strict naming conventions and validation |
| Broken internal links | Medium | Automated link validation in CI |

---

## 10. Timeline

**Total Duration:** 5 weeks

**Week 1 (Dec 2-8):** Phase 1 - Foundation
**Week 2 (Dec 9-15):** Phase 2 - Gallery Pages
**Week 3 (Dec 16-22):** Phase 3 - Automation
**Week 4 (Dec 23-29):** Phase 4 - Scale to All Products
**Week 5 (Dec 30-Jan 5):** Phase 5 - Enhancements & Documentation

---

## 11. Next Actions

### Immediate (This Week)
1. Create `deploy-to-gitbook.cjs` script skeleton
2. Implement product-to-GitBook directory mapping
3. Implement file organization for Blockchain Badges
4. Test deployment dry-run

### Short-term (Next 2 Weeks)
1. Create gallery page template
2. Implement page generator
3. Update GitHub Actions workflow
4. Test automated deployment

### Long-term (Next Month)
1. Scale to all BWS products
2. Add video conversion
3. Document workflow for team
4. Optimize for performance

---

## 12. Resources Required

### Development
- Developer time: ~40 hours over 5 weeks
- Testing: ~10 hours

### Infrastructure
- GitHub Actions minutes (existing)
- Git repository storage (monitor if using git-lfs)

### Tools
- ffmpeg (for video conversion) - available in GitHub Actions runners
- Node.js packages: sharp (if image processing needed)

---

## 13. Documentation

### User Documentation
- How to access product media assets
- How to use social media formats
- Brand guidelines for asset usage

### Developer Documentation
- How to configure media capture for new products
- How to modify gallery templates
- How to troubleshoot deployment issues

### Operations Documentation
- How to manually trigger media updates
- How to monitor weekly automation
- How to handle failures

---

## Appendix A: Product Mapping Reference

```javascript
const PRODUCT_GITBOOK_MAPPING = {
  // Marketplace Solutions
  'Blockchain Badges': {
    gitbookDir: 'BWS.Blockchain.Badges',
    docsUrl: '/marketplace-solutions/bws.blockchain.badges',
    websiteUrl: 'https://blockchainbadges.com'
  },
  'NFT Game Cube': {
    gitbookDir: 'BWS.NFT.GameCube',
    docsUrl: '/marketplace-solutions/bws.nft.gamecube',
    websiteUrl: null
  },
  'ESG Credits': {
    gitbookDir: 'BWS.ESG.Credits',
    docsUrl: '/marketplace-solutions/bws.esg.credits',
    websiteUrl: null
  },

  // Telegram Bots
  'X Bot': {
    gitbookDir: 'BWS.X.Bot',
    docsUrl: '/telegram-bots/x-bot',
    websiteUrl: null
  },

  // Platform APIs
  'BWS IPFS': {
    gitbookDir: 'BWS.IPFS.Upload',
    docsUrl: '/solutions/bws.ipfs.upload',
    websiteUrl: null
  },
  'Blockchain Save': {
    gitbookDir: 'BWS.Blockchain.Save',
    docsUrl: '/solutions/bws.blockchain.save',
    websiteUrl: null
  },
  'Blockchain Hash': {
    gitbookDir: 'BWS.Blockchain.Hash',
    docsUrl: '/solutions/bws.blockchain.hash',
    websiteUrl: null
  },
  'NFT.zK': {
    gitbookDir: 'BWS.NFT.zK',
    docsUrl: '/solutions/bws.nft.zk',
    websiteUrl: null
  }
};
```

---

## Appendix B: Social Media Format Specifications

### Twitter/X
- **Dimensions:** 1200 x 675 pixels (16:9)
- **Format:** JPG (optimized)
- **File size:** < 5 MB
- **Usage:** Timeline posts, cards

### LinkedIn
- **Dimensions:** 1200 x 627 pixels (1.91:1)
- **Format:** JPG (optimized)
- **File size:** < 5 MB
- **Usage:** Posts, articles

### Instagram
- **Post:** 1080 x 1080 pixels (1:1 square)
- **Story:** 1080 x 1920 pixels (9:16)
- **Format:** JPG (optimized)
- **File size:** < 8 MB

---

**Document Version:** 1.0
**Last Updated:** 2025-11-29
**Author:** Claude Code
**Status:** Draft - Pending Approval
