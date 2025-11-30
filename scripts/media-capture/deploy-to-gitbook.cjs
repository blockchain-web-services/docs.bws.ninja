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
  loadProductConfig,
  getProductsWithMediaCapture,
  productNameToSlug,
  getCurrentDateStamp,
  normalizeProductConfig
} = require('./utils/config-loader.cjs');

// Configuration
const WORKTREE_MEDIA_DIR = 'media'; // Worktree media directory
const GITBOOK_SNAPSHOTS_DIR = path.join(process.cwd(), 'media-assets/snapshots'); // GitBook snapshots in worktree
const SUMMARY_PATH = path.join(process.cwd(), 'SUMMARY.md'); // SUMMARY.md in worktree

/**
 * Convert product name to GitBook directory name
 * "Blockchain Badges" -> "BWS.Blockchain.Badges"
 */
function productToGitBookDir(productName) {
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
 * @returns {Map<string, {formats: string[], files: Map<string, string>, description: string}>}
 */
function discoverCapturedSections(worktreeProductDir, configuredSections) {
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
      // Try to get description from config
      const configSection = configuredSections.find(s => s.name === sectionName);
      sections.set(sectionName, {
        formats: [],
        files: new Map(),
        description: configSection?.description || `${sectionName} section`
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
  const capturedSections = discoverCapturedSections(worktreeProductDir, configuredSections);
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
          execSync(`ffmpeg -i "${webmSource}" -c:v libx264 -preset medium -crf 23 "${mp4Target}" -y 2>/dev/null`, {
            stdio: 'ignore'
          });
          console.log(`      ✓ workflow-demo.mp4`);
          filesOrganized++;
        } catch (err) {
          console.log(`      ⚠️  MP4 conversion skipped (ffmpeg not available)`);
        }
      }
    }
  }

  console.log(`\n   📊 Total files organized: ${filesOrganized}`);

  return { organized: filesOrganized, skipped: false, sections: capturedSections };
}

/**
 * Generate product README.md gallery page based on actual captured sections
 * Following GitBook conventions with proper formatting
 */
function generateProductGalleryPage(productName, productGitBookDir, config, capturedSections) {
  const gitbookProductDir = path.join(GITBOOK_SNAPSHOTS_DIR, productGitBookDir);
  const readmePath = path.join(gitbookProductDir, 'README.md');

  const websiteUrl = config.websiteUrl || 'N/A';
  const docsUrl = config.docs?.[0]?.replace('https://docs.bws.ninja', '') || '#';
  const dateStamp = getCurrentDateStamp();

  // Generate sections as card-based galleries
  let sectionsMarkdown = '';
  let sectionCount = 0;

  capturedSections.forEach((sectionData, sectionName) => {
    sectionCount++;
    const sectionTitle = sectionName.charAt(0).toUpperCase() + sectionName.slice(1).replace(/-/g, ' ');
    const description = sectionData.description;
    const formats = sectionData.formats;

    // Create section heading
    sectionsMarkdown += `## ${sectionTitle}\n\n`;
    sectionsMarkdown += `${description}\n\n`;

    // For each format, create a figure with caption
    formats.forEach(format => {
      const file = sectionData.files.get(format);
      const ext = path.extname(file);
      const filename = `${format}-${sectionName}${ext}`;
      const formatLabel = format === 'instagram-post' ? 'Instagram Post' :
                          format.charAt(0).toUpperCase() + format.slice(1);

      sectionsMarkdown += `<figure><img src="${sectionName}/${filename}" alt="${formatLabel} - ${sectionTitle}"><figcaption><p>${formatLabel} (${format === 'desktop' ? 'Full Resolution' : formatLabel === 'Twitter' ? '1200x675px' : formatLabel === 'LinkedIn' ? '1200x627px' : '1080x1080px'})</p></figcaption></figure>\n\n`;
    });

    sectionsMarkdown += `\n`;
  });

  // Add videos section if available
  const videosDir = path.join(gitbookProductDir, 'videos');
  const hasVideos = fs.existsSync(videosDir) && fs.readdirSync(videosDir).length > 0;

  let videosMarkdown = '';
  if (hasVideos) {
    const videoDescription = config.mediaCapture?.video?.description || 'Product workflow demonstration';
    videosMarkdown = `## Workflow Video\n\n`;
    videosMarkdown += `${videoDescription}\n\n`;
    videosMarkdown += `<figure>\n`;
    videosMarkdown += `  <video src="videos/workflow-demo.webm" controls></video>\n`;
    videosMarkdown += `  <figcaption><p>${videoDescription}</p></figcaption>\n`;
    videosMarkdown += `</figure>\n\n`;
  }

  const content = `---
description: >-
  Media assets and product snapshots for ${productName} - website screenshots
  optimized for documentation and social media marketing.
---

# ${productName} - Media Assets

Product media library including website section captures, social media optimized images, and workflow demonstration videos.

<table><thead><tr><th width="180">Product</th><th width="140">Last Updated</th><th>Website</th></tr></thead><tbody><tr><td>${productName}</td><td>${dateStamp}</td><td><a href="${websiteUrl}">${websiteUrl.replace('https://', '')}</a></td></tr></tbody></table>

{% hint style="info" %}
**About These Assets**

All assets on this page are automatically captured and updated weekly from the live ${productName} website. Images are optimized for different platforms including social media (Twitter, LinkedIn, Instagram) and documentation.
{% endhint %}

---

${sectionsMarkdown}${videosMarkdown}---

## Download & Usage

### Social Media Formats

Ready-to-use images optimized for each platform:

* **Twitter/X:** 1200x675px (16:9 ratio) - Perfect for tweets and cards
* **LinkedIn:** 1200x627px (1.91:1 ratio) - Optimized for LinkedIn posts
* **Instagram:** 1080x1080px (1:1 square) - Instagram feed posts

### Documentation Use

Desktop resolution images are ideal for:
* Product documentation pages
* Knowledge base articles
* Help center content
* Internal wikis

---

## Related Documentation

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Product Documentation</strong></td><td>Full API and integration docs</td><td><a href="${docsUrl}">${docsUrl}</a></td></tr><tr><td><strong>All Product Snapshots</strong></td><td>Browse media for all products</td><td><a href="../">../</a></td></tr><tr><td><strong>Brand Guidelines</strong></td><td>BWS brand usage guidelines</td><td><a href="../../">../../</a></td></tr></tbody></table>
`;

  fs.writeFileSync(readmePath, content);
  console.log(`\n   ✓ Generated gallery page: ${readmePath}`);
}

