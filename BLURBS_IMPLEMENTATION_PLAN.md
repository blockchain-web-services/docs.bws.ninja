# Media Assets - Blurbs Implementation Plan

**Date:** 2025-11-30
**Feature:** AI-Generated Product Blurbs for Partner Communications
**Purpose:** Create channel-specific marketing blurbs for BWS solutions to share with partners

---

## 1. Executive Summary

This plan outlines the implementation of an **AI-powered blurb generation system** that creates tailored, channel-specific marketing content for each BWS solution. The system analyzes existing documentation to generate partner-ready summaries explaining what each solution does, how it works, key highlights for end-customers, blockchain integration, and benefits.

### Target Audience
- **Primary:** Business partners, integrators, and resellers
- **Secondary:** Sales teams, marketing departments, content creators

### Key Objectives
- ✅ Generate professional, accurate blurbs from existing documentation
- ✅ Create channel-specific formats (Email, LinkedIn, Twitter, Slack, etc.)
- ✅ Maintain consistent messaging across all BWS solutions
- ✅ Enable easy partner communications and content distribution

---

## 2. Proposed Structure

### 2.1 Directory Organization

```
docs.bws.ninja/
├── media-assets/
│   ├── snapshots/              # Existing - product screenshots
│   │   └── BWS.Blockchain.Badges/
│   │       └── README.md
│   │
│   └── blurbs/                 # NEW - AI-generated marketing content
│       ├── README.md           # Blurbs overview and usage guide
│       │
│       ├── BWS.Blockchain.Badges/
│       │   └── README.md       # Product blurbs gallery
│       │
│       ├── BWS.NFT.GameCube/
│       │   └── README.md
│       │
│       ├── BWS.ESG.Credits/
│       │   └── README.md
│       │
│       ├── BWS.X.Bot/
│       │   └── README.md
│       │
│       ├── BWS.IPFS.Upload/
│       │   └── README.md
│       │
│       ├── BWS.Blockchain.Save/
│       │   └── README.md
│       │
│       ├── BWS.Blockchain.Hash/
│       │   └── README.md
│       │
│       └── BWS.NFT.zK/
│           └── README.md
```

### 2.2 SUMMARY.md Integration

```markdown
* [Media Assets](media-assets/README.md)
  * [BWS Logo](media-assets/bws-logo.md)
  * [Snapshots](media-assets/snapshots/README.md)
    * [BWS.Blockchain.Badges](media-assets/snapshots/BWS.Blockchain.Badges/README.md)
    * ...
  * [Product Blurbs](media-assets/blurbs/README.md)  # NEW
    * [BWS.Blockchain.Badges](media-assets/blurbs/BWS.Blockchain.Badges/README.md)
    * [BWS.NFT.GameCube](media-assets/blurbs/BWS.NFT.GameCube/README.md)
    * [BWS.ESG.Credits](media-assets/blurbs/BWS.ESG.Credits/README.md)
    * [BWS.X.Bot](media-assets/blurbs/BWS.X.Bot/README.md)
    * [BWS.IPFS.Upload](media-assets/blurbs/BWS.IPFS.Upload/README.md)
    * [BWS.Blockchain.Save](media-assets/blurbs/BWS.Blockchain.Save/README.md)
    * [BWS.Blockchain.Hash](media-assets/blurbs/BWS.Blockchain.Hash/README.md)
    * [BWS.NFT.zK](media-assets/blurbs/BWS.NFT.zK/README.md)
```

---

## 3. Blurb Formats & Channels

### 3.1 Channel Requirements

Each product should have blurbs optimized for different communication channels:

| Channel | Length | Format | Audience | Purpose |
|---------|--------|--------|----------|---------|
| **Email** | 300-400 words | HTML/Text | Partners, clients | Detailed product introduction |
| **LinkedIn Post** | 150-200 words | Plain text | B2B professionals | Professional product showcase |
| **Twitter/X Thread** | 280 chars × 4-5 tweets | Plain text | Tech community | Quick overview thread |
| **Slack Message** | 200-250 words | Markdown | Team collaboration | Internal/partner sharing |
| **Executive Summary** | 100-150 words | Plain text | C-level executives | High-level overview |
| **Elevator Pitch** | 50-75 words | Plain text | Quick introductions | Brief value prop |
| **Technical Brief** | 400-500 words | Markdown | Developers | Technical details |

