[Home](../) > [Commands](./) > Leaderboard Customization

# Leaderboard Customization

Customize scoring points, colors, titles, and display settings for leaderboard reports.

> **Commands in this category:** 10
> **Last Updated:** 2025-12-31

---

## /set_points

Sets the scoring multipliers for engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
used in leaderboard calculations. These multipliers determine how many points each type of 
engagement contributes to a user's total score. Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_points 5 1 20 10 0.01
```

**Parameters:**
- likes (required): Points awarded per like (positive number, can be decimal)
- retweets (required): Points awarded per retweet (positive number, can be decimal)
- replies (required): Points awarded per reply (positive number, can be decimal)
- quotes (required): Points awarded per quote (positive number, can be decimal)
- views (required): Points awarded per view (positive number, can be decimal)
- Validation: Each value must match positive number format (regex: /^[0-9]+(\.[0-9]+)?$/)

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: No state management required
- Flow: Single-step command execution with parameter validation

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

**User Messages:**
- Success: "New points set.\n\nLikes: [value] per each like\nRetweets: [value] per each retweet\nReplies: [value] per each reply\nQuotes: [value] per each quote\nViews: [value] per each view"
- Error (Missing parameters): "Please provide 5 point values for likes, retweets, replies, quotes and views. Example: /set_points 5 1 20 10 0.01"
- Error (Invalid format): "Invalid points format. Please provide valid points for likes, retweets, replies, quotes and views. Example: /set_points 5 1 20 10 0.01"
- Error (Non-admin): "Only admins can set the points."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /get_points

Retrieves and displays the current scoring multipliers for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard calculations. 
Shows either configured values or indicates default values are being used.

- Persists configuration in the database for future use

**Usage:**
```
/get_points
```

**Parameters:**
- None required

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view points configuration
- States: No state management required
- Flow: Single-step command execution with configuration retrieval

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

**User Messages:**
- Success (Configured): "Points setup.\n\nLikes: [value] per each like\nRetweets: [value] per each retweet\nReplies: [value] per each reply\nQuotes: [value] per each quote\nViews: [value] per each view"
- Success (Default): "No points set (using default values). Please set the points using /set_points <likes> <retweets> <replies> <quotes> <views>"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /set_colors

Sets the HTML colors for displaying engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
in the leaderboard reports. Colors are stored as hexadecimal values and used for report generation.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_colors #536352 #536354 #536351 #536357 #536359
```

