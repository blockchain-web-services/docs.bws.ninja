#!/usr/bin/env node

const { launchBrowser, waitForPageLoad, cleanup } = require('./utils/playwright-helper.cjs');

/**
 * Analyze website structure to identify natural section boundaries
 * This helps us split full-page screenshots into meaningful sections
 */
async function analyzeWebsiteSections(url) {
  let browser, context, page;

  try {
    console.log(`🔍 Analyzing sections for: ${url}\n`);

    ({ browser, context, page } = await launchBrowser({
      headless: true,
      viewport: 'desktop'
    }));

    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await waitForPageLoad(page, 30000);

    // Get full page dimensions
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);

    console.log(`📐 Page dimensions: ${pageWidth}x${pageHeight}px\n`);

    // Find major sections (typically marked by section tags, divs with IDs, or semantic elements)
    const sections = await page.evaluate(() => {
      const results = [];

      // Strategy 1: Look for <section> tags
      const sectionElements = document.querySelectorAll('section');
      sectionElements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        const scrollY = window.scrollY;
        results.push({
          type: 'section',
          index: idx,
          id: el.id || null,
          class: el.className || null,
          top: Math.round(rect.top + scrollY),
          height: Math.round(rect.height),
          width: Math.round(rect.width),
          textContent: el.textContent.substring(0, 100).trim()
        });
      });

      // Strategy 2: Look for main semantic containers
      const semanticElements = document.querySelectorAll('header, main, article, aside, footer');
      semanticElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrollY = window.scrollY;
        results.push({
          type: el.tagName.toLowerCase(),
          id: el.id || null,
          class: el.className || null,
          top: Math.round(rect.top + scrollY),
          height: Math.round(rect.height),
          width: Math.round(rect.width),
          textContent: el.textContent.substring(0, 100).trim()
        });
      });

      // Strategy 3: Look for divs with IDs (often used for major sections)
      const idDivs = document.querySelectorAll('div[id]');
      idDivs.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrollY = window.scrollY;
        // Only include reasonably sized containers
        if (rect.height > 300 && rect.width > 800) {
          results.push({
            type: 'div',
            id: el.id,
            class: el.className || null,
            top: Math.round(rect.top + scrollY),
            height: Math.round(rect.height),
            width: Math.round(rect.width),
            textContent: el.textContent.substring(0, 100).trim()
          });
        }
      });

      return results;
    });

    // Sort by vertical position
    sections.sort((a, b) => a.top - b.top);

    console.log(`📦 Found ${sections.length} potential sections:\n`);

    sections.forEach((section, idx) => {
      console.log(`${idx + 1}. <${section.type}>${section.id ? ` #${section.id}` : ''}${section.class ? ` .${section.class.split(' ')[0]}` : ''}`);
      console.log(`   Position: y=${section.top}px, height=${section.height}px`);
      console.log(`   Content preview: "${section.textContent.substring(0, 60)}..."`);
      console.log();
    });

    // Suggest section groupings (merge overlapping or too-small sections)
    console.log('💡 Suggested section boundaries:\n');

    const merged = [];
    let currentSection = null;

    sections.forEach((section) => {
      if (!currentSection) {
        currentSection = { ...section };
      } else {
        const overlap = currentSection.top + currentSection.height > section.top;
        const tooSmall = section.height < 400;

        if (overlap || tooSmall) {
          // Merge with current section
          const bottom = Math.max(
            currentSection.top + currentSection.height,
            section.top + section.height
          );
          currentSection.height = bottom - currentSection.top;
          currentSection.merged = (currentSection.merged || 1) + 1;
        } else {
          // Save current and start new
          merged.push(currentSection);
          currentSection = { ...section };
        }
      }
    });

    if (currentSection) {
      merged.push(currentSection);
    }

    merged.forEach((section, idx) => {
      const bottom = section.top + section.height;
      console.log(`Section ${idx + 1}: "${section.type}${section.id ? '#' + section.id : ''}"`);
      console.log(`   Crop: y=${section.top}, height=${section.height} (y: ${section.top}-${bottom})`);
      if (section.merged) {
        console.log(`   (merged ${section.merged} overlapping sections)`);
      }
      console.log();
    });

    return {
      url,
      pageWidth,
      pageHeight,
      sections: merged.map((s, idx) => ({
        name: s.id || `section-${idx + 1}`,
        type: s.type,
        y: s.top,
        height: s.height,
        description: s.textContent.substring(0, 60).trim()
      }))
    };

  } catch (error) {
    console.error('❌ Error analyzing sections:', error.message);
    throw error;
  } finally {
    await cleanup(browser, context);
  }
}

// Main execution
async function main() {
  const url = process.argv[2] || 'https://blockchainbadges.com';

  const result = await analyzeWebsiteSections(url);

  console.log('\n📋 JSON Configuration:\n');
  console.log(JSON.stringify(result.sections, null, 2));
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { analyzeWebsiteSections };
