# X Bot - Complete Documentation

Product Key: BWS.X.Bot
Generated: 2025-12-01T18:12:48.887Z
Files: 5
Words: 6,170
Characters: 47,606

---



## [FILE 1/5] README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.x.bot/README.md
---

# X BOT

X Bot is a Telegram-based analytics platform that provides accurate X (Twitter) engagement metrics using the official X API. It helps crypto projects measure community impact and KOL profitability, enables KOL teams to showcase verifiable performance, and allows investors to discover projects with authentic community traction.

Built on the official X API to ensure accuracy and reliability in every metric.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

---



## [FILE 2/5] x-bot-commands.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.x.bot/x-bot-commands.md
---

# X Bot Commands

Complete reference guide for all X Bot commands. Commands are organized by category for easy navigation.

## Basic Commands

### /help

Display all available bot commands with brief descriptions.

Usage: `/help`

Parameters: None

Response: Complete list of commands organized by category.

Example:

```
/help
```

## X API Filtering Setup

X Bot's filtering system allows you to define exactly what X (Twitter) content to track and analyze. You can track specific accounts, monitor keywords and hashtags, follow cryptocurrency cashtags, see who's mentioning important accounts, and filter out noise with exclusions.

The filtering system is highly flexible and supports complex setups through **named filters**, which allow you to create multiple independent tracking configurations. This is particularly useful for KOL teams managing multiple clients, projects running different campaigns, or anyone who needs to separate different tracking scenarios. Each named filter can have its own set of accounts, keywords, cashtags, mentions, exclusions, and even independent report schedules.

### Account Management

Track X (Twitter) accounts to monitor their posts and engagement metrics.

#### /add\_accounts

Add one or more X accounts to track.

Usage: `/add_accounts @account1 @account2 ... [filter=name]`

Parameters:

* `@account1 @account2 ...`: X (Twitter) handles to track (with @ symbol)
* `filter=name` (optional): Assign to a named filter

Admin Only: Yes

Examples:

```
/add_accounts @elonmusk
/add_accounts @VitalikButerin @SatoshiLite @APompliano
/add_accounts @ProjectAccount filter=marketing_campaign
```

What this does:

* Tracks all posts from specified accounts
* Monitors engagement metrics (likes, retweets, replies, quotes, bookmarks, impressions)
* Includes accounts in leaderboard rankings

#### /remove\_accounts

Remove one or more X accounts from tracking.

Usage: `/remove_accounts @account1 @account2 ... [filter=name]`

Parameters:

* `@account1 @account2 ...`: X handles to stop tracking
* `filter=name` (optional): Remove from a named filter

Admin Only: Yes

Examples:

```
/remove_accounts @elonmusk
/remove_accounts @Account1 @Account2
/remove_accounts @ProjectAccount filter=marketing_campaign
```

#### /get\_accounts

View all currently tracked X accounts.

Usage: `/get_accounts [filter=name]`

Parameters:

* `filter=name` (optional): Show accounts for a specific named filter

Admin Only: No

Examples:

```
/get_accounts
/get_accounts filter=marketing_campaign
```

Response: List of all tracked X accounts, or accounts in the specified filter.

### Keyword Management

Track specific keywords and hashtags to monitor community discussions.

#### /add\_keywords

Add keywords or hashtags to track.

Usage: `/add_keywords "keyword1" "keyword2" ... [filter=name]`

Parameters:

* `"keyword1" "keyword2" ...`: Keywords or hashtags to track (use quotes for multi-word phrases)
* `filter=name` (optional): Assign to a named filter

Admin Only: Yes

Examples:

```
/add_keywords "Bitcoin" "#BTC" "cryptocurrency"
/add_keywords "DeFi" "#DeFi" "decentralized finance"
/add_keywords "Solana ecosystem" filter=solana_tracking
```

Note: Use quotes for multi-word phrases. Hashtags should include the # symbol.

#### /remove\_keywords

Remove keywords or hashtags from tracking.

Usage: `/remove_keywords "keyword1" "keyword2" ... [filter=name]`

Parameters:

* `"keyword1" "keyword2" ...`: Keywords or hashtags to stop tracking
* `filter=name` (optional): Remove from a named filter

Admin Only: Yes

Examples:

```
/remove_keywords "Bitcoin"
/remove_keywords "#OldCampaign" filter=marketing_campaign
```

#### /get\_keywords

View all currently tracked keywords and hashtags.

Usage: `/get_keywords [filter=name]`

Parameters:

* `filter=name` (optional): Show keywords for a specific named filter

Admin Only: No

Examples:

```
/get_keywords
/get_keywords filter=marketing_campaign
```

Response: List of all tracked keywords and hashtags, or keywords in the specified filter.

### Cashtag Management

Track cryptocurrency cashtags (e.g., $BTC, $ETH) to monitor token discussions.

#### /add\_cashtags

Add cashtags to track.

Usage: `/add_cashtags $TAG1 $TAG2 ... [filter=name]`

Parameters:

* `$TAG1 $TAG2 ...`: Cashtags to track (with $ symbol)
* `filter=name` (optional): Assign to a named filter

Admin Only: Yes

Examples:

```
/add_cashtags $BTC $ETH $SOL
/add_cashtags $MYTOKEN filter=token_launch
```

Note: Cashtags must include the $ symbol.

#### /remove\_cashtags

Remove cashtags from tracking.

Usage: `/remove_cashtags $TAG1 $TAG2 ... [filter=name]`

Parameters:

