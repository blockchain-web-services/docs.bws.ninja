/**
 * Blurb Templates Utility
 *
 * Generates GitBook-formatted markdown pages for product blurbs.
 * Creates structured pages with proper frontmatter, hints, and formatting.
 */

const { formatBlurbForMarkdown } = require('./blurb-generator.cjs');

/**
 * Generate product blurbs page for GitBook
 */
function generateBlurbsPage(productKey, productName, blurbsData, websiteUrl = null) {
  const { blurbs } = blurbsData;
  const channelOrder = ['email', 'linkedin', 'twitter', 'slack', 'executive', 'elevator', 'technical'];

  // Build frontmatter
  let markdown = `---
description: >-
  Marketing blurbs and partner communications for ${productName} -
  content optimized for different channels including email,
  social media, and technical briefs.
---

# ${productName} - Marketing Blurbs

Partner-focused communications explaining what ${productName} is, how it works,
key highlights for end-customers, blockchain integration, and benefits.

`;

  // Add product info table
  markdown += `<table><thead><tr><th width="180">Product</th><th width="140">Last Updated</th>`;
  if (websiteUrl) {
    markdown += `<th>Website</th>`;
  }
  markdown += `</tr></thead><tbody><tr><td>${productName}</td><td>${new Date().toISOString().split('T')[0]}</td>`;
  if (websiteUrl) {
    markdown += `<td><a href="${websiteUrl}">${websiteUrl.replace(/^https?:\/\//, '')}</a></td>`;
  }
  markdown += `</tr></tbody></table>

`;

  // Add info hint
  markdown += `{% hint style="info" %}
**About These Blurbs**

Content is optimized for different communication channels with appropriate tone, length, and format.
Each blurb explains the solution's value proposition, blockchain integration, and business benefits.
{% endhint %}

---

## Channel-Specific Blurbs

`;

  // Add each channel's blurb in order
  for (const channel of channelOrder) {
    if (blurbs[channel]) {
      markdown += formatBlurbForMarkdown(blurbs[channel]);
      markdown += '---\n\n';
    }
  }

  // Add usage guidelines
  markdown += `## Usage Guidelines

### Customization

These blurbs are starting points for partner communications. Feel free to:

* Adjust tone to match your brand voice
* Add specific partnership details or context
* Customize CTAs for your specific use case
* Combine elements from different blurbs

### Channel Best Practices

**Email Communications**
* Use the Email blurb as the main body
* Add personalized greeting and signature
* Include relevant links and attachments
* Consider A/B testing subject lines

**LinkedIn Posts**
* Post during business hours (9 AM - 5 PM local time)
* Include 3-5 relevant hashtags
* Tag relevant partners or companies
* Consider adding an image or video

**Twitter Threads**
* Post during peak engagement times
* Add relevant media to the first tweet
* Engage with replies promptly
* Consider pinning important threads

**Slack Messages**
* Use in partner or customer channels
* Add links to documentation or demos
* Follow up with offer to answer questions
* Keep conversation going in thread

**Executive Summaries**
* Use in board decks or executive reports
* Pair with key metrics and data
* Include in pitch decks
* Add to proposal documents

**Elevator Pitches**
* Memorize for networking events
* Adapt for verbal presentations
* Use in email signatures
* Include in bio or about sections

**Technical Briefs**
* Share with technical partners
* Include in RFP responses
* Use for developer onboarding
* Add to technical documentation

---

## Related Resources

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>`;

  // Link back to product documentation
  const productPaths = {
    'BWS.Blockchain.Badges': '/marketplace-solutions/bws.blockchain.badges',
    'BWS.NFT.GameCube': '/marketplace-solutions/bws.nft.gamecube',
    'BWS.ESG.Credits': '/marketplace-solutions/bws.esg.credits',
    'BWS.X.Bot': '/marketplace-solutions/bws.x.bot',
    'BWS.Blockchain.Save': '/solutions/bws.blockchain.save',
    'BWS.Blockchain.Hash': '/solutions/bws.blockchain.hash',
    'BWS.IPFS.Upload': '/solutions/bws.ipfs.upload',
    'BWS.NFT.zK': '/solutions/bws.nft.zk'
  };

  if (productPaths[productKey]) {
    markdown += `<tr><td><strong>Product Documentation</strong></td><td>Full technical documentation</td><td><a href="${productPaths[productKey]}">${productPaths[productKey]}</a></td></tr>`;
  }

  markdown += `<tr><td><strong>All Product Blurbs</strong></td><td>Browse blurbs for all products</td><td><a href="../">../</a></td></tr>`;
  markdown += `<tr><td><strong>Product Snapshots</strong></td><td>Visual media assets</td><td><a href="../../snapshots/${productKey}/">../../snapshots/${productKey}/</a></td></tr>`;
  markdown += `</tbody></table>

`;

  return markdown;
}

