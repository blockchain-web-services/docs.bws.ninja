#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const {
  loadProductConfig,
  normalizeProductConfig,
  getProductsWithSnapshots,
  productNameToSlug,
  getCurrentDateStamp
} = require('./utils/config-loader.cjs');
const {
  launchBrowser,
  waitForPageLoad,
  takeScreenshot,
  cleanup
} = require('./utils/playwright-helper.cjs');

/**
 * Capture snapshot for a single product and viewport
 * @param {string} productName - Product name
 * @param {Object} config - Product configuration
 * @param {string} viewport - Viewport type (desktop, tablet, mobile)
 * @returns {Promise<{success: boolean, outputPath: string, error?: string}>}
 */
async function captureProductSnapshot(productName, config, viewport) {
  let browser, context;

  try {
    console.log(`📸 Capturing ${viewport} snapshot for "${productName}"...`);

    const snapshotConfig = config.mediaCapture.snapshot;
    const url = snapshotConfig.url;

    // Generate output path
    const slug = productNameToSlug(productName);
    const dateStamp = getCurrentDateStamp();
    const filename = `${slug}-${viewport}-${dateStamp}.png`;
    const outputDir = path.join(process.cwd(), config.outputPath, 'snapshots', viewport);
    const outputPath = path.join(outputDir, filename);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Launch browser with viewport configuration
    ({ browser, context, page } = await launchBrowser({
      headless: true,
      viewport
    }));

    // Navigate to URL
    console.log(`  → Navigating to ${url}`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

    // Wait for page to be fully loaded
    await waitForPageLoad(page, 30000);

    // Additional wait to ensure all content is rendered
    await page.waitForTimeout(2000);

    // Take screenshot
    console.log(`  → Taking screenshot...`);
    await takeScreenshot(page, outputPath);

    // Verify file was created
    const stats = fs.statSync(outputPath);
    const fileSizeKB = (stats.size / 1024).toFixed(2);

    console.log(`  ✅ Snapshot saved: ${outputPath} (${fileSizeKB} KB)`);

    return {
      success: true,
      outputPath,
      fileSizeKB
    };

  } catch (error) {
    console.error(`  ❌ Error capturing snapshot: ${error.message}`);
    return {
      success: false,
      error: error.message
    };
  } finally {
    await cleanup(browser, context);
  }
}

/**
 * Capture snapshots for a single product (all configured viewports)
 * @param {string} productName - Product name
 * @returns {Promise<Object>}
 */
async function captureProduct(productName) {
  const products = loadProductConfig(productName);
  const config = normalizeProductConfig(products[productName]);

  if (!config.mediaCapture?.snapshot) {
    console.log(`⚠️  Product "${productName}" has no snapshot configuration`);
    return {
      product: productName,
      skipped: true,
      reason: 'No snapshot configuration'
    };
  }

  const viewports = config.mediaCapture.snapshot.viewports || ['desktop'];
  const results = [];

  console.log(`\n🎯 Processing "${productName}"`);
  console.log(`   Viewports: ${viewports.join(', ')}`);

  for (const viewport of viewports) {
    const result = await captureProductSnapshot(productName, config, viewport);
    results.push({
      viewport,
      ...result
    });
  }

  return {
    product: productName,
    results
  };
}

/**
 * Capture snapshots for all products with snapshot configuration
 * @returns {Promise<Array>}
 */
async function captureAllProducts() {
  const products = getProductsWithSnapshots();

  if (products.length === 0) {
    console.log('⚠️  No products with snapshot configuration found');
    return [];
  }

  console.log(`\n📸 Found ${products.length} product(s) with snapshot configuration\n`);

  const allResults = [];

  for (const { name } of products) {
    const result = await captureProduct(name);
    allResults.push(result);
  }

  return allResults;
}

/**
 * Print summary report
 * @param {Array} results - Capture results
 */
function printSummary(results) {
  console.log('\n' + '='.repeat(60));
  console.log('📊 SNAPSHOT CAPTURE SUMMARY');
  console.log('='.repeat(60));

  let totalSnapshots = 0;
  let successfulSnapshots = 0;
  let failedSnapshots = 0;

  results.forEach(result => {
    if (result.skipped) {
      console.log(`\n❌ ${result.product}: Skipped (${result.reason})`);
      return;
    }

    console.log(`\n✅ ${result.product}:`);
    result.results.forEach(r => {
      totalSnapshots++;
      if (r.success) {
        successfulSnapshots++;
        console.log(`   ✓ ${r.viewport}: ${r.fileSizeKB} KB`);
      } else {
        failedSnapshots++;
        console.log(`   ✗ ${r.viewport}: ${r.error}`);
      }
    });
  });

  console.log('\n' + '-'.repeat(60));
  console.log(`Total: ${totalSnapshots} | Success: ${successfulSnapshots} | Failed: ${failedSnapshots}`);
  console.log('='.repeat(60) + '\n');
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);

  // Parse command line arguments
  const productName = args.find(arg => !arg.startsWith('--'));
  const captureAll = args.includes('--all');
  const viewport = args.find(arg => arg.startsWith('--viewport='))?.split('=')[1];

  console.log('\n🚀 BWS Product Snapshot Capture');
  console.log('='.repeat(60));

  let results;

  if (captureAll) {
    results = await captureAllProducts();
  } else if (productName) {
    const result = await captureProduct(productName);
    results = [result];
  } else {
    console.log('\nUsage:');
    console.log('  node capture-snapshot.js "Product Name"');
    console.log('  node capture-snapshot.js "Product Name" --viewport=desktop');
    console.log('  node capture-snapshot.js --all');
    console.log('\nExamples:');
    console.log('  node capture-snapshot.js "Blockchain Badges"');
    console.log('  node capture-snapshot.js "Blockchain Badges" --viewport=mobile');
    console.log('  node capture-snapshot.js --all\n');
    process.exit(1);
  }

  printSummary(results);
}

// Run if executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
  });
}

module.exports = {
  captureProductSnapshot,
  captureProduct,
  captureAllProducts
};