/**
 * Update snapshots overview README.md following GitBook conventions
 */
function updateSnapshotsOverview(deployedProducts) {
  const overviewPath = path.join(GITBOOK_SNAPSHOTS_DIR, 'README.md');
  const dateStamp = getCurrentDateStamp();

  // Group products by category
  const platformAPIs = [];
  const marketplaceSolutions = [];
  const telegramBots = [];

  deployedProducts.forEach(({ productName, productGitBookDir }) => {
    const item = { productName, productGitBookDir };

    if (productGitBookDir.startsWith('BWS.X.')) {
      telegramBots.push(item);
    } else if (['BWS.IPFS.Upload', 'BWS.Blockchain.Save', 'BWS.Blockchain.Hash', 'BWS.NFT.zK'].includes(productGitBookDir)) {
      platformAPIs.push(item);
    } else {
      marketplaceSolutions.push(item);
    }
  });

  function generateProductCards(products) {
    if (products.length === 0) return '';

    let markdown = `<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>`;

    products.forEach(({ productName, productGitBookDir }) => {
      markdown += `<tr><td><strong>${productName}</strong></td><td>View media assets and snapshots</td><td><a href="${productGitBookDir}/">${productGitBookDir}/</a></td></tr>`;
    });

    markdown += `</tbody></table>\n\n`;

    return markdown;
  }

  const content = `---
description: >-
  Product snapshots and media assets for all BWS products - website screenshots
  optimized for documentation and social media marketing.
---

# Product Snapshots

Browse the complete media library for all BWS products. Each product page includes website section captures, social media optimized images, and workflow demonstration videos.

{% hint style="info" %}
**Automated Weekly Updates**

All product snapshots are automatically captured and updated weekly from live websites. Images are optimized for different platforms including social media (Twitter, LinkedIn, Instagram) and documentation.
{% endhint %}

---

${marketplaceSolutions.length > 0 ? `## Marketplace Solutions\n\n${generateProductCards(marketplaceSolutions)}` : ''}${platformAPIs.length > 0 ? `## Platform API Products\n\n${generateProductCards(platformAPIs)}` : ''}${telegramBots.length > 0 ? `## Telegram Bots\n\n${generateProductCards(telegramBots)}` : ''}---

## Asset Usage Guide

### Social Media Marketing

Ready-to-use images optimized for each platform:

* **Twitter/X:** 1200x675px (16:9 ratio) - Perfect for tweets and thread images
* **LinkedIn:** 1200x627px (1.91:1 ratio) - Optimized for LinkedIn posts and articles
* **Instagram:** 1080x1080px (1:1 square) - Instagram feed posts

### Documentation & Content

Desktop resolution images are ideal for:

* Product documentation pages
* Knowledge base articles
* Blog posts and tutorials
* Help center content
* Internal wikis and guides

### Example Usage

Reference assets in markdown documents:

\`\`\`markdown
![Product Hero Section](BWS.Blockchain.Badges/hero/desktop-hero.png)
\`\`\`

Or use social media optimized versions:

\`\`\`markdown
![Twitter Card](BWS.Blockchain.Badges/hero/twitter-hero.jpg)
\`\`\`

---

## Brand Guidelines

For proper usage of BWS brand assets and guidelines, refer to:

{% file src="../../.gitbook/assets/BWS Brand Guideline v0.1.pdf" %}

---

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>BWS Logo</strong></td><td>Official BWS logos and variations</td><td><a href="../bws-logo.md">bws-logo.md</a></td></tr><tr><td><strong>Brand Guidelines</strong></td><td>Complete brand usage guidelines</td><td><a href="../">../</a></td></tr></tbody></table>
`;

  fs.writeFileSync(overviewPath, content);
  console.log(`\n✓ Updated snapshots overview: ${overviewPath}`);
}