/**
 * Generate blurbs overview page (main index)
 */
function generateBlurbsOverview(products) {
  let markdown = `---
description: >-
  Marketing blurbs and partner communications for all BWS products -
  content explaining solutions, blockchain integration, and business benefits.
---

# Marketing Blurbs

Partner communications for all BWS products. Each product page includes
channel-specific blurbs optimized for email, social media, executive summaries, and technical briefs.

{% hint style="info" %}
**About These Blurbs**

Content explains what each solution is, how it works, key highlights for end-customers,
blockchain integration details, and business benefits.
{% endhint %}

---

## Available Products

### Marketplace Solutions

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>`;

  // Add marketplace solutions
  const marketplaceSolutions = products.filter(p =>
    ['BWS.Blockchain.Badges', 'BWS.NFT.GameCube', 'BWS.ESG.Credits', 'BWS.X.Bot'].includes(p.key)
  );

  for (const product of marketplaceSolutions) {
    markdown += `<tr><td><strong>${product.name}</strong></td><td>View marketing blurbs</td><td><a href="${product.key}/">${product.key}/</a></td></tr>`;
  }

  markdown += `</tbody></table>

### Platform APIs

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>`;

  // Add platform APIs
  const platformApis = products.filter(p =>
    ['BWS.Blockchain.Save', 'BWS.Blockchain.Hash', 'BWS.IPFS.Upload', 'BWS.NFT.zK'].includes(p.key)
  );

  for (const product of platformApis) {
    markdown += `<tr><td><strong>${product.name}</strong></td><td>View marketing blurbs</td><td><a href="${product.key}/">${product.key}/</a></td></tr>`;
  }

  markdown += `</tbody></table>

---

## Channel Overview

Each product includes blurbs optimized for these channels:

### Email Communications
**Format:** 300-400 words, plain text with paragraphs
**Use For:** Partner outreach, customer communications, newsletters

### LinkedIn Posts
**Format:** 150-200 words, engaging post with hashtags
**Use For:** Professional networking, B2B marketing, thought leadership

### Twitter Threads
**Format:** 4-5 tweets × 280 characters
**Use For:** Social engagement, product launches, quick updates

### Slack Messages
**Format:** 200-250 words, markdown with bullets
**Use For:** Internal communications, partner channels, community updates

### Executive Summary
**Format:** 100-150 words, strategic focus
**Use For:** Board decks, executive reports, pitch materials

### Elevator Pitch
**Format:** 50-75 words, memorable hook
**Use For:** Networking events, quick introductions, email signatures

### Technical Brief
**Format:** 400-500 words, technical detail
**Use For:** Developer partnerships, RFP responses, technical documentation

---

## Content Philosophy

All blurbs follow these principles:

1. **Value-First:** Lead with business benefits and value proposition
2. **Clear Blockchain Explanation:** Explain *how* and *why* blockchain is used, not just that it is
3. **Partner Perspective:** Written for B2B partners who need to explain to their customers
4. **End-Customer Focus:** Highlight benefits for the end-user, not just the integration
5. **Specific & Concrete:** Avoid vague claims, provide specific capabilities
6. **Action-Oriented:** Include clear calls-to-action

---

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Product Snapshots</strong></td><td>Visual media assets for all products</td><td><a href="../snapshots/">../snapshots/</a></td></tr><tr><td><strong>BWS Logo</strong></td><td>Official BWS logos and variations</td><td><a href="../bws-logo.md">../bws-logo.md</a></td></tr><tr><td><strong>Brand Guidelines</strong></td><td>Complete brand usage guidelines</td><td><a href="../">../</a></td></tr></tbody></table>

`;

  return markdown;
}

/**
 * Generate generation summary report
 */