* `$TAG1 $TAG2 ...`: Cashtags to stop tracking
* `filter=name` (optional): Remove from a named filter

Admin Only: Yes

Examples:

```
/remove_cashtags $BTC
/remove_cashtags $OLDTOKEN filter=token_launch
```

#### /get\_cashtags

View all currently tracked cashtags.

Usage: `/get_cashtags [filter=name]`

Parameters:

* `filter=name` (optional): Show cashtags for a specific named filter

Admin Only: No

Examples:

```
/get_cashtags
/get_cashtags filter=token_launch
```

Response: List of all tracked cashtags, or cashtags in the specified filter.

### Mention Management

Track X account mentions to see who's talking about specific accounts.

#### /add\_mentions

Add X accounts to track mentions of.

Usage: `/add_mentions @account1 @account2 ... [filter=name]`

Parameters:

* `@account1 @account2 ...`: X handles to track mentions of
* `filter=name` (optional): Assign to a named filter

Admin Only: Yes

Examples:

```
/add_mentions @YourProjectAccount
/add_mentions @Influencer1 @Influencer2 filter=kol_tracking
```

What this does:

* Tracks posts that mention the specified accounts
* Shows who is talking about these accounts
* Includes mention frequency in reports

#### /remove\_mentions

Remove X accounts from mention tracking.

Usage: `/remove_mentions @account1 @account2 ... [filter=name]`

Parameters:

* `@account1 @account2 ...`: X handles to stop tracking mentions of
* `filter=name` (optional): Remove from a named filter

Admin Only: Yes

Examples:

```
/remove_mentions @OldAccount
/remove_mentions @Influencer1 filter=kol_tracking
```

#### /get\_mentions

View all accounts currently tracked for mentions.

Usage: `/get_mentions [filter=name]`

Parameters:

* `filter=name` (optional): Show mentions for a specific named filter

Admin Only: No

Examples:

```
/get_mentions
/get_mentions filter=kol_tracking
```

Response: List of all accounts being tracked for mentions, or mentions in the specified filter.

### Exclusion Management

Exclude specific keywords or hashtags from reports to filter out noise.

#### /add\_exclusions

Add keywords or hashtags to exclude from tracking.

Usage: `/add_exclusions "keyword1" "keyword2" ... [filter=name]`

Parameters:

* `"keyword1" "keyword2" ...`: Keywords or hashtags to exclude
* `filter=name` (optional): Assign to a named filter

Admin Only: Yes

Examples:

```
/add_exclusions "spam" "giveaway scam"
/add_exclusions "#irrelevant" filter=marketing_campaign
```

What this does:

* Excludes posts containing these keywords from reports
* Helps filter out spam, scams, or irrelevant content
* Improves report quality

#### /remove\_exclusions

Remove keywords or hashtags from exclusion list.

Usage: `/remove_exclusions "keyword1" "keyword2" ... [filter=name]`

Parameters:

* `"keyword1" "keyword2" ...`: Keywords or hashtags to stop excluding
* `filter=name` (optional): Remove from a named filter

Admin Only: Yes

Examples:

```
/remove_exclusions "giveaway"
/remove_exclusions "#campaign" filter=marketing_campaign
```

#### /get\_exclusions

View all currently excluded keywords and hashtags.

Usage: `/get_exclusions [filter=name]`

Parameters:

* `filter=name` (optional): Show exclusions for a specific named filter

Admin Only: No

Examples:

```
/get_exclusions
/get_exclusions filter=marketing_campaign
```

Response: List of all excluded keywords and hashtags, or exclusions in the specified filter.

### Ignore List Management

Ignore specific X accounts so they don't appear in leaderboards (useful for hiding bots, test accounts, or team admins).

#### /add\_ignore\_list

Add X accounts to the ignore list.

Usage: `/add_ignore_list @account1 @account2 ...`

Parameters:

* `@account1 @account2 ...`: X handles to ignore in leaderboards

Admin Only: Yes

Examples:

```
/add_ignore_list @TestAccount @BotAccount
/add_ignore_list @TeamAdmin @InternalAccount
```

What this does:

* Hides specified accounts from leaderboard rankings
* Posts are still tracked but not shown in public reports
* Useful for internal/test accounts

#### /remove\_ignore\_list

Remove X accounts from the ignore list.

Usage: `/remove_ignore_list @account1 @account2 ...`

Parameters:

* `@account1 @account2 ...`: X handles to stop ignoring

Admin Only: Yes

Examples:

```
/remove_ignore_list @TestAccount
```

#### /get\_ignore\_list

View all accounts currently on the ignore list.

Usage: `/get_ignore_list`

Parameters: None

Admin Only: No

Example:

```
/get_ignore_list
```

Response: List of all ignored X accounts.

### Named Filters

Named filters allow you to create multiple tracking configurations for different purposes (e.g., different clients, campaigns, or projects).

#### Understanding Named Filters

Named filters let you:

* Track different sets of accounts/keywords for different purposes
* Generate separate reports for different clients or campaigns
* Keep configurations organized and separate

How to use named filters:



#### Create a named filter

Add items with the `filter=name` parameter, for example:

```
/add_accounts @Client1Account filter=client1
/add_keywords "client1 keyword" filter=client1
```



#### Generate reports for a named filter

Use the recreate command with the filter parameter:

```
/recreate filter=client1
```



#### View filter configuration

Inspect items in a filter:

```
/get_accounts filter=client1
/get_keywords filter=client1
```



#### Examples of Named Filter Usage

Example 1: Multiple Client Tracking (KOL Team)

