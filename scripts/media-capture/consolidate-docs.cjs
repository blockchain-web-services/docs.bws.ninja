#!/usr/bin/env node

/**
 * Consolidate Documentation
 *
 * Creates comprehensive documentation files for each product by consolidating
 * all markdown content from the product's documentation directory.
 * These files are used by the blurb generator to create detailed,
 * accurate product descriptions.
 *
 * Usage:
 *   node consolidate-docs.cjs                    # Generate for all products
 *   node consolidate-docs.cjs BWS.X.Bot          # Generate for specific product
 */

const fs = require('fs');
const path = require('path');
const { readProductDocumentation } = require('./utils/documentation-reader.cjs');
const { PRODUCTS } = require('./generate-blurbs.cjs');

/**
 * Get output directory for consolidated docs
 */
function getConsolidatedDocsDir() {
  return path.resolve(__dirname, '../../product-docs');
}

/**
 * Consolidate documentation for a single product
 */
function consolidateProductDocs(productKey, productConfig) {
  console.log(`\nConsolidating documentation for ${productKey}...`);

  // Read all documentation
  const documentation = readProductDocumentation(productKey);

  console.log(`  Found ${documentation.files.length} files`);
  console.log(`  Total: ${documentation.totalWords.toLocaleString()} words, ${documentation.totalChars.toLocaleString()} chars`);

  // Build consolidated content
  let consolidated = `# ${productConfig.name} - Complete Documentation\n\n`;
  consolidated += `Product Key: ${productKey}\n`;
  consolidated += `Generated: ${new Date().toISOString()}\n`;
  consolidated += `Files: ${documentation.files.length}\n`;
  consolidated += `Words: ${documentation.totalWords.toLocaleString()}\n`;
  consolidated += `Characters: ${documentation.totalChars.toLocaleString()}\n\n`;
  consolidated += `---\n\n`;

  // Add all file contents with clear section markers
  documentation.files.forEach((file, index) => {
    consolidated += `\n\n## [FILE ${index + 1}/${documentation.files.length}] ${file.path}\n\n`;
    consolidated += `Path: ${file.fullPath}\n`;
    consolidated += `---\n\n`;
    consolidated += file.content;
    consolidated += `\n\n---\n\n`;
  });

  return {
    productKey,
    productName: productConfig.name,
    consolidated,
    stats: {
      files: documentation.files.length,
      words: documentation.totalWords,
      chars: documentation.totalChars
    }
  };
}

/**
 * Save consolidated documentation to file
 */
function saveConsolidatedDocs(result, outputDir) {
  // Create product directory
  const productDir = path.join(outputDir, result.productKey);
  if (!fs.existsSync(productDir)) {
    fs.mkdirSync(productDir, { recursive: true });
  }

  // Save consolidated markdown
  const mdPath = path.join(productDir, 'complete-docs.md');
  fs.writeFileSync(mdPath, result.consolidated, 'utf8');
  console.log(`  Saved: ${mdPath}`);

  // Save metadata JSON
  const metaPath = path.join(productDir, 'metadata.json');
  fs.writeFileSync(metaPath, JSON.stringify({
    productKey: result.productKey,
    productName: result.productName,
    generated: new Date().toISOString(),
    stats: result.stats
  }, null, 2), 'utf8');
  console.log(`  Saved: ${metaPath}`);
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const productKeys = args.length > 0 && args[0].startsWith('BWS.')
    ? [args[0]]
    : Object.keys(PRODUCTS);

  console.log('BWS Documentation Consolidator\n');
  console.log(`Products: ${productKeys.join(', ')}\n`);

  const outputDir = getConsolidatedDocsDir();
  console.log(`Output directory: ${outputDir}\n`);

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory\n`);
  }

  const results = [];

  for (const productKey of productKeys) {
    try {
      const productConfig = PRODUCTS[productKey];
      if (!productConfig) {
        console.error(`Unknown product: ${productKey}`);
        continue;
      }

      const result = consolidateProductDocs(productKey, productConfig);
      saveConsolidatedDocs(result, outputDir);
      results.push(result);

    } catch (error) {
      console.error(`Error consolidating ${productKey}:`, error.message);
    }
  }

  // Summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('Consolidation Summary');
  console.log(`${'='.repeat(60)}\n`);
  console.log(`Products processed: ${results.length}/${productKeys.length}`);

  if (results.length > 0) {
    const totalFiles = results.reduce((sum, r) => sum + r.stats.files, 0);
    const totalWords = results.reduce((sum, r) => sum + r.stats.words, 0);
    const totalChars = results.reduce((sum, r) => sum + r.stats.chars, 0);

    console.log(`Total files: ${totalFiles}`);
    console.log(`Total words: ${totalWords.toLocaleString()}`);
    console.log(`Total chars: ${totalChars.toLocaleString()}`);
    console.log(`\nOutput: ${outputDir}`);
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

module.exports = { consolidateProductDocs, getConsolidatedDocsDir };
