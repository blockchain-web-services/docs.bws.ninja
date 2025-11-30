/**
 * Blurb Generator Utility
 *
 * Generates marketing blurbs for different channels using Claude API.
 * Creates partner-focused content explaining solution value and blockchain integration.
 */

const Anthropic = require('@anthropic-ai/sdk');

/**
 * Channel specifications with character/word limits and format requirements
 */
const CHANNEL_SPECS = {
  x: {
    name: 'X (Twitter) Thread',
    charLimit: 280,
    threadLength: { min: 4, max: 6 },
    format: 'ready-to-post thread with emojis and hashtags',
    tone: 'engaging and conversational',
    structure: '1/ Hook with emojis, 2-4/ Key benefits and features, 5/ Blockchain value, 6/ CTA with hashtags'
  },
  'x-single': {
    name: 'X (Twitter) Single Post',
    charLimit: 280,
    format: 'single tweet with emojis and hashtags',
    tone: 'punchy and attention-grabbing',
    structure: 'Hook + value proposition + 2-3 hashtags, all under 280 chars'
  },
  telegram: {
    name: 'Telegram Post',
    wordLimit: { min: 150, max: 250 },
    format: 'telegram message with emojis, bold text, and link',
    tone: 'friendly and engaging',
    structure: 'Hook with emoji, 2-3 key points with emojis, blockchain benefit, CTA with link'
  },
  'telegram-short': {
    name: 'Telegram Short',
    wordLimit: { min: 50, max: 100 },
    format: 'short telegram message with emojis',
    tone: 'quick and impactful',
    structure: 'One-liner hook + key benefit + CTA'
  }
};

/**
 * Build system prompt for blurb generation
 */
function buildSystemPrompt(channel, targetAudience = null, productName = null) {
  const spec = CHANNEL_SPECS[channel];

  const audienceDescription = targetAudience
    ? `AUDIENCE: ${targetAudience.name} - ${targetAudience.description}`
    : `AUDIENCE: End-customers who will directly use this solution`;

  const productNameInstruction = productName
    ? `\nPRODUCT NAME: Always use "${productName}" (the commercial name) when referring to the product. NEVER use technical names like "BWS.X.Y" format.`
    : '';

  return `You are a professional marketing content writer specializing in blockchain technology and B2B SaaS solutions. Your task is to create compelling content for end-customers.

${audienceDescription}${productNameInstruction}

YOUR GOAL: Explain what the solution is, how it works, key benefits for this specific audience, how it uses blockchain, and why it matters to them.

CHANNEL: ${spec.name}
${spec.wordLimit ? `WORD COUNT: ${spec.wordLimit.min}-${spec.wordLimit.max} words` : ''}
${spec.charLimit ? `CHARACTER LIMIT: ${spec.charLimit} characters per tweet` : ''}
${spec.threadLength ? `THREAD LENGTH: ${spec.threadLength.min}-${spec.threadLength.max} tweets` : ''}
FORMAT: ${spec.format}
TONE: ${spec.tone}
STRUCTURE: ${spec.structure}

REQUIREMENTS:
1. Write directly to end-customers (use "you" and "your")
2. Focus on practical benefits and real-world value
3. Explain blockchain benefits in simple, relatable terms (not technical jargon)
4. Show how it solves their specific problems
5. Use conversational, accessible language
6. Include clear call-to-action relevant to the audience
7. Be specific about what they can accomplish with this solution
8. ${spec.wordLimit ? `Strictly adhere to ${spec.wordLimit.min}-${spec.wordLimit.max} word count` : 'Follow character limits precisely'}
9. Use emojis appropriately for the platform (more for Telegram, moderate for X)
10. For Telegram: Use **bold** for emphasis, line breaks for readability
11. For X threads: Number each tweet (1/, 2/, etc.), ensure each tweet is under ${spec.charLimit || 280} chars
12. Make content ready to copy-paste directly into the platform

OUTPUT: Provide ONLY the ready-to-post content in the exact format needed for the platform. No explanations or metadata.`;
}

/**
 * Identify target audiences for a product
 */
