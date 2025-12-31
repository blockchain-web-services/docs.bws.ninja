# X Bot Commands Reference

> **Last Updated:** 2025-12-31
>
> This documentation is automatically generated from source code.

This reference lists all available commands for the X Bot. Commands are organized by functional category.

{% hint style="info" %}
**Admin Only** commands can only be executed by group administrators.
{% endhint %}


## Basic Commands

### /get_chatid (Admin Only)

Returns the chat ID of the group where the command is executed. Useful for debugging 
and configuration purposes. Only group administrators can execute this command.

**Usage:**
```
/get_chatid
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: No state management required
- Flow: Single-step command execution returning chat ID

**User Messages:**
- Success: "Chat ID: [chat_id_value]"
- Error (Non-admin): "Only admins can get the chat ID."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /help (Admin Only)

Displays available bot commands and their descriptions. Shows different command sets based on whether
the user is a group administrator (full command list) or regular user (limited command list).

**Usage:**
```
/help
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Check: Determines which command set to display
- States: No state management required
- Flow: Single-step command execution with different outputs based on admin status

**User Messages:**
- Success (Admin): Full command list including cashtags management (/add_cashtags, /remove_cashtags, /clear_cashtags) and raid commands
- Success (Regular User): Limited command list with basic commands (/help, /buy, /subscription, /report)
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): "An error occurred while processing the help command."

---

### /start

Bot initialization command that handles different workflows based on context and user state.
In groups, shows simple bot running message. In private messages, manages complex state-based workflows
including payment confirmation, validation codes, and bot setup guidance.

**Usage:**
```
/start` - Basic initialization
```
```
/start payment_success` - Payment confirmation workflow
```
```
/start payment_cancelled` - Payment cancellation workflow
```

**Parameters:**
- Optional: payment status parameter (payment_success, payment_cancelled)


**Workflow:**
- Execution Context: Both groups and private messages
- Group Flow: Simple "X Bot is running" message + help reference
- Private Message Flow: Complex state-based workflow management
- States Managed:
- 'waiting_for_validation_code': Shows validation code to user
- 'waiting_for_purchase': Handles payment success/failure workflows
- Multi-step Workflow: Payment process continues from /buy command through private messages

**User Messages:**
- Success (Group): "X Bot is running. Please use /help to see the available commands."
- Success (Private - Default): "Welcome to BWS X Bot!" with "➕ Add to Group" inline button
- Success (Private - Validation): "Please copy the following code: \n\n [code] \n\n and paste it in the group chat."
- Success (Payment Success): "Thank you for your payment! Your subscription is getting confirmed and activated."
- Error (Payment Failed): "Payment failed or not completed.\n\n[Contact Support Message]"
- Error (Invalid Topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /status (Admin Only)

Checks the bot's operational status and provides basic information about bot availability.
Only group administrators can execute this command.

**Usage:**
```
/status
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: No state management required
- Flow: Single-step command execution in group chat

**User Messages:**
- Success: "BWS X Bot is running.\nPlease check https://docs.bws.ninja/telegram-bots/x-bot for more information on how to set up the bot. You can use /help to see the available commands."
- Error (Non-admin): "Only admins can check the bot status."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Quick Filter Management

### /add_accounts (Admin Only)

Parse filter parameter from command arguments Looks for filter=name pattern and extracts it @param {string[]} args - Command arguments

**Usage:**
```
/add_accounts
```





---

### /add_cashtags (Admin Only)

Add cashtags to the filter configuration.

**Usage:**
```
/add_cashtags
```





---

### /add_excludes (Admin Only)

Add excludes to the filter configuration.

**Usage:**
```
/add_excludes
```





---

### /add_ignore (Admin Only)

Add ignore to the filter configuration.

**Usage:**
```
/add_ignore
```





---

### /add_keywords (Admin Only)

Add keywords to the filter configuration.

**Usage:**
```
/add_keywords
```





---

### /add_mentions (Admin Only)

Add mentions to the filter configuration.

**Usage:**
```
/add_mentions
```





---

### /clear_accounts (Admin Only)

Clear all accounts from the filter.

**Usage:**
```
/clear_accounts
```





---

### /clear_cashtags (Admin Only)

Clear all cashtags from the filter.

**Usage:**
```
/clear_cashtags
```





---

### /clear_excludes (Admin Only)

Clear all excludes from the filter.

**Usage:**
```
/clear_excludes
```





---

### /clear_ignore (Admin Only)

Clear all ignore from the filter.

**Usage:**
```
/clear_ignore
```





---

### /clear_keywords (Admin Only)

Clear all keywords from the filter.

**Usage:**
```
/clear_keywords
```





---

### /clear_mentions (Admin Only)

Clear all mentions from the filter.

**Usage:**
```
/clear_mentions
```





---

### /list_filters