### 3.2 Content Requirements

Each blurb must include:

1. **What It Is** - Clear definition of the solution (1-2 sentences)
2. **How It Works** - High-level explanation of functionality (2-3 sentences)
3. **Key Highlights for End-Customers** - Main benefits and features (3-5 bullet points)
4. **Blockchain Integration** - How it uses blockchain technology (2-3 sentences)
5. **Benefits** - Value proposition and advantages (3-5 bullet points)
6. **Call to Action** - Next steps (link to docs, demo, contact)

### 3.3 Tone & Style

- **Professional but approachable** - Partner-facing, not overly technical
- **Benefit-focused** - Emphasize value, not just features
- **Clear and concise** - Easy to understand for non-blockchain experts
- **Action-oriented** - Include clear next steps
- **Consistent branding** - Align with BWS voice and messaging

---

## 4. AI Generation System

### 4.1 Input Sources

The script should analyze existing documentation:

**For Marketplace Solutions:**
```
marketplace-solutions/bws.{solution}/
  ├── README.md                 # Main overview
  ├── solution-overview.md      # Detailed description (if exists)
  ├── {solution}-user-interface.md
  └── {solution}-api/README.md
```

**For Platform APIs:**
```
solutions/bws.{solution}/
  ├── README.md                 # Main overview
  ├── solution-overview.md      # Detailed description
  └── operations.md             # Available operations
```

### 4.2 AI Prompt Structure

```javascript
const blurbPrompt = `
You are a professional technical marketing writer for BWS (Blockchain Web Services).

**Task:** Create channel-specific marketing blurbs for ${productName}.

**Source Documentation:**
${documentationContent}

**Target Audience:** Business partners, integrators, and technical decision-makers who need to understand the solution quickly.

**Required Content Sections:**
1. What It Is - Clear, non-technical definition
2. How It Works - High-level functionality explanation
3. Key Highlights for End-Customers - 3-5 bullet points
4. Blockchain Integration - How it leverages blockchain (benefits, not implementation details)
5. Benefits - Value proposition with measurable outcomes
6. Call to Action - Next steps with relevant links

**Tone:**
- Professional but approachable
- Benefit-focused, not feature-focused
- Clear for non-blockchain experts
- Action-oriented

**Generate blurbs for the following channels:**

1. EMAIL (300-400 words)
2. LINKEDIN (150-200 words)
3. TWITTER_THREAD (4-5 tweets, 280 chars each)
4. SLACK (200-250 words, Markdown format)
5. EXECUTIVE_SUMMARY (100-150 words)
6. ELEVATOR_PITCH (50-75 words)
7. TECHNICAL_BRIEF (400-500 words, Markdown format)

Format the output as JSON with this structure:
{
  "productName": "${productName}",
  "generatedAt": "ISO timestamp",
  "blurbs": {
    "email": { "subject": "...", "body": "..." },
    "linkedin": { "text": "..." },
    "twitter": { "thread": ["tweet1", "tweet2", ...] },
    "slack": { "markdown": "..." },
    "executive": { "text": "..." },
    "elevator": { "text": "..." },
    "technical": { "markdown": "..." }
  }
}
`;
```

### 4.3 Claude API Integration

**Option A: Use Claude API Directly**
```javascript
const Anthropic = require('@anthropic-ai/sdk');

async function generateBlurbs(productName, documentation) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4096,
    messages: [{
      role: 'user',
      content: buildBlurbPrompt(productName, documentation)
    }]
  });

  return JSON.parse(message.content[0].text);
}
```

**Option B: Use BWS API (if we build a blurb generation endpoint)**
```javascript
async function generateBlurbs(productName, documentation) {
  const response = await fetch('https://api.bws.ninja/v1/ai/generate-blurbs', {
    method: 'POST',
    headers: {
      'X-Api-Key': process.env.BWS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: productName,
      documentation: documentation
    })
  });

  return await response.json();
}
```

---

## 5. Product Blurb Page Template

### 5.1 GitBook Markdown Template