**Parameters:**
- likes (required): HTML hex color for likes display (e.g., #FF0000 or #F00)
- retweets (required): HTML hex color for retweets display (e.g., #00FF00)
- replies (required): HTML hex color for replies display (e.g., #0000FF)
- quotes (required): HTML hex color for quotes display (e.g., #FFFF00)
- views (required): HTML hex color for views display (e.g., #FF00FF)
- Validation: Each color must match HTML hex format (#RRGGBB or #RGB)

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: No state management required
- Flow: Single-step command execution with parameter validation

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

**User Messages:**
- Success: "New colors set.\n\nLikes: [color1]\nRetweets: [color2]\nReplies: [color3]\nQuotes: [color4]\nViews: [color5]"
- Error (Missing parameters): "Please provide 5 HTML hex colors. Example: /set_colors #536352 #536354 #536351 #536357 #536359"
- Error (Invalid format): "Invalid color format. Please provide valid HTML hex colors (e.g., #FF0000 or #F00).\n\nExample: /set_colors #536352 #536354 #536351 #536357 #536359"
- Error (Non-admin): "Only admins can set the colors."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /get_colors

Retrieves and displays the current HTML color configuration for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard reports. Shows either 
configured colors or default values if none are set.

- Persists configuration in the database for future use

**Usage:**
```
/get_colors
```

**Parameters:**
- None required

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view color configuration
- States: No state management required
- Flow: Single-step command execution with configuration retrieval

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

**User Messages:**
- Success (Configured): "Colors setup.\n\nLikes: [color1]\nRetweets: [color2]\nReplies: [color3]\nQuotes: [color4]\nViews: [color5]"
- Success (Default): "Colors setup (using default values).\n\nLikes: #7dc9ad\nRetweets: #87a861\nReplies: #d9feb9\nQuotes: #f3fd9c\nViews: #92f327"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /set_top_title

Sets the title text and color for the main leaderboard section in generated reports.
Allows customization of the primary heading displayed at the top of leaderboard reports.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_top_title "Weekly Leaderboard" #476a30
```
```
/set_top_title "X Engagement Rankings" #ff6b6b
```

**Parameters:**
- title_text (required): Text content for the title (in quotes if contains spaces)
- color (required): Hex color code in #RRGGBB format (e.g., #476a30)

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Parameter Validation: Validates title text and hex color format
- States: No state management required
- Flow: Parameter parsing → Validation → Database storage

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

**User Messages:**
- Success: "✅ Top Title Updated Successfully!\n\n**New Top Title:** \"[title_text]\"\n**Color:** `[color]`\n\n💡 Use /get_titles to view all current title settings"
- Error (Missing parameters): "❌ Please provide both title text and color. Example: /set_top_title \"Weekly Leaderboard\" #476a30"
- Error (Empty title): "❌ Title text cannot be empty. Example: /set_top_title \"Weekly Leaderboard\" #476a30"
- Error (Invalid color): "❌ Invalid hex color format. Please use format: #RRGGBB (e.g., #476a30)"
- Error (Non-admin): "Only group administrators can change the top title settings."
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /set_best_title

Sets the title text and color for the best tweet section in generated reports.
Allows customization of the heading displayed above the highlighted best tweet.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_best_title "Tweet of the Day" #ff6b6b
```
```
/set_best_title "Top Performance" #28a745
```

**Parameters:**
- title_text (required): Text content for the title (in quotes if contains spaces)
- color (required): Hex color code in #RRGGBB format (e.g., #ff6b6b)

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Parameter Validation: Validates title text and hex color format
- States: No state management required
- Flow: Parameter parsing → Validation → Database storage

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

**User Messages:**
- Success: "✅ Best Title Updated Successfully!\n\n**New Best Title:** \"[title_text]\"\n**Color:** `[color]`\n\n💡 Use /get_titles to view all current title settings"
- Error (Missing parameters): "Please provide both title text and color. Example: /set_best_title \"Tweet of the Day\" #ff6b6b"
- Error (Empty title): "Title text cannot be empty. Example: /set_best_title \"Tweet of the Day\" #ff6b6b"
- Error (Invalid color): "Invalid hex color format. Please use format: #RRGGBB (e.g., #476a30)"
- Error (Non-admin): "Only group administrators can change the best title settings."
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /set_engagement_title

Sets the title text and color for the engagement scoring section in generated reports.
Allows customization of the heading displayed above engagement scoring rules and metrics.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_engagement_title "Scoring Rules" #28a745
```
```
/set_engagement_title "Engagement Metrics" #6f42c1
```

**Parameters:**
- title_text (required): Text content for the title (in quotes if contains spaces)
- color (required): Hex color code in #RRGGBB format (e.g., #28a745)

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Parameter Validation: Validates title text and hex color format
- States: No state management required
- Flow: Parameter parsing → Validation → Database storage

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

**User Messages:**
- Success: "✅ Engagement Title Updated Successfully!\n\n**New Engagement Title:** \"[title_text]\"\n**Color:** `[color]`\n\n💡 Use /get_titles to view all current title settings"
- Error (Missing parameters): "Please provide both title text and color. Example: /set_engagement_title \"Scoring Rules\" #28a745"
- Error (Empty title): "Title text cannot be empty. Example: /set_engagement_title \"Scoring Rules\" #28a745"
- Error (Invalid color): "Invalid hex color format. Please use format: #RRGGBB (e.g., #476a30)"
- Error (Non-admin): "Only group administrators can change the engagement title settings."
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /get_titles

Retrieves and displays all current title configurations for the report sections including
top title (main leaderboard), best title (best tweet), and engagement title (scoring rules).
Shows either configured values or default values for each section.

- Persists configuration in the database for future use

**Usage:**
```
/get_titles
```

**Parameters:**
- None required

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view title configurations
- States: No state management required
- Flow: Single-step configuration retrieval and display formatting

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSetting()` - Retrieves data from DynamoDB

**User Messages:**
- Success: "🎨 Current Title Configuration:\n\n**📊 Top Title (Main Leaderboard):**\nText: \"[text]\"\nColor: `[color]`\n\n**🏆 Best Title (Best Tweet):**\nText: \"[text]\"\nColor: `[color]`\n\n**⚡ Engagement Title (Scoring Rules):**\nText: \"[text]\"\nColor: `[color]`\n\n💡 Use /set_top_title, /set_best_title, or /set_engagement_title to customize these settings"
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /set_top_count

Sets the number of users to display in the report leaderboard. This controls how many 
top-performing users are shown in the generated reports. Only group administrators 
can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_top_count 10
```

**Parameters:**
- count (required): Positive integer representing number of users to show in leaderboard
- Validation: Must be a positive integer (regex: /^[1-9][0-9]*$/)

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: No state management required
- Flow: Single-step command execution with parameter validation

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

**User Messages:**
- Success: "Top count set to [number]."
- Error (Missing parameter): "Please provide a valid number of users to show in the report leaderboard (e.g. /set_top_count 10)."
- Error (Invalid format): "Invalid number format. Please provide a valid number of users to show in the report leaderboard (e.g. /set_top_count 10)."
- Error (Non-admin): "Only admins can set the top count."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /get_top_count

Retrieves and displays the current number of users configured to show in the report 
leaderboard. Shows either the configured value or indicates default value (10) is being used.

- Persists configuration in the database for future use

**Usage:**
```
/get_top_count
```

**Parameters:**
- None required

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view top count configuration
- States: No state management required
- Flow: Single-step command execution with configuration retrieval

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

**User Messages:**
- Success (Configured): "Top count is set to [number]."
- Success (Default): "No top count set (using default value of 10). Please set the top count using /set_top_count <count>"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Related Pages

- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Project Configuration](project-configuration) - Customize project metadata including name, description, logo, and URLs for reports.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