function generateSummaryReport(results) {
  const { productKey, productName, blurbsData, timestamp } = results;

  // Check if this is audience-segmented or general blurbs
  const isAudienceSegmented = blurbsData.audiences !== undefined;

  let report = `# Blurb Generation Summary

**Product:** ${productName} (${productKey})
**Generated:** ${timestamp}
`;

  if (isAudienceSegmented) {
    const { audiences, audienceBlurbs, summary } = blurbsData;
    report += `**Mode:** Audience-Segmented
**Status:** ${summary.successful}/${summary.totalCombinations} successful
**Audiences:** ${summary.totalAudiences}
**Channels:** ${summary.totalChannels}

## Target Audiences

`;
    audiences.forEach((aud, i) => {
      report += `${i + 1}. **${aud.name}** - ${aud.description}\n`;
    });

    report += `\n## Results by Audience\n\n`;

    for (const [audienceName, audienceData] of Object.entries(audienceBlurbs)) {
      report += `### ${audienceName}\n\n`;

      const { blurbs, errors } = audienceData;

      if (Object.keys(blurbs).length > 0) {
        for (const [channel, blurb] of Object.entries(blurbs)) {
          report += `- ✓ ${blurb.channelName}`;
          if (blurb.validation.warnings.length > 0) {
            report += ` ⚠ (${blurb.validation.warnings.length} warning${blurb.validation.warnings.length > 1 ? 's' : ''})`;
          }
          report += '\n';
        }
      }

      if (Object.keys(errors).length > 0) {
        for (const [channel, error] of Object.entries(errors)) {
          report += `- ✗ ${channel}: ${error}\n`;
        }
      }

      report += '\n';
    }

    // Add API usage
    let totalInputTokens = 0;
    let totalOutputTokens = 0;

    for (const audienceData of Object.values(audienceBlurbs)) {
      for (const blurb of Object.values(audienceData.blurbs)) {
        if (blurb.metadata.usage) {
          totalInputTokens += blurb.metadata.usage.input_tokens || 0;
          totalOutputTokens += blurb.metadata.usage.output_tokens || 0;
        }
      }
    }

    report += `## API Usage\n\n`;
    report += `- Input tokens: ${totalInputTokens.toLocaleString()}\n`;
    report += `- Output tokens: ${totalOutputTokens.toLocaleString()}\n`;
    report += `- Total tokens: ${(totalInputTokens + totalOutputTokens).toLocaleString()}\n`;

  } else {
    const { blurbs, errors, summary } = blurbsData;
    report += `**Status:** ${summary.successful}/${summary.total} successful

## Results

`;

    // List successful blurbs
    if (Object.keys(blurbs).length > 0) {
      report += `### Generated Blurbs\n\n`;
      for (const [channel, blurb] of Object.entries(blurbs)) {
        report += `- ✓ ${blurb.channelName}`;
        if (blurb.validation.warnings.length > 0) {
          report += ` ⚠ (${blurb.validation.warnings.length} warning${blurb.validation.warnings.length > 1 ? 's' : ''})`;
        }
        report += '\n';
      }
      report += '\n';
    }

    // List errors
    if (Object.keys(errors).length > 0) {
      report += `### Errors\n\n`;
      for (const [channel, error] of Object.entries(errors)) {
        report += `- ✗ ${channel}: ${error}\n`;
      }
      report += '\n';
    }

    // Add validation details
    report += `## Validation Details\n\n`;
    for (const [channel, blurb] of Object.entries(blurbs)) {
      if (blurb.validation.warnings.length > 0) {
        report += `### ${blurb.channelName}\n`;
        blurb.validation.warnings.forEach(warning => {
          report += `- ⚠ ${warning}\n`;
        });
        report += '\n';
      }
    }

    // Add API usage
    let totalInputTokens = 0;
    let totalOutputTokens = 0;

    for (const blurb of Object.values(blurbs)) {
      if (blurb.metadata.usage) {
        totalInputTokens += blurb.metadata.usage.input_tokens || 0;
        totalOutputTokens += blurb.metadata.usage.output_tokens || 0;
      }
    }

    report += `## API Usage\n\n`;
    report += `- Input tokens: ${totalInputTokens.toLocaleString()}\n`;
    report += `- Output tokens: ${totalOutputTokens.toLocaleString()}\n`;
    report += `- Total tokens: ${(totalInputTokens + totalOutputTokens).toLocaleString()}\n`;
  }

  return report;
}

/**
 * Generate audience-segmented blurbs page for GitBook
 */