Lists all filters for the current chat

**Usage:**
```
/list_filters
```





---

### /remove_accounts (Admin Only)

Removes accounts from the default filter

**Usage:**
```
/remove_accounts
```





---

### /remove_cashtags (Admin Only)

Remove cashtags from the filter configuration.

**Usage:**
```
/remove_cashtags
```





---

### /remove_excludes (Admin Only)

Remove excludes from the filter configuration.

**Usage:**
```
/remove_excludes
```





---

### /remove_ignore (Admin Only)

Remove ignore from the filter configuration.

**Usage:**
```
/remove_ignore
```





---

### /remove_keywords (Admin Only)

Remove keywords from the filter configuration.

**Usage:**
```
/remove_keywords
```





---

### /remove_mentions (Admin Only)

Remove mentions from the filter configuration.

**Usage:**
```
/remove_mentions
```





---

### /show_filter

Shows the current configuration of the default filter

**Usage:**
```
/show_filter
```





---


## Advanced Filtering

### /delete_x_filtering (Admin Only)

Deletes specific X (Twitter) monitoring filters or all filters for the group. 
Allows administrators to remove individual filters by name or clear all filters
using the wildcard "*" parameter. Only group administrators can execute this command.

**Usage:**
```
/delete_x_filtering my_kols_1` - Delete specific filter named "my_kols_1"
```
```
/delete_x_filtering *` - Delete all filtering queries for the group
```

**Parameters:**
- filter_identifier (required): 
- Specific filter name to delete individual filter
- "*" wildcard to delete all filters


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Parameter Validation: Checks for filter name or wildcard
- Existence Check: Validates filter exists before deletion
- States: No state management required
- Flow: Parameter validation → Admin check → Filter lookup → Deletion operation

**User Messages:**
- Success (Specific Filter): "Filter '[filter_name]' deleted successfully."
- Success (All Filters): "All X filtering queries deleted successfully."
- Error (Missing Parameter): "Please provide the filter name to delete or '*' to delete all. Example: /delete_x_filtering my_filter"
- Error (Filter Not Found): "Filter '[filter_name]' not found."
- Error (No Filters): "No filters found to delete."
- Error (Non-admin): "Only admins can delete X filtering."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /get_x_filtering

Retrieves and displays all currently configured X (Twitter) monitoring filters for the group.
Shows filter names and their associated query syntax, helping users understand what content
is being tracked for report generation.

