/**
 * Documentation Reader Utility
 *
 * Reads and consolidates documentation from the repository for blurb generation.
 * Navigates the GitBook structure to find relevant product documentation.
 */

const fs = require('fs');
const path = require('path');

/**
 * Get the root documentation directory
 * From worktree, we need to go to the main repo
 */
function getDocsRoot() {
  // From .trees/product-media-assets/scripts/media-capture/utils/
  // Go up to .trees/product-media-assets (../../)
  // Then go up to docs.bws.ninja root (../../)
  // Then navigate to main repo (not .trees)
  const worktreeRoot = path.resolve(__dirname, '../../../');

  // Check if we're in a worktree by looking for .trees in path
  if (worktreeRoot.includes('.trees')) {
    // We're in worktree, get main repo root
    // From .trees/product-media-assets go to docs.bws.ninja
    return path.resolve(worktreeRoot, '../../');
  }

  // We're in main repo already
  return worktreeRoot;
}

/**
 * Read markdown file and extract content
 */
function readMarkdownFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Remove YAML frontmatter
    const withoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n/, '');

    // Remove GitBook specific syntax
    const cleaned = withoutFrontmatter
      .replace(/{% hint[^%]*%}[\s\S]*?{% endhint %}/g, '') // Remove hint blocks
      .replace(/{% tabs %}[\s\S]*?{% endtabs %}/g, '[CODE EXAMPLES]') // Simplify code tabs
      .replace(/{% [^%]+ %}/g, '') // Remove other GitBook tags
      .replace(/<table data-view="cards">[\s\S]*?<\/table>/g, '[CARD VIEW]') // Simplify card views
      .trim();

    return cleaned;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Find product documentation directory
 */
function findProductDocs(productKey) {
  const docsRoot = getDocsRoot();

  // Map product keys to their documentation paths
  const pathMappings = {
    'BWS.Blockchain.Badges': 'marketplace-solutions/bws.blockchain.badges',
    'BWS.NFT.GameCube': 'marketplace-solutions/bws.nft.gamecube',
    'BWS.ESG.Credits': 'marketplace-solutions/bws.esg.credits',
    'BWS.X.Bot': 'marketplace-solutions/bws.x.bot',
    'BWS.Blockchain.Save': 'solutions/bws.blockchain.save',
    'BWS.Blockchain.Hash': 'solutions/bws.blockchain.hash',
    'BWS.IPFS.Upload': 'solutions/bws.ipfs.upload',
    'BWS.NFT.zK': 'solutions/bws.nft.zk'
  };

  const productPath = pathMappings[productKey];
  if (!productPath) {
    throw new Error(`Unknown product key: ${productKey}`);
  }

  const fullPath = path.join(docsRoot, productPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Documentation directory not found: ${fullPath}`);
  }

  return fullPath;
}

/**
 * Read all documentation files for a product
 */
function readProductDocumentation(productKey) {
  const productDir = findProductDocs(productKey);
  const documentation = {
    productKey,
    productPath: productDir,
    files: [],
    consolidatedContent: ''
  };

  // Read all markdown files in the product directory
  function readDirectory(dir, relativePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(relativePath, entry.name);

      if (entry.isDirectory()) {
        readDirectory(fullPath, relPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const content = readMarkdownFile(fullPath);
        if (content) {
          documentation.files.push({
            name: entry.name,
            path: relPath,
            fullPath,
            content
          });

          // Add to consolidated content with section marker
          documentation.consolidatedContent += `\n\n## [${relPath}]\n\n${content}`;
        }
      }
    }
  }

  readDirectory(productDir);

  // Calculate total length
  documentation.totalWords = documentation.consolidatedContent.split(/\s+/).length;
  documentation.totalChars = documentation.consolidatedContent.length;

  return documentation;
}

/**
 * Extract key information from documentation
 */
function extractKeyInfo(documentation) {
  const content = documentation.consolidatedContent;

  // Try to extract product name from first heading
  const nameMatch = content.match(/^#\s+(.+)$/m);
  const productName = nameMatch ? nameMatch[1].replace(/\[.*?\]/, '').trim() : documentation.productKey;

  // Extract description (usually in frontmatter or first paragraph)
  const descMatch = content.match(/description:\s*>?\s*\n?\s*(.+?)(?:\n\n|---)/s);
  const description = descMatch ? descMatch[1].replace(/\n/g, ' ').trim() : '';

  // Look for key sections
  const sections = {
    overview: extractSection(content, ['overview', 'about', 'introduction']),
    features: extractSection(content, ['features', 'capabilities', 'key features']),
    benefits: extractSection(content, ['benefits', 'advantages', 'why']),
    howItWorks: extractSection(content, ['how it works', 'workflow', 'process']),
    blockchain: extractSection(content, ['blockchain', 'networks', 'smart contract']),
    api: extractSection(content, ['api', 'operations', 'endpoints']),
    useCases: extractSection(content, ['use cases', 'examples', 'applications'])
  };

  return {
    productName,
    description,
    sections,
    totalContent: content
  };
}

/**
 * Extract section content based on heading keywords
 */
function extractSection(content, keywords) {
  for (const keyword of keywords) {
    // Match heading with keyword (case insensitive)
    const regex = new RegExp(`^#+\\s+.*?${keyword}.*?$`, 'im');
    const match = content.match(regex);

    if (match) {
      const startIndex = content.indexOf(match[0]);
      // Find next heading at same or higher level
      const headingLevel = match[0].match(/^#+/)[0].length;
      const nextHeadingRegex = new RegExp(`\n#{1,${headingLevel}}\\s+`, 'g');
      nextHeadingRegex.lastIndex = startIndex + match[0].length;
      const nextMatch = nextHeadingRegex.exec(content);

      const endIndex = nextMatch ? nextMatch.index : content.length;
      const sectionContent = content.substring(startIndex, endIndex).trim();

      // Remove the heading itself and return content
      return sectionContent.replace(/^#+\s+.*?$\n*/m, '').trim();
    }
  }

  return null;
}

/**
 * Prepare documentation for Claude API
 * Summarizes and structures the content for optimal prompt size
 */
function prepareForClaude(documentation) {
  const keyInfo = extractKeyInfo(documentation);

  // Build structured summary
  let summary = `Product: ${keyInfo.productName}\n\n`;

  if (keyInfo.description) {
    summary += `Description: ${keyInfo.description}\n\n`;
  }

  // Add sections that were found
  for (const [key, content] of Object.entries(keyInfo.sections)) {
    if (content) {
      const heading = key.replace(/([A-Z])/g, ' $1').trim();
      summary += `${heading.toUpperCase()}:\n${content}\n\n`;
    }
  }

  // If summary is still too short, add raw content (trimmed)
  if (summary.length < 500 && keyInfo.totalContent) {
    summary += `\nADDITIONAL CONTENT:\n${keyInfo.totalContent.substring(0, 3000)}`;
  }

  return {
    summary,
    keyInfo,
    wordCount: summary.split(/\s+/).length,
    charCount: summary.length
  };
}

module.exports = {
  readProductDocumentation,
  extractKeyInfo,
  prepareForClaude,
  findProductDocs
};
