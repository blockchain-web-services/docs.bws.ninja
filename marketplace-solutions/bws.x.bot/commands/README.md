# X Bot Commands

[Home](../) > Commands

## Command Reference

Complete reference for all 73 X Bot commands organized by functional category.

{% hint style="info" %}
Use the sidebar navigation to browse categories, or use the search feature to find specific commands.
{% endhint %}

### Navigation by Category

| Category                      | Count | Page                                                                                                                                                                |
| ----------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Filter Setup**              | 20    | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md)              |
| **Basic Commands**            | 4     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/basic-commands/README.md)            |
| **Advanced Filtering**        | 3     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/advanced-filtering/README.md)        |
| **Project Configuration**     | 10    | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md)     |
| **Raid Commands**             | 11    | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md)             |
| **Schedule Management**       | 3     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/schedule-management/README.md)       |
| **Calendar & Time**           | 2     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/calendar-and-time/README.md)         |
| **Reports**                   | 2     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/reports/README.md)                   |
| **Leaderboard Customization** | 10    | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md) |
| **Topic Management**          | 2     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/topic-management/README.md)          |
| **Admin**                     | 1     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/admin/README.md)                     |
| **Subscription & Credits**    | 5     | [View Commands](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/subscription-and-credits/README.md)  |

### Common Tasks

#### First Time Setup

