#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

/**
 * Social media format specifications
 * Dimensions optimized for each platform
 */
const SOCIAL_FORMATS = {
  twitter: {
    name: 'Twitter/X Post',
    width: 1200,
    height: 675,
    aspectRatio: '16:9',
    quality: 90
  },
  'twitter-card': {
    name: 'Twitter/X Card',
    width: 800,
    height: 418,
    aspectRatio: '1.91:1',
    quality: 90
  },
  linkedin: {
    name: 'LinkedIn Post',
    width: 1200,
    height: 627,
    aspectRatio: '1.91:1',
    quality: 90
  },
  'instagram-post': {
    name: 'Instagram Post (Square)',
    width: 1080,
    height: 1080,
    aspectRatio: '1:1',
    quality: 95
  },
  'instagram-story': {
    name: 'Instagram Story',
    width: 1080,
    height: 1920,
    aspectRatio: '9:16',
    quality: 95
  },
  facebook: {
    name: 'Facebook Post',
    width: 1200,
    height: 630,
    aspectRatio: '1.91:1',
    quality: 90
  }
};

/**
 * Extract a section from a full-page screenshot by Y coordinate
 * @param {string} inputPath - Path to full screenshot
 * @param {Object} section - Section configuration {y, height}
 * @param {string} outputPath - Path to save extracted section
 * @returns {Promise<{width: number, height: number, size: number}>}
 */
async function extractSection(inputPath, section, outputPath) {
  const { y, height } = section;

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read the full screenshot and extract the section
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const extracted = await image
    .extract({
      left: 0,
      top: Math.round(y),
      width: metadata.width,
      height: Math.round(Math.min(height, metadata.height - y))
    })
    .toFile(outputPath);

  return {
    width: extracted.width,
    height: extracted.height,
    size: extracted.size
  };
}

/**
 * Extract a section from a full-page screenshot by CSS selector
 * Requires bounds from Playwright
 * @param {string} inputPath - Path to full screenshot
 * @param {Object} bounds - Bounding box {x, y, width, height}
 * @param {string} outputPath - Path to save extracted section
 * @returns {Promise<{width: number, height: number, size: number}>}
 */
async function extractSectionByBounds(inputPath, bounds, outputPath) {
  const { x, y, width, height } = bounds;

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const extracted = await sharp(inputPath)
    .extract({
      left: Math.round(x),
      top: Math.round(y),
      width: Math.round(width),
      height: Math.round(height)
    })
    .toFile(outputPath);

  return {
    width: extracted.width,
    height: extracted.height,
    size: extracted.size
  };
}

/**
 * Resize and optimize an image for a specific social media format
 * @param {string} inputPath - Path to source image
 * @param {string} format - Social format key (twitter, linkedin, etc.)
 * @param {string} outputPath - Path to save optimized image
 * @param {Object} options - Additional options
 * @returns {Promise<{width: number, height: number, size: number, format: string}>}
 */
async function optimizeForSocial(inputPath, format, outputPath, options = {}) {
  const spec = SOCIAL_FORMATS[format];
  if (!spec) {
    throw new Error(`Unknown social format: ${format}. Available: ${Object.keys(SOCIAL_FORMATS).join(', ')}`);
  }

  const {
    fit = 'cover',  // cover, contain, fill, inside, outside
    position = 'center',  // center, top, bottom, left, right
    background = { r: 255, g: 255, b: 255, alpha: 1 }  // white background
  } = options;

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const result = await sharp(inputPath)
    .resize(spec.width, spec.height, {
      fit,
      position,
      background
    })
    .jpeg({ quality: spec.quality })
    .toFile(outputPath);

  return {
    width: result.width,
    height: result.height,
    size: result.size,
    format: spec.name
  };
}