**Usage:**
```
/get_x_filtering
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view filter configurations
- States: No state management required
- Flow: Single-step query retrieval and formatted display

**User Messages:**
- Success (With Filters): "Current X filtering queries:\n\n[List of numbered filters with names and queries]"
- Success (No Filters): "No X filtering queries found. Please set a query using /set_x_filtering <filter name> <filtering>"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_x_filtering (Admin Only)

Sets up monitoring filters for X (Twitter) content that will be tracked and included in reports.
Supports multiple filter types including user mentions, keywords, and account filtering.
Each filter is saved with a unique name and can contain complex query syntax.
Only group administrators can execute this command.

**Usage:**
```
/set_x_filtering my_kols_1 from:@CryptoHayes OR from:@IncomeSharks keywords:BWS mention:@BWSCommunity
```
```
/set_x_filtering project_mentions mention:@MyProject OR #MyProjectToken
```
```
/set_x_filtering trending_topics #DeFi OR #crypto OR #blockchain
```

**Parameters:**
- filter_name (required): Unique identifier for this filter configuration
- filtering_query (required): X search query syntax using supported operators
- Supported operators: from:, mention:, keywords:, OR, AND, hashtags (#), mentions (@)
- Complex queries with multiple conditions are supported


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Token Validation: Requires X token to be configured
- Parameter Parsing: Complex parsing of filter name and query syntax
- Duplicate Check: Prevents overwriting existing filters with same name
- States: No state management required
- Flow: Parameter validation → Token check → Query parsing → Database storage

**User Messages:**
- Success: "X filtering set for filter '[filter_name]' with query: [parsed_query]"
- Error (Missing X Token): "X token not set. Please set the X token using /set_x_token <token>"
- Error (Missing Parameters): "Please provide filter name and filtering query. Example: /set_x_filtering my_filter from:@user1 OR keywords:crypto"
- Error (Duplicate Filter): "Filter name '[filter_name]' already exists. Use a different name or delete the existing filter first."
- Error (Invalid Query): Various parsing error messages based on query format issues
- Error (Non-admin): "Only admins can set X filtering."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Project Configuration

### /get_project_description

Retrieves and displays the current project description. If no description is set,
displays a message indicating no project description has been configured.

**Usage:**
```
/get_project_description
```





---

### /get_project_logo

Retrieves and displays the current project logo URL. If no logo is set,
displays a message indicating no project logo has been configured.

**Usage:**
```
/get_project_logo
```





---

### /get_project_long_description

Retrieves the current detailed project description.

**Usage:**
```
/get_project_long_description
```

**Parameters:**
None




---

### /get_project_name

Retrieves and displays the current project name. If no name is set,
displays a message indicating no project name has been configured.

**Usage:**
```
/get_project_name
```





---

### /get_project_urls

Retrieves the current project URLs.

**Usage:**
```
/get_project_urls
```

**Parameters:**
None




---

### /set_project_description (Admin Only)

Sets the project description for the community. This description provides
context about the project's goals and purpose. Only group administrators 
can execute this command.

**Usage:**
```
/set_project_description A revolutionary DeFi platform for community governance
```
```
/set_project_description "Building the future of decentralized social networks"
```

**Parameters:**
- project_description (required): The description of the project




---

### /set_project_logo (Admin Only)

Initiates the project logo upload flow. After executing this command, the bot
will wait for the user to send an image file which will be saved as the project logo.
The logo is uploaded to the website S3 bucket for public access.
Only group administrators can execute this command.

**Usage:**
```
/set_project_logo
```



**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: Sets user state to 'waiting_for_project_logo' with chatId as info
- Flow: Command → Set state → Wait for photo message → Process photo → Clear state


---

### /set_project_long_description (Admin Only)

Sets the detailed project description for the community. This allows for longer,
more comprehensive project information. Only group administrators can execute this command.

**Usage:**
```
/set_project_long_description This is a comprehensive description of our project...
```

**Parameters:**
- long_description (required): The detailed description of the project




---

### /set_project_name (Admin Only)

Sets the project name for the community. This name will be displayed in reports
and on the website. Only group administrators can execute this command.

**Usage:**
```
/set_project_name My Awesome Project
```
```
/set_project_name "Community Token Project"
```

**Parameters:**
- project_name (required): The name of the project




---

### /set_project_urls (Admin Only)

Sets project URLs (website, social media, documentation, etc.). 
Accepts multiple URLs separated by spaces or commas.
Only group administrators can execute this command.

**Usage:**
```
/set_project_urls https://example.com https://twitter.com/project
```
```
/set_project_urls website.com, discord.gg/invite, github.com/project
```

**Parameters:**
- urls (required): One or more URLs separated by spaces or commas




---


## Raid Commands

### /auto_raid_config (Admin Only)

Configure automatic raid for best tweet of the day

**Usage:**
```
/auto_raid_config [settings]
```

**Parameters:**
- `enabled=yes/no` - Enable/disable auto-raid
- `duration=360` - Raid duration in minutes (default: 360 = 6 hours)
- `delay=5` - Delay before raid starts after report (default: 5 minutes)
- `likes=N` - Target likes (default: 100)
- `retweets=N` - Target retweets (default: 50)
- `replies=N` - Target replies (default: 20)
- `quotes=N` - Target quotes (default: 10)
- `bookmarks=N` - Target bookmarks (default: 50)
- `mute=yes/no` - Auto-mute chat during raid (default: no)




---

### /get_auto_raid_config

View current auto-raid settings

**Usage:**
```
/get_auto_raid_config
```





---

### /get_raid_defaults

View current raid settings

**Usage:**
```
/get_raid_defaults
```





---

### /get_raid_message_behavior

View current raid message update behavior

**Usage:**
```
/get_raid_message_behavior
```





---

### /raid_history

Show past raids

**Usage:**
```
/raid_history
```





---

### /raid_status

Check current raid progress

**Usage:**
```
/raid_status
```





---

### /raid_stop (Admin Only)

Stops an active raid before completion

**Usage:**
```
/raid_stop &lt;raid_id&gt;
```





---

### /raidx (Admin Only)

Starts a new raid on an X (Twitter) post. Allows community members to engage with the post
(likes, retweets, replies, quotes) and tracks progress toward target goals.
Only group administrators can start raids.

**Usage:**
```
/raidx https://x.com/username/status/123456
```
```
/raidx https://x.com/username/status/123456 likes=50 retweets=20
```
```
/raidx https://x.com/username/status/123456 duration=1h mute=yes
```

**Parameters:**
- `<post_url>` (required): Full X/Twitter post URL
- `likes=<number>` (optional): Target number of likes (default from settings)
- `retweets=<number>` (optional): Target number of retweets (default from settings)
- `replies=<number>` (optional): Target number of replies (default from settings)
- `quotes=<number>` (optional): Target number of quotes (default from settings)
- `bookmarks=<number>` (optional): Target number of bookmarks (default from settings)
- `duration=<time>` (optional): Raid duration (default from settings) - Format: 30m, 2h, 1d
- `mute=<yes|no>` (optional): Auto-mute chat until targets met (default: no)



**User Messages:**
- Success: Raid announcement with targets and link
- Error (Non-admin): "Only admins can start raids."
- Error (Invalid URL): "Invalid X post URL."
- Error (Raids disabled): "Raids are disabled for this chat."
- Error (Max active): "Maximum active raids reached. Please wait for current raids to complete."

---

### /set_raid_defaults (Admin Only)

Configure default raid settings

**Usage:**
```
/set_raid_defaults [settings]
```

**Parameters:**
- `likes=N` - Default target likes
- `retweets=N` - Default target retweets
- `replies=N` - Default target replies
- `quotes=N` - Default target quotes
- `bookmarks=N` - Default target bookmarks
- `duration=30m` - Default duration (e.g. 30m, 2h, 1d)
- `mute=yes/no` - Default auto-mute
- `enabled=yes/no` - Enable/disable raids




---

### /set_raid_image (Admin Only)

Initiates the raid image upload flow. After executing this command, the bot
will wait for the user to send an image file which will be saved as the raid image.
The image is uploaded to the website S3 bucket for public access and displayed
in raid announcement messages. Only group administrators can execute this command.

**Usage:**
```
/set_raid_image
```



**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: Sets user state to 'waiting_for_raid_image' with chatId as info
- Flow: Command → Set state → Wait for photo message → Process photo → Clear state

**User Messages:**
- Success (State saved): "Please send the raid image you'd like to use. This image will appear in all raid announcements for this chat."
- Success (Photo uploaded): "Raid image uploaded successfully! Your image will now appear in future raid announcements."
- Error (Non-admin): "Only admins can set the raid image."
- Error (Invalid topic): Topic-specific error message
- Error (Upload failed): "Failed to upload raid image. Please try again."

---

### /set_raid_message_behavior (Admin Only)

Configure how raid status messages are updated (edit/repost/pin)

**Usage:**
```
/set_raid_message_behavior &lt;mode&gt;
```





---


## Schedule Management

### /delete_schedule (Admin Only)

Removes the configured daily schedule for automatic report generation. Deletes the 
EventBridge rule and database entry. Only group administrators can execute this command.

**Usage:**
```
/delete_schedule
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Schedule Check: Verifies existing schedule before deletion
- States: No state management required
- Flow: Admin check → Schedule lookup → EventBridge rule deletion → Database cleanup

