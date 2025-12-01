# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitBook-based documentation repository for **Blockchain Web Services (BWS)**, a platform that simplifies blockchain integration through a unified REST API. BWS makes blockchain technology accessible to developers without requiring Web3 expertise or wallet management.

The documentation is published via GitBook and covers:
- Platform API solutions (Blockchain Save, Blockchain Hash, IPFS Upload, NFT.zK)
- Marketplace solutions (Blockchain Badges, NFT Game Cube, ESG Credits, X Bot)
- API authentication, endpoints, and integration guides

## Documentation Structure

The repository follows GitBook's standard structure:

- `SUMMARY.md` - Table of contents that defines the documentation navigation hierarchy
- `README.md` - Landing page with overview of BWS platform
- `.gitbook/assets/` - Images, logos, PDFs, and other media assets
- `api-how-tos/` - General API usage guides (authentication, endpoints, methods)
- `solutions/` - Platform API solutions documentation
  - `bws.blockchain.save/` - Store data on blockchain with Certificate of Trust
  - `bws.blockchain.hash/` - Blockchain as hash database
  - `bws.ipfs.upload/` - IPFS file upload and gateway access
  - `bws.nft.zk/` - NFT creation and transfer for non-Web3 users
- `marketplace-solutions/` - End-user marketplace solutions
  - `bws.blockchain.badges/` - Digital credentialing system
  - `bws.nft.gamecube/` - Sports fan engagement with NFTs and ML
  - `bws.esg.credits/` - Environmental impact reporting
  - `bws.x.bot/` - Telegram bot for X (Twitter) analytics and engagement tracking
- `media-assets/` - Brand guidelines, logos, and product snapshots
- `platform-fees/` - Pricing and fee structure documentation

## Key Concepts

### BWS API Architecture

The BWS API uses a unified endpoint pattern:

**Call API** (`POST https://api.bws.ninja/v1/call`)
- All solutions use this single endpoint
- Request includes: `solution`, `version`, `network`, `operation`, `parameters`
- Returns `jobId` for asynchronous operations or immediate result for synchronous ones

**Fetch API** (`POST https://api.bws.ninja/v1/fetch`)
- Poll for job status and results using `jobId`
- Job statuses: `registered` → `calling` → `running` → `snapshotting` → `completed`/`failed`
- Returns blockchain receipt, transaction URL, and Certificate of Trust

### Authentication

All API requests require `X-Api-Key` header for authentication.

### Blockchain Networks

Solutions support multiple networks (e.g., `matchain`, `polygon`, `mumbai`). Test networks like `mumbai` allow testing without requiring funds.

### Certificate of Trust

Most blockchain operations generate a Certificate of Trust - a verifiable PDF/JPG document proving the blockchain transaction occurred, including transaction hash and timestamp.

## Content Guidelines

When editing documentation:

### Markdown Formatting

- Use GitBook-flavored markdown with YAML frontmatter
- Frontmatter must include `description` field for SEO
- Use GitBook hints for callouts: `{% hint style="info" %}...{% endhint %}`
- Use GitBook tabs for multi-language code examples: `{% tabs %}...{% tab title="curl" %}...{% endtab %}{% endtabs %}`
- Reference internal pages with relative paths
- Reference images in `.gitbook/assets/` using relative paths

### GitBook Link Nomenclature (CRITICAL)

**When creating links in GitBook card tables (`data-type="content-ref"`):**

- **ALWAYS use absolute paths** starting with `/` (e.g., `/media-assets/blurbs`)
- **NEVER use relative paths** like `../` or `../../` in card tables
- Relative paths in card tables cause GitBook to generate GitHub repository URLs instead of internal docs.bws.ninja links
- **For directories**: Use directory path with trailing slash (e.g., `/media-assets/snapshots/BWS.Product/`)
- **For files**: Use full file path (e.g., `/media-assets/bws-logo.md`)

**Example of CORRECT card table link:**
```html
<a href="/media-assets/blurbs">/media-assets/blurbs</a>
```

**Example of INCORRECT card table link (creates GitHub URLs):**
```html
<a href="../">../</a>  <!-- GitBook converts this to github.com URL -->
```

This rule applies specifically to card tables with `data-type="content-ref"`. Regular markdown links can still use relative paths.

### API Documentation Pattern

Each solution follows this structure:
1. Solution overview page explaining the use case and value proposition
2. Available networks table with contract addresses
3. Operations page detailing each API operation with:
   - Request parameters table
   - Code examples in curl, JavaScript, and Python
   - Response examples with expected fields
   - Status codes and error handling

### Code Examples

Always provide working code examples in three formats:
- **curl** - Command-line examples
- **JavaScript** - Using jQuery $.ajax or fetch
- **Python** - Using http.client

Examples should include:
- Full endpoint URL (`https://api.bws.ninja/v1/call` or `/v1/fetch`)
- `X-Api-Key` header (shown as `API-KEY` placeholder)
- `Content-Type: application/json` header
- Complete request body with all required parameters

## Common Tasks

### Adding a New Solution

1. Create directory under `solutions/` or `marketplace-solutions/`
2. Add `README.md` with solution overview
3. Add `solution-overview.md` with detailed description
4. Add `operations.md` or individual operation files
5. Update `SUMMARY.md` to include new pages in table of contents
6. Add any product images to `.gitbook/assets/`

### Updating API Examples

1. Locate the operation documentation file
2. Update examples within `{% tabs %}` blocks
3. Ensure curl, JavaScript, and Python examples are consistent
4. Verify parameter tables match the code examples
5. Update response examples if API changes

### Adding New Pages

1. Create the markdown file in appropriate directory
2. Add YAML frontmatter with `description`
3. Update `SUMMARY.md` to link the new page in the navigation hierarchy
4. Follow existing formatting patterns for consistency

### Working with Images

- Place images in `.gitbook/assets/`
- Reference using relative paths: `[alt text](.gitbook/assets/filename.png)`
- For card views, use GitBook table syntax with `data-card-cover` and `data-card-target`

## Publishing

This repository is connected to GitBook for automatic publishing. Changes pushed to the repository are automatically reflected in the published documentation at docs.bws.ninja.

Do not manually edit GitBook-generated metadata or commit messages (they start with "GITBOOK-").


⚠️ **IMPORTANT**: Read `CLAUDE_INSTRUCTIONS.md` for context before making changes in this repository.