async function identifyTargetAudiences(productInfo, apiKey) {
  const client = new Anthropic({ apiKey });
  const { summary } = productInfo;

  console.log('Identifying target audiences...');

  const prompt = `Based on this product description, identify the 2-3 main target audience groups who would directly use this solution as end-customers (not business partners or integrators).

Product Information:
${summary}

For each audience group, provide:
1. Name (2-4 words, e.g., "Educational Institutions", "HR Professionals")
2. Description (one sentence explaining who they are and why they need this)

Format your response as JSON array:
[
  {
    "name": "Audience Name",
    "description": "One sentence description of who they are and their needs"
  }
]

Provide ONLY the JSON array, no other text.`;

  try {
    const response = await client.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 500,
      temperature: 0.3,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const content = response.content[0].text.trim();
    // Extract JSON from response (may be wrapped in markdown)
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('Could not parse audiences JSON from response');
    }

    const audiences = JSON.parse(jsonMatch[0]);
    console.log(`Found ${audiences.length} target audiences:`);
    audiences.forEach((aud, i) => {
      console.log(`  ${i + 1}. ${aud.name}: ${aud.description}`);
    });

    return audiences;
  } catch (error) {
    console.error('Error identifying audiences:', error.message);
    // Return default general audience
    return [
      {
        name: 'General Users',
        description: 'End-customers who want to use this solution for their specific needs'
      }
    ];
  }
}

/**
 * Build user prompt with product documentation
 */
function buildUserPrompt(productInfo, channel, targetAudience = null) {
  const { summary, keyInfo } = productInfo;

  let prompt = `Create a ${CHANNEL_SPECS[channel].name} for the following product:\n\n`;
  prompt += summary;

  if (targetAudience) {
    prompt += `\n\nTarget this specifically to: ${targetAudience.name} - ${targetAudience.description}`;
  }

  prompt += `\n\nGenerate the ${CHANNEL_SPECS[channel].name} now:`;

  return prompt;
}

/**
 * Generate blurb for a specific channel using Claude API
 */
async function generateBlurb(productInfo, channel, apiKey, targetAudience = null) {
  if (!CHANNEL_SPECS[channel]) {
    throw new Error(`Unknown channel: ${channel}. Available channels: ${Object.keys(CHANNEL_SPECS).join(', ')}`);
  }

  if (!apiKey) {
    throw new Error('Anthropic API key is required. Set ANTHROPIC_API_KEY environment variable.');
  }

  const client = new Anthropic({ apiKey });

  const systemPrompt = buildSystemPrompt(channel, targetAudience, productInfo.keyInfo.productName);
  const userPrompt = buildUserPrompt(productInfo, channel, targetAudience);

  const audienceLabel = targetAudience ? ` for ${targetAudience.name}` : '';
  console.log(`Generating ${CHANNEL_SPECS[channel].name} blurb${audienceLabel}...`);

  try {
    const response = await client.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 2000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt
        }
      ]
    });

    const blurbContent = response.content[0].text.trim();

    // Validate output
    const validation = validateBlurb(blurbContent, channel);

    return {
      channel,
      channelName: CHANNEL_SPECS[channel].name,
      targetAudience: targetAudience || null,
      content: blurbContent,
      validation,
      metadata: {
        model: response.model,
        usage: response.usage,
        timestamp: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error(`Error generating ${channel} blurb:`, error.message);
    throw error;
  }
}

/**
 * Validate blurb meets channel requirements
 */
function validateBlurb(content, channel) {
  const spec = CHANNEL_SPECS[channel];
  const validation = {
    valid: true,
    warnings: [],
    stats: {}
  };

  if (channel === 'x' || channel === 'twitter') {
    // Parse tweets (X thread)
    const tweets = content.split(/\n+/).filter(t => t.trim());
    validation.stats.tweetCount = tweets.length;

    if (tweets.length < spec.threadLength.min || tweets.length > spec.threadLength.max) {
      validation.warnings.push(`Tweet count ${tweets.length} outside range ${spec.threadLength.min}-${spec.threadLength.max}`);
    }

    tweets.forEach((tweet, i) => {
      const cleanTweet = tweet.replace(/^\d+[\/\).]\s*/, ''); // Remove numbering
      if (cleanTweet.length > spec.charLimit) {
        validation.warnings.push(`Tweet ${i + 1} exceeds ${spec.charLimit} characters (${cleanTweet.length})`);
        validation.valid = false;
      }
    });
  } else if (channel === 'x-single') {
    // Single tweet validation
    validation.stats.charCount = content.length;
    if (content.length > spec.charLimit) {
      validation.warnings.push(`Post exceeds ${spec.charLimit} characters (${content.length})`);
      validation.valid = false;
    }
  } else if (spec.wordLimit) {
    const words = content.split(/\s+/).length;
    validation.stats.wordCount = words;

    if (words < spec.wordLimit.min) {
      validation.warnings.push(`Word count ${words} below minimum ${spec.wordLimit.min}`);
    } else if (words > spec.wordLimit.max) {
      validation.warnings.push(`Word count ${words} exceeds maximum ${spec.wordLimit.max}`);
    }
  }

  validation.stats.charCount = content.length;

  return validation;
}

/**
 * Generate blurbs for all channels
 */
