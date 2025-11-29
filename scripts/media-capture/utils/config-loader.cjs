const fs = require('fs');
const path = require('path');

/**
 * Load docs-index.json and return product configuration
 * @param {string|null} productName - Optional product name filter
 * @returns {Object} Product mapping with media capture config
 */
function loadProductConfig(productName = null) {
  const docsIndexPath = path.join(__dirname, '../../data/docs-index.json');
  const docsIndex = JSON.parse(fs.readFileSync(docsIndexPath, 'utf8'));

  if (productName) {
    if (!docsIndex.productMapping[productName]) {
      throw new Error(`Product "${productName}" not found in productMapping`);
    }
    return { [productName]: docsIndex.productMapping[productName] };
  }

  return docsIndex.productMapping;
}

/**
 * Normalize product config - handle both old array format and new object format
 * @param {Array|Object} config - Product configuration
 * @returns {Object} Normalized configuration object
 */
function normalizeProductConfig(config) {
  // If it's an array (old format), convert to minimal object format
  if (Array.isArray(config)) {
    return {
      docs: config,
      websiteUrl: null,
      backofficeUrl: null,
      mediaCapture: null,
      outputPath: null
    };
  }
  return config;
}

/**
 * Get products that have snapshot configuration
 * @returns {Array<{name: string, config: Object}>}
 */
function getProductsWithSnapshots() {
  const products = loadProductConfig();
  return Object.entries(products)
    .map(([name, config]) => ({ name, config: normalizeProductConfig(config) }))
    .filter(({ config }) => config.mediaCapture?.snapshot);
}

/**
 * Get products that have video workflow configuration
 * @returns {Array<{name: string, config: Object}>}
 */
function getProductsWithVideos() {
  const products = loadProductConfig();
  return Object.entries(products)
    .map(([name, config]) => ({ name, config: normalizeProductConfig(config) }))
    .filter(({ config }) => config.mediaCapture?.video);
}

/**
 * Get all products with any media capture configuration
 * @returns {Array<{name: string, config: Object}>}
 */
function getProductsWithMediaCapture() {
  const products = loadProductConfig();
  return Object.entries(products)
    .map(([name, config]) => ({ name, config: normalizeProductConfig(config) }))
    .filter(({ config }) => config.mediaCapture);
}

/**
 * Convert product name to slug (for filenames)
 * @param {string} productName
 * @returns {string}
 */
function productNameToSlug(productName) {
  return productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Get current timestamp in YYYY-MM-DD format
 * @returns {string}
 */
function getCurrentDateStamp() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

/**
 * Generate random number for email addresses
 * @returns {number}
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000);
}

/**
 * Generate random letter code (lowercase a-z)
 * @param {number} length - Length of the code (default: 5)
 * @returns {string}
 */
function generateRandomLetterCode(length = 5) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }
  return code;
}

module.exports = {
  loadProductConfig,
  normalizeProductConfig,
  getProductsWithSnapshots,
  getProductsWithVideos,
  getProductsWithMediaCapture,
  productNameToSlug,
  getCurrentDateStamp,
  generateRandomNumber,
  generateRandomLetterCode
};