**User Messages:**
- Success: "Schedule deleted successfully. Reports will no longer be generated automatically at the scheduled time."
- Success (No Schedule): "No schedule found to delete."
- Error (EventBridge failure): Error details from EventBridge rule deletion
- Error (Non-admin): "Only admins can delete the schedule."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /get_schedule

Retrieves and displays the current scheduled time for automatic report generation.
Shows the configured UTC time or indicates if no schedule is set.

**Usage:**
```
/get_schedule
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view schedule configuration
- States: No state management required
- Flow: Single-step schedule retrieval and display

**User Messages:**
- Success (Configured): "Current schedule: Reports are generated daily at [HH:MM] UTC."
- Success (Not Configured): "No schedule set. Reports will be generated based on calendar settings or manually. Use /set_schedule HH:MM to set a daily schedule."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_schedule (Admin Only)

Sets a schedule for when reports should be automatically generated. Supports both simple
daily time scheduling (HH:MM format) and advanced cron expressions for complex schedules.
Creates an EventBridge rule for scheduled report generation. Only group administrators 
can execute this command.

**Usage:**
```
/set_schedule 12:30` - Generate reports daily at 12:30 UTC
```
```
/set_schedule 14:30 Mon Wed Fri` - Generate reports on Monday, Wednesday, Friday at 14:30 UTC
```
```
/set_schedule 09:00 1 7` - Generate reports on Monday (1) and Sunday (7) at 09:00 UTC
```
```
/set_schedule 16:00 Monday Wednesday` - Generate reports on Monday and Wednesday at 16:00 UTC
```
```
/set_schedule cron(0 12 ? * MON-FRI *)` - Generate reports at 12:00 UTC on weekdays only
```
```
/set_schedule cron(0 9 ? * MON *)` - Generate reports every Monday at 09:00 UTC
```

**Parameters:**
- schedule (required): Either:
- Time in HH:MM format (24-hour, UTC timezone) for daily schedules
- Time and days: HH:MM followed by day names/numbers (e.g. "14:30 Mon Wed Fri")
- AWS EventBridge cron expression for complex schedules
- Validation:
- HH:MM format with valid hours (00-23) and minutes (00-59)
- Day formats: Numbers (Monday=1-7), short names (Mon-Sun), long names (Monday-Sunday)
- Valid AWS EventBridge cron syntax: cron(Minutes Hours Day-of-month Month Day-of-week Year)


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Schedule Validation: Validates either HH:MM format or cron expression
- States: No state management required
- Flow: Parameter validation → EventBridge rule creation → Database storage

**User Messages:**
- Success (Time): "Schedule set successfully. Reports will be generated daily at [HH:MM] UTC."
- Success (Cron): "Schedule set successfully with custom cron expression: [expression]"
- Error (Missing): "Please provide a schedule (HH:MM or cron expression)"
- Error (Invalid format): "Invalid schedule format. Use HH:MM or cron expression."
- Error (EventBridge failure): Error details from EventBridge rule creation
- Error (Non-admin): "Only admins can set the schedule."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Calendar & Time

### /get_calendar

Retrieves and displays the current calendar configuration including start date and cadence 
for report generation. Shows the configured schedule or indicates if no calendar is set.

**Usage:**
```
/get_calendar
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view calendar configuration
- States: No state management required
- Flow: Single-step configuration retrieval → Parsing → Display formatting

