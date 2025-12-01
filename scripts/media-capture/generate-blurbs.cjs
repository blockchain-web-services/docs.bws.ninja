#!/usr/bin/env node

/**
 * Generate Marketing Blurbs
 *
 * Generates AI-powered marketing blurbs for BWS products using Claude API.
 * Creates channel-specific content optimized for partner communications.
 *
 * Usage:
 *   node generate-blurbs.cjs BWS.Blockchain.Badges
 *   node generate-blurbs.cjs --all
 *   node generate-blurbs.cjs BWS.Blockchain.Badges --channels email,linkedin,twitter
 *   node generate-blurbs.cjs BWS.Blockchain.Badges --dry-run
 *
 * Environment:
 *   ANTHROPIC_API_KEY - Required API key for Claude
 *   Can be set via environment variable or .env file in repository root
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file if it exists
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { readProductDocumentation, prepareForClaude } = require('./utils/documentation-reader.cjs');
const { generateAllBlurbs, generateAudienceBlurbs } = require('./utils/blurb-generator.cjs');
const { generateBlurbsPage, generateAudienceBlurbsPage, generateBlurbsOverview, generateSummaryReport } = require('./utils/blurb-templates.cjs');

// Product configurations
const PRODUCTS = {
  'BWS.Blockchain.Badges': {
    name: 'Blockchain Badges',
    website: 'https://blockchainbadges.com',
    docsUrl: 'https://docs.bws.ninja/marketplace-solutions/bws.blockchain.badges',
    category: 'marketplace'
  },
  'BWS.NFT.GameCube': {
    name: 'NFT Game Cube',
    website: 'https://nftgamecube.com',
    docsUrl: 'https://docs.bws.ninja/marketplace-solutions/bws.nft.gamecube',
    category: 'marketplace'
  },
  'BWS.ESG.Credits': {
    name: 'ESG Credits',
    website: 'https://esgcredits.io',
    docsUrl: 'https://docs.bws.ninja/marketplace-solutions/bws.esg.credits',
    category: 'marketplace'
  },
  'BWS.X.Bot': {
    name: 'X Bot',
    website: null,
    docsUrl: 'https://docs.bws.ninja/marketplace-solutions/bws.x.bot',
    category: 'marketplace'
  },
  'BWS.Blockchain.Save': {
    name: 'Blockchain Save',
    website: null,
    docsUrl: 'https://docs.bws.ninja/solutions/bws.blockchain.save',
    category: 'platform'
  },
  'BWS.Blockchain.Hash': {
    name: 'Blockchain Hash',
    website: null,
    docsUrl: 'https://docs.bws.ninja/solutions/bws.blockchain.hash',
    category: 'platform'
  },
  'BWS.IPFS.Upload': {
    name: 'IPFS Upload',
    website: null,
    docsUrl: 'https://docs.bws.ninja/solutions/bws.ipfs.upload',
    category: 'platform'
  },
  'BWS.NFT.zK': {
    name: 'NFT.zK',
    website: null,
    docsUrl: 'https://docs.bws.ninja/solutions/bws.nft.zk',
    category: 'platform'
  }
};

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    productKeys: [],
    channels: null,
    dryRun: false,
    all: false,
    audienceSegmented: true  // Default to audience-segmented
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--all') {
      options.all = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--no-audiences') {
      options.audienceSegmented = false;
    } else if (arg === '--channels') {
      options.channels = args[++i].split(',').map(c => c.trim());
    } else if (arg.startsWith('BWS.')) {
      options.productKeys.push(arg);
    } else if (!arg.startsWith('--')) {
      console.error(`Unknown product: ${arg}`);
      process.exit(1);
    }
  }

  if (options.all) {
    options.productKeys = Object.keys(PRODUCTS);
  } else if (options.productKeys.length === 0) {
    console.error('Error: No product specified\n');
    printUsage();
    process.exit(1);
  }

  return options;
}

/**
 * Print usage information
 */
function printUsage() {
  console.log(`Generate Marketing Blurbs for BWS Products

Usage:
  node generate-blurbs.cjs <product-key> [options]
  node generate-blurbs.cjs --all [options]

Products:
${Object.entries(PRODUCTS).map(([key, config]) => `  ${key.padEnd(25)} ${config.name}`).join('\n')}

Options:
  --all                    Generate for all products
  --channels <list>        Comma-separated channels (email,linkedin,twitter,slack,executive,elevator,technical)
  --dry-run               Preview without saving files

Environment:
  ANTHROPIC_API_KEY       Required API key for Claude

Examples:
  node generate-blurbs.cjs BWS.Blockchain.Badges
  node generate-blurbs.cjs --all
  node generate-blurbs.cjs BWS.Blockchain.Badges --channels email,linkedin
  node generate-blurbs.cjs BWS.Blockchain.Badges --dry-run
`);
}

