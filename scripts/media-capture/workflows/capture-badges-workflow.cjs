#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const {
  productNameToSlug,
  getCurrentDateStamp,
  generateRandomNumber,
  generateRandomLetterCode
} = require('../utils/config-loader.cjs');
const {
  launchBrowser,
  waitForPageLoad,
  safeClick,
  safeFill,
  waitForElement,
  cleanup
} = require('../utils/playwright-helper.cjs');

/**
 * List all buttons in a frame with their properties
 */
async function listAllButtons(frame, context = 'frame') {
  console.log(`\n   🔍 Listing all buttons in ${context}:`);

  try {
    // Get all button elements
    const buttons = await frame.$$('button');
    console.log(`   → Found ${buttons.length} <button> elements`);

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const text = await button.textContent().catch(() => '');
      const id = await button.getAttribute('id').catch(() => '');
      const className = await button.getAttribute('class').catch(() => '');
      const type = await button.getAttribute('type').catch(() => '');
      const isVisible = await button.isVisible().catch(() => false);

      console.log(`   → Button ${i + 1}:`);
      console.log(`      Text: "${text.trim()}"`);
      if (id) console.log(`      ID: ${id}`);
      if (className) console.log(`      Class: ${className}`);
      if (type) console.log(`      Type: ${type}`);
      console.log(`      Visible: ${isVisible}`);
    }

    // Also check for input[type="submit"]
    const submitInputs = await frame.$$('input[type="submit"]');
    if (submitInputs.length > 0) {
      console.log(`   → Found ${submitInputs.length} <input type="submit"> elements`);
      for (let i = 0; i < submitInputs.length; i++) {
        const input = submitInputs[i];
        const value = await input.getAttribute('value').catch(() => '');
        const id = await input.getAttribute('id').catch(() => '');
        const className = await input.getAttribute('class').catch(() => '');
        const isVisible = await input.isVisible().catch(() => false);

        console.log(`   → Submit Input ${i + 1}:`);
        console.log(`      Value: "${value}"`);
        if (id) console.log(`      ID: ${id}`);
        if (className) console.log(`      Class: ${className}`);
        console.log(`      Visible: ${isVisible}`);
      }
    }

    console.log('');
  } catch (error) {
    console.log(`   ⚠️  Error listing buttons: ${error.message}\n`);
  }
}

/**
 * Check for error messages or alerts on the page
 */
async function checkForErrors(page, frame, context = '') {
  console.log(`\n   🔍 Checking for errors ${context}...`);

  const errorIndicators = [];

  // Check for common error selectors in both iframe and main page
  const errorSelectors = [
    '.error',
    '.alert-danger',
    '.alert-error',
    '[class*="error"]',
    '[role="alert"]',
    'text="Error"',
    'text="error"',
    'text="Invalid"',
    'text="invalid"',
    'text="failed"',
    'text="Failed"'
  ];

  // Check in iframe
  for (const selector of errorSelectors) {
    try {
      const elements = await frame.$$(selector);
      for (const element of elements) {
        const isVisible = await element.isVisible();
        if (isVisible) {
          const text = await element.textContent();
          if (text && text.trim()) {
            errorIndicators.push({
              location: 'iframe',
              selector,
              text: text.trim()
            });
          }
        }
      }
    } catch (error) {
      // Ignore selector errors
    }
  }

  // Check in main page
  for (const selector of errorSelectors) {
    try {
      const elements = await page.$$(selector);
      for (const element of elements) {
        const isVisible = await element.isVisible();
        if (isVisible) {
          const text = await element.textContent();
          if (text && text.trim()) {
            errorIndicators.push({
              location: 'main page',
              selector,
              text: text.trim()
            });
          }
        }
      }
    } catch (error) {
      // Ignore selector errors
    }
  }

  if (errorIndicators.length > 0) {
    console.log(`   ❌ Found ${errorIndicators.length} error message(s):`);
    for (const error of errorIndicators) {
      console.log(`      Location: ${error.location}`);
      console.log(`      Selector: ${error.selector}`);
      console.log(`      Message: "${error.text}"`);
      console.log('');
    }
    return errorIndicators;
  } else {
    console.log(`   ✓ No error messages found\n`);
    return [];
  }
}