/**
 * Process a section: extract it and create all requested social media formats
 * @param {string} fullScreenshotPath - Path to full-page screenshot
 * @param {Object} sectionBounds - Bounding box of the section
 * @param {Object} sectionConfig - Section configuration from docs-index.json
 * @param {string} baseOutputPath - Base path for outputs (without extension)
 * @returns {Promise<{section: Object, socialFormats: Array}>}
 */
async function processSectionWithFormats(fullScreenshotPath, sectionBounds, sectionConfig, baseOutputPath) {
  const { name, socialFormats = [] } = sectionConfig;

  // First, extract the raw section
  const rawSectionPath = `${baseOutputPath}-section-${name}.png`;
  const sectionInfo = await extractSectionByBounds(fullScreenshotPath, sectionBounds, rawSectionPath);

  console.log(`   ✓ Extracted "${name}" section: ${sectionInfo.width}x${sectionInfo.height}px (${(sectionInfo.size / 1024).toFixed(1)}KB)`);

  // Generate social media formats
  const socialResults = [];

  for (const format of socialFormats) {
    const socialPath = `${baseOutputPath}-section-${name}-${format}.jpg`;

    try {
      const socialInfo = await optimizeForSocial(rawSectionPath, format, socialPath, {
        fit: 'contain',  // Contain so we don't crop content
        position: 'center'
      });

      console.log(`     → ${SOCIAL_FORMATS[format].name}: ${socialInfo.width}x${socialInfo.height}px (${(socialInfo.size / 1024).toFixed(1)}KB)`);

      socialResults.push({
        format,
        path: socialPath,
        ...socialInfo
      });
    } catch (error) {
      console.warn(`     ⚠️  Failed to create ${format} format: ${error.message}`);
    }
  }

  return {
    section: {
      name,
      rawPath: rawSectionPath,
      ...sectionInfo
    },
    socialFormats: socialResults
  };
}

/**
 * Analyze image to detect if it's mostly white/empty
 * @param {string} imagePath - Path to image file
 * @param {number} whiteThreshold - Percentage threshold for considering image as white (default: 80)
 * @returns {Promise<{isWhite: boolean, whitePercentage: number, stats: Object}>}
 */
async function analyzeWhiteSpace(imagePath, whiteThreshold = 80) {
  const image = sharp(imagePath);
  const { width, height, channels } = await image.metadata();

  // Get raw pixel data
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelCount = width * height;
  let whitePixelCount = 0;
  let contentPixelCount = 0;

  // Define thresholds
  const WHITE_RGB_THRESHOLD = 240;  // Pure white/near white
  const CONTENT_RGB_THRESHOLD = 200; // Anything darker than this is "content"

  // Analyze pixels (assuming RGB or RGBA)
  const bytesPerPixel = channels;
  for (let i = 0; i < data.length; i += bytesPerPixel) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Check if pixel is "white" (very light color)
    if (r > WHITE_RGB_THRESHOLD && g > WHITE_RGB_THRESHOLD && b > WHITE_RGB_THRESHOLD) {
      whitePixelCount++;
    }

    // Check if pixel has actual content (text, images, colored elements)
    // Content is anything with at least one channel significantly darker
    if (r < CONTENT_RGB_THRESHOLD || g < CONTENT_RGB_THRESHOLD || b < CONTENT_RGB_THRESHOLD) {
      contentPixelCount++;
    }
  }

  const whitePercentage = (whitePixelCount / pixelCount) * 100;
  const contentPercentage = (contentPixelCount / pixelCount) * 100;

  // A section is considered "empty" if it has very little actual content
  // We use contentPercentage < 5% as the threshold (i.e., less than 5% has darker pixels)
  const isEmpty = contentPercentage < 5;

  return {
    isWhite: isEmpty,  // Changed logic: check for lack of content rather than abundance of white
    whitePercentage: Math.round(whitePercentage * 100) / 100,
    contentPercentage: Math.round(contentPercentage * 100) / 100,
    stats: {
      width,
      height,
      pixelCount,
      whitePixelCount,
      contentPixelCount
    }
  };
}