async function generateAllBlurbs(productInfo, apiKey, channels = null) {
  const targetChannels = channels || Object.keys(CHANNEL_SPECS);
  const blurbs = {};
  const errors = {};

  console.log(`\nGenerating blurbs for ${targetChannels.length} channels...\n`);

  for (const channel of targetChannels) {
    try {
      blurbs[channel] = await generateBlurb(productInfo, channel, apiKey);

      console.log(`✓ ${blurbs[channel].channelName}`);
      console.log(`  Words: ${blurbs[channel].validation.stats.wordCount || 'N/A'}`);
      console.log(`  Chars: ${blurbs[channel].validation.stats.charCount}`);

      if (blurbs[channel].validation.warnings.length > 0) {
        console.log(`  ⚠ Warnings: ${blurbs[channel].validation.warnings.join(', ')}`);
      }

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ ${CHANNEL_SPECS[channel].name}: ${error.message}`);
      errors[channel] = error.message;
    }
  }

  return {
    blurbs,
    errors,
    summary: {
      total: targetChannels.length,
      successful: Object.keys(blurbs).length,
      failed: Object.keys(errors).length
    }
  };
}

/**
 * Generate audience-segmented blurbs for all channels
 */
async function generateAudienceBlurbs(productInfo, apiKey, channels = null) {
  // First, identify target audiences
  const audiences = await identifyTargetAudiences(productInfo, apiKey);

  const targetChannels = channels || Object.keys(CHANNEL_SPECS);
  const audienceBlurbs = {};
  const errors = {};

  console.log(`\nGenerating blurbs for ${audiences.length} audiences × ${targetChannels.length} channels...\n`);

  for (const audience of audiences) {
    console.log(`\n--- ${audience.name} ---`);
    audienceBlurbs[audience.name] = {
      audience,
      blurbs: {},
      errors: {}
    };

    for (const channel of targetChannels) {
      try {
        const blurb = await generateBlurb(productInfo, channel, apiKey, audience);
        audienceBlurbs[audience.name].blurbs[channel] = blurb;

        console.log(`✓ ${blurb.channelName}`);
        console.log(`  Words: ${blurb.validation.stats.wordCount || 'N/A'}`);
        console.log(`  Chars: ${blurb.validation.stats.charCount}`);

        if (blurb.validation.warnings.length > 0) {
          console.log(`  ⚠ Warnings: ${blurb.validation.warnings.join(', ')}`);
        }

        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`✗ ${CHANNEL_SPECS[channel].name}: ${error.message}`);
        audienceBlurbs[audience.name].errors[channel] = error.message;
        errors[`${audience.name}:${channel}`] = error.message;
      }
    }
  }

  return {
    audiences,
    audienceBlurbs,
    errors,
    summary: {
      totalAudiences: audiences.length,
      totalChannels: targetChannels.length,
      totalCombinations: audiences.length * targetChannels.length,
      successful: audiences.reduce((sum, aud) => sum + Object.keys(audienceBlurbs[aud.name].blurbs).length, 0),
      failed: Object.keys(errors).length
    }
  };
}

/**
 * Format blurb for display/storage
 */
function formatBlurbForMarkdown(blurb) {
  let markdown = `### ${blurb.channelName}\n\n`;

  // Add target audience if present
  if (blurb.targetAudience) {
    markdown += `**For:** ${blurb.targetAudience.name}\n\n`;
  }

  // Add metadata
  const spec = CHANNEL_SPECS[blurb.channel];
  if (spec.wordLimit) {
    markdown += `**Target:** ${spec.wordLimit.min}-${spec.wordLimit.max} words | `;
  } else if (spec.charLimit && spec.threadLength) {
    markdown += `**Target:** ${spec.charLimit} chars/post × ${spec.threadLength.min}-${spec.threadLength.max} posts | `;
  } else if (spec.charLimit) {
    markdown += `**Target:** ${spec.charLimit} chars | `;
  }

  markdown += `**Actual:** `;
  if (blurb.validation.stats.wordCount) {
    markdown += `${blurb.validation.stats.wordCount} words, `;
  }
  if (blurb.validation.stats.tweetCount) {
    markdown += `${blurb.validation.stats.tweetCount} posts, `;
  }
  markdown += `${blurb.validation.stats.charCount} chars\n\n`;

  // Add "ready to copy-paste" label for social channels
  if (blurb.channel === 'x' || blurb.channel === 'x-single' || blurb.channel === 'telegram' || blurb.channel === 'telegram-short') {
    markdown += `📋 **Ready to Copy & Paste:**\n\n`;
  }

  // Add content in code block for all channels for easy copy-paste
  markdown += '```\n' + blurb.content + '\n```\n\n';

  return markdown;
}

module.exports = {
  CHANNEL_SPECS,
  identifyTargetAudiences,
  generateBlurb,
  generateAllBlurbs,
  generateAudienceBlurbs,
  formatBlurbForMarkdown,
  validateBlurb
};