```markdown
---
description: >-
  AI-generated marketing blurbs for ${productName} - channel-specific content
  for partner communications and marketing materials.
---

# ${productName} - Product Blurbs

Pre-written, ready-to-use marketing content for sharing ${productName} with partners, clients, and stakeholders.

<table><thead><tr><th width="180">Product</th><th width="140">Last Generated</th><th>Documentation</th></tr></thead><tbody><tr><td>${productName}</td><td>${dateStamp}</td><td><a href="${docsUrl}">${docsUrl}</a></td></tr></tbody></table>

{% hint style="info" %}
**About These Blurbs**

All content is AI-generated from the official ${productName} documentation. These blurbs are designed for partner communications and can be used in emails, social media posts, presentations, and sales materials.
{% endhint %}

---

## Email Introduction

**Subject:** ${blurbs.email.subject}

${blurbs.email.body}

---

## LinkedIn Post

${blurbs.linkedin.text}

<figure><img src="../../snapshots/${productGitBookDir}/hero/linkedin-hero.jpg" alt="LinkedIn visual"><figcaption><p>Use this LinkedIn-optimized image with your post</p></figcaption></figure>

---

## Twitter/X Thread

${blurbs.twitter.thread.map((tweet, i) => `**Tweet ${i + 1}/${blurbs.twitter.thread.length}**\n\n${tweet}\n`).join('\n')}

<figure><img src="../../snapshots/${productGitBookDir}/hero/twitter-hero.jpg" alt="Twitter visual"><figcaption><p>Use this Twitter-optimized image with your thread</p></figcaption></figure>

---

## Slack Message

\`\`\`markdown
${blurbs.slack.markdown}
\`\`\`

---

## Executive Summary

${blurbs.executive.text}

---

## Elevator Pitch

${blurbs.elevator.text}

---

## Technical Brief

${blurbs.technical.markdown}

---

## Usage Guidelines

### How to Use These Blurbs

**For Sales & Partner Outreach:**
- Copy the Email blurb for introducing the product to new partners
- Use the Elevator Pitch for quick verbal introductions
- Share the Executive Summary with C-level decision makers

**For Social Media Marketing:**
- Post the LinkedIn version on company pages and personal profiles
- Share the Twitter thread to engage the tech community
- Pair with optimized images from the [Snapshots section](../../snapshots/${productGitBookDir}/)

**For Internal Communication:**
- Use the Slack message format for team updates
- Share the Technical Brief with engineering teams
- Include in onboarding materials for new team members

### Customization

Feel free to customize these blurbs:
- Add specific use cases relevant to your audience
- Include customer testimonials or case studies
- Adjust the call-to-action to your specific needs
- Combine with product screenshots and demos

---

## Related Resources

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Product Documentation</strong></td><td>Full technical documentation</td><td><a href="${docsUrl}">${docsUrl}</a></td></tr><tr><td><strong>Product Snapshots</strong></td><td>Screenshots and media assets</td><td><a href="../../snapshots/${productGitBookDir}/">../../snapshots/${productGitBookDir}/</a></td></tr><tr><td><strong>All Product Blurbs</strong></td><td>Browse blurbs for all products</td><td><a href="../">../</a></td></tr></tbody></table>

---

## Regeneration

These blurbs are automatically regenerated when product documentation is updated.

**Last Generated:** ${dateStamp}
**Source Documentation Version:** ${gitCommitHash}
```

---

## 6. Implementation Scripts

### 6.1 Script Structure

```
scripts/media-capture/
  ├── generate-blurbs.cjs          # Main blurb generation script
  ├── deploy-to-gitbook.cjs        # Updated to include blurbs
  └── utils/
      ├── blurb-generator.cjs      # AI blurb generation logic
      ├── documentation-reader.cjs  # Read and aggregate docs
      └── blurb-templates.cjs      # GitBook page templates
```

### 6.2 Main Script: `generate-blurbs.cjs`