function generateAudienceBlurbsPage(productKey, productName, blurbsData, websiteUrl = null) {
  const { audiences, audienceBlurbs } = blurbsData;

  // Build frontmatter
  let markdown = `---
description: >-
  End-customer marketing blurbs for ${productName} -
  content tailored for specific target audiences across
  multiple channels including email, social media, and technical briefs.
---

# ${productName} - Marketing Blurbs

Target audience-specific communications explaining what ${productName} is, how it works,
and why it matters to different types of end-customers.

`;

  // Add product info table
  markdown += `<table><thead><tr><th width="180">Product</th><th width="140">Last Updated</th>`;
  if (websiteUrl) {
    markdown += `<th>Website</th>`;
  }
  markdown += `<th>Audiences</th></tr></thead><tbody><tr><td>${productName}</td><td>${new Date().toISOString().split('T')[0]}</td>`;
  if (websiteUrl) {
    markdown += `<td><a href="${websiteUrl}">${websiteUrl.replace(/^https?:\/\//, '')}</a></td>`;
  }
  markdown += `<td>${audiences.length}</td></tr></tbody></table>

`;

  // Add info hint
  markdown += `{% hint style="info" %}
**About These Blurbs**

Content is tailored for specific end-customer audiences and optimized for different communication channels.
Each blurb speaks directly to the audience's needs and explains blockchain benefits in accessible terms.
{% endhint %}

---

## Target Audiences

`;

  // List audiences
  audiences.forEach((aud, i) => {
    markdown += `${i + 1}. **${aud.name}** - ${aud.description}\n`;
  });

  markdown += `\n---\n\n`;

  // Add blurbs organized by audience
  for (const audienceName of Object.keys(audienceBlurbs)) {
    const audienceData = audienceBlurbs[audienceName];
    const { audience, blurbs } = audienceData;

    markdown += `## ${audience.name}\n\n`;
    markdown += `*${audience.description}*\n\n`;

    const channelOrder = ['x', 'x-single', 'telegram', 'telegram-short'];

    for (const channel of channelOrder) {
      if (blurbs[channel]) {
        markdown += formatBlurbForMarkdown(blurbs[channel]);
        markdown += `\n`;
      }
    }

    markdown += `---\n\n`;
  }

  // Add usage guidelines
  markdown += `## Usage Guidelines

### Customization

These blurbs are starting points for end-customer communications. Feel free to:

* Adjust tone to match your brand voice
* Add specific product details or examples
* Customize calls-to-action for your campaigns
* Combine elements from different audiences

### Audience Targeting

Each set of blurbs is optimized for a specific audience:

`;

  audiences.forEach(aud => {
    markdown += `* **${aud.name}**: ${aud.description}\n`;
  });

  markdown += `\n---\n\n`;

  // Add related resources
  markdown += `## Related Resources

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>`;

  // Link back to product documentation
  const productPaths = {
    'BWS.Blockchain.Badges': '/marketplace-solutions/bws.blockchain.badges',
    'BWS.NFT.GameCube': '/marketplace-solutions/bws.nft.gamecube',
    'BWS.ESG.Credits': '/marketplace-solutions/bws.esg.credits',
    'BWS.X.Bot': '/marketplace-solutions/bws.x.bot',
    'BWS.Blockchain.Save': '/solutions/bws.blockchain.save',
    'BWS.Blockchain.Hash': '/solutions/bws.blockchain.hash',
    'BWS.IPFS.Upload': '/solutions/bws.ipfs.upload',
    'BWS.NFT.zK': '/solutions/bws.nft.zk'
  };

  if (productPaths[productKey]) {
    markdown += `<tr><td><strong>Product Documentation</strong></td><td>Full technical documentation</td><td><a href="${productPaths[productKey]}">${productPaths[productKey]}</a></td></tr>`;
  }

  markdown += `<tr><td><strong>All Product Blurbs</strong></td><td>Browse blurbs for all products</td><td><a href="../">../</a></td></tr>`;
  markdown += `<tr><td><strong>Product Snapshots</strong></td><td>Visual media assets</td><td><a href="../../snapshots/${productKey}/">../../snapshots/${productKey}/</a></td></tr>`;
  markdown += `</tbody></table>

`;

  return markdown;
}

module.exports = {
  generateBlurbsPage,
  generateAudienceBlurbsPage,
  generateBlurbsOverview,
  generateSummaryReport
};