**User Messages:**
- Success (Configured): "Calendar is set to start on [formatted_date] and repeat every [N] days.\n\nAll times are processed and displayed in UTC."
- Success (Not Configured): "No calendar set. Please set the calendar using /set_calendar <start day> <cadence in days>"
- Error (Parse Failure): "Invalid calendar format found in database. Please reconfigure using /set_calendar."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_calendar (Admin Only)

Configures the start date and cadence (period) for report generation. Sets up a calendar-based 
schedule that determines when reports are automatically generated. Only group administrators 
can execute this command.

**Usage:**
```
/set_calendar 20/06/2025 7days` - Start reports on June 20, 2025, every 7 days
```
```
/set_calendar 01/01/2025 14days` - Start reports on January 1, 2025, every 14 days
```

**Parameters:**
- start_date (required): Date in DD/MM/YYYY format (e.g., "20/06/2025")
- cadence (required): Period in "Ndays" format (e.g., "7days", "14days")


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Date Validation: Comprehensive parsing and validation of date format and future date requirement
- States: No state management required
- Flow: Parameter parsing → Date validation → Future date check → Database storage

**User Messages:**
- Success: "Calendar set to start on [formatted_date] and repeat every [N] days."
- Error (Missing params): "Please provide both start date and cadence. Example: /set_calendar 20/06/2025 7days"
- Error (Invalid date format): "Invalid date format. Please use DD/MM/YYYY format. Example: /set_calendar 20/06/2025 7days"
- Error (Invalid cadence): "Invalid cadence format. Please use format like '7days' or '14days'. Example: /set_calendar 20/06/2025 7days"
- Error (Past date): "Start date must be in the future. Please provide a future date."
- Error (Non-admin): "Only admins can set the calendar."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Reports

### /recreate (Admin Only)

Forces the generation of a new report by triggering the tweet fetching and report generation 
process. This command consumes credits and can optionally delete existing report history.
Only group administrators can execute this command, and requires X token and filtering 
queries to be configured.

**Usage:**
```
/recreate` - Generate new report keeping existing data
```
```
/recreate delete-history` - Generate new report and delete all existing tweets/reports
```

**Parameters:**
- Optional: `delete-history` flag to remove existing report data from S3 storage


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- Prerequisites: X Token must be configured, at least one filtering query must exist
- Future Date Check: Cannot recreate if period start date is in the future
- States: No state management required (triggers external workflow)
- Flow: Validation → Optional S3 cleanup → Step Functions trigger

**User Messages:**
- Success: "Recreating report (new credits will be consumed)... please wait."
- Error (Non-admin): "Only admins can recreate the report."
- Error (No X Token): "X token not set. Please set the X token using /set_x_token <token>"
- Error (No Queries): "No queries found. Please set a query using /set_x_filtering <filter name> <filtering>"
- Error (Future Start Date): "Cannot recreate report. The calendar period start date ([date]) is set in the future. The report generation will automatically begin when the period starts."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /report

Displays the last generated report for the group. Retrieves and sends the most recent 
leaderboard report including both image and text components. The report shows user 
engagement statistics and rankings based on configured scoring rules.