```javascript
#!/usr/bin/env node

/**
 * Generate AI-powered marketing blurbs for BWS products
 *
 * This script:
 * 1. Reads existing product documentation
 * 2. Sends to Claude API for blurb generation
 * 3. Creates channel-specific marketing content
 * 4. Generates GitBook-formatted pages
 * 5. Updates media-assets/blurbs/ structure
 *
 * Usage:
 *   node scripts/media-capture/generate-blurbs.cjs [--product="Product Name"]
 *   node scripts/media-capture/generate-blurbs.cjs --all
 */

const fs = require('fs');
const path = require('path');
const { loadDocsIndex } = require('./utils/config-loader.cjs');
const { readProductDocumentation } = require('./utils/documentation-reader.cjs');
const { generateBlurbsWithAI } = require('./utils/blurb-generator.cjs');
const { createBlurbPage } = require('./utils/blurb-templates.cjs');

const BLURBS_DIR = path.join(process.cwd(), 'media-assets/blurbs');

async function generateProductBlurbs(productName, productConfig) {
  console.log(`\n🤖 Generating blurbs for: ${productName}`);

  // 1. Read product documentation
  console.log(`   📖 Reading documentation...`);
  const documentation = await readProductDocumentation(productName, productConfig);

  if (!documentation || documentation.length === 0) {
    console.log(`   ⚠️  No documentation found, skipping...`);
    return null;
  }

  console.log(`   ✓ Read ${documentation.pageCount} documentation pages`);

  // 2. Generate blurbs using AI
  console.log(`   🧠 Generating AI blurbs...`);
  const blurbs = await generateBlurbsWithAI(productName, documentation);

  console.log(`   ✓ Generated blurbs for 7 channels`);

  // 3. Create GitBook page
  console.log(`   📄 Creating GitBook page...`);
  const productGitBookDir = productNameToGitBookDir(productName);
  const blurbsProductDir = path.join(BLURBS_DIR, productGitBookDir);

  fs.mkdirSync(blurbsProductDir, { recursive: true });

  const pageContent = createBlurbPage(productName, productGitBookDir, productConfig, blurbs);
  const pagePath = path.join(blurbsProductDir, 'README.md');

  fs.writeFileSync(pagePath, pageContent);

  console.log(`   ✓ Created: ${pagePath}`);

  return { productName, productGitBookDir, blurbs };
}

async function main() {
  const args = process.argv.slice(2);
  const generateAll = args.includes('--all');
  const productFilter = args.find(a => a.startsWith('--product='))?.split('=')[1];

  console.log('🚀 BWS Product Blurbs Generator\n');

  // Check for API key
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ Error: ANTHROPIC_API_KEY environment variable not set');
    console.error('   Please set your Claude API key:');
    console.error('   export ANTHROPIC_API_KEY="your-api-key"');
    process.exit(1);
  }

  const docsIndex = loadDocsIndex();
  const products = docsIndex.productMapping;

  const results = [];

  for (const [productName, config] of Object.entries(products)) {
    if (productFilter && productName !== productFilter) {
      continue;
    }

    if (!generateAll && !productFilter) {
      // Interactive mode - ask for confirmation
      console.log(`Generate blurbs for ${productName}? [y/N]`);
      // Skip for now in non-interactive mode
      continue;
    }

    const result = await generateProductBlurbs(productName, config);
    if (result) {
      results.push(result);
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Blurb generation complete!`);
  console.log(`   Products processed: ${results.length}`);
  console.log(`${'='.repeat(60)}\n`);

  return results;
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateProductBlurbs };
```

### 6.3 Documentation Reader: `utils/documentation-reader.cjs`

```javascript
const fs = require('fs');
const path = require('path');

/**
 * Read and aggregate product documentation
 */
