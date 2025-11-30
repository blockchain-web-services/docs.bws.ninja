# BWS Product Media Capture

Automated weekly snapshot and video capture system for BWS products.

## Overview

This system captures website snapshots and workflow videos for each BWS product to use in demos, documentation, and social media posts.

## Features

- **Snapshot Capture**: Full-page screenshots for multiple viewports (desktop, mobile)
- **Workflow Videos**: Automated browser recordings demonstrating product workflows
- **Configurable**: Product-specific configuration in `docs-index.json`
- **Organized Storage**: Media files organized by product in `media/` folder

## Directory Structure

```
scripts/media-capture/
  ├── capture-snapshot.cjs         # Snapshot capture script
  ├── workflows/
  │   └── capture-badges-workflow.cjs  # Blockchain Badges workflow
  ├── utils/
  │   ├── config-loader.cjs        # Configuration loader
  │   └── playwright-helper.cjs    # Playwright utilities
  └── test-setup.cjs               # Setup validation

media/
  └── blockchain-badges/
      ├── snapshots/
      │   ├── desktop/
      │   └── mobile/
      └── videos/
```

## Configuration

Products are configured in `scripts/data/docs-index.json` under `productMapping`:

```json
{
  "Blockchain Badges": {
    "docs": ["https://docs.bws.ninja/..."],
    "websiteUrl": "https://blockchainbadges.com",
    "backofficeUrl": null,
    "mediaCapture": {
      "snapshot": {
        "url": "https://blockchainbadges.com",
        "type": "static",
        "viewports": ["desktop", "mobile"]
      },
      "video": {
        "url": "https://blockchainbadges.com",
        "workflowScript": "capture-badges-workflow.cjs",
        "description": "Create badge workflow",
        "duration": 30,
        "requiresAuth": false
      }
    },
    "outputPath": "media/blockchain-badges"
  }
}
```

## Usage

### Prerequisites

```bash
# Install dependencies (includes Playwright)
npm install

# Install Playwright browsers (first time only)
npx playwright install chromium
```

### Test Setup

```bash
node scripts/media-capture/test-setup.cjs
```

### Capture Snapshots

```bash
# Capture all viewports for Blockchain Badges
node scripts/media-capture/capture-snapshot.cjs "Blockchain Badges"

# Capture all products
node scripts/media-capture/capture-snapshot.cjs --all

# Capture specific viewport
node scripts/media-capture/capture-snapshot.cjs "Blockchain Badges" --viewport=desktop
```

### Capture Workflow Video

```bash
# Capture Blockchain Badges workflow
node scripts/media-capture/workflows/capture-badges-workflow.cjs

# Run with visible browser (for debugging)
node scripts/media-capture/workflows/capture-badges-workflow.cjs
```

## Blockchain Badges Workflow

The current workflow demonstrates:

1. Navigate to blockchainbadges.com
2. Click "Create Badge" button
3. Fill in form:
   - Company Name: ACME Corporation
   - Email: info+{random_number}@bws.ninja
4. Click "Get MY Badge"
5. Wait for processing
6. Capture final result

## Output Files

### Snapshots
- Format: PNG
- Naming: `{product-slug}-{viewport}-{YYYY-MM-DD}.png`
- Location: `media/{product}/snapshots/{viewport}/`

Example: `media/blockchain-badges/snapshots/desktop/blockchain-badges-desktop-2025-11-25.png`

### Videos
- Format: WebM
- Naming: `{product-slug}-workflow-{YYYY-MM-DD}.webm`
- Location: `media/{product}/videos/`
- Resolution: 1920x1080 @ 30fps

Example: `media/blockchain-badges/videos/blockchain-badges-workflow-2025-11-25.webm`

### Debug Screenshots
- Taken automatically when workflow encounters issues
- Naming: `debug-{issue}-{YYYY-MM-DD}.png`
- Helps troubleshoot selector or timing problems

## Extending to Other Products

### 1. Update docs-index.json

Add product configuration with `mediaCapture` section.

### 2. Create Workflow Script

```bash
cp scripts/media-capture/workflows/capture-badges-workflow.cjs \
   scripts/media-capture/workflows/capture-{product}-workflow.cjs
```

Edit the new script to implement product-specific workflow steps.

### 3. Update Configuration

Reference the new workflow script in docs-index.json:

```json
"workflowScript": "capture-{product}-workflow.cjs"
```

### 4. Test

```bash
node scripts/media-capture/capture-snapshot.cjs "Product Name"
node scripts/media-capture/workflows/capture-{product}-workflow.cjs
```

## Troubleshooting

### Playwright Not Found
```bash
npm install
npx playwright install chromium
```

### Element Not Found
- Check debug screenshots in video output directory
- Update selectors in workflow script
- Increase timeout values if page loads slowly

### Video Not Saved
- Ensure `context.close()` is called before exiting
- Check file permissions on output directory
- Video files may take a few seconds to finalize

## Future Enhancements

- [ ] Add orchestration script to capture all products
- [ ] Convert WebM to MP4 for broader compatibility
- [ ] Add CI/CD integration for weekly scheduled runs
- [ ] Upload to S3 or CDN storage
- [ ] Generate weekly summary report
- [ ] Add Telegram bot for capture notifications

## Notes

- **Worktree**: This code is in `.trees/product-shoting/` worktree
- **File Extensions**: All scripts use `.cjs` extension (CommonJS) due to package.json `"type": "module"`
- **Random Emails**: Workflow generates unique test emails using random numbers
- **Headless Mode**: Video capture runs in headed mode by default for better recording