**Usage:**
```
/report
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- No Admin Check: Any user can view reports
- States: No state management required
- Flow: Single-step report retrieval and display
- Content: Sends both image (chart) and text (formatted data) versions

**User Messages:**
- Success: Sends report image followed by markdown-formatted text report
- Success (No Reports): Message indicating no reports are available yet
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Leaderboard Customization

### /get_colors

Retrieves and displays the current HTML color configuration for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard reports. Shows either 
configured colors or default values if none are set.

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

**User Messages:**
- Success (Configured): "Colors setup.\n\nLikes: [color1]\nRetweets: [color2]\nReplies: [color3]\nQuotes: [color4]\nViews: [color5]"
- Success (Default): "Colors setup (using default values).\n\nLikes: #7dc9ad\nRetweets: #87a861\nReplies: #d9feb9\nQuotes: #f3fd9c\nViews: #92f327"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /get_points

Retrieves and displays the current scoring multipliers for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard calculations. 
Shows either configured values or indicates default values are being used.

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

**User Messages:**
- Success (Configured): "Points setup.\n\nLikes: [value] per each like\nRetweets: [value] per each retweet\nReplies: [value] per each reply\nQuotes: [value] per each quote\nViews: [value] per each view"
- Success (Default): "No points set (using default values). Please set the points using /set_points <likes> <retweets> <replies> <quotes> <views>"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /get_titles

Retrieves and displays all current title configurations for the report sections including
top title (main leaderboard), best title (best tweet), and engagement title (scoring rules).
Shows either configured values or default values for each section.

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

**User Messages:**
- Success: "🎨 Current Title Configuration:\n\n**📊 Top Title (Main Leaderboard):**\nText: \"[text]\"\nColor: `[color]`\n\n**🏆 Best Title (Best Tweet):**\nText: \"[text]\"\nColor: `[color]`\n\n**⚡ Engagement Title (Scoring Rules):**\nText: \"[text]\"\nColor: `[color]`\n\n💡 Use /set_top_title, /set_best_title, or /set_engagement_title to customize these settings"
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /get_top_count

Retrieves and displays the current number of users configured to show in the report 
leaderboard. Shows either the configured value or indicates default value (10) is being used.

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

**User Messages:**
- Success (Configured): "Top count is set to [number]."
- Success (Default): "No top count set (using default value of 10). Please set the top count using /set_top_count <count>"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_best_title (Admin Only)

Sets the title text and color for the best tweet section in generated reports.
Allows customization of the heading displayed above the highlighted best tweet.
Only group administrators can execute this command.

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

**User Messages:**
- Success: "✅ Best Title Updated Successfully!\n\n**New Best Title:** \"[title_text]\"\n**Color:** `[color]`\n\n💡 Use /get_titles to view all current title settings"
- Error (Missing parameters): "Please provide both title text and color. Example: /set_best_title \"Tweet of the Day\" #ff6b6b"
- Error (Empty title): "Title text cannot be empty. Example: /set_best_title \"Tweet of the Day\" #ff6b6b"
- Error (Invalid color): "Invalid hex color format. Please use format: #RRGGBB (e.g., #476a30)"
- Error (Non-admin): "Only group administrators can change the best title settings."
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_colors (Admin Only)

Sets the HTML colors for displaying engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
in the leaderboard reports. Colors are stored as hexadecimal values and used for report generation.
Only group administrators can execute this command.

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

**User Messages:**
- Success: "New colors set.\n\nLikes: [color1]\nRetweets: [color2]\nReplies: [color3]\nQuotes: [color4]\nViews: [color5]"
- Error (Missing parameters): "Please provide 5 HTML hex colors. Example: /set_colors #536352 #536354 #536351 #536357 #536359"
- Error (Invalid format): "Invalid color format. Please provide valid HTML hex colors (e.g., #FF0000 or #F00).\n\nExample: /set_colors #536352 #536354 #536351 #536357 #536359"
- Error (Non-admin): "Only admins can set the colors."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_engagement_title (Admin Only)

Sets the title text and color for the engagement scoring section in generated reports.
Allows customization of the heading displayed above engagement scoring rules and metrics.
Only group administrators can execute this command.

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

**User Messages:**
- Success: "✅ Engagement Title Updated Successfully!\n\n**New Engagement Title:** \"[title_text]\"\n**Color:** `[color]`\n\n💡 Use /get_titles to view all current title settings"
- Error (Missing parameters): "Please provide both title text and color. Example: /set_engagement_title \"Scoring Rules\" #28a745"
- Error (Empty title): "Title text cannot be empty. Example: /set_engagement_title \"Scoring Rules\" #28a745"
- Error (Invalid color): "Invalid hex color format. Please use format: #RRGGBB (e.g., #476a30)"
- Error (Non-admin): "Only group administrators can change the engagement title settings."
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_points (Admin Only)

Sets the scoring multipliers for engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
used in leaderboard calculations. These multipliers determine how many points each type of 
engagement contributes to a user's total score. Only group administrators can execute this command.

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

**User Messages:**
- Success: "New points set.\n\nLikes: [value] per each like\nRetweets: [value] per each retweet\nReplies: [value] per each reply\nQuotes: [value] per each quote\nViews: [value] per each view"
- Error (Missing parameters): "Please provide 5 point values for likes, retweets, replies, quotes and views. Example: /set_points 5 1 20 10 0.01"
- Error (Invalid format): "Invalid points format. Please provide valid points for likes, retweets, replies, quotes and views. Example: /set_points 5 1 20 10 0.01"
- Error (Non-admin): "Only admins can set the points."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_top_count (Admin Only)

Sets the number of users to display in the report leaderboard. This controls how many 
top-performing users are shown in the generated reports. Only group administrators 
can execute this command.

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

**User Messages:**
- Success: "Top count set to [number]."
- Error (Missing parameter): "Please provide a valid number of users to show in the report leaderboard (e.g. /set_top_count 10)."
- Error (Invalid format): "Invalid number format. Please provide a valid number of users to show in the report leaderboard (e.g. /set_top_count 10)."
- Error (Non-admin): "Only admins can set the top count."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_top_title (Admin Only)

Sets the title text and color for the main leaderboard section in generated reports.
Allows customization of the primary heading displayed at the top of leaderboard reports.
Only group administrators can execute this command.

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

**User Messages:**
- Success: "✅ Top Title Updated Successfully!\n\n**New Top Title:** \"[title_text]\"\n**Color:** `[color]`\n\n💡 Use /get_titles to view all current title settings"
- Error (Missing parameters): "❌ Please provide both title text and color. Example: /set_top_title \"Weekly Leaderboard\" #476a30"
- Error (Empty title): "❌ Title text cannot be empty. Example: /set_top_title \"Weekly Leaderboard\" #476a30"
- Error (Invalid color): "❌ Invalid hex color format. Please use format: #RRGGBB (e.g., #476a30)"
- Error (Non-admin): "Only group administrators can change the top title settings."
- Error (Invalid topic): Command is silently ignored
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Topic Management

### /get_topic

Retrieves and displays the currently configured topic (forum thread) where the bot 
sends reports. Shows either the topic name or thread ID if configured.

**Usage:**
```
/get_topic
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Any context (no restrictions)
- No Admin Check: Any user can view topic configuration
- States: No state management required
- Flow: Single-step configuration retrieval and display