function readProductDocumentation(productName, productConfig) {
  const docs = [];
  let pageCount = 0;

  // Determine documentation paths based on product type
  const isMarketplace = productConfig.docs?.[0]?.includes('marketplace-solutions');
  const basePath = isMarketplace ? 'marketplace-solutions' : 'solutions';

  // Extract slug from docs URL
  const docsUrl = productConfig.docs?.[0];
  if (!docsUrl) {
    return { content: '', pageCount: 0 };
  }

  const urlParts = docsUrl.split('/');
  const slug = urlParts[urlParts.length - 1];
  const productDir = path.join(process.cwd(), basePath, slug);

  if (!fs.existsSync(productDir)) {
    console.log(`   ⚠️  Directory not found: ${productDir}`);
    return { content: '', pageCount: 0 };
  }

  // Read key documentation files
  const filesToRead = [
    'README.md',
    'solution-overview.md',
    `${slug}-user-interface.md`,
    `nft-game-overview.md`,
    `x-bot-overview.md`
  ];

  filesToRead.forEach(filename => {
    const filePath = path.join(productDir, filename);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      docs.push({
        filename,
        content,
        path: filePath
      });
      pageCount++;
    }
  });

  // Also check solution-overview subdirectory
  const overviewDir = path.join(productDir, 'solution-overview');
  if (fs.existsSync(overviewDir)) {
    const readmePath = path.join(overviewDir, 'README.md');
    if (fs.existsSync(readmePath)) {
      const content = fs.readFileSync(readmePath, 'utf-8');
      docs.push({
        filename: 'solution-overview/README.md',
        content,
        path: readmePath
      });
      pageCount++;
    }
  }

  // Combine all documentation
  const combinedContent = docs.map(doc => {
    return `## ${doc.filename}\n\n${doc.content}\n\n`;
  }).join('\n---\n\n');

  return {
    content: combinedContent,
    pageCount,
    files: docs
  };
}

module.exports = { readProductDocumentation };
```

### 6.4 AI Blurb Generator: `utils/blurb-generator.cjs`

```javascript
const Anthropic = require('@anthropic-ai/sdk');

/**
 * Generate marketing blurbs using Claude API
 */
async function generateBlurbsWithAI(productName, documentation) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  const prompt = buildBlurbPrompt(productName, documentation.content);

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 8192,
    temperature: 0.7,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  // Parse JSON response
  const responseText = message.content[0].text;

  // Extract JSON from markdown code blocks if present
  let jsonText = responseText;
  if (responseText.includes('```json')) {
    const match = responseText.match(/```json\n([\s\S]*?)\n```/);
    if (match) {
      jsonText = match[1];
    }
  } else if (responseText.includes('```')) {
    const match = responseText.match(/```\n([\s\S]*?)\n```/);
    if (match) {
      jsonText = match[1];
    }
  }

  const blurbs = JSON.parse(jsonText);

  return blurbs;
}

function buildBlurbPrompt(productName, documentationContent) {
  return `You are a professional technical marketing writer for BWS (Blockchain Web Services).

**Task:** Create channel-specific marketing blurbs for ${productName}.

**Source Documentation:**
${documentationContent}

**Target Audience:** Business partners, integrators, and technical decision-makers who need to understand the solution quickly.

**Required Content Sections:**
1. What It Is - Clear, non-technical definition (1-2 sentences)
2. How It Works - High-level functionality explanation (2-3 sentences)
3. Key Highlights for End-Customers - 3-5 compelling bullet points
4. Blockchain Integration - How it leverages blockchain technology (benefits, not implementation details) (2-3 sentences)
5. Benefits - Value proposition with measurable outcomes (3-5 bullet points)
6. Call to Action - Next steps with relevant links

**Tone & Style:**
- Professional but approachable
- Benefit-focused, not feature-focused
- Clear and accessible for non-blockchain experts
- Action-oriented with clear next steps
- Avoid jargon unless necessary
- Emphasize business value and ROI

**Generate blurbs for the following channels:**

1. **EMAIL** (300-400 words)
   - Professional email introducing the product
   - Include compelling subject line
   - Well-structured with clear sections

2. **LINKEDIN** (150-200 words)
   - Professional tone for B2B audience
   - Engaging first sentence
   - Include relevant hashtags

3. **TWITTER_THREAD** (4-5 tweets, max 280 chars each)
   - Engaging thread that tells a story
   - First tweet hooks attention
   - Each tweet stands alone but builds narrative
   - End with clear CTA

4. **SLACK** (200-250 words)
   - Conversational but informative
   - Use Markdown formatting
   - Great for internal sharing

5. **EXECUTIVE_SUMMARY** (100-150 words)
   - High-level strategic overview
   - Focus on business impact
   - C-level appropriate language

6. **ELEVATOR_PITCH** (50-75 words)
   - Concise value proposition
   - Memorable and impactful
   - Perfect for quick introductions

7. **TECHNICAL_BRIEF** (400-500 words)
   - More technical depth
   - Developer-friendly language
   - Include architecture insights
   - Use Markdown formatting

**Output Format:**
Return ONLY valid JSON with this exact structure (no additional text before or after):

\`\`\`json
{
  "productName": "${productName}",
  "generatedAt": "2025-11-30T12:00:00Z",
  "blurbs": {
    "email": {
      "subject": "Subject line here",
      "body": "Email body here..."
    },
    "linkedin": {
      "text": "LinkedIn post here...",
      "hashtags": ["#Blockchain", "#BWS", "#ProductName"]
    },
    "twitter": {
      "thread": [
        "Tweet 1 here (max 280 chars)",
        "Tweet 2 here (max 280 chars)",
        "Tweet 3 here (max 280 chars)",
        "Tweet 4 here (max 280 chars)"
      ]
    },
    "slack": {
      "markdown": "Slack message in markdown format..."
    },
    "executive": {
      "text": "Executive summary here..."
    },
    "elevator": {
      "text": "Elevator pitch here..."
    },
    "technical": {
      "markdown": "Technical brief in markdown format..."
    }
  }
}
\`\`\`
`;
}

