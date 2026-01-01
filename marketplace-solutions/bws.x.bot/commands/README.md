[Home](../) > Commands

# Command Reference

Complete reference for all 73 X Bot commands organized by functional category.

{% hint style="info" %}
Use the sidebar navigation to browse categories, or use the search feature to find specific commands.
{% endhint %}

## Navigation by Category

| Category | Count | Page |
|----------|-------|------|
| **Filter Setup** | 20 | [View Commands](filter-setup) |
| **Basic Commands** | 4 | [View Commands](basic-commands) |
| **Advanced Filtering** | 3 | [View Commands](advanced-filtering) |
| **Project Configuration** | 10 | [View Commands](project-configuration) |
| **Raid Commands** | 11 | [View Commands](raid-commands) |
| **Schedule Management** | 3 | [View Commands](schedule-management) |
| **Calendar &amp; Time** | 2 | [View Commands](calendar-and-time) |
| **Reports** | 2 | [View Commands](reports) |
| **Leaderboard Customization** | 10 | [View Commands](leaderboard-customization) |
| **Topic Management** | 2 | [View Commands](topic-management) |
| **Admin** | 1 | [View Commands](admin) |
| **Subscription &amp; Credits** | 5 | [View Commands](subscription-and-credits) |

## Common Tasks

### First Time Setup
1. [/start](basic-commands#start) - Initialize the bot for your group
2. [/add_accounts](filter-setup#add_accounts) - Add X accounts to track
3. [/set_project_name](project-configuration#set_project_name) - Configure project name
4. [/recreate](reports#recreate) - Generate your first analytics report

### Daily Operations
- [/report](reports#report) - View latest performance analytics
- [/raidx](raid-commands#raidx) - Start a new engagement raid
- [/raid_status](raid-commands#raid_status) - Check active raid progress

### Advanced Configuration
- [/set_x_filtering](advanced-filtering#set_x_filtering) - Create named filters for complex tracking
- [/set_schedule](schedule-management#set_schedule) - Automate report generation
- [/set_points](leaderboard-customization#set_points) - Customize engagement scoring

## All Commands by Category

### Filter Setup (20 commands)

Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.

**Commands:**
- [/list_filters](filter-setup#list_filters) - Lists all configured filters for the current group, showing their names and a summary of what each.
- [/show_filter](filter-setup#show_filter) - Displays the complete configuration of a filter including all tracked accounts, keywords, cashtags,.
- [/add_accounts](filter-setup#add_accounts) - Adds one or more X (Twitter) accounts to track.
- [/add_keywords](filter-setup#add_keywords) - Adds keywords or phrases to track in X posts.
- [/add_cashtags](filter-setup#add_cashtags) - Adds cashtags (token symbols) to track in X posts.
- [/add_mentions](filter-setup#add_mentions) - Adds X handles to track when they are mentioned in posts.
- [/add_excludes](filter-setup#add_excludes) - Adds keywords or phrases to exclude from tracking.
- [/add_ignore](filter-setup#add_ignore) - Adds X accounts to ignore.
- [/remove_accounts](filter-setup#remove_accounts) - Removes specific X accounts from tracking.
- [/remove_keywords](filter-setup#remove_keywords) - Removes specific keywords or phrases from tracking.
- [/remove_cashtags](filter-setup#remove_cashtags) - Removes specific cashtags from tracking.
- [/remove_mentions](filter-setup#remove_mentions) - Removes X handles from mention tracking.
- [/remove_excludes](filter-setup#remove_excludes) - Removes keywords from the exclusion list.
- [/remove_ignore](filter-setup#remove_ignore) - Removes X accounts from the ignore list.
- [/clear_accounts](filter-setup#clear_accounts) - Removes ALL tracked accounts from the filter.
- [/clear_keywords](filter-setup#clear_keywords) - Removes ALL keywords from the filter.
- [/clear_cashtags](filter-setup#clear_cashtags) - Removes ALL cashtags from the filter.
- [/clear_mentions](filter-setup#clear_mentions) - Removes ALL mentions from the filter.
- [/clear_excludes](filter-setup#clear_excludes) - Removes ALL excluded keywords from the filter.
- [/clear_ignore](filter-setup#clear_ignore) - Removes ALL ignored accounts from the filter.

---

### Basic Commands (4 commands)

Essential bot operations including help, initialization, and status checks.

**Commands:**
- [/help](basic-commands#help) - Displays available bot commands and their descriptions.
- [/start](basic-commands#start) - Bot initialization command that handles different workflows based on context and user state.
- [/status](basic-commands#status) - Checks the bot&#x27;s operational status and provides basic information about bot availability.
- [/get_chatid](basic-commands#get_chatid) - Returns the chat ID of the group where the command is executed.

---

### Advanced Filtering (3 commands)

Create named filters for complex tracking scenarios and multi-project management.

**Commands:**
- [/set_x_filtering](advanced-filtering#set_x_filtering) - Sets up monitoring filters for X (Twitter) content that will be tracked and included in reports.
- [/get_x_filtering](advanced-filtering#get_x_filtering) - Retrieves and displays all currently configured X (Twitter) monitoring filters for the group.
- [/delete_x_filtering](advanced-filtering#delete_x_filtering) - Deletes specific X (Twitter) monitoring filters or all filters for the group.

---

### Project Configuration (10 commands)

Customize project metadata including name, description, logo, and URLs for reports.

**Commands:**
- [/set_project_name](project-configuration#set_project_name) - Sets the project name for the community.
- [/get_project_name](project-configuration#get_project_name) - Retrieves and displays the current project name.
- [/set_project_description](project-configuration#set_project_description) - Sets the project description for the community.
- [/get_project_description](project-configuration#get_project_description) - Retrieves and displays the current project description.
- [/set_project_long_description](project-configuration#set_project_long_description) - Sets the detailed project description for the community.
- [/get_project_long_description](project-configuration#get_project_long_description) - Retrieves the current detailed project description.
- [/set_project_logo](project-configuration#set_project_logo) - Initiates the project logo upload flow.
- [/get_project_logo](project-configuration#get_project_logo) - Retrieves and displays the current project logo URL.
- [/set_project_urls](project-configuration#set_project_urls) - Sets project URLs (website, social media, documentation, etc.
- [/get_project_urls](project-configuration#get_project_urls) - Retrieves the current project URLs.

---

### Raid Commands (11 commands)

Coordinate X (Twitter) engagement raids to amplify post visibility and reach.

**Commands:**
- [/raidx](raid-commands#raidx) - Starts a new raid on an X (Twitter) post.
- [/raid_status](raid-commands#raid_status) - Check current raid progress.
- [/raid_stop](raid-commands#raid_stop) - Stops an active raid before completion.
- [/raid_history](raid-commands#raid_history) - Show past raids.
- [/set_raid_defaults](raid-commands#set_raid_defaults) - Configure default raid settings.
- [/get_raid_defaults](raid-commands#get_raid_defaults) - View current raid settings.
- [/set_raid_message_behavior](raid-commands#set_raid_message_behavior) - Configure how raid status messages are updated (edit/repost/pin).
- [/get_raid_message_behavior](raid-commands#get_raid_message_behavior) - View current raid message update behavior.
- [/set_raid_image](raid-commands#set_raid_image) - Initiates the raid image upload flow.
- [/auto_raid_config](raid-commands#auto_raid_config) - Configure automatic raid for best tweet of the day.
- [/get_auto_raid_config](raid-commands#get_auto_raid_config) - View current auto-raid settings.

---

### Schedule Management (3 commands)

Configure automated report generation schedules with custom intervals.

**Commands:**
- [/set_schedule](schedule-management#set_schedule) - Sets a schedule for when reports should be automatically generated.
- [/get_schedule](schedule-management#get_schedule) - Retrieves and displays the current scheduled time for automatic report generation.
- [/delete_schedule](schedule-management#delete_schedule) - Removes the configured daily schedule for automatic report generation.

---

### Calendar &amp; Time (2 commands)

Manage calendar settings and time periods for report generation cycles.

**Commands:**
- [/set_calendar](calendar-and-time#set_calendar) - Configures the start date and cadence (period) for report generation.
- [/get_calendar](calendar-and-time#get_calendar) - Retrieves and displays the current calendar configuration including start date and cadence.

---

### Reports (2 commands)

Generate and manage performance analytics reports for tracked X content.

**Commands:**
- [/report](reports#report) - Displays the last generated report for the group.
- [/recreate](reports#recreate) - Forces the generation of a new report by triggering the tweet fetching and report generation.

---

### Leaderboard Customization (10 commands)

Customize scoring points, colors, titles, and display settings for leaderboard reports.

**Commands:**
- [/set_points](leaderboard-customization#set_points) - Sets the scoring multipliers for engagement metrics (Likes, Retweets, Replies, Quotes, Views).
- [/get_points](leaderboard-customization#get_points) - Retrieves and displays the current scoring multipliers for engagement metrics.
- [/set_colors](leaderboard-customization#set_colors) - Sets the HTML colors for displaying engagement metrics (Likes, Retweets, Replies, Quotes, Views).
- [/get_colors](leaderboard-customization#get_colors) - Retrieves and displays the current HTML color configuration for engagement metrics.
- [/set_top_title](leaderboard-customization#set_top_title) - Sets the title text and color for the main leaderboard section in generated reports.
- [/set_best_title](leaderboard-customization#set_best_title) - Sets the title text and color for the best tweet section in generated reports.
- [/set_engagement_title](leaderboard-customization#set_engagement_title) - Sets the title text and color for the engagement scoring section in generated reports.
- [/get_titles](leaderboard-customization#get_titles) - Retrieves and displays all current title configurations for the report sections including.
- [/set_top_count](leaderboard-customization#set_top_count) - Sets the number of users to display in the report leaderboard.
- [/get_top_count](leaderboard-customization#get_top_count) - Retrieves and displays the current number of users configured to show in the report.

---

### Topic Management (2 commands)

Configure Telegram topic/thread settings for bot operation.

**Commands:**
- [/set_topic](topic-management#set_topic) - Sets the specific topic (forum thread) where the bot should send reports in Telegram groups.
- [/get_topic](topic-management#get_topic) - Retrieves and displays the currently configured topic (forum thread) where the bot.

---

### Admin (1 commands)

Administrative functions for managing bot notifications and permissions.

**Commands:**
- [/add_admin](admin#add_admin) - Designates specific group administrators to receive private bot notifications (e.

---

### Subscription &amp; Credits (5 commands)

Manage billing, subscriptions, credits, and usage tracking.

**Commands:**
- [/subscription](subscription-and-credits#subscription) - Provides access to Stripe customer portal for subscription management including billing history,.
- [/buy](subscription-and-credits#buy) - Initiates the purchase process for X Bot Professional subscription.
- [/get_credits](subscription-and-credits#get_credits) - Displays the current credit usage and availability for the bot.
- [/payment_success](subscription-and-credits#payment_success) - Handles successful payment confirmation after Stripe checkout completion.
- [/payment_cancelled](subscription-and-credits#payment_cancelled) - Handles payment cancellation when users exit Stripe checkout without completing payment.

---

