const { chromium } = require('playwright');

/**
 * Viewport configurations for different device types
 */
const VIEWPORTS = {
  desktop: {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  },
  tablet: {
    width: 768,
    height: 1024,
    deviceScaleFactor: 2
  },
  mobile: {
    width: 375,
    height: 812,
    deviceScaleFactor: 2
  }
};

/**
 * Launch browser with specified configuration
 * @param {Object} options - Browser options
 * @param {boolean} options.headless - Run in headless mode (default: true)
 * @param {string} options.viewport - Viewport type: 'desktop', 'tablet', 'mobile' (default: 'desktop')
 * @param {boolean} options.recordVideo - Enable video recording (default: false)
 * @param {string} options.videoPath - Path to save video (required if recordVideo is true)
 * @returns {Promise<{browser: Browser, context: BrowserContext, page: Page}>}
 */
async function launchBrowser(options = {}) {
  const {
    headless = true,
    viewport = 'desktop',
    recordVideo = false,
    videoPath = null
  } = options;

  const viewportConfig = VIEWPORTS[viewport] || VIEWPORTS.desktop;

  const browserOptions = {
    headless,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled'
    ]
  };

  const browser = await chromium.launch(browserOptions);

  const contextOptions = {
    viewport: {
      width: viewportConfig.width,
      height: viewportConfig.height
    },
    deviceScaleFactor: viewportConfig.deviceScaleFactor,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  // Add video recording if enabled
  if (recordVideo && videoPath) {
    contextOptions.recordVideo = {
      dir: videoPath,
      size: {
        width: viewportConfig.width,
        height: viewportConfig.height
      }
    };
  }

  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  return { browser, context, page };
}

/**
 * Wait for page to be fully loaded (including network idle)
 * @param {Page} page - Playwright page
 * @param {number} timeout - Timeout in milliseconds (default: 30000)
 */
async function waitForPageLoad(page, timeout = 30000) {
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Take full page screenshot
 * @param {Page} page - Playwright page
 * @param {string} outputPath - Path to save screenshot
 * @param {Object} options - Screenshot options
 * @returns {Promise<void>}
 */
async function takeScreenshot(page, outputPath, options = {}) {
  const screenshotOptions = {
    path: outputPath,
    fullPage: true,
    type: 'png',
    ...options
  };

  await page.screenshot(screenshotOptions);
}

/**
 * Safe click with retry logic
 * @param {Page} page - Playwright page
 * @param {string} selector - CSS selector or text to click
 * @param {Object} options - Click options
 * @param {number} options.timeout - Timeout in milliseconds (default: 10000)
 * @param {number} options.retries - Number of retries (default: 3)
 */
async function safeClick(page, selector, options = {}) {
  const { timeout = 10000, retries = 3 } = options;

  for (let i = 0; i < retries; i++) {
    try {
      await page.waitForSelector(selector, { timeout, state: 'visible' });
      await page.click(selector, { timeout });
      return;
    } catch (error) {
      if (i === retries - 1) {
        throw new Error(`Failed to click "${selector}" after ${retries} retries: ${error.message}`);
      }
      console.log(`Retry ${i + 1}/${retries} for clicking "${selector}"`);
      await page.waitForTimeout(1000);
    }
  }
}

/**
 * Safe fill input with retry logic
 * @param {Page} page - Playwright page
 * @param {string} selector - CSS selector for input
 * @param {string} value - Value to fill
 * @param {Object} options - Fill options
 */
async function safeFill(page, selector, value, options = {}) {
  const { timeout = 10000, retries = 3 } = options;

  for (let i = 0; i < retries; i++) {
    try {
      await page.waitForSelector(selector, { timeout, state: 'visible' });
      await page.fill(selector, value, { timeout });
      return;
    } catch (error) {
      if (i === retries - 1) {
        throw new Error(`Failed to fill "${selector}" after ${retries} retries: ${error.message}`);
      }
      console.log(`Retry ${i + 1}/${retries} for filling "${selector}"`);
      await page.waitForTimeout(1000);
    }
  }
}

/**
 * Wait for element with timeout
 * @param {Page} page - Playwright page
 * @param {string} selector - CSS selector
 * @param {number} timeout - Timeout in milliseconds (default: 10000)
 */
async function waitForElement(page, selector, timeout = 10000) {
  await page.waitForSelector(selector, { timeout, state: 'visible' });
}

/**
 * Cleanup browser resources
 * @param {Browser} browser - Playwright browser
 * @param {BrowserContext} context - Playwright context
 */
async function cleanup(browser, context) {
  if (context) {
    await context.close();
  }
  if (browser) {
    await browser.close();
  }
}

module.exports = {
  VIEWPORTS,
  launchBrowser,
  waitForPageLoad,
  takeScreenshot,
  safeClick,
  safeFill,
  waitForElement,
  cleanup
};