1. [/start](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/basic-commands/README.md#start) - Initialize the bot for your group
2. [/add\_accounts](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#add_accounts) - Add X accounts to track
3. [/set\_project\_name](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#set_project_name) - Configure project name
4. [/recreate](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/reports/README.md#recreate) - Generate your first analytics report

#### Daily Operations

* [/report](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/reports/README.md#report) - View latest performance analytics
* [/raidx](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#raidx) - Start a new engagement raid
* [/raid\_status](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#raid_status) - Check active raid progress

#### Advanced Configuration

* [/set\_x\_filtering](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/advanced-filtering/README.md#set_x_filtering) - Create named filters for complex tracking
* [/set\_schedule](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/schedule-management/README.md#set_schedule) - Automate report generation
* [/set\_points](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#set_points) - Customize engagement scoring

### All Commands by Category

#### Filter Setup (20 commands)

Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.

**Commands:**

* [/list\_filters](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#list_filters) - Lists all configured filters for the current group, showing their names and a summary of what each.
* [/show\_filter](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#show_filter) - Displays the complete configuration of a filter including all tracked accounts, keywords, cashtags,.
* [/add\_accounts](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#add_accounts) - Adds one or more X (Twitter) accounts to track.
* [/add\_keywords](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#add_keywords) - Adds keywords or phrases to track in X posts.
* [/add\_cashtags](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#add_cashtags) - Adds cashtags (token symbols) to track in X posts.
* [/add\_mentions](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#add_mentions) - Adds X handles to track when they are mentioned in posts.
* [/add\_excludes](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#add_excludes) - Adds keywords or phrases to exclude from tracking.
* [/add\_ignore](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#add_ignore) - Adds X accounts to ignore.
* [/remove\_accounts](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#remove_accounts) - Removes specific X accounts from tracking.
* [/remove\_keywords](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#remove_keywords) - Removes specific keywords or phrases from tracking.
* [/remove\_cashtags](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#remove_cashtags) - Removes specific cashtags from tracking.
* [/remove\_mentions](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#remove_mentions) - Removes X handles from mention tracking.
* [/remove\_excludes](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#remove_excludes) - Removes keywords from the exclusion list.
* [/remove\_ignore](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#remove_ignore) - Removes X accounts from the ignore list.
* [/clear\_accounts](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#clear_accounts) - Removes ALL tracked accounts from the filter.
* [/clear\_keywords](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#clear_keywords) - Removes ALL keywords from the filter.
* [/clear\_cashtags](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#clear_cashtags) - Removes ALL cashtags from the filter.
* [/clear\_mentions](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#clear_mentions) - Removes ALL mentions from the filter.
* [/clear\_excludes](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#clear_excludes) - Removes ALL excluded keywords from the filter.
* [/clear\_ignore](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/filter-setup/README.md#clear_ignore) - Removes ALL ignored accounts from the filter.

***

#### Basic Commands (4 commands)

Essential bot operations including help, initialization, and status checks.

**Commands:**

* [/help](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/basic-commands/README.md#help) - Displays a complete list of available bot commands and their descriptions.
* [/start](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/basic-commands/README.md#start) - Initializes the bot and provides welcome messages.
* [/status](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/basic-commands/README.md#status) - Checks if the bot is operational and running properly in your group.
* [/get\_chatid](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/basic-commands/README.md#get_chatid) - Displays your Telegram group's unique chat ID.

***

#### Advanced Filtering (3 commands)

Create named filters for complex tracking scenarios and multi-project management.

**Commands:**

* [/set\_x\_filtering](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/advanced-filtering/README.md#set_x_filtering) - Creates advanced named filters with complex X API query syntax.
* [/get\_x\_filtering](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/advanced-filtering/README.md#get_x_filtering) - Lists all advanced named filters configured for your group.
* [/delete\_x\_filtering](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/advanced-filtering/README.md#delete_x_filtering) - Deletes advanced named filters created with /set\_x\_filtering.

***

#### Project Configuration (10 commands)

Customize project metadata including name, description, logo, and URLs for reports.

**Commands:**

* [/set\_project\_name](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#set_project_name) - Sets your project or community name that will appear in all generated reports, leaderboards, and on the.
* [/get\_project\_name](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#get_project_name) - Displays the current project name configured for your community.
* [/set\_project\_description](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#set_project_description) - Sets a short description of your project that appears in reports and on the website.
* [/get\_project\_description](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#get_project_description) - Displays the current project description configured for your community.
* [/set\_project\_long\_description](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#set_project_long_description) - Sets a detailed, comprehensive description of your project for the website dashboard.
* [/get\_project\_long\_description](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#get_project_long_description) - Displays the current detailed project description configured for the website dashboard.
* [/set\_project\_logo](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#set_project_logo) - Uploads your project logo that will appear on reports and the website dashboard.
* [/get\_project\_logo](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#get_project_logo) - Displays the URL of your currently configured project logo.
* [/set\_project\_urls](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#set_project_urls) - Sets important links for your project including website, social media, documentation, and other resources.
* [/get\_project\_urls](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/project-configuration/README.md#get_project_urls) - Displays all project URLs currently configured for your community.

***

#### Raid Commands (11 commands)

Coordinate X (Twitter) engagement raids to amplify post visibility and reach.

**Commands:**

* [/raidx](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#raidx) - Launches a coordinated community raid on an X (Twitter) post to boost engagement.
* [/raid\_status](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#raid_status) - Displays real-time progress of active raids, showing current engagement numbers vs.
* [/raid\_stop](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#raid_stop) - Cancels an active raid immediately, stopping progress tracking and notifications.
* [/raid\_history](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#raid_history) - Displays a list of previous raids with their completion status, targets, and results.
* [/set\_raid\_defaults](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#set_raid_defaults) - Configures default settings for all future raids including target engagement numbers, duration, auto-mute behavior,.
* [/get\_raid\_defaults](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#get_raid_defaults) - Displays the current default raid settings including target numbers for all engagement types, default duration,.
* [/set\_raid\_message\_behavior](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#set_raid_message_behavior) - Controls how the bot updates raid progress messages in the chat.
* [/get\_raid\_message\_behavior](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#get_raid_message_behavior) - Shows the currently configured raid message update mode (edit, repost, or pin) and explains what that mode does.
* [/set\_raid\_image](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#set_raid_image) - Uploads a custom image that appears in all raid announcement messages for your community.
* [/auto\_raid\_config](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#auto_raid_config) - Configures automatic raids that trigger for the "Best Tweet of the Day" selected during daily report generation.
* [/get\_auto\_raid\_config](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/raid-commands/README.md#get_auto_raid_config) - Displays the current auto-raid configuration including whether it's enabled, the raid duration, start delay after.

***

#### Schedule Management (3 commands)

Configure automated report generation schedules with custom intervals.

**Commands:**

* [/set\_schedule](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/schedule-management/README.md#set_schedule) - Sets a schedule for when reports should be automatically generated.
* [/get\_schedule](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/schedule-management/README.md#get_schedule) - Retrieves and displays the current scheduled time for automatic report generation.
* [/delete\_schedule](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/schedule-management/README.md#delete_schedule) - Removes the configured daily schedule for automatic report generation.

***

#### Calendar & Time (2 commands)

Manage calendar settings and time periods for report generation cycles.

**Commands:**

* [/set\_calendar](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/calendar-and-time/README.md#set_calendar) - Sets up a recurring calendar schedule for automatic report generation.
* [/get\_calendar](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/calendar-and-time/README.md#get_calendar) - Displays the current calendar schedule configuration for automatic reports, showing the start date and how often.

***

#### Reports (2 commands)

Generate and manage performance analytics reports for tracked X content.

**Commands:**

* [/report](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/reports/README.md#report) - Displays the most recently generated leaderboard report for your community.
* [/recreate](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/reports/README.md#recreate) - Triggers immediate generation of a fresh report by fetching latest X (Twitter) data and creating new leaderboards.

***

#### Leaderboard Customization (10 commands)

Customize scoring points, colors, titles, and display settings for leaderboard reports.

**Commands:**

* [/set\_points](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#set_points) - Sets the scoring multipliers for engagement metrics (Likes, Retweets, Replies, Quotes, Views).
* [/get\_points](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#get_points) - Retrieves and displays the current scoring multipliers for engagement metrics.
* [/set\_colors](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#set_colors) - Sets the HTML colors for displaying engagement metrics (Likes, Retweets, Replies, Quotes, Views).
* [/get\_colors](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#get_colors) - Retrieves and displays the current HTML color configuration for engagement metrics.
* [/set\_top\_title](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#set_top_title) - Sets the title text and color for the main leaderboard section in generated reports.
* [/set\_best\_title](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#set_best_title) - Sets the title text and color for the best tweet section in generated reports.
* [/set\_engagement\_title](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#set_engagement_title) - Sets the title text and color for the engagement scoring section in generated reports.
* [/get\_titles](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#get_titles) - Retrieves and displays all current title configurations for the report sections including.
* [/set\_top\_count](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#set_top_count) - Sets the number of users to display in the report leaderboard.
* [/get\_top\_count](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/leaderboard-customization/README.md#get_top_count) - Retrieves and displays the current number of users configured to show in the report.

***

#### Topic Management (2 commands)

Configure Telegram topic/thread settings for bot operation.

**Commands:**

* [/set\_topic](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/topic-management/README.md#set_topic) - Configures which forum topic (thread) the bot should send reports to in Telegram groups that use forum-style topics.
* [/get\_topic](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/topic-management/README.md#get_topic) - Displays which forum topic (thread) is currently configured to receive bot reports.

***

#### Admin (1 commands)

Administrative functions for managing bot notifications and permissions.

**Commands:**

* [/add\_admin](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/admin/README.md#add_admin) - Designates specific group administrators to receive important bot notifications via private messages, such as.

***

#### Subscription & Credits (5 commands)

Manage billing, subscriptions, credits, and usage tracking.

**Commands:**

* [/subscription](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/subscription-and-credits/README.md#subscription) - Provides access to Stripe customer portal for subscription management including billing history,.
* [/buy](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/subscription-and-credits/README.md#buy) - Initiates the purchase process for X Bot Professional subscription.
* [/get\_credits](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/subscription-and-credits/README.md#get_credits) - Displays the current credit usage and availability for the bot.
* [/payment\_success](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/subscription-and-credits/README.md#payment_success) - Handles successful payment confirmation after Stripe checkout completion.
* [/payment\_cancelled](https://github.com/blockchain-web-services/docs.bws.ninja/blob/master/marketplace-solutions/bws.x.bot/commands/subscription-and-credits/README.md#payment_cancelled) - Handles payment cancellation when users exit Stripe checkout without completing payment.

***