/**
 * Get output directory for blurbs
 */
function getBlurbsDir() {
  // From scripts/media-capture/ to worktree root
  return path.resolve(__dirname, '../../media-assets/blurbs');
}

/**
 * Generate blurbs for a single product
 */
async function generateProductBlurbs(productKey, options) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Generating blurbs for ${productKey}`);
  console.log(`${'='.repeat(60)}\n`);

  const productConfig = PRODUCTS[productKey];
  if (!productConfig) {
    throw new Error(`Unknown product: ${productKey}`);
  }

  // Step 1: Read documentation
  console.log('Step 1: Reading product documentation...');
  const documentation = readProductDocumentation(productKey);
  console.log(`Found ${documentation.files.length} documentation files`);
  console.log(`Total content: ${documentation.totalWords.toLocaleString()} words, ${documentation.totalChars.toLocaleString()} chars\n`);

  // Step 2: Prepare for Claude
  console.log('Step 2: Preparing content for AI generation...');
  const productInfo = prepareForClaude(documentation);

  // Override with commercial name from product config
  productInfo.keyInfo.productName = productConfig.name;

  console.log(`Prepared summary: ${productInfo.wordCount} words, ${productInfo.charCount} chars`);
  console.log(`Product name: ${productInfo.keyInfo.productName}\n`);

  // Step 3: Generate blurbs
  console.log('Step 3: Generating blurbs with Claude API...');
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is required');
  }

  let blurbsData;
  if (options.audienceSegmented) {
    console.log('Mode: Audience-segmented blurbs for end-customers\n');
    blurbsData = await generateAudienceBlurbs(productInfo, apiKey, options.channels);

    console.log(`\nGeneration complete: ${blurbsData.summary.successful}/${blurbsData.summary.totalCombinations} successful`);
    console.log(`Audiences: ${blurbsData.summary.totalAudiences}, Channels: ${blurbsData.summary.totalChannels}`);
  } else {
    console.log('Mode: General blurbs\n');
    blurbsData = await generateAllBlurbs(productInfo, apiKey, options.channels);

    console.log(`\nGeneration complete: ${blurbsData.summary.successful}/${blurbsData.summary.total} successful`);
  }

  if (Object.keys(blurbsData.errors).length > 0) {
    console.log('\nErrors:');
    for (const [channel, error] of Object.entries(blurbsData.errors)) {
      console.log(`  ✗ ${channel}: ${error}`);
    }
  }

  // Step 4: Generate GitBook page
  console.log('\nStep 4: Generating GitBook page...');
  const pageContent = options.audienceSegmented
    ? generateAudienceBlurbsPage(productKey, productConfig.name, blurbsData, productConfig.website, productConfig.docsUrl)
    : generateBlurbsPage(productKey, productConfig.name, blurbsData, productConfig.website, productConfig.docsUrl);

  // Step 5: Save files
  if (!options.dryRun) {
    console.log('\nStep 5: Saving files...');

    const blurbsDir = getBlurbsDir();
    const productDir = path.join(blurbsDir, productKey);

    // Create directory
    if (!fs.existsSync(productDir)) {
      fs.mkdirSync(productDir, { recursive: true });
      console.log(`Created directory: ${productDir}`);
    }

    // Save GitBook page
    const pagePath = path.join(productDir, 'README.md');
    fs.writeFileSync(pagePath, pageContent, 'utf8');
    console.log(`Saved GitBook page: ${pagePath}`);

    // Save raw blurbs as JSON
    const jsonPath = path.join(productDir, 'blurbs.json');
    fs.writeFileSync(jsonPath, JSON.stringify({
      productKey,
      productName: productConfig.name,
      generated: new Date().toISOString(),
      blurbs: blurbsData.blurbs,
      errors: blurbsData.errors,
      summary: blurbsData.summary
    }, null, 2), 'utf8');
    console.log(`Saved raw data: ${jsonPath}`);

    // Save generation report
    const reportPath = path.join(productDir, 'GENERATION_REPORT.md');
    const report = generateSummaryReport({
      productKey,
      productName: productConfig.name,
      blurbsData,
      timestamp: new Date().toISOString()
    });
    fs.writeFileSync(reportPath, report, 'utf8');
    console.log(`Saved report: ${reportPath}`);

    console.log('\n✓ Files saved successfully');
  } else {
    console.log('\n[DRY RUN] Would save files to:', path.join(getBlurbsDir(), productKey));
  }

  return {
    productKey,
    productConfig,
    blurbsData,
    pageContent
  };
}

/**
 * Update blurbs overview page
 */
function updateBlurbsOverview(products, dryRun) {
  console.log('\nUpdating blurbs overview page...');

  const blurbsDir = getBlurbsDir();
  const overviewPath = path.join(blurbsDir, 'README.md');

  const productsInfo = products.map(result => ({
    key: result.productKey,
    name: result.productConfig.name
  }));

  const overviewContent = generateBlurbsOverview(productsInfo);

  if (!dryRun) {
    fs.writeFileSync(overviewPath, overviewContent, 'utf8');
    console.log(`Updated: ${overviewPath}`);
  } else {
    console.log(`[DRY RUN] Would update: ${overviewPath}`);
  }
}

/**
 * Update SUMMARY.md to include blurbs
 */
function updateSummary(products, dryRun) {
  console.log('\nUpdating SUMMARY.md...');

  const summaryPath = path.resolve(__dirname, '../../SUMMARY.md');

  if (!fs.existsSync(summaryPath)) {
    console.warn('Warning: SUMMARY.md not found, skipping update');
    return;
  }

  let summary = fs.readFileSync(summaryPath, 'utf8');

  // Check if blurbs section already exists
  if (summary.includes('media-assets/blurbs')) {
    console.log('Blurbs section already exists in SUMMARY.md');
    return;
  }

  // Find the media assets section
  const mediaAssetsIndex = summary.indexOf('* [Media Assets](media-assets/README.md)');
  if (mediaAssetsIndex === -1) {
    console.warn('Warning: Could not find Media Assets section in SUMMARY.md');
    return;
  }

  // Find where to insert (after Snapshots section)
  const snapshotsIndex = summary.indexOf('* [Snapshots](media-assets/snapshots/README.md)', mediaAssetsIndex);

  if (snapshotsIndex === -1) {
    console.warn('Warning: Could not find Snapshots section in SUMMARY.md');
    return;
  }

  // Find the end of the snapshots subsection
  let insertIndex = snapshotsIndex;
  const lines = summary.split('\n');
  const snapshotsLineIndex = lines.findIndex(line => line.includes('* [Snapshots](media-assets/snapshots/README.md)'));

  // Find the next sibling section (not indented more than snapshots)
  for (let i = snapshotsLineIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^  \* \[/) && !line.match(/^    \*/)) {
      // Found next sibling section
      insertIndex = summary.indexOf(line);
      break;
    }
  }

  // Build blurbs section
  let blurbsSection = '  * [Blurbs](media-assets/blurbs/README.md)\n';

  // Add each product
  for (const result of products) {
    blurbsSection += `    * [${result.productConfig.name}](media-assets/blurbs/${result.productKey}/README.md)\n`;
  }

  // Insert before the next section
  const updatedSummary = summary.slice(0, insertIndex) + blurbsSection + summary.slice(insertIndex);

  if (!dryRun) {
    fs.writeFileSync(summaryPath, updatedSummary, 'utf8');
    console.log('✓ Updated SUMMARY.md with blurbs section');
  } else {
    console.log('[DRY RUN] Would add blurbs section to SUMMARY.md');
  }
}

/**
 * Main execution
 */
async function main() {
  const options = parseArgs();

  console.log('BWS Marketing Blurbs Generator\n');
  console.log(`Products: ${options.productKeys.join(', ')}`);
  if (options.channels) {
    console.log(`Channels: ${options.channels.join(', ')}`);
  }
  if (options.dryRun) {
    console.log('Mode: DRY RUN (no files will be saved)');
  }

  const results = [];

  // Generate blurbs for each product
  for (const productKey of options.productKeys) {
    try {
      const result = await generateProductBlurbs(productKey, options);
      results.push(result);
    } catch (error) {
      console.error(`\nError generating blurbs for ${productKey}:`, error.message);
      if (error.stack) {
        console.error(error.stack);
      }
    }
  }

  // Update overview and summary
  if (results.length > 0) {
    updateBlurbsOverview(results, options.dryRun);
    updateSummary(results, options.dryRun);
  }

  // Final summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('Generation Summary');
  console.log(`${'='.repeat(60)}\n`);
  console.log(`Products processed: ${results.length}/${options.productKeys.length}`);

  if (results.length > 0) {
    let totalBlurbs = 0;
    let totalErrors = 0;

    results.forEach(result => {
      totalBlurbs += result.blurbsData.summary.successful;
      totalErrors += result.blurbsData.summary.failed;
    });

    console.log(`Total blurbs generated: ${totalBlurbs}`);
    if (totalErrors > 0) {
      console.log(`Total errors: ${totalErrors}`);
    }

    if (!options.dryRun) {
      console.log(`\nFiles saved to: ${getBlurbsDir()}`);
    }
  }

  console.log('\n✓ Done\n');
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('\nFatal error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  });
}

module.exports = { generateProductBlurbs, PRODUCTS };