/**
 * Update SUMMARY.md with snapshot pages
 */
function updateSummary(deployedProducts) {
  if (!fs.existsSync(SUMMARY_PATH)) {
    console.log(`\n⚠️  SUMMARY.md not found at ${SUMMARY_PATH}, skipping...`);
    return;
  }

  const summaryContent = fs.readFileSync(SUMMARY_PATH, 'utf-8');
  const lines = summaryContent.split('\n');

  // Find the Snapshots section
  const snapshotsLineIndex = lines.findIndex(line => line.includes('* [Snapshots](media-assets/snapshots/README.md)'));

  if (snapshotsLineIndex === -1) {
    console.log(`\n⚠️  Snapshots section not found in SUMMARY.md, skipping...`);
    return;
  }

  // Find the end of the Snapshots subsection (next line that doesn't start with more indentation)
  let endIndex = snapshotsLineIndex + 1;
  while (endIndex < lines.length && (lines[endIndex].startsWith('    ') || lines[endIndex].trim() === '')) {
    endIndex++;
  }

  // Build new snapshot entries
  const newEntries = deployedProducts.map(({ productGitBookDir }) => {
    return `    * [${productGitBookDir}](media-assets/snapshots/${productGitBookDir}/README.md)`;
  });

  // Replace the subsection
  const newLines = [
    ...lines.slice(0, snapshotsLineIndex + 1),
    ...newEntries,
    ...lines.slice(endIndex)
  ];

  fs.writeFileSync(SUMMARY_PATH, newLines.join('\n'));
  console.log(`\n✓ Updated SUMMARY.md with ${deployedProducts.length} product page(s)`);
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

  const allProducts = loadProductConfig();
  const products = {};

  // Filter to products with mediaCapture config
  Object.entries(allProducts).forEach(([name, config]) => {
    const normalized = normalizeProductConfig(config);
    if (normalized.mediaCapture?.snapshot) {
      products[name] = normalized;
    }
  });

  let totalOrganized = 0;
  const deployedProducts = [];

  for (const [productName, config] of Object.entries(products)) {
    if (productFilter && productName !== productFilter) {
      continue;
    }

    const productSlug = productNameToSlug(productName);
    const productGitBookDir = productToGitBookDir(productName);
    const configuredSections = config.mediaCapture?.snapshot?.sections || [];

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

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Deployment ${dryRun ? 'preview' : 'complete'}!`);
  console.log(`   Products processed: ${deployedProducts.length}`);
  console.log(`   Files organized: ${totalOrganized}`);
  console.log(`${'='.repeat(60)}\n`);
}

main().catch(console.error);