**User Messages:**
- Success (With Name): "Bot will send reports to topic \"[topic name]\"."
- Success (Without Name): "Bot will send reports to topic ID [thread_id]."
- Success (Not Configured): "No topic set. Please set the topic using /set_topic in a topic chat."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /set_topic (Admin Only)

Sets the specific topic (forum thread) where the bot should send reports in Telegram groups 
that use forum-style topics. This command must be executed within the target topic thread.
Only group administrators can execute this command.

**Usage:**
```
/set_topic` (executed within the desired topic thread)
```

**Parameters:**
- None required (automatically captures current topic context)


**Workflow:**
- Execution Context: Must be used within a forum topic thread
- Admin Verification: Requires group administrator privileges
- Topic Validation: Checks for is_topic_message and message_thread_id
- States: No state management required
- Flow: Single-step topic capture and storage

**User Messages:**
- Success (With Name): "Topic set to \"[topic name]\"."
- Success (Without Name): "Topic set with ID [thread_id]."
- Error (Non-admin): "Only admins can set the topic."
- Error (Not in Topic): "This command can only be used in a topic chat."
- Error (No Thread ID): "This command can only be used in a topic chat with an existing topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Admin

### /add_admin (Admin Only)

Designates specific group administrators to receive private bot notifications (e.g., credit
exhaustion, errors). If no admins are designated, the bot will attempt to notify all group
administrators. Only group administrators can execute this command.

**Usage:**
```
/add_admin @user1 @user2 @user3` - Designate specific admins
```
```
/add_admin clear` - Remove all designated admins (will notify all admins)
```

**Parameters:**
- users (required): Mentioned users (via @username) or "clear" to remove all
- Validation:
- All mentioned users must be current group administrators
- Maximum 10 admins can be designated
- Overwrites previous list (does not append)


**Workflow:**
- Execution Context: Groups only (no DMs)
- Admin Verification: Requires group administrator privileges
- States: No state management required
- Flow:
1. Validate caller is admin
2. Parse mentioned users from message entities
3. Verify each mentioned user is admin via getChatMember
4. Save verified admin IDs to settings
5. Reply with success message listing added admins

**User Messages:**
- Success (Admins added): Lists designated admins with usernames
- Success (Cleared): Confirmation that all designated admins were removed
- Error (Non-admin): "Only administrators can designate notification recipients."
- Error (Not in group): "This command can only be used in group chats."
- Error (Users not admin): Lists users who are not administrators
- Error (No users provided): Usage instructions
- Error (Too many admins): "You can designate a maximum of 10 admins."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Subscription & Credits

### /buy

Initiates the purchase process for X Bot Professional subscription. Handles complex multi-step
workflow that starts in group chat and continues in private messages with Stripe integration.
Creates checkout sessions for new purchases and manages subscription state transitions.

**Usage:**
```
/buy` (executed in group chat to start purchase process)
```

**Parameters:**
- None required (command triggered action)


