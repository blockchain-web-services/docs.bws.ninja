# Marketing Blurbs Generation - Usage Guide

## Overview

The blurbs generation system creates AI-powered marketing content for BWS products using Claude API. It reads the product documentation from the repository and generates channel-specific blurbs optimized for partner communications.

## Prerequisites

1. **Anthropic API Key**: You need a Claude API key from Anthropic
   - Get one at: https://console.anthropic.com/
   - Set as environment variable: `ANTHROPIC_API_KEY`

2. **Node.js Dependencies**: Already installed
   - `@anthropic-ai/sdk`
   - Other project dependencies

## Quick Start

### Generate Blurbs for Blockchain Badges

```bash
# Set your API key
export ANTHROPIC_API_KEY="your-api-key-here"

# Generate all blurbs for Blockchain Badges
cd scripts/media-capture
node generate-blurbs.cjs BWS.Blockchain.Badges
```

This will:
1. Read all documentation from `marketplace-solutions/bws.blockchain.badges/`
2. Generate 7 channel-specific blurbs using Claude API
3. Create GitBook-formatted pages in `media-assets/blurbs/BWS.Blockchain.Badges/`
4. Update overview page and SUMMARY.md

## Available Products

```
BWS.Blockchain.Badges         Blockchain Badges
BWS.NFT.GameCube              NFT Game Cube
BWS.ESG.Credits               ESG Credits
BWS.X.Bot                     X Bot
BWS.Blockchain.Save           Blockchain Save
BWS.Blockchain.Hash           Blockchain Hash
BWS.IPFS.Upload               IPFS Upload
BWS.NFT.zK                    NFT.zK
```

## Command Options

### Generate for Single Product

```bash
node generate-blurbs.cjs BWS.Blockchain.Badges
```

### Generate for All Products

```bash
node generate-blurbs.cjs --all
```

### Generate Specific Channels Only

```bash
node generate-blurbs.cjs BWS.Blockchain.Badges --channels email,linkedin,twitter
```

Available channels:
- `email` - Email communications (300-400 words)
- `linkedin` - LinkedIn posts (150-200 words)
- `twitter` - Twitter threads (4-5 tweets × 280 chars)
- `slack` - Slack messages (200-250 words, Markdown)
- `executive` - Executive summaries (100-150 words)
- `elevator` - Elevator pitches (50-75 words)
- `technical` - Technical briefs (400-500 words, Markdown)

### Dry Run (Preview Without Saving)

```bash
node generate-blurbs.cjs BWS.Blockchain.Badges --dry-run
```

## Output Structure

After generation, files are created in the worktree:

```
media-assets/blurbs/
├── README.md                           # Overview page
└── BWS.Blockchain.Badges/
    ├── README.md                       # GitBook gallery page
    ├── blurbs.json                     # Raw blurbs data
    └── GENERATION_REPORT.md            # Generation summary
```

### GitBook Gallery Page

The `README.md` in each product folder contains:
- YAML frontmatter for SEO
- Product information table
- Info hint about AI generation
- All 7 channel blurbs with proper formatting
- Usage guidelines for each channel
- Links to related resources

### Raw Data (JSON)

The `blurbs.json` file contains:
```json
{
  "productKey": "BWS.Blockchain.Badges",
  "productName": "Blockchain Badges",
  "generated": "2025-11-30T12:00:00.000Z",
  "blurbs": {
    "email": {
      "channel": "email",
      "channelName": "Email",
      "content": "...",
      "validation": { ... },
      "metadata": { ... }
    },
    ...
  },
  "errors": {},
  "summary": {
    "total": 7,
    "successful": 7,
    "failed": 0
  }
}
```

### Generation Report

The `GENERATION_REPORT.md` includes:
- Product and timestamp information
- Success/failure summary
- Validation warnings
- API token usage statistics

## How It Works

### 1. Documentation Reading

The system reads all markdown files from the product's documentation directory:
- Main README
- Solution overview
- API documentation
- All subdirectories

It extracts:
- Product name and description
- Key sections (overview, features, benefits, blockchain, API, use cases)
- Consolidated content

### 2. Content Preparation

Documentation is cleaned and summarized:
- YAML frontmatter removed
- GitBook syntax cleaned
- Key sections extracted
- Content optimized for Claude API prompt

### 3. AI Generation

For each channel, the system:
- Builds a specialized system prompt with channel requirements
- Sends documentation summary to Claude 3.5 Sonnet
- Receives channel-optimized blurb
- Validates word/character limits
- Includes warnings if outside target range

### 4. GitBook Page Generation

Creates properly formatted GitBook pages:
- YAML frontmatter with descriptions
- Info hint boxes
- Formatted blurb sections
- Usage guidelines
- Card-view tables for navigation

### 5. Navigation Updates

Automatically updates:
- `media-assets/blurbs/README.md` - Overview with all products
- `SUMMARY.md` - Navigation structure

## Channel Specifications

Each channel has specific requirements:

| Channel | Format | Length | Tone | Use Case |
|---------|--------|--------|------|----------|
| Email | Plain text paragraphs | 300-400 words | Professional, informative | Partner outreach, newsletters |
| LinkedIn | Post with line breaks | 150-200 words | Professional, conversational | B2B marketing, networking |
| Twitter | Numbered thread | 4-5 tweets × 280 chars | Concise, engaging | Social engagement, updates |
| Slack | Markdown with bullets | 200-250 words | Friendly, clear | Internal comms, communities |
| Executive | Concise paragraph | 100-150 words | Strategic, value-focused | Board decks, pitch materials |
| Elevator | Single paragraph | 50-75 words | Compelling, memorable | Networking, introductions |
| Technical | Markdown sections | 400-500 words | Technical, accessible | Developer partnerships, RFPs |

## Content Requirements

All blurbs must explain:

1. **What it is** - Clear description of the solution
2. **How it works** - High-level workflow or process
3. **Key highlights** - Main features and capabilities for end-customers
4. **Blockchain integration** - Specific explanation of how/why blockchain is used
5. **Benefits** - Business value and advantages
6. **Call-to-action** - Clear next steps

## API Usage and Costs

Each blurb generation uses Claude 3.5 Sonnet API:
- ~1,500-2,000 input tokens per blurb (documentation summary)
- ~400-800 output tokens per blurb (generated content)
- 7 channels = ~7 API calls per product

Estimated cost per product: $0.05-0.10 (depending on documentation size)

The generation report includes exact token counts.

## Troubleshooting

### API Key Not Set

```
Error: ANTHROPIC_API_KEY environment variable is required
```

**Solution**: Set your API key
```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

### Documentation Not Found

```
Error: Documentation directory not found
```

**Solution**: Verify the product key is correct and documentation exists in main repo

### Word Count Warnings

```
⚠ Word count 215 exceeds maximum 200
```

**Solution**: This is just a warning. The blurb is still generated but may need manual editing to meet exact requirements.

### Rate Limiting

If generating many products at once, you may hit API rate limits.

**Solution**:
- The script includes 1-second delays between API calls
- Generate products one at a time if needed
- Check your Anthropic account rate limits

## Best Practices

### 1. Review and Edit

AI-generated blurbs are starting points:
- Review for accuracy
- Adjust tone to match brand voice
- Customize for specific partnerships
- Verify technical details

### 2. Version Control

Blurbs are stored in the worktree:
- Commit meaningful changes
- Use git history to track iterations
- Merge to main when ready

### 3. Regular Updates

Regenerate blurbs when:
- Product features change
- Documentation is updated
- New use cases emerge
- Positioning changes

### 4. Channel Customization

Use the base blurb and customize:
- Add specific partner context
- Include relevant metrics
- Personalize for audience
- Update CTAs for campaigns

## Examples

### Generate for Single Product

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
node generate-blurbs.cjs BWS.Blockchain.Badges
```

Output:
```
BWS Marketing Blurbs Generator

Products: BWS.Blockchain.Badges

============================================================
Generating blurbs for BWS.Blockchain.Badges
============================================================

Step 1: Reading product documentation...
Found 6 documentation files
Total content: 2,820 words, 30,383 chars

Step 2: Preparing content for AI generation...
Prepared summary: 125 words, 1,324 chars
Product name: BWS.Blockchain.Badges

Step 3: Generating blurbs with Claude API...

✓ Email
  Words: 347
  Chars: 2089
✓ LinkedIn Post
  Words: 178
  Chars: 1104
✓ Twitter Thread
  Words: N/A
  Chars: 845
...

Generation complete: 7/7 successful

Step 4: Generating GitBook page...

Step 5: Saving files...
Created directory: /path/to/media-assets/blurbs/BWS.Blockchain.Badges
Saved GitBook page: /path/to/media-assets/blurbs/BWS.Blockchain.Badges/README.md
Saved raw data: /path/to/media-assets/blurbs/BWS.Blockchain.Badges/blurbs.json
Saved report: /path/to/media-assets/blurbs/BWS.Blockchain.Badges/GENERATION_REPORT.md

✓ Files saved successfully

============================================================
Generation Summary
============================================================

Products processed: 1/1
Total blurbs generated: 7

Files saved to: /path/to/media-assets/blurbs

✓ Done
```

### Preview Before Saving

```bash
node generate-blurbs.cjs BWS.Blockchain.Badges --dry-run
```

Shows generation process but doesn't create files.

### Generate Specific Channels

```bash
node generate-blurbs.cjs BWS.Blockchain.Badges --channels email,linkedin
```

Generates only Email and LinkedIn blurbs (useful for testing or quick updates).

## Next Steps

After generating blurbs:

1. **Review Content** - Check accuracy and tone
2. **Test in Channels** - Verify formatting and length
3. **Merge to Main** - Use `/worktree-merge` when ready
4. **Share with Team** - Distribute blurbs to marketing/sales
5. **Track Performance** - Monitor engagement metrics
6. **Iterate** - Regenerate as products evolve

## Support

For issues or questions:
- Check troubleshooting section above
- Review BLURBS_IMPLEMENTATION_PLAN.md for technical details
- Check generation reports for validation warnings
- Verify API key and permissions