module.exports = { generateBlurbsWithAI };
```

---

## 7. Blurbs Overview Page

### 7.1 `media-assets/blurbs/README.md`

```markdown
---
description: >-
  AI-generated product blurbs for all BWS solutions - ready-to-use marketing
  content for partner communications across multiple channels.
---

# Product Blurbs

Pre-written, channel-specific marketing content for all BWS products. Each blurb is AI-generated from official documentation and optimized for different communication platforms.

{% hint style="info" %}
**About These Blurbs**

All content is automatically generated using Claude AI from our official product documentation. These blurbs are designed for:
- Partner communications and outreach
- Sales enablement materials
- Social media marketing
- Internal team alignment
- Content marketing campaigns
{% endhint %}

---

## Available Products

### Marketplace Solutions

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>Blockchain Badges</strong></td><td>Digital credentialing blurbs</td><td><a href="BWS.Blockchain.Badges/">BWS.Blockchain.Badges/</a></td></tr>
<tr><td><strong>NFT Game Cube</strong></td><td>Sports fan engagement blurbs</td><td><a href="BWS.NFT.GameCube/">BWS.NFT.GameCube/</a></td></tr>
<tr><td><strong>ESG Credits</strong></td><td>Environmental impact blurbs</td><td><a href="BWS.ESG.Credits/">BWS.ESG.Credits/</a></td></tr>
</tbody></table>

### Platform APIs

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>IPFS Upload</strong></td><td>Decentralized storage blurbs</td><td><a href="BWS.IPFS.Upload/">BWS.IPFS.Upload/</a></td></tr>
<tr><td><strong>Blockchain Save</strong></td><td>Data persistence blurbs</td><td><a href="BWS.Blockchain.Save/">BWS.Blockchain.Save/</a></td></tr>
<tr><td><strong>Blockchain Hash</strong></td><td>Hash database blurbs</td><td><a href="BWS.Blockchain.Hash/">BWS.Blockchain.Hash/</a></td></tr>
<tr><td><strong>NFT.zK</strong></td><td>NFT creation blurbs</td><td><a href="BWS.NFT.zK/">BWS.NFT.zK/</a></td></tr>
</tbody></table>

### Telegram Bots

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>X Bot</strong></td><td>Twitter analytics blurbs</td><td><a href="BWS.X.Bot/">BWS.X.Bot/</a></td></tr>
</tbody></table>

---

## Channel Guide

Each product includes blurbs optimized for these channels:

### 📧 Email
**Length:** 300-400 words
**Use For:** Partner introductions, cold outreach, formal communications
**Format:** Professional email with subject line and structured body

### 💼 LinkedIn
**Length:** 150-200 words
**Use For:** B2B marketing, thought leadership, professional networks
**Format:** Engaging post with hashtags

### 🐦 Twitter/X Thread
**Length:** 4-5 tweets @ 280 chars each
**Use For:** Community engagement, tech audience, quick awareness
**Format:** Cohesive thread with hook and CTA

### 💬 Slack
**Length:** 200-250 words
**Use For:** Internal sharing, partner channels, team updates
**Format:** Conversational Markdown