**Workflow:**
- Execution Context: Both group and private messages (context-aware behavior)
- Group Flow: Checks PRO status → Creates checkout session → Sets user state → Sends private message
- Private Flow: Continues purchase process or provides subscription management
- States Managed:
- 'waiting_for_purchase': User has active checkout session
- Multi-step Workflow: Group command → Private message continuation → Stripe checkout → Payment confirmation

**User Messages:**
- Success (Group - New Purchase): Creates Stripe checkout session and sends private message with payment link
- Success (Group - Already PRO): "You already have a PRO license for this group. Use /subscription to manage your subscription."
- Success (Private - Continue Purchase): Provides checkout link or subscription management options
- Error (Stripe Integration): Various Stripe-related error messages
- Error (State Management): "An error occurred while processing your request. Please try again."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /get_credits

Displays the current credit usage and availability for the bot. Shows different information based on 
license type (FREE shows remaining credits, PRO shows unlimited usage). Credits are consumed when 
fetching posts from X (Twitter) for report generation.

**Usage:**
```
/get_credits
```

**Parameters:**
- None required


**Workflow:**
- Execution Context: Both groups and private messages
- License Check: Determines display format (FREE vs PRO)
- States: No state management required
- Flow: Single-step command execution with license-aware response

**User Messages:**
- Success (PRO): "*[Month Year] - PRO Edition*\nConsumed Credits: [number]"
- Success (FREE): "*[Month Year] - Free Edition*\nConsumed Credits: [number]\nRemaining: [number]\n\n💡 Upgrade to PRO for unlimited credits! Use /buy to upgrade."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /payment_cancelled

Handles payment cancellation when users exit Stripe checkout without completing payment.
This command is automatically triggered when users return from cancelled Stripe payment flows
via redirect URLs. Cleans up user state and provides guidance for retrying.

**Usage:**
```
/payment_cancelled` (automatically triggered by Stripe cancel URL redirect)
```

**Parameters:**
- None required (callback command from Stripe)


**Workflow:**
- Execution Context: Private messages only (triggered after Stripe redirect)
- State Cleanup: Removes 'waiting_for_purchase' state to reset user workflow
- Recovery Guidance: Provides instructions for retrying purchase
- States: Deletes 'waiting_for_purchase' state
- Flow: Stripe cancel redirect → State cleanup → Retry guidance message

**User Messages:**
- Success: "❌ Payment was cancelled.\n\n💡 You can try again anytime by using the /buy command in your group."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /payment_success

Handles successful payment confirmation after Stripe checkout completion. This command is
automatically triggered when users return from successful Stripe payment flows via redirect URLs.
Cleans up user state and provides confirmation messaging.

**Usage:**
```
/payment_success` (automatically triggered by Stripe success URL redirect)
```

**Parameters:**
- None required (callback command from Stripe)


**Workflow:**
- Execution Context: Private messages only (triggered after Stripe redirect)
- State Cleanup: Removes 'waiting_for_purchase' state
- Webhook Integration: Works in conjunction with Stripe webhooks for license activation
- States: Deletes 'waiting_for_purchase' state
- Flow: Stripe success redirect → State cleanup → Confirmation message

**User Messages:**
- Success: "🎉 Thank you for your payment! Your subscription is being activated and you'll receive confirmation shortly.\n\n✅ You can now return to your group and start using PRO features."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /subscription

Provides access to Stripe customer portal for subscription management including billing history,
payment methods, and cancellation options. Handles both group and private message contexts
with appropriate PRO license validation and customer portal URL generation.

**Usage:**
```
/subscription` (executed in group or private chat for subscription management)
```

**Parameters:**
- None required (management command)


**Workflow:**
- Execution Context: Both group and private messages (context-aware behavior)
- Group Flow: Validates PRO license → Checks ownership → Provides portal access or guidance
- Private Flow: Direct portal access for subscription management
- License Validation: Ensures group has active PRO subscription
- Ownership Check: Verifies user is subscription owner for management access
- States: No state management required
- Flow: Context detection → License validation → Ownership verification → Portal URL generation

**User Messages:**
- Success (Group - Owner): Provides Stripe customer portal link for subscription management
- Success (Private - Owner): Direct portal access with management options
- Error (Group - No PRO): "This group doesn't have a PRO subscription. Use /buy to upgrade."
- Error (Group - Not Owner): "Only the subscription owner can manage the subscription. Please contact [owner] for assistance."
- Error (Private - No Subscription): "You don't have an active subscription. Use /buy to subscribe."
- Error (Stripe Portal): Error details from Stripe customer portal creation
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


---

## Need Help?

- 💬 Join our [Telegram Support Group](https://t.me/bws_xbot_support)
- 📖 Visit [docs.bws.ninja](https://docs.bws.ninja) for guides
- 🐛 Report issues on [GitHub](https://github.com/blockchain-web-services)

---

_This documentation is automatically synchronized from the X Bot source code._
