#!/usr/bin/env node

/**
 * Test script to validate media capture setup
 */

const path = require('path');
const fs = require('fs');

console.log('\n🔍 Testing Media Capture Setup\n');
console.log('='.repeat(60));

let allTestsPassed = true;

// Test 1: Check if Playwright is available
console.log('\n1️⃣  Checking Playwright installation...');
try {
  const playwright = require('playwright');
  console.log('   ✅ Playwright is installed');
} catch (error) {
  console.log('   ❌ Playwright is NOT installed');
  console.log('   → Run: npm install playwright');
  allTestsPassed = false;
}

// Test 2: Check if docs-index.json exists and is valid
console.log('\n2️⃣  Checking docs-index.json...');
try {
  const docsIndexPath = path.join(__dirname, '../data/docs-index.json');
  const docsIndex = JSON.parse(fs.readFileSync(docsIndexPath, 'utf8'));

  if (!docsIndex.productMapping) {
    console.log('   ❌ productMapping not found in docs-index.json');
    allTestsPassed = false;
  } else {
    console.log('   ✅ docs-index.json is valid');
    console.log(`   → Found ${Object.keys(docsIndex.productMapping).length} products`);
  }
} catch (error) {
  console.log('   ❌ Error reading docs-index.json:', error.message);
  allTestsPassed = false;
}

// Test 3: Check for Blockchain Badges configuration
console.log('\n3️⃣  Checking Blockchain Badges configuration...');
try {
  const docsIndexPath = path.join(__dirname, '../data/docs-index.json');
  const docsIndex = JSON.parse(fs.readFileSync(docsIndexPath, 'utf8'));
  const badgesConfig = docsIndex.productMapping['Blockchain Badges'];

  if (!badgesConfig) {
    console.log('   ❌ Blockchain Badges not found in productMapping');
    allTestsPassed = false;
  } else if (Array.isArray(badgesConfig)) {
    console.log('   ⚠️  Blockchain Badges uses old array format (no mediaCapture config)');
  } else if (badgesConfig.mediaCapture) {
    console.log('   ✅ Blockchain Badges has mediaCapture configuration');
    if (badgesConfig.mediaCapture.snapshot) {
      console.log('   → Snapshot config: ✓');
    }
    if (badgesConfig.mediaCapture.video) {
      console.log('   → Video config: ✓');
    }
  } else {
    console.log('   ⚠️  Blockchain Badges missing mediaCapture configuration');
  }
} catch (error) {
  console.log('   ❌ Error checking Blockchain Badges config:', error.message);
  allTestsPassed = false;
}

// Test 4: Check directory structure
console.log('\n4️⃣  Checking directory structure...');
const requiredDirs = [
  'scripts/media-capture',
  'scripts/media-capture/workflows',
  'scripts/media-capture/utils',
  'media/blockchain-badges/snapshots/desktop',
  'media/blockchain-badges/snapshots/mobile',
  'media/blockchain-badges/videos'
];

requiredDirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✅ ${dir}`);
  } else {
    console.log(`   ❌ ${dir} (missing)`);
    allTestsPassed = false;
  }
});

// Test 5: Check required scripts
console.log('\n5️⃣  Checking required scripts...');
const requiredScripts = [
  'scripts/media-capture/utils/config-loader.cjs',
  'scripts/media-capture/utils/playwright-helper.cjs',
  'scripts/media-capture/capture-snapshot.cjs',
  'scripts/media-capture/workflows/capture-badges-workflow.cjs'
];

requiredScripts.forEach(script => {
  const fullPath = path.join(process.cwd(), script);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✅ ${script}`);
  } else {
    console.log(`   ❌ ${script} (missing)`);
    allTestsPassed = false;
  }
});

// Test 6: Test config-loader module
console.log('\n6️⃣  Testing config-loader module...');
try {
  const configLoader = require('./utils/config-loader.cjs');
  const products = configLoader.getProductsWithSnapshots();
  console.log(`   ✅ config-loader works correctly`);
  console.log(`   → Found ${products.length} product(s) with snapshots`);
} catch (error) {
  console.log('   ❌ Error loading config-loader:', error.message);
  allTestsPassed = false;
}

// Final summary
console.log('\n' + '='.repeat(60));
if (allTestsPassed) {
  console.log('✅ ALL TESTS PASSED - Setup is ready!');
  console.log('\nNext steps:');
  console.log('  1. Test snapshot capture:');
  console.log('     node scripts/media-capture/capture-snapshot.cjs "Blockchain Badges"');
  console.log('\n  2. Test workflow capture:');
  console.log('     node scripts/media-capture/workflows/capture-badges-workflow.cjs');
} else {
  console.log('❌ SOME TESTS FAILED - Please fix the issues above');
  process.exit(1);
}
console.log('='.repeat(60) + '\n');
