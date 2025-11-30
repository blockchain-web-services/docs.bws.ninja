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
const {
  processSectionWithValidation
} = require('./utils/image-processor.cjs');

/**
 * Capture product snapshot with section extraction and social media formatting
 * @param {string} productName - Product name from docs-index.json
 * @param {Object} config - Product configuration
 * @param {string} viewport - Viewport to capture (desktop or mobile)
 * @returns {Promise<{success: boolean, fullPath?: string, sections?: Array, error?: string}>}
 */
async function captureSnapshotWithSections(productName, config, viewport = 'desktop') {
  let browser, context, page;

  try {
    const snapshotConfig = config.mediaCapture.snapshot;
    const url = snapshotConfig.url;
    const slug = productNameToSlug(productName);
    const dateStamp = getCurrentDateStamp();

    const sections = snapshotConfig.sections || [];
    const hasSections = sections.length > 0;

    console.log(`📸 Capturing "${productName}" snapshot (${viewport})...`);
    console.log(`   URL: ${url}`);
    if (hasSections) {
      console.log(`   Sections to extract: ${sections.length}`);
    }

    // Setup output paths
    const baseFilename = `${slug}-${viewport}-${dateStamp}`;
    const snapshotDir = path.join(process.cwd(), config.outputPath, 'snapshots', viewport);
    const sectionsDir = path.join(process.cwd(), config.outputPath, 'sections', viewport);

    // Ensure directories exist
    [snapshotDir, sectionsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    const fullScreenshotPath = path.join(snapshotDir, `${baseFilename}.png`);

    // Launch browser and capture full screenshot
    console.log(`\n🌐 Launching browser (${viewport})...`);
    ({ browser, context, page } = await launchBrowser({
      headless: true,
      viewport
    }));

    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await waitForPageLoad(page, 30000);

    // Take full-page screenshot
    await takeScreenshot(page, fullScreenshotPath);

    const stats = fs.statSync(fullScreenshotPath);
    const fileSizeKB = (stats.size / 1024).toFixed(2);

    console.log(`✅ Full screenshot saved: ${fullScreenshotPath} (${fileSizeKB} KB)`);

    // Extract sections if configured
    const sectionResults = [];

    if (hasSections) {
      console.log(`\n📦 Extracting ${sections.length} sections...`);

      for (const section of sections) {
        console.log(`\n→ Section: "${section.name}"`);
        console.log(`  Selector: ${section.selector}`);

        try {
          // Get bounding box for the section
          const bounds = await page.evaluate((selector) => {
            const element = document.querySelector(selector);
            if (!element) {
              return null;
            }

            const rect = element.getBoundingClientRect();
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            return {
              x: rect.left + scrollX,
              y: rect.top + scrollY,
              width: rect.width,
              height: rect.height
            };
          }, section.selector);

          if (!bounds) {
            console.warn(`  ⚠️  Element not found: ${section.selector}`);
            continue;
          }

          console.log(`  Bounds: ${bounds.width}x${bounds.height}px at (${bounds.x}, ${bounds.y})`);

          // Extract section with validation and generate social media formats
          const baseOutputPath = path.join(sectionsDir, baseFilename);
          const result = await processSectionWithValidation(
            fullScreenshotPath,
            bounds,
            section,
            baseOutputPath,
            {
              skipWhiteThreshold: 80,  // Skip sections >80% white
              trimWhiteSpace: true,     // Auto-trim margins
              minContentHeight: 100     // Minimum content height
            }
          );

          // Only add to results if not skipped
          if (!result.skipped) {
            sectionResults.push({
              name: section.name,
              description: section.description,
              ...result
            });
          }

        } catch (error) {
          console.error(`  ❌ Error processing section "${section.name}": ${error.message}`);
        }
      }

      console.log(`\n✅ Extracted ${sectionResults.length}/${sections.length} sections`);
    }

    return {
      success: true,
      viewport,
      fullPath: fullScreenshotPath,
      fullSizeKB: fileSizeKB,
      sections: sectionResults
    };

  } catch (error) {
    console.error(`❌ Error capturing snapshot: ${error.message}`);
    return {
      success: false,
      error: error.message
    };
  } finally {
    await cleanup(browser, context);
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const productName = args.find(arg => !arg.startsWith('--')) || 'Blockchain Badges';
  const viewportArg = args.find(arg => arg.startsWith('--viewport='));
  const viewport = viewportArg ? viewportArg.split('=')[1] : 'desktop';

  console.log('\n📸 Product Snapshot with Sections Capture');
  console.log('='.repeat(70));
  console.log(`Product: ${productName}`);
  console.log(`Viewport: ${viewport}\n`);

  // Load product configuration
  const productMapping = loadProductConfig();
  if (!productMapping[productName]) {
    console.error(`❌ Product "${productName}" not found in configuration`);
    console.log('\nAvailable products:');
    Object.keys(productMapping).forEach(name => {
      console.log(`  - ${name}`);
    });
    process.exit(1);
  }

  const rawConfig = productMapping[productName];
  const config = normalizeProductConfig(rawConfig);

  if (!config.mediaCapture || !config.mediaCapture.snapshot) {
    console.error(`❌ Product "${productName}" does not have snapshot configuration`);
    process.exit(1);
  }

  // Capture snapshot with sections
  const result = await captureSnapshotWithSections(productName, config, viewport);

  console.log('\n' + '='.repeat(70));

  if (result.success) {
    console.log('✅ SNAPSHOT CAPTURE SUCCESSFUL');
    console.log(`📸 Full screenshot: ${result.fullPath} (${result.fullSizeKB} KB)`);

    if (result.sections && result.sections.length > 0) {
      console.log(`\n📦 Sections extracted: ${result.sections.length}`);
      result.sections.forEach(section => {
        console.log(`\n  → ${section.name}:`);
        console.log(`    Raw: ${section.section.rawPath}`);
        section.socialFormats.forEach(format => {
          console.log(`    ${format.format}: ${format.path}`);
        });
      });
    }
  } else {
    console.log('❌ SNAPSHOT CAPTURE FAILED');
    console.log(`Error: ${result.error}`);
  }

  console.log('='.repeat(70) + '\n');
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
  captureSnapshotWithSections
};
