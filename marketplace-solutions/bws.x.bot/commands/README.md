[Home](../README.md) > Commands

# Command Reference

Complete reference for all 73 X Bot commands organized by functional category.

{% hint style="info" %}
Use the sidebar navigation to browse categories, or use the search feature to find specific commands.
{% endhint %}

## Navigation by Category

| Category | Count | Page |
|----------|-------|------|
| **Basic Commands** | 4 | [View Commands](basic-commands.md) |
| **Quick Filter Management** | 20 | [View Commands](quick-filters.md) |
| **Advanced Filtering** | 3 | [View Commands](advanced-filtering.md) |
| **Project Configuration** | 10 | [View Commands](project-configuration.md) |
| **Raid Commands** | 11 | [View Commands](raid-commands.md) |
| **Schedule Management** | 3 | [View Commands](schedule-management.md) |
| **Calendar &amp; Time** | 2 | [View Commands](calendar-and-time.md) |
| **Reports** | 2 | [View Commands](reports.md) |
| **Leaderboard Customization** | 10 | [View Commands](leaderboard-customization.md) |
| **Topic Management** | 2 | [View Commands](topic-management.md) |
| **Admin** | 1 | [View Commands](admin.md) |
| **Subscription &amp; Credits** | 5 | [View Commands](subscription-and-credits.md) |

## Common Tasks