### 📊 Executive Summary
**Length:** 100-150 words
**Use For:** C-level presentations, investor pitches, board meetings
**Format:** Strategic high-level overview

### 🎯 Elevator Pitch
**Length:** 50-75 words
**Use For:** Quick introductions, networking events, brief explanations
**Format:** Concise value proposition

### 🔧 Technical Brief
**Length:** 400-500 words
**Use For:** Developer audiences, technical evaluations, integration planning
**Format:** Detailed Markdown with technical insights

---

## How to Use

### For Sales Teams
1. Review the product's blurb page
2. Choose the channel that matches your communication method
3. Copy and customize the blurb for your specific audience
4. Combine with [Product Snapshots](../snapshots/) for visual appeal

### For Marketing Teams
1. Use LinkedIn and Twitter blurbs for social campaigns
2. Pair with optimized images from the Snapshots section
3. Adapt content for specific campaigns or audiences
4. Track engagement and iterate on messaging

### For Partner Managers
1. Send Email blurbs to introduce products to new partners
2. Share Technical Briefs with integration partners
3. Use Executive Summaries for stakeholder communications
4. Customize with partner-specific use cases

---

## Regeneration & Updates

Blurbs are automatically regenerated when:
- Product documentation is significantly updated
- New features are released
- Marketing messaging changes

To manually regenerate:
```bash
node scripts/media-capture/generate-blurbs.cjs --product="Product Name"
```

---

## Related Resources

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>Product Snapshots</strong></td><td>Visual assets and screenshots</td><td><a href="../snapshots/">../snapshots/</a></td></tr>
<tr><td><strong>Brand Guidelines</strong></td><td>BWS branding and style guide</td><td><a href="../">../</a></td></tr>
<tr><td><strong>API Documentation</strong></td><td>Complete technical docs</td><td><a href="../../">../../</a></td></tr>
</tbody></table>
```

---

## 8. Requirements & Dependencies

### 8.1 Technical Requirements

**Node.js Packages:**
```json
{
  "dependencies": {
    "@anthropic-ai/sdk": "^0.9.1"
  }
}
```

**Environment Variables:**
```bash
# Required for blurb generation
ANTHROPIC_API_KEY=your-claude-api-key

# Optional: Rate limiting
BLURB_GENERATION_DELAY_MS=5000  # Delay between products
```

**API Costs Estimate:**
- Model: Claude 3.5 Sonnet
- Input tokens per product: ~8,000 tokens (documentation)
- Output tokens per product: ~4,000 tokens (blurbs)
- Cost per product: ~$0.12 USD
- Total for 8 products: ~$1.00 USD per run

### 8.2 File System Requirements

```
docs.bws.ninja/
├── .env                          # Add ANTHROPIC_API_KEY
├── package.json                  # Add @anthropic-ai/sdk
├── media-assets/
│   └── blurbs/                   # New directory
│       ├── README.md
│       └── [product dirs]/
└── scripts/media-capture/
    ├── generate-blurbs.cjs       # New script
    └── utils/
        ├── blurb-generator.cjs   # New utility
        ├── documentation-reader.cjs  # New utility
        └── blurb-templates.cjs   # New utility
```

---

## 9. GitHub Actions Integration

### 9.1 Update Existing Workflow

Modify `.github/workflows/update-product-media.yml`:

```yaml
name: Update Product Media Assets

on:
  workflow_dispatch:
    inputs:
      include_blurbs:
        description: 'Generate AI blurbs'
        required: false
        type: boolean
        default: false
  schedule:
    - cron: '0 3 * * 0'  # Weekly on Sundays

jobs:
  generate-media-assets:
    runs-on: ubuntu-latest

    steps:
      # ... existing snapshot steps ...

      - name: Generate AI Blurbs
        if: ${{ github.event.inputs.include_blurbs == 'true' }}
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          node scripts/media-capture/generate-blurbs.cjs --all

      # ... existing commit and push steps ...