```
# Client A Setup
/add_accounts @ClientA_Account filter=client_a
/add_cashtags $TOKENA filter=client_a

# Client B Setup
/add_accounts @ClientB_Account filter=client_b
/add_cashtags $TOKENB filter=client_b

# Generate separate reports
/recreate filter=client_a
/recreate filter=client_b
```

Example 2: Different Campaign Tracking (Project)

```
# Marketing Campaign
/add_keywords "#MarketingCampaign" "campaign hashtag" filter=marketing

# Community Competition
/add_accounts @CommunityAccount1 @CommunityAccount2 filter=competition

# Generate campaign-specific reports
/recreate filter=marketing
/recreate filter=competition
```

## Schedule Management

Automate report generation with scheduled daily reports.

### /set\_schedule

Schedule automated daily reports.

Usage: `/set_schedule HH:MM [filter=name]`

Parameters:

* `HH:MM`: Time in 24-hour format (UTC timezone)
* `filter=name` (optional): Schedule for a specific named filter

Admin Only: Yes

Examples:

```
/set_schedule 12:00
/set_schedule 09:00 filter=client_a
/set_schedule 18:30
```

What this does:

* Generates automated daily reports at the specified time
* Posts performance screenshots and leaderboards to the group
* Time is in UTC (Coordinated Universal Time)

Timezone Conversion Examples:

* New York (EST): 12:00 UTC = 07:00 EST
* London (GMT): 12:00 UTC = 12:00 GMT
* Singapore (SGT): 12:00 UTC = 20:00 SGT

### /get\_schedule

View current report schedule.

Usage: `/get_schedule [filter=name]`

Parameters:

* `filter=name` (optional): Show schedule for a specific named filter

Admin Only: No

Examples:

```
/get_schedule
/get_schedule filter=client_a
```

Response: Current scheduled report time in UTC, or message if no schedule is set.

### /delete\_schedule

Cancel automated daily reports.

Usage: `/delete_schedule [filter=name]`

Parameters:

* `filter=name` (optional): Delete schedule for a specific named filter

Admin Only: Yes

Examples:

```
/delete_schedule
/delete_schedule filter=client_a
```

What this does:

* Removes scheduled report generation
* Reports can still be generated manually with `/recreate`

## Report Generation

Generate analytics reports manually.

### /recreate

Generate a new analytics report immediately.

Usage: `/recreate [filter=name]`

Parameters:

* `filter=name` (optional): Generate report for a specific named filter

Admin Only: Yes (for manual generation)

Examples:

```
/recreate
/recreate filter=marketing_campaign
```

What this does:

* Creates performance report with current data
* Generates leaderboards for accounts, hashtags, cashtags, and mentions
* Posts performance screenshot to the group
* Shows engagement metrics and rankings

Note: Report generation can take 1-2 minutes depending on data volume.

### /report

Alternative command to generate analytics report.

Usage: `/report [filter=name]`

Parameters:

* `filter=name` (optional): Generate report for a specific named filter

Admin Only: Yes

Examples:

```
/report
/report filter=client_a
```

Note: Functions identically to `/recreate`.

## Customization

Customize report appearance and scoring to match your brand.

### /set\_points

Customize engagement point weights for performance scoring.

Usage: `/set_points <likes> <retweets> <replies> <quotes> <bookmarks> <impressions>`

Parameters:

* `<likes>`: Point weight for likes (default: 1)
* `<retweets>`: Point weight for retweets (default: 2)
* `<replies>`: Point weight for replies (default: 1.5)
* `<quotes>`: Point weight for quote tweets (default: 3)
* `<bookmarks>`: Point weight for bookmarks (default: 2)
* `<impressions>`: Point weight for impressions (default: 0.001)

Admin Only: Yes

Examples:

```
/set_points 1 2 1.5 3 2 0.001
/set_points 2 4 3 6 4 0.002
/set_points 1 1 1 1 1 0
```

What this does:

* Customizes how performance scores are calculated
* Higher weights give more importance to that engagement type
* Affects leaderboard rankings

Default Formula:

```
Performance Score = (Likes × 1) + (Retweets × 2) + (Replies × 1.5) +
                   (Quotes × 3) + (Bookmarks × 2) + (Impressions × 0.001)
```

### /get\_points

View current engagement point weights.

Usage: `/get_points`

Parameters: None

Admin Only: No

Example:

```
/get_points
```

Response: Current point weights for all engagement types.

### /set\_colors

Customize colors used in performance reports.

Usage: `/set_colors <likes> <retweets> <replies> <quotes> <bookmarks> <impressions>`

Parameters:

* `<likes>`: Hex color code for likes (default: #FF6B6B)
* `<retweets>`: Hex color code for retweets (default: #4ECDC4)
* `<replies>`: Hex color code for replies (default: #45B7D1)
* `<quotes>`: Hex color code for quotes (default: #FFA07A)
* `<bookmarks>`: Hex color code for bookmarks (default: #98D8C8)
* `<impressions>`: Hex color code for impressions (default: #F7DC6F)

Admin Only: Yes

Examples:

```
/set_colors #FF6B6B #4ECDC4 #45B7D1 #FFA07A #98D8C8 #F7DC6F
/set_colors #FF0000 #00FF00 #0000FF #FFFF00 #FF00FF #00FFFF
```

What this does:

* Customizes visual appearance of reports
* Applies to performance screenshots
* Helps match your brand colors

Note: Colors must be valid hex codes (e.g., #FF6B6B).

### /get\_colors

View current color configuration.

Usage: `/get_colors`

Parameters: None

Admin Only: No

Example:

```
/get_colors
```

Response: Current hex color codes for all engagement types.

### /set\_top\_title

Customize the title for the main leaderboard section.

Usage: `/set_top_title "Custom Title" "#HexColor"`

Parameters:

* `"Custom Title"`: Title text for main leaderboard section
* `"#HexColor"`: Hex color code for the title

Admin Only: Yes

Examples:

```
/set_top_title "🏆 Top Community Champions" "#FFD700"
/set_top_title "Elite KOL Performance" "#4ECDC4"
```

What this does:

* Replaces default "Top Accounts by Performance" title
* Adds custom branding to reports
* Title appears in performance screenshots

### /set\_best\_title

Customize the title for the best tweet section.

Usage: `/set_best_title "Custom Title" "#HexColor"`

Parameters:

* `"Custom Title"`: Title text for best tweet section
* `"#HexColor"`: Hex color code for the title

Admin Only: Yes

Examples:

```
/set_best_title "⭐ Best Tweet of the Month" "#FFD700"
/set_best_title "Top Performing Post" "#4ECDC4"
```

### /set\_engagement\_title

Customize the title for the engagement scoring section.

Usage: `/set_engagement_title "Custom Title" "#HexColor"`

Parameters:

* `"Custom Title"`: Title text for engagement scoring section
* `"#HexColor"`: Hex color code for the title

Admin Only: Yes

Examples:

```
/set_engagement_title "📊 Engagement Metrics" "#45B7D1"
/set_engagement_title "Performance Breakdown" "#FFA07A"
```

## Project Settings

Configure project metadata to enhance your presence on xbot.ninja.

### /set\_project\_name

Set your project or team name.

Usage: `/set_project_name "Project Name"`

Parameters:

* `"Project Name"`: Name of your project or team

Admin Only: Yes

Examples:

```
/set_project_name "Solana Foundation"
/set_project_name "Alpha KOL Team"
```

What this does:

* Sets project name displayed on xbot.ninja
* Appears in public leaderboards if you meet listing criteria
* Helps projects and KOLs get discovered

### /get\_project\_name

View current project name.

Usage: `/get_project_name`

Parameters: None

Admin Only: No

Example:

```
/get_project_name
```

### /set\_project\_description

Set your project or team description.

Usage: `/set_project_description "Description text"`

Parameters:

* `"Description text"`: Brief description of your project or team

Admin Only: Yes

Examples:

```
/set_project_description "High-performance blockchain supporting builders around the world"
/set_project_description "Elite crypto KOL team specializing in DeFi and trading"
```

What this does:

* Sets description shown on xbot.ninja
* Helps users understand what your project/team does
* Appears in featured projects list

### /get\_project\_description

View current project description.

Usage: `/get_project_description`

Parameters: None

Admin Only: No

Example:

```
/get_project_description
```

### /set\_project\_logo

Set your project or team logo URL.

Usage: `/set_project_logo "https://url-to-logo.png"`

Parameters:

* `"https://url-to-logo.png"`: Direct URL to your logo image

Admin Only: Yes

Examples:

```
/set_project_logo "https://example.com/solana-logo.png"
/set_project_logo "https://cdn.example.com/team-logo.jpg"
```

What this does:

* Sets logo displayed on xbot.ninja
* Provides visual branding for your project/team
* Logo appears in featured projects showcase

Note: Logo should be square format (1:1 ratio) and accessible via HTTPS.

### /get\_project\_logo

View current project logo URL.

Usage: `/get_project_logo`

Parameters: None

Admin Only: No

Example:

```
/get_project_logo
```

### /set\_project\_long\_description

Set detailed project or team description.

Usage: `/set_project_long_description "Long description text"`

Parameters:

* `"Long description text"`: Detailed description of your project or team

Admin Only: Yes

Examples:

```
/set_project_long_description "Solana is a high-performance blockchain that supports builders around the world creating decentralized applications. Known for its speed and low transaction costs..."
```

What this does:

* Sets extended description for project detail pages
* Provides more context about your project/team
* Helps users make informed decisions

### /get\_project\_long\_description

View current long project description.

Usage: `/get_project_long_description`

Parameters: None

Admin Only: No

Example:

```
/get_project_long_description
```

### /set\_project\_urls

Set project or team URLs (website, social media, etc.).

Usage: `/set_project_urls "url1" "url2" "url3" ...`

Parameters:

* `"url1" "url2" ...`: URLs for website, social media, documentation, etc.

Admin Only: Yes

Examples:

```
/set_project_urls "https://solana.com" "https://twitter.com/solana" "https://discord.gg/solana"
/set_project_urls "https://kolteam.io" "https://twitter.com/alphakols"
```

What this does:

* Sets links displayed on xbot.ninja
* Provides ways for users to learn more about your project/team
* Helps drive traffic to your platforms

### /get\_project\_urls

View current project URLs.

Usage: `/get_project_urls`

Parameters: None

Admin Only: No

Example:

```
/get_project_urls
```

## Getting Credits

X Bot includes **100 FREE credits** to get you started. Each credit corresponds to one post tracked in your filtering setup (accounts, keywords, cashtags, and mentions you've configured). Once you've used your free credits, you can purchase additional credits to continue tracking.

### /buy

Purchase X Bot Pro Edition credits using BWS tokens.

Usage: `/buy`

Parameters: None

Where: Works in both group chats and Direct Messages (DM) with the bot

🔒 PRIVACY RECOMMENDED: Use Direct Message (DM) for Private Purchases

For complete privacy, send `/buy` in a Direct Message to [@BWS\_X\_Bot](https://t.me/BWS_X_Bot) instead of in the group chat. This keeps the entire purchase conversation private - only you will see the purchase link and transaction details.

Examples:

Recommended: In Direct Message with bot (completely private)

```
/buy
```

In group chat (visible to everyone in the group)

```
/buy
```

What this does:

* Provides secure purchase link for BWS token credit purchase
* Redirects to purchase page at xbot.ninja
* Credits are added to your group immediately after successful purchase

How to purchase privately in DM:



#### Open a Direct Message with the bot

Open a Direct Message with [@BWS\_X\_Bot](https://t.me/BWS_X_Bot).



#### Send the buy command

Send `/buy` command in the DM (not in the group).



#### Receive private link

Bot sends you a private purchase link that only you can see.



#### Complete purchase

Complete your purchase privately - no one in the group will see any part of the transaction.



#### Credits applied

Credits are automatically added to your group upon successful payment.



### /subscription

View your current Pro subscription status.

Usage: `/subscription`

Parameters: None

Admin Only: No

Example:

```
/subscription
```

Response: Current subscription status, expiration date, and available credits.

### /get\_credits

View available Pro credits for your group.

Usage: `/get_credits`

Parameters: None

Admin Only: No

Example:

```
/get_credits
```

Response: Number of remaining Pro credits for report generation and other Pro features.

## Command Tips & Best Practices

### General Tips

1.  Use Quotes for Multi-Word Terms: Always use quotes when adding keywords with spaces:

    ```
    /add_keywords "decentralized finance" "crypto trading"
    ```
2.  Include Symbols: Don't forget @ for accounts, # for hashtags, $ for cashtags:

    ```
    /add_accounts @VitalikButerin
    /add_keywords "#Bitcoin"
    /add_cashtags $ETH
    ```
3.  Named Filters for Organization: Use named filters to keep different tracking scenarios organized:

    ```
    /add_accounts @Client1 filter=client1
    /recreate filter=client1
    ```
4. Schedule in UTC: Remember that schedule times are in UTC timezone. Convert from your local time.

### Performance Optimization

* Start Small: Begin with a few accounts/keywords and expand based on results
* Use Exclusions: Filter out spam and irrelevant content with exclusions
* Regular Reports: Set daily schedules to track trends over time
* Named Filters: Separate different campaigns or clients for clearer insights

### Report Quality

* Balanced Tracking: Track both accounts and keywords for comprehensive insights
* Clean Data: Use ignore list to hide test accounts and bots
* Custom Scoring: Adjust point weights to reflect what matters most to your community
* Branding: Set custom titles and colors to match your brand

### Privacy and Security

* DM for Privacy: Use Direct Messages for sensitive commands like `/buy`
* Admin Commands: Only admins can configure tracking and settings
* Public Reports: Anyone in the group can view reports and current configuration
* Filter Isolation: Named filters keep different client/campaign data separate

### Troubleshooting



#### No Data in Reports

* Verify accounts/keywords are configured: `/get_accounts`, `/get_keywords`
* Wait a few hours for X API to collect data
* Ensure tracked accounts are public



#### Reports Not Generating

* Check schedule is set: `/get_schedule`
* Verify time is in UTC
* Manually test with `/recreate`



#### Bot Not Responding

* Verify bot has admin status in the group
* Check if bot was removed or banned
* Try removing and re-adding the bot



### Advanced Usage

Multi-Client KOL Team Setup:

```
# Client A
/add_accounts @KOL1 @KOL2 filter=client_a
/add_cashtags $TOKENA filter=client_a
/set_schedule 10:00 filter=client_a

# Client B
/add_accounts @KOL1 @KOL3 filter=client_b
/add_cashtags $TOKENB filter=client_b
/set_schedule 14:00 filter=client_b

# Generate separate reports
/recreate filter=client_a
/recreate filter=client_b
```

Comprehensive Project Tracking:

```
# Official accounts
/add_accounts @ProjectOfficial @ProjectFounder

# Community cashtags
/add_cashtags $PROJECTTOKEN

# Track mentions of key accounts
/add_mentions @ProjectOfficial @ProjectFounder

# Exclude spam
/add_exclusions "scam" "fake giveaway"

# Hide internal accounts
/add_ignore_list @ProjectTestAccount @InternalBot

# Schedule daily reports
/set_schedule 12:00

# Customize branding
/set_project_name "My Project"
/set_project_description "Revolutionary DeFi protocol"
/set_top_title "🏆 Top Community Contributors" "#FFD700"
```

This command reference is for X Bot Beta Version. Commands and features are subject to change as the platform improves.

---



## [FILE 3/5] x-bot-installation.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.x.bot/x-bot-installation.md
---

# How To Install

This guide will walk you through installing and configuring X Bot for your Telegram group. The setup process differs based on your use case — choose the path that matches your needs.

## Prerequisites

Before installing X Bot, ensure you have:

* A Telegram account
* Admin access to a Telegram group (or ability to create one)
* An X (Twitter) account you want to track
* Basic familiarity with Telegram bots and group management

## Choose Your Installation Path

Select the setup guide that matches your use case:

* [Crypto Project Setup](how-to-install.md#crypto-project-setup): Track your project's X engagement and community activity
* [Individual KOL Setup](how-to-install.md#individual-kol-setup): Monitor your personal X performance metrics
* [KOL Team Setup](how-to-install.md#kol-team-setup): Track multiple team members' performance in one place

***

## Crypto Project Setup

Goal: Track your project's X engagement and community activity (optionally use for competitions, prizes, or airdrops)



#### Find and Add the Bot

* Search for [@BWS\_X\_Bot](https://t.me/BWS_X_Bot) in Telegram
* Add the bot to your project's main Telegram group
* Make the bot an admin with the following settings:
  * Admin rights required: Yes
  * Special permissions needed: None



#### Create Your X Analytics Query

The following is a simple example for first-time installation. You can customize tracking later.

Track your official X account:


```
/add_accounts @YourProjectAccount
```


Track your project's cashtag:


```
/add_cashtags $YourToken
```


Example:


```
/add_accounts @SolanaProject
/add_cashtags $SOL
```


What this does:

* Tracks all posts from your project's X account
* Monitors posts mentioning your cashtag (e.g., `$SOL`)
* Collects engagement metrics (likes, retweets, replies, quotes, bookmarks, impressions)
* Includes tracked items in leaderboard rankings



#### Schedule Daily Reports

Set up automatic daily analytics reports:


```
/set_schedule 12:00
```


What this does:

* Generates automated reports daily at 12:00 UTC
* Posts performance screenshots and leaderboards to your group
* Tracks top accounts, hashtags, cashtags, and mentions
* Keeps community engaged with regular updates

Tip: Choose a time when your community is most active for maximum engagement.



#### Verify Installation

Force an initial report to verify everything is working:


```
/recreate
```


What this does:

* Creates an immediate performance report based on your configured tracking
* Shows leaderboards for accounts, hashtags, cashtags, and mentions
* Confirms tracking is working correctly
* Gives you a preview of daily automated reports



#### Add Project Metadata (Optional)

Add project information to be featured on the [xbot.ninja](https://xbot.ninja/) website:


```
/set_project_name "Solana"
/set_project_description "High-performance blockchain supporting builders around the world"
/set_project_logo "https://example.com/solana-logo.png"
```


What this does:

* Displays your project on the xbot.ninja website for investor and community discovery
* Helps investors find projects with authentic community traction
* Showcases your project's performance metrics publicly



#### Customize Your Reports (Optional)

Personalize reports with custom branding.

Set Custom Point Weights (Likes, Retweets, Replies, Quotes, Bookmarks, Impressions):


```
/set_points 1 2 1.5 3 2 0.001
```


Set Custom Colors:


```
/set_colors #FF6B6B #4ECDC4 #45B7D1 #FFA07A #98D8C8 #F7DC6F
```


Set Custom Titles:


```
/set_top_title "🏆 Top Community Champions" "#FFD700"
```




***

## Individual KOL Setup

Goal: Get publicly listed on [xbot.ninja](https://xbot.ninja/) to showcase your competencies and performance metrics.



#### Create Your Analytics Group

* Open Telegram and create a new group
* Name it something like "My X Analytics" or "KOL Performance Tracker"
* This can be a private group for personal tracking

Tip: Keep this group private or share it with potential clients to showcase your metrics.



#### Find and Add X Bot

* Search for [@BWS\_X\_Bot](https://t.me/BWS_X_Bot) in Telegram
* Add the bot to your newly created group
* Make the bot an admin with:
  * Admin rights required: Yes
  * Special permissions needed: None



#### Track Your X Account

Monitor your personal X account performance:


```
/add_accounts @YourTwitterHandle
```


Example:


```
/add_accounts @CryptoKOL_Joe
```


What this does:

* Tracks all your posts and engagement metrics
* Builds a verifiable portfolio of your performance
* Enables discovery on xbot.ninja
* Provides data for client reports



#### Add Your Topics

Track keywords relevant to your content:


```
/add_keywords "crypto" "DeFi" "trading" "#Bitcoin" "$BTC"
```


What this does:

* Shows which topics you're covering
* Demonstrates your niche expertise
* Tracks community engagement with your topics
* Helps projects find you based on relevant keywords



#### Enable Regular Reports

Get daily performance insights:


```
/set_schedule 09:00
```


What this does:

* Sends daily performance reports at 09:00 UTC
* Tracks engagement trends over time
* Helps identify top-performing content
* Provides data for client reporting



#### Create Your First Report

Generate your first analytics report:


```
/recreate
```


What this does:

* Creates an immediate snapshot of your performance
* Shows engagement metrics and rankings
* Verifies tracking is working correctly
* Gives you shareable proof of your influence



#### Add Your Profile Metadata (Optional)

Add profile information to be featured on the [xbot.ninja](https://xbot.ninja/) website:


```
/set_project_name "Your Name/Brand"
/set_project_description "Crypto KOL specializing in DeFi and trading"
/set_project_logo "https://your-profile-image-url.jpg"
```


What this does:

* Displays your KOL profile on xbot.ninja
* Helps project owners discover and hire you
* Showcases engagement metrics and expertise publicly

To get publicly listed:

* Maintain a minimum performance threshold by posting and engaging consistently
* Build authentic engagement (avoid vanity metrics)
* Monitor daily reports to track progress toward listing

Note: Featured KOLs are continuously monitored to maintain quality standards.



***

## KOL Team Setup

Goal: Track team performance accurately and show clients real, measurable results



#### Create Team Analytics Group

* Open Telegram and create a new group
* Name it "KOL Team Analytics" or "\[Team Name] Performance Tracker"
* This will be your shared analytics dashboard

Tip: Make this group private and invite only team members and trusted clients.



#### Find and Add Bot as Admin

* Search for [@BWS\_X\_Bot](https://t.me/BWS_X_Bot) in Telegram
* Add the bot to your team group
* Make the bot an admin:
  * Admin rights required: Yes
  * Special permissions needed: None



#### Add Team Members

Invite all KOL team members to the group:

* Click the group name to open group info
* Tap "Add Members"
* Select all team members
* Ensure everyone can see the analytics and reports



#### Track All Team Accounts

Add all team members' X accounts for tracking:


```
/add_accounts @KOL1 @KOL2 @KOL3
```


Example:


```
/add_accounts @CryptoKOL_Alice @DeFiKOL_Bob @TradingKOL_Charlie
```


What this does:

* Tracks team members' posts and engagement
* Creates team-wide leaderboards
* Enables performance comparisons
* Provides aggregate metrics for client reports



#### Set Projects You Work For

Monitor client projects with cashtags:


```
/add_cashtags $PROJECT1 $PROJECT2 $PROJECT3
```


Example:


```
/add_cashtags $SOL $AVAX $MATIC
```


What this does:

* Tracks team engagement with client tokens
* Shows which members promote which projects
* Demonstrates ROI to clients with verifiable metrics
* Identifies top performers per campaign



#### Schedule Team Reports

Set up daily team performance reports:


```
/set_schedule 10:00
```


What this does:

* Generates daily reports at 10:00 UTC
* Posts leaderboards showing top team members
* Tracks trends for each project
* Provides regular updates for team and clients

Tip: Schedule for team standups or planning meetings.



#### Create Your First Report

Generate your first team analytics report:


```
/recreate
```


What this does:

* Creates an immediate team performance snapshot
* Shows individual and aggregate metrics
* Verifies all accounts are tracked correctly
* Provides shareable data for client presentations



#### Add Team Metadata (Optional)

Feature your team on [xbot.ninja](https://xbot.ninja/):


```
/set_project_name "Alpha KOL Team"
/set_project_description "Elite crypto KOL team specializing in DeFi, NFTs, and trading"
/set_project_logo "https://your-team-logo-url.jpg"
```


What this does:

* Displays your KOL team on xbot.ninja
* Helps project owners discover and hire your team
* Showcases team engagement metrics publicly



#### Customize Team Branding (Optional)

Personalize reports with custom titles:


```
/set_top_title "🏆 Top Team Performers This Month" "#FFD700"
/set_best_title "⭐ Best Tweet of the Period" "#4ECDC4"
```




#### Exclude Internal Accounts (Optional)

Hide internal/test accounts from leaderboards:


```
/add_ignore_list @InternalTestAccount @TeamAdminAccount
```




***

## Verification and Testing



#### Check bot status

* The bot should appear as an admin in your group



#### Test a command

* Run `/help` to see all available commands



#### Generate a report

* Run `/recreate` to create your first analytics report



#### Review the output

* Ensure accounts and keywords are tracked correctly



#### Check scheduled reports

* Wait for your scheduled time to verify automation



***

## Common Issues and Solutions

<details>

<summary>Bot Not Responding</summary>

Possible causes:

* Bot not made admin in the group
* Bot was removed or banned
* Network connectivity issues

Solutions:

1. Verify bot has admin status
2. Remove and re-add the bot
3. Check Telegram server status

</details>

<details>

<summary>No Data in Reports</summary>

Possible causes:

* Accounts or keywords not configured
* Tracking period too short (wait a few hours)
* X accounts have privacy restrictions

Solutions:

1. Run `/get_accounts` and `/get_keywords` to verify configuration
2. Wait for X API to collect data (can take a few hours)
3. Ensure tracked X accounts are public

</details>

<details>

<summary>Reports Not Generating</summary>

Possible causes:

* No schedule set
* Schedule time in wrong timezone (should be UTC)
* Insufficient data for report generation

Solutions:

1. Run `/get_schedule` to verify configuration
2. Set schedule with `/set_schedule HH:MM` (UTC time)
3. Manually generate report with `/recreate` to test

</details>

***

Installation takes just a few minutes. Once configured, X Bot runs automatically, providing scheduled analytics to help you track, measure, and improve your X engagement.

---



## [FILE 4/5] x-bot-overview.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.x.bot/x-bot-overview.md
---

# Overview

## What is X Bot?



_X analytics you can trust_

X Bot uses the **official X API** to ensure accuracy and reliability. We tested several cheaper alternatives and even built our own "posts crawler," but none matched the accuracy of the official API. Many third-party analytics tools you find online show **up to 50% discrepancies** in their metrics. With X Bot, you get data directly from the source you can trust.

## The Problem X Bot Solves

In the crypto space, it's challenging to:

* Get a trusted measure of community engagement and the real impact of hired KOLs' profitability
* Identify projects with genuine community traction vs. artificial engagement
* Find and hire KOL teams that deliver actual results
* Track and measure authentic X (Twitter) engagement
* Verify influencer performance with transparent metrics
* Discover legitimate investment opportunities backed by real community activity

X Bot solves these problems by providing verifiable X analytics that distinguish authentic engagement from vanity metrics.

## Key Features

### Analytics & Tracking

* Track X (Twitter) accounts, hashtags, cashtags, and mentions
* Monitor engagement metrics (likes, retweets, replies, quotes, bookmarks, impressions)
* Generate automated scheduled reports with performance insights (up to 12-hour frequency)
* View leaderboards ranking top performers by engagement

### Performance Scoring

X Bot uses a scoring algorithm that weighs different engagement types based on their value. **The weights are fully configurable** to match each project's specific needs and priorities.

Example scoring formula (weights can be customized):

```
Performance Score = (Likes × 1) + (Retweets × 2) + (Replies × 1.5) +
                   (Quotes × 3) + (Bookmarks × 2) + (Impressions × 0.001)
```

Example Engagement Weights Explained:

* Likes (×1): Basic engagement, shows content appreciation
* Retweets (×2): Amplification - user shares content with their followers
* Replies (×1.5): Active conversation starter
* Quotes (×3): High-value engagement - adds commentary while sharing
* Bookmarks (×2): Content worth saving for later reference
* Impressions (×0.001): Reach metric - how many people saw the post

Example Calculation:

For a post with: 50 likes, 10 retweets, 8 replies, 3 quotes, 15 bookmarks, 5,000 impressions

```
Performance Score = (50 × 1) + (10 × 2) + (8 × 1.5) + (3 × 3) + (15 × 2) + (5,000 × 0.001)
                 = 50 + 20 + 12 + 9 + 30 + 5
                 = 126 points
```

### Customization & Branding

* Custom point weights for different engagement types
* Branded colors for visual reports
* Custom titles for leaderboard sections
* Project metadata (name, logo, description, URLs)
* Named filters for different tracking scenarios

### Automated Reporting

* Schedule daily reports at specific times (UTC)
* Automatic performance screenshots
* Leaderboards showing top accounts, hashtags, cashtags, and mentions
* Historical tracking and trend analysis

## Dual-Purpose Analytics Platform

X Bot serves multiple distinct but complementary audiences:

### For Project Owners

Get a trusted measure of community engagement and hired KOLs' real profitability

* Measure your community's authentic X engagement and impact
* Track the real profitability and ROI of hired KOL campaigns
* Discover KOL teams with proven performance metrics
* Hire influencers who deliver actual engagement and results
* Monitor KOL performance with transparent, verifiable data
* Avoid influencers with fake followers or inflated metrics

What you get:

* Trusted measurement of community engagement levels
* Real performance data on KOL teams and their ROI
* Comparative metrics across multiple influencers
* Evidence of authentic community building
* Data-driven decisions for influencer partnerships

### For KOLs and KOL Teams

Showcase your competencies and get discovered

* Build a public portfolio of verifiable performance metrics
* Get discovered by serious projects looking for proven performers
* Track team performance accurately to show clients measurable results
* Stand out from competitors with transparent data
* Demonstrate real ROI to potential clients

### For Investors

Discover crypto projects with authentic community traction

Visit [xbot.ninja](https://xbot.ninja/) to explore our new investment discovery feature:

* Find projects with genuine X activity and real engagement
* Identify legitimate investment opportunities backed by actual community activity
* Analyze projects based on verifiable metrics, not vanity numbers
* Make data-driven investment decisions

What to look for:

* Consistent engagement across multiple metrics
* Growing community participation
* Authentic conversations and discussions
* Real influencer involvement

## How Projects and KOLs Get Featured

X Bot curates high-quality data from projects and KOL teams through a selection process.



#### X Bot Installation

Must have successfully installed and configured X Bot in their Telegram community. Demonstrates commitment to transparent analytics.



#### Minimum Performance Threshold

Achieve a minimum performance score indicating sustained X activity, showing genuine engagement over time.



#### Active Community Engagement

Consistent posting and meaningful interactions, authentic community growth patterns, and regular engagement from community members.



#### Quality Content Standards

High-quality X presence with genuine engagement metrics, no artificial inflation or bot-driven activity, and authentic interactions and conversations.



### Why Curation Matters

The curation process ensures quality for all stakeholders:

* Investors: Find legitimate projects with real community backing
* Project Owners: Discover KOL teams that deliver actual engagement and ROI
* KOLs: Get discovered by serious projects looking for proven performers
* Everyone: Access transparent, verifiable metrics reflecting authentic activity

All projects and KOL teams are continuously monitored to maintain quality standards.

## Use Cases

### Crypto Projects

Boost community X engagement with competitions and prizes

* Track your project's official X account
* Monitor community hashtags and cashtags
* Run engagement competitions with transparent leaderboards
* Reward top performers with prizes
* Build authentic community participation

### Individual KOLs

Get publicly listed to showcase your competencies

* Create a personal analytics tracking group
* Monitor your X account performance
* Build a verifiable portfolio of engagement metrics
* Get discovered by projects seeking influencers
* Prove your value with transparent data

### KOL Teams

Track team performance and show clients real results

* Set up shared analytics for your entire team
* Track all team members' X accounts in one place
* Monitor project hashtags you're promoting
* Generate team performance reports
* Demonstrate ROI to clients with verifiable metrics

## Benefits Summary

### Transparency

* All metrics are verifiable and sourced directly from X (Twitter)
* No manipulation or artificial inflation
* Real-time data updates

### Authenticity

* Performance scoring weighs meaningful engagement over vanity metrics
* Curated selection ensures quality participants
* Continuous monitoring maintains standards

### Actionable Insights

* Daily automated reports with actionable data
* Leaderboards identifying top performers
* Historical trends and performance tracking
* Customizable views for different analysis needs

### Community Building

* Gamification through leaderboards and competitions
* Recognition for top contributors
* Customizable views for different analysis needs

---



## [FILE 5/5] x-bot-support.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.x.bot/x-bot-support.md
---

# Getting Support

For getting support, we recommend that you use [bws.ninja product contact page](https://www.bws.ninja/marketplace/telegram-xbot.html), as your request will reach Slack developers support channel.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

---