### First Time Setup
1. [/start](basic-commands.md#start) - Initialize the bot for your group
2. [/add_accounts](quick-filters.md#add_accounts) - Add X accounts to track
3. [/set_project_name](project-configuration.md#set_project_name) - Configure project name
4. [/recreate](reports.md#recreate) - Generate your first analytics report

### Daily Operations
- [/report](reports.md#report) - View latest performance analytics
- [/raidx](raid-commands.md#raidx) - Start a new engagement raid
- [/raid_status](raid-commands.md#raid_status) - Check active raid progress

### Advanced Configuration
- [/set_x_filtering](advanced-filtering.md#set_x_filtering) - Create named filters for complex tracking
- [/set_schedule](schedule-management.md#set_schedule) - Automate report generation
- [/set_points](leaderboard-customization.md#set_points) - Customize engagement scoring

## All Commands by Category

### Basic Commands (4 commands)

Essential bot operations including help, initialization, and status checks.

**Commands:**
- [/help](basic-commands.md#help) - Displays available bot commands and their descriptions.
- [/start](basic-commands.md#start) - Bot initialization command that handles different workflows based on context and user state.
- [/status](basic-commands.md#status) - Checks the bot&#x27;s operational status and provides basic information about bot availability.
- [/get_chatid](basic-commands.md#get_chatid) - Returns the chat ID of the group where the command is executed.

---

### Quick Filter Management (20 commands)

Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.

**Commands:**
- [/list_filters](quick-filters.md#list_filters) - Lists all filters for the current chat.
- [/show_filter](quick-filters.md#show_filter) - Shows the current configuration of the default filter.
- [/add_accounts](quick-filters.md#add_accounts) - Parse filter parameter from command arguments Looks for filter&#x3D;name pattern and extracts it @param {string[]} args - Command arguments.
- [/add_keywords](quick-filters.md#add_keywords) - Add keywords to the filter configuration.
- [/add_cashtags](quick-filters.md#add_cashtags) - Add cashtags to the filter configuration.
- [/add_mentions](quick-filters.md#add_mentions) - Add mentions to the filter configuration.
- [/add_excludes](quick-filters.md#add_excludes) - Add excludes to the filter configuration.
- [/add_ignore](quick-filters.md#add_ignore) - Add ignore to the filter configuration.
- [/remove_accounts](quick-filters.md#remove_accounts) - Removes accounts from the default filter.
- [/remove_keywords](quick-filters.md#remove_keywords) - Remove keywords from the filter configuration.
- [/remove_cashtags](quick-filters.md#remove_cashtags) - Remove cashtags from the filter configuration.
- [/remove_mentions](quick-filters.md#remove_mentions) - Remove mentions from the filter configuration.
- [/remove_excludes](quick-filters.md#remove_excludes) - Remove excludes from the filter configuration.
- [/remove_ignore](quick-filters.md#remove_ignore) - Remove ignore from the filter configuration.
- [/clear_accounts](quick-filters.md#clear_accounts) - Clear all accounts from the filter.
- [/clear_keywords](quick-filters.md#clear_keywords) - Clear all keywords from the filter.
- [/clear_cashtags](quick-filters.md#clear_cashtags) - Clear all cashtags from the filter.
- [/clear_mentions](quick-filters.md#clear_mentions) - Clear all mentions from the filter.
- [/clear_excludes](quick-filters.md#clear_excludes) - Clear all excludes from the filter.
- [/clear_ignore](quick-filters.md#clear_ignore) - Clear all ignore from the filter.

---

### Advanced Filtering (3 commands)

Create named filters for complex tracking scenarios and multi-project management.

**Commands:**
- [/set_x_filtering](advanced-filtering.md#set_x_filtering) - Sets up monitoring filters for X (Twitter) content that will be tracked and included in reports.
- [/get_x_filtering](advanced-filtering.md#get_x_filtering) - Retrieves and displays all currently configured X (Twitter) monitoring filters for the group.
- [/delete_x_filtering](advanced-filtering.md#delete_x_filtering) - Deletes specific X (Twitter) monitoring filters or all filters for the group.

---

### Project Configuration (10 commands)

Customize project metadata including name, description, logo, and URLs for reports.

**Commands:**
- [/set_project_name](project-configuration.md#set_project_name) - Sets the project name for the community.
- [/get_project_name](project-configuration.md#get_project_name) - Retrieves and displays the current project name.
- [/set_project_description](project-configuration.md#set_project_description) - Sets the project description for the community.
- [/get_project_description](project-configuration.md#get_project_description) - Retrieves and displays the current project description.
- [/set_project_long_description](project-configuration.md#set_project_long_description) - Sets the detailed project description for the community.
- [/get_project_long_description](project-configuration.md#get_project_long_description) - Retrieves the current detailed project description.
- [/set_project_logo](project-configuration.md#set_project_logo) - Initiates the project logo upload flow.
- [/get_project_logo](project-configuration.md#get_project_logo) - Retrieves and displays the current project logo URL.
- [/set_project_urls](project-configuration.md#set_project_urls) - Sets project URLs (website, social media, documentation, etc.
- [/get_project_urls](project-configuration.md#get_project_urls) - Retrieves the current project URLs.

---

### Raid Commands (11 commands)

Coordinate X (Twitter) engagement raids to amplify post visibility and reach.

**Commands:**
- [/raidx](raid-commands.md#raidx) - Starts a new raid on an X (Twitter) post.
- [/raid_status](raid-commands.md#raid_status) - Check current raid progress.
- [/raid_stop](raid-commands.md#raid_stop) - Stops an active raid before completion.
- [/raid_history](raid-commands.md#raid_history) - Show past raids.
- [/set_raid_defaults](raid-commands.md#set_raid_defaults) - Configure default raid settings.
- [/get_raid_defaults](raid-commands.md#get_raid_defaults) - View current raid settings.
- [/set_raid_message_behavior](raid-commands.md#set_raid_message_behavior) - Configure how raid status messages are updated (edit/repost/pin).
- [/get_raid_message_behavior](raid-commands.md#get_raid_message_behavior) - View current raid message update behavior.
- [/set_raid_image](raid-commands.md#set_raid_image) - Initiates the raid image upload flow.
- [/auto_raid_config](raid-commands.md#auto_raid_config) - Configure automatic raid for best tweet of the day.
- [/get_auto_raid_config](raid-commands.md#get_auto_raid_config) - View current auto-raid settings.

---

### Schedule Management (3 commands)

Configure automated report generation schedules with custom intervals.

**Commands:**
- [/set_schedule](schedule-management.md#set_schedule) - Sets a schedule for when reports should be automatically generated.
- [/get_schedule](schedule-management.md#get_schedule) - Retrieves and displays the current scheduled time for automatic report generation.
- [/delete_schedule](schedule-management.md#delete_schedule) - Removes the configured daily schedule for automatic report generation.

---

### Calendar &amp; Time (2 commands)

Manage calendar settings and time periods for report generation cycles.

**Commands:**
- [/set_calendar](calendar-and-time.md#set_calendar) - Configures the start date and cadence (period) for report generation.
- [/get_calendar](calendar-and-time.md#get_calendar) - Retrieves and displays the current calendar configuration including start date and cadence.

---

### Reports (2 commands)

Generate and manage performance analytics reports for tracked X content.

**Commands:**
- [/report](reports.md#report) - Displays the last generated report for the group.
- [/recreate](reports.md#recreate) - Forces the generation of a new report by triggering the tweet fetching and report generation.

---

### Leaderboard Customization (10 commands)

Customize scoring points, colors, titles, and display settings for leaderboard reports.

**Commands:**
- [/set_points](leaderboard-customization.md#set_points) - Sets the scoring multipliers for engagement metrics (Likes, Retweets, Replies, Quotes, Views).
- [/get_points](leaderboard-customization.md#get_points) - Retrieves and displays the current scoring multipliers for engagement metrics.
- [/set_colors](leaderboard-customization.md#set_colors) - Sets the HTML colors for displaying engagement metrics (Likes, Retweets, Replies, Quotes, Views).
- [/get_colors](leaderboard-customization.md#get_colors) - Retrieves and displays the current HTML color configuration for engagement metrics.
- [/set_top_title](leaderboard-customization.md#set_top_title) - Sets the title text and color for the main leaderboard section in generated reports.
- [/set_best_title](leaderboard-customization.md#set_best_title) - Sets the title text and color for the best tweet section in generated reports.
- [/set_engagement_title](leaderboard-customization.md#set_engagement_title) - Sets the title text and color for the engagement scoring section in generated reports.
- [/get_titles](leaderboard-customization.md#get_titles) - Retrieves and displays all current title configurations for the report sections including.
- [/set_top_count](leaderboard-customization.md#set_top_count) - Sets the number of users to display in the report leaderboard.
- [/get_top_count](leaderboard-customization.md#get_top_count) - Retrieves and displays the current number of users configured to show in the report.

---

### Topic Management (2 commands)

Configure Telegram topic/thread settings for bot operation.

**Commands:**
- [/set_topic](topic-management.md#set_topic) - Sets the specific topic (forum thread) where the bot should send reports in Telegram groups.
- [/get_topic](topic-management.md#get_topic) - Retrieves and displays the currently configured topic (forum thread) where the bot.

---

### Admin (1 commands)

Administrative functions for managing bot notifications and permissions.

**Commands:**
- [/add_admin](admin.md#add_admin) - Designates specific group administrators to receive private bot notifications (e.

---

### Subscription &amp; Credits (5 commands)

Manage billing, subscriptions, credits, and usage tracking.

**Commands:**
- [/subscription](subscription-and-credits.md#subscription) - Provides access to Stripe customer portal for subscription management including billing history,.
- [/buy](subscription-and-credits.md#buy) - Initiates the purchase process for X Bot Professional subscription.
- [/get_credits](subscription-and-credits.md#get_credits) - Displays the current credit usage and availability for the bot.
- [/payment_success](subscription-and-credits.md#payment_success) - Handles successful payment confirmation after Stripe checkout completion.
- [/payment_cancelled](subscription-and-credits.md#payment_cancelled) - Handles payment cancellation when users exit Stripe checkout without completing payment.

---


## Need Help?

- 💬 Join our [Telegram Support Group](https://t.me/bws_xbot_support)
- 🏠 Return to [Home](../README.md)