/**
 * Trim white space from image using Sharp's built-in trim, then add padding
 * @param {string} inputPath - Path to source image
 * @param {string} outputPath - Path to save trimmed image
 * @param {Object} options - Trimming options
 * @returns {Promise<{trimmed: boolean, original: Object, trimmed: Object}>}
 */
async function trimWhiteSpace(inputPath, outputPath, options = {}) {
  const {
    threshold = 10,  // Threshold for trim (how different from background)
    minContentHeight = 100,  // Minimum height to keep
    padding = 40  // Pixels of white margin to add back after trimming
  } = options;

  const image = sharp(inputPath);
  const { width: originalWidth, height: originalHeight } = await image.metadata();

  try {
    // Step 1: Trim to content boundaries
    const tempPath = outputPath.replace('.png', '-temp.png');
    const trimResult = await sharp(inputPath)
      .trim({
        threshold,  // How much variation is allowed (0-255)
        background: { r: 255, g: 255, b: 255 }  // Assume white background
      })
      .toFile(tempPath);

    const heightReduction = originalHeight - trimResult.height;
    const widthReduction = originalWidth - trimResult.width;

    // Check if trimming made a significant difference
    if (heightReduction < 20 && widthReduction < 20) {
      // Not much was trimmed, use original
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
      await sharp(inputPath).toFile(outputPath);
      return {
        trimmed: false,
        reason: 'no_significant_change',
        original: { width: originalWidth, height: originalHeight },
        trimmed: { width: originalWidth, height: originalHeight }
      };
    }

    // Check minimum content height
    if (trimResult.height < minContentHeight) {
      // Content too small after trimming, use original
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
      await sharp(inputPath).toFile(outputPath);
      return {
        trimmed: false,
        reason: 'insufficient_content_after_trim',
        original: { width: originalWidth, height: originalHeight },
        trimmed: { width: originalWidth, height: originalHeight }
      };
    }

    // Step 2: Add padding back (white margins)
    const finalResult = await sharp(tempPath)
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: { r: 255, g: 255, b: 255, alpha: 1 }  // White padding
      })
      .toFile(outputPath);

    // Clean up temp file
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }

    return {
      trimmed: true,
      original: { width: originalWidth, height: originalHeight },
      trimmed: { width: finalResult.width, height: finalResult.height },
      contentSize: { width: trimResult.width, height: trimResult.height },
      removedPixels: heightReduction + widthReduction,
      addedPadding: padding
    };

  } catch (error) {
    // If trim fails, just copy the original
    await sharp(inputPath).toFile(outputPath);
    return {
      trimmed: false,
      reason: 'trim_failed',
      error: error.message,
      original: { width: originalWidth, height: originalHeight },
      trimmed: { width: originalWidth, height: originalHeight }
    };
  }
}

/**
 * Process a section with validation: extract, trim, validate, and format
 * @param {string} fullScreenshotPath - Path to full-page screenshot
 * @param {Object} sectionBounds - Bounding box of the section
 * @param {Object} sectionConfig - Section configuration from docs-index.json
 * @param {string} baseOutputPath - Base path for outputs (without extension)
 * @param {Object} options - Processing options
 * @returns {Promise<{section: Object, socialFormats: Array, skipped: boolean, reason?: string}>}
 */