```

### 9.2 Required Secrets

Add to GitHub repository secrets:
- `ANTHROPIC_API_KEY` - Claude API key for blurb generation

---

## 10. Testing Strategy

### 10.1 Unit Tests

```javascript
// tests/blurb-generator.test.js
describe('Blurb Generator', () => {
  test('should read product documentation', () => {
    const docs = readProductDocumentation('Blockchain Badges', config);
    expect(docs.pageCount).toBeGreaterThan(0);
    expect(docs.content).toContain('Blockchain Badges');
  });

  test('should generate valid JSON blurbs', async () => {
    const blurbs = await generateBlurbsWithAI('Test Product', mockDocs);
    expect(blurbs).toHaveProperty('productName');
    expect(blurbs.blurbs).toHaveProperty('email');
    expect(blurbs.blurbs).toHaveProperty('linkedin');
  });

  test('should respect character limits', async () => {
    const blurbs = await generateBlurbsWithAI('Test Product', mockDocs);
    blurbs.blurbs.twitter.thread.forEach(tweet => {
      expect(tweet.length).toBeLessThanOrEqual(280);
    });
  });
});
```

### 10.2 Manual Testing Checklist

- [ ] Generate blurbs for one product
- [ ] Verify all 7 channel formats are present
- [ ] Check character limits (Twitter, Elevator Pitch)
- [ ] Validate word counts for each channel
- [ ] Review tone and messaging consistency
- [ ] Test GitBook page rendering
- [ ] Verify links to documentation and snapshots
- [ ] Check SUMMARY.md navigation
- [ ] Test with and without API key
- [ ] Verify error handling for missing docs

---

## 11. Success Criteria

### Must Have
- ✅ Generate blurbs for all 8 BWS products
- ✅ Support all 7 communication channels
- ✅ GitBook-formatted pages with proper styling
- ✅ Integration with SUMMARY.md navigation
- ✅ Respect character/word limits for each channel
- ✅ Include blockchain integration explanation
- ✅ Provide clear usage guidelines

### Should Have
- ✅ Error handling and graceful degradation
- ✅ Rate limiting for API calls
- ✅ Caching to avoid regenerating unchanged blurbs
- ✅ Version tracking (git commit hash)
- ✅ Manual regeneration capability

### Nice to Have
- ⏳ A/B testing different blurb variants
- ⏳ Analytics on blurb usage/effectiveness
- ⏳ Multi-language support
- ⏳ Custom prompts per product
- ⏳ Blurb versioning and history

---

## 12. Timeline & Milestones

### Phase 1: Foundation (Week 1)
- [ ] Create blurbs directory structure
- [ ] Implement documentation reader
- [ ] Setup Claude API integration
- [ ] Test with one product (Blockchain Badges)

### Phase 2: Core Features (Week 2)
- [ ] Implement all 7 channel formats
- [ ] Create GitBook page templates
- [ ] Add SUMMARY.md integration
- [ ] Generate blurbs for all products

### Phase 3: Polish & Testing (Week 3)
- [ ] Add error handling
- [ ] Implement rate limiting
- [ ] Write unit tests
- [ ] Manual QA testing

### Phase 4: Documentation & Deployment (Week 4)
- [ ] Create usage documentation
- [ ] Update main README
- [ ] Add GitHub Actions integration
- [ ] Deploy to production

---

## 13. Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| API costs exceed budget | Medium | Low | Implement caching, rate limiting |
| Generated content quality issues | High | Medium | Review and manual editing capability |
| API rate limits hit | Medium | Low | Implement delays, batch processing |
| Documentation changes frequently | Low | High | Automated regeneration workflow |
| Token limits exceeded | Medium | Low | Chunk documentation, summarize |

---

## 14. Future Enhancements

### V2 Features
- **Multi-language blurbs** - Generate in Spanish, Portuguese, etc.
- **Custom audiences** - Technical vs. business-focused variants
- **A/B testing** - Multiple blurb variants with performance tracking
- **Interactive customization** - Web UI for editing and customizing
- **Template library** - Additional formats (press release, webinar description)

### V3 Features
- **Usage analytics** - Track which blurbs are most used
- **Conversion tracking** - Measure effectiveness
- **Dynamic personalization** - Partner-specific customizations
- **Integration with CRM** - Auto-populate sales materials

---

**Document Status:** Draft
**Requires Approval:** Yes
**Next Steps:** Review requirements and approve for implementation