/**
 * Blockchain Badges workflow capture
 *
 * Steps:
 * 1. Go to blockchainbadges.com
 * 2. Scroll and find badge creation section (avoiding login)
 * 3. Switch to iframe containing the badge form
 * 4. Fill in badge creation form:
 *    - Company Name: ACME Corporation
 *    - Email: info+<random_number>@bws.ninja
 * 5. Click on "Get MY Badge"
 * 6. Wait for processing and capture result
 *
 * @param {Object} options - Workflow options
 * @param {boolean} options.headless - Run in headless mode (default: false for video)
 * @param {string} options.outputPath - Path to save video
 * @returns {Promise<{success: boolean, videoPath?: string, error?: string}>}
 */
async function captureBlockchainBadgesWorkflow(options = {}) {
  const {
    headless = false,
    outputPath = 'media/blockchain-badges/videos'
  } = options;

  let browser, context, page;

  try {
    console.log('🎬 Starting Blockchain Badges workflow capture...\n');

    // Ensure output directory exists
    const videoDir = path.join(process.cwd(), outputPath);
    if (!fs.existsSync(videoDir)) {
      fs.mkdirSync(videoDir, { recursive: true });
    }

    // Generate filename
    const dateStamp = getCurrentDateStamp();
    const slug = productNameToSlug('blockchain-badges');
    const videoFilename = `${slug}-workflow-${dateStamp}.webm`;

    // Launch browser with video recording
    console.log('🌐 Launching browser with video recording...');
    ({ browser, context, page } = await launchBrowser({
      headless,
      viewport: 'desktop',
      recordVideo: true,
      videoPath: videoDir
    }));

    // Generate unique demo email with random letter code
    const randomCode = generateRandomLetterCode(5);
    const email = `shared.account+demo-${randomCode}@bws.ninja`;
    const verificationCode = '9999';

    console.log('📝 Test data:');
    console.log(`   Company Name: ACME Corporation`);
    console.log(`   Email: ${email}`);
    console.log(`   Verification Code: ${verificationCode}\n`);

    // Step 1: Navigate to blockchainbadges.com
    console.log('📍 Step 1: Navigating to blockchainbadges.com...');
    await page.goto('https://blockchainbadges.com', {
      waitUntil: 'domcontentloaded',  // Changed from 'networkidle' for faster loading
      timeout: 90000  // Increased timeout
    });
    await page.waitForTimeout(3000); // Let the page settle
    console.log('   ✓ Page loaded\n');

    // Step 2: Find the specific badge signup iframe on homepage
    console.log('📍 Step 2: Looking for badge signup iframe...');

    // Scroll down to find the iframe
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(2000);

    // Wait for the specific iframe to load
    await page.waitForSelector('iframe[src*="badge-signup.html"]', { timeout: 10000 });

    const frames = page.frames();
    let badgeFrame = null;

    // Find the badge-signup iframe
    for (const frame of frames) {
      const url = frame.url();
      if (url.includes('badge-signup.html')) {
        badgeFrame = frame;
        console.log(`   ✓ Found badge signup iframe: ${url}\n`);
        break;
      }
    }

    if (!badgeFrame) {
      const debugPath = path.join(videoDir, `debug-no-iframe-${dateStamp}.png`);
      await page.screenshot({ path: debugPath, fullPage: true });
      throw new Error('Could not find badge-signup.html iframe');
    }

    // Step 3: Click "Create Badge" button inside the iframe
    console.log('📍 Step 3: Looking for "Create Badge" button in iframe...');

    await page.waitForTimeout(1000);

    try {
      // Wait for the button to be visible in the iframe
      await badgeFrame.waitForSelector('#btn-badge-new', { timeout: 10000, state: 'visible' });

      const createButton = await badgeFrame.$('#btn-badge-new');
      if (createButton) {
        await createButton.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        console.log('   → Found "Create Badge" button (#btn-badge-new)');
        await createButton.click();
        console.log('   ✓ Clicked "Create Badge" button\n');
      }
    } catch (error) {
      const debugPath = path.join(videoDir, `debug-no-button-${dateStamp}.png`);
      await page.screenshot({ path: debugPath, fullPage: true });
      console.log(`   ⚠️  Could not find #btn-badge-new button. Error: ${error.message}\n`);
    }

    // Wait for form to appear
    await page.waitForTimeout(3000);

    // Step 4: The form should now be visible in the same iframe
    console.log('📍 Step 4: Form should now be visible in iframe...');
    let formFrame = badgeFrame; // Use the same iframe for form filling

    // Step 4: Fill in the badge creation form (in iframe)
    console.log('📍 Step 4: Filling in the badge creation form...');

    // Try to find and fill Company Name field
    const companyNameSelectors = [
      'input[name="companyName"]',
      'input[name="company"]',
      'input[name="name"]',
      'input[placeholder*="Company"]',
      'input[placeholder*="company"]',
      'input[placeholder*="Organization"]',
      'input[id*="company"]',
      '#companyName',
      '#name'
    ];

    let companyFieldFound = false;
    for (const selector of companyNameSelectors) {
      try {
        const element = await formFrame.waitForSelector(selector, { timeout: 3000, state: 'visible' });
        if (element) {
          console.log(`   → Found company field: ${selector}`);
          await formFrame.fill(selector, 'ACME Corporation');
          companyFieldFound = true;
          console.log('   ✓ Company Name: ACME Corporation');
          break;
        }
      } catch (error) {
        continue;
      }
    }

    if (!companyFieldFound) {
      console.log('   ⚠️  Could not find company name field');
    }

    // Try to find and fill Email field
    const emailSelectors = [
      'input[name="email"]',
      'input[type="email"]',
      'input[placeholder*="Email"]',
      'input[placeholder*="email"]',
      'input[id*="email"]',
      '#email'
    ];

    let emailFieldFound = false;
    for (const selector of emailSelectors) {
      try {
        const element = await formFrame.waitForSelector(selector, { timeout: 3000, state: 'visible' });
        if (element) {
          console.log(`   → Found email field: ${selector}`);
          await formFrame.fill(selector, email);
          emailFieldFound = true;
          console.log(`   ✓ Email: ${email}\n`);
          break;
        }
      } catch (error) {
        continue;
      }
    }

    if (!emailFieldFound) {
      console.log('   ⚠️  Could not find email field\n');
    }

    // Step 5: Click submit button (Get MY Badge) in the iframe
    console.log('📍 Step 5: Looking for "Get MY Badge" button...');

    // Wait a moment for form validation
    await page.waitForTimeout(1000);

    // List all available buttons in iframe
    await listAllButtons(formFrame, 'iframe (after form fill)');

    const submitSelectors = [
      'button:has-text("Get MY Badge")',
      'button:has-text("Get My Badge")',
      'text="Get MY Badge"',
      'text="Get My Badge")',
      '[class*="badge-submit"]',
      'button[type="submit"]',
      'input[type="submit"]',
      'button:has-text("Submit")',
      'button:has-text("Create Badge")',
      'button:has-text("Create")'
    ];

    let submitFound = false;
    for (const selector of submitSelectors) {
      try {
        const element = await formFrame.$(selector);
        if (element) {
          await element.scrollIntoViewIfNeeded();
          await page.waitForTimeout(500);
          const buttonText = await element.textContent();
          console.log(`   → Found submit button: "${buttonText}" (${selector})`);
          await element.click();
          submitFound = true;
          console.log('   ✓ Clicked submit button\n');
          break;
        }
      } catch (error) {
        continue;
      }
    }

    if (!submitFound) {
      const debugPath = path.join(videoDir, `debug-no-submit-${dateStamp}.png`);
      await page.screenshot({ path: debugPath, fullPage: true });
      console.log(`   ⚠️  Could not find submit button. Debug screenshot saved: ${debugPath}\n`);
    }

    // Step 5b: Check for errors after clicking "Get My Badge"
    console.log('📍 Step 5b: Checking for errors after form submission...');
    await page.waitForTimeout(2000); // Wait for any errors to appear

    const errorsAfterSubmit = await checkForErrors(page, formFrame, 'after form submit');
    if (errorsAfterSubmit.length > 0) {
      const debugPath = path.join(videoDir, `debug-error-after-submit-${dateStamp}.png`);
      await page.screenshot({ path: debugPath, fullPage: true });
      console.log(`   ⚠️  Errors detected after form submission. Screenshot saved: ${debugPath}\n`);

      throw new Error(`Form submission failed with errors: ${errorsAfterSubmit.map(e => e.text).join(', ')}`);
    }

    // Step 6: Wait for verification code form
    console.log('📍 Step 6: Waiting for verification code form...');
    await page.waitForTimeout(1000);

    // Look for verification code input field
    const codeSelectors = [
      'input[name="code"]',
      'input[name="verificationCode"]',
      'input[name="verification_code"]',
      'input[placeholder*="code"]',
      'input[placeholder*="Code"]',
      'input[type="text"]',
      'input[type="number"]'
    ];

    let codeFieldFound = false;
    for (const selector of codeSelectors) {
      try {
        // Check both in iframe and main page
        let element = await formFrame.$(selector);
        if (!element) {
          element = await page.$(selector);
        }

        if (element) {
          console.log(`   → Found verification code field: ${selector}`);

          // Try to fill in iframe first
          try {
            await formFrame.fill(selector, verificationCode);
            console.log(`   ✓ Entered verification code: ${verificationCode} (in iframe)`);
          } catch {
            // If iframe fails, try main page
            await page.fill(selector, verificationCode);
            console.log(`   ✓ Entered verification code: ${verificationCode} (in main page)`);
          }

          codeFieldFound = true;
          break;
        }
      } catch (error) {
        continue;
      }
    }

    if (!codeFieldFound) {
      console.log('   ⚠️  Could not find verification code field\n');
    } else {
      // Wait a moment after entering code
      await page.waitForTimeout(1000);

      // Step 7: Look for "Verify" or "Submit" button
      console.log('📍 Step 7: Looking for verification submit button...');

      // List all available buttons in iframe
      await listAllButtons(formFrame, 'iframe (after code entry)');

      // Also list buttons in main page
      await listAllButtons(page, 'main page (after code entry)');

      let verifyButtonFound = false;

      // Try finding the Verify button by ID first
      const verifyBtn = await formFrame.$('#btn-verify-user');
      if (verifyBtn) {
        console.log('   → Found Verify button by ID: #btn-verify-user');

        // Check if it's visible
        const isVisible = await verifyBtn.isVisible();
        console.log(`   → Button visibility: ${isVisible}`);

        if (!isVisible) {
          // Wait a bit to see if it becomes visible
          console.log('   → Button is hidden, waiting 3 seconds for it to show...');
          await page.waitForTimeout(3000);

          const isVisibleNow = await verifyBtn.isVisible();
          console.log(`   → Button visibility after wait: ${isVisibleNow}`);

          if (!isVisibleNow) {
            // Button is still hidden - this indicates a problem with the previous step
            console.log('   ❌ Verify button remains hidden after waiting!');
            console.log('   → This indicates the verification code form did not load correctly.');

            // Check for errors
            const errorsAfterCode = await checkForErrors(page, formFrame, 'after code entry');

            const debugPath = path.join(videoDir, `debug-verify-button-hidden-${dateStamp}.png`);
            await page.screenshot({ path: debugPath, fullPage: true });
            console.log(`   → Debug screenshot saved: ${debugPath}\n`);

            throw new Error('Verify button is hidden - verification code entry may have failed. ' +
              (errorsAfterCode.length > 0 ? `Errors: ${errorsAfterCode.map(e => e.text).join(', ')}` : 'No visible error messages.'));
          }
        }

        // Button is visible, click it
        console.log('   → Button is visible, clicking...');
        await verifyBtn.click();
        console.log('   ✓ Clicked verify button\n');
        verifyButtonFound = true;
      }

      if (!verifyButtonFound) {
        // Fallback to other selectors - only click visible buttons
        const verifySelectors = [
          'button:has-text("Verify")',
          'button:has-text("Submit")',
          'button:has-text("Confirm")',
          'button[type="submit"]',
          'input[type="submit"]'
        ];

        for (const selector of verifySelectors) {
          try {
            // Check both iframe and main page
            let element = await formFrame.$(selector);
            let location = 'iframe';
            if (!element) {
              element = await page.$(selector);
              location = 'main page';
            }

            if (element) {
              const isVisible = await element.isVisible();
              if (isVisible) {
                await element.scrollIntoViewIfNeeded();
                await page.waitForTimeout(500);
                const buttonText = await element.textContent();
                console.log(`   → Found verify button: "${buttonText}" (${selector}) in ${location}`);
                await element.click();
                console.log('   ✓ Clicked verify button\n');
                verifyButtonFound = true;
                break;
              }
            }
          } catch (error) {
            continue;
          }
        }
      }

      if (!verifyButtonFound) {
        console.log('   ⚠️  Could not find visible verify button\n');
        const debugPath = path.join(videoDir, `debug-no-verify-button-${dateStamp}.png`);
        await page.screenshot({ path: debugPath, fullPage: true });

        throw new Error('No visible verify button found - verification flow failed');
      }
    }

    // Step 8: Wait for processing and check success
    console.log('📍 Step 8: Waiting for processing...');
    console.log('   → Waiting 5 seconds for verification...');
    await page.waitForTimeout(5000);

    // Check for success indicators
    const successIndicators = [
      'text="Success"',
      'text="Created"',
      'text="Badge Created"',
      'text="Congratulations"',
      'text="Welcome"',
      '[class*="success"]',
      '[class*="confirmation"]'
    ];

    let processingComplete = false;
    for (const selector of successIndicators) {
      try {
        const element = await page.waitForSelector(selector, { timeout: 5000 });
        if (element) {
          console.log(`   ✓ Processing complete! (${selector} found)`);
          processingComplete = true;
          break;
        }
      } catch (error) {
        continue;
      }
    }

    if (!processingComplete) {
      console.log('   ℹ️  Processing status unknown - continuing...');
    }

    // Wait a bit more to capture the final state
    console.log('   → Capturing final state...');
    await page.waitForTimeout(3000);

    // Take final screenshot
    const finalScreenshotPath = path.join(videoDir, `${slug}-final-${dateStamp}.png`);
    await page.screenshot({ path: finalScreenshotPath, fullPage: true });
    console.log(`   📸 Final screenshot: ${finalScreenshotPath}\n`);

    console.log('✅ Workflow capture completed!\n');

    // Close context to save video
    console.log('💾 Saving video...');
    await context.close();
    context = null;
    page = null;

    // Wait for video to be saved using setTimeout
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Find the saved video file
    const files = fs.readdirSync(videoDir);
    const videoFile = files.find(f => f.endsWith('.webm') && f.includes(dateStamp.split('T')[0]));

    let finalVideoPath;
    if (videoFile) {
      const originalPath = path.join(videoDir, videoFile);
      finalVideoPath = path.join(videoDir, videoFilename);

      // Rename to our preferred filename
      if (fs.existsSync(originalPath)) {
        fs.renameSync(originalPath, finalVideoPath);
        const stats = fs.statSync(finalVideoPath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        console.log(`✅ Video saved: ${finalVideoPath} (${fileSizeMB} MB)\n`);
      }
    } else {
      console.log('⚠️  Video file not found in expected location\n');
      finalVideoPath = null;
    }

    return {
      success: true,
      videoPath: finalVideoPath,
      screenshotPath: finalScreenshotPath,
      testData: {
        companyName: 'ACME Corporation',
        email
      }
    };

  } catch (error) {
    console.error('❌ Error during workflow capture:', error.message);
    console.error(error.stack);
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
  const headless = args.includes('--headless');

  console.log('\n🎬 Blockchain Badges Workflow Capture');
  console.log('='.repeat(60));
  console.log(`Mode: ${headless ? 'Headless' : 'Headed (visible browser)'}\n`);

  const result = await captureBlockchainBadgesWorkflow({ headless });

  console.log('='.repeat(60));
  if (result.success) {
    console.log('✅ WORKFLOW CAPTURE SUCCESSFUL');
    if (result.videoPath) {
      console.log(`📹 Video: ${result.videoPath}`);
    }
    if (result.screenshotPath) {
      console.log(`📸 Screenshot: ${result.screenshotPath}`);
    }
    console.log(`📧 Test email: ${result.testData.email}`);
  } else {
    console.log('❌ WORKFLOW CAPTURE FAILED');
    console.log(`Error: ${result.error}`);
  }
  console.log('='.repeat(60) + '\n');
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
  captureBlockchainBadgesWorkflow
};