async function processSectionWithValidation(fullScreenshotPath, sectionBounds, sectionConfig, baseOutputPath, options = {}) {
  const { name, socialFormats = [] } = sectionConfig;
  const {
    skipWhiteThreshold = 80,  // Skip if >80% white
    trimWhiteSpace: shouldTrim = true,
    minContentHeight = 100
  } = options;

  // First, extract the raw section
  const rawSectionPath = `${baseOutputPath}-section-${name}-raw.png`;
  const sectionInfo = await extractSectionByBounds(fullScreenshotPath, sectionBounds, rawSectionPath);

  console.log(`   ✓ Extracted "${name}" section: ${sectionInfo.width}x${sectionInfo.height}px`);

  // Analyze for white space
  const whiteAnalysis = await analyzeWhiteSpace(rawSectionPath, skipWhiteThreshold);
  console.log(`     Content: ${whiteAnalysis.contentPercentage}%, White: ${whiteAnalysis.whitePercentage}%`);

  if (whiteAnalysis.isWhite) {
    console.log(`     ⚠️  Skipping - mostly empty (<5% content)`);
    // Clean up the raw file
    if (fs.existsSync(rawSectionPath)) {
      fs.unlinkSync(rawSectionPath);
    }
    return {
      skipped: true,
      reason: 'mostly_empty',
      contentPercentage: whiteAnalysis.contentPercentage,
      whitePercentage: whiteAnalysis.whitePercentage
    };
  }

  // Trim white space if enabled
  const finalSectionPath = `${baseOutputPath}-section-${name}.png`;
  let trimResult;

  if (shouldTrim) {
    trimResult = await trimWhiteSpace(rawSectionPath, finalSectionPath, {
      threshold: 10,  // Sensitivity for detecting background
      minContentHeight,
      padding: 40  // Pixels of white margin to keep around content
    });

    if (trimResult.trimmed) {
      console.log(`     ✂️  Trimmed: ${trimResult.original.width}x${trimResult.original.height} → ${trimResult.contentSize.width}x${trimResult.contentSize.height} + ${trimResult.addedPadding}px padding → ${trimResult.trimmed.width}x${trimResult.trimmed.height}`);
      // Remove the raw file since we have the trimmed version
      if (fs.existsSync(rawSectionPath)) {
        fs.unlinkSync(rawSectionPath);
      }
    } else {
      console.log(`     → No trimming (${trimResult.reason})`);
      // Use raw as final if not trimmed
      if (rawSectionPath !== finalSectionPath && fs.existsSync(rawSectionPath)) {
        fs.renameSync(rawSectionPath, finalSectionPath);
      }
    }
  } else {
    // Just rename raw to final
    fs.renameSync(rawSectionPath, finalSectionPath);
    trimResult = { trimmed: false, reason: 'disabled' };
  }

  // Generate social media formats
  const socialResults = [];

  for (const format of socialFormats) {
    const socialPath = `${baseOutputPath}-section-${name}-${format}.jpg`;

    try {
      const socialInfo = await optimizeForSocial(finalSectionPath, format, socialPath, {
        fit: 'contain',
        position: 'center'
      });

      console.log(`     → ${SOCIAL_FORMATS[format].name}: ${socialInfo.width}x${socialInfo.height}px (${(socialInfo.size / 1024).toFixed(1)}KB)`);

      socialResults.push({
        format,
        path: socialPath,
        ...socialInfo
      });
    } catch (error) {
      console.warn(`     ⚠️  Failed to create ${format} format: ${error.message}`);
    }
  }

  const finalStats = fs.statSync(finalSectionPath);

  return {
    skipped: false,
    section: {
      name,
      rawPath: finalSectionPath,
      width: trimResult?.trimmed?.width || sectionInfo.width,
      height: trimResult?.trimmed?.height || sectionInfo.height,
      size: finalStats.size
    },
    socialFormats: socialResults,
    whitePercentage: whiteAnalysis.whitePercentage,
    trimmed: trimResult?.trimmed || false
  };
}

/**
 * Get information about available social media formats
 * @returns {Object} Social format specifications
 */
function getSocialFormats() {
  return SOCIAL_FORMATS;
}

module.exports = {
  extractSection,
  extractSectionByBounds,
  optimizeForSocial,
  processSectionWithFormats,
  processSectionWithValidation,
  analyzeWhiteSpace,
  trimWhiteSpace,
  getSocialFormats,
  SOCIAL_FORMATS
};
