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

{% stepper %}
{% step %}
#### Find and Add the Bot

* Search for [@BWS\_X\_Bot](https://t.me/BWS_X_Bot) in Telegram
* Add the bot to your project's main Telegram group
* Make the bot an admin with the following settings:
  * Admin rights required: Yes
  * Special permissions needed: None
{% endstep %}

{% step %}
#### Create Your X Analytics Query

The following is a simple example for first-time installation. You can customize tracking later.

Track your official X account:

{% code title="/add_accounts command" %}
```
/add_accounts @YourProjectAccount
```
{% endcode %}

Track your project's cashtag:

{% code title="/add_cashtags command" %}
```
/add_cashtags $YourToken
```
{% endcode %}

Example:

{% code title="Example commands" %}
```
/add_accounts @SolanaProject
/add_cashtags $SOL
```
{% endcode %}

What this does:

* Tracks all posts from your project's X account
* Monitors posts mentioning your cashtag (e.g., `$SOL`)
* Collects engagement metrics (likes, retweets, replies, quotes, bookmarks, impressions)
* Includes tracked items in leaderboard rankings
{% endstep %}

{% step %}
#### Schedule Daily Reports

Set up automatic daily analytics reports:

{% code title="/set_schedule command" %}
```
/set_schedule 12:00
```
{% endcode %}

What this does:

* Generates automated reports daily at 12:00 UTC
* Posts performance screenshots and leaderboards to your group
* Tracks top accounts, hashtags, cashtags, and mentions
* Keeps community engaged with regular updates

Tip: Choose a time when your community is most active for maximum engagement.
{% endstep %}

{% step %}
#### Verify Installation

Force an initial report to verify everything is working:

{% code title="/recreate command" %}
```
/recreate
```
{% endcode %}

What this does:

* Creates an immediate performance report based on your configured tracking
* Shows leaderboards for accounts, hashtags, cashtags, and mentions
* Confirms tracking is working correctly
* Gives you a preview of daily automated reports
{% endstep %}

{% step %}
#### Add Project Metadata (Optional)

Add project information to be featured on the [xbot.ninja](https://xbot.ninja/) website:

{% code title="Project metadata commands" %}
```
/set_project_name "Solana"
/set_project_description "High-performance blockchain supporting builders around the world"
/set_project_logo "https://example.com/solana-logo.png"
```
{% endcode %}

What this does:

* Displays your project on the xbot.ninja website for investor and community discovery
* Helps investors find projects with authentic community traction
* Showcases your project's performance metrics publicly
{% endstep %}

{% step %}
#### Customize Your Reports (Optional)

Personalize reports with custom branding.

Set Custom Point Weights (Likes, Retweets, Replies, Quotes, Bookmarks, Impressions):

{% code title="/set_points command" %}
```
/set_points 1 2 1.5 3 2 0.001
```
{% endcode %}

Set Custom Colors:

{% code title="/set_colors command" %}
```
/set_colors #FF6B6B #4ECDC4 #45B7D1 #FFA07A #98D8C8 #F7DC6F
```
{% endcode %}

Set Custom Titles:

{% code title="/set_top_title command" %}
```
/set_top_title "🏆 Top Community Champions" "#FFD700"
```
{% endcode %}
{% endstep %}
{% endstepper %}

***

## Individual KOL Setup

Goal: Get publicly listed on [xbot.ninja](https://xbot.ninja/) to showcase your competencies and performance metrics.

{% stepper %}
{% step %}
#### Create Your Analytics Group

* Open Telegram and create a new group
* Name it something like "My X Analytics" or "KOL Performance Tracker"
* This can be a private group for personal tracking

Tip: Keep this group private or share it with potential clients to showcase your metrics.
{% endstep %}

{% step %}
#### Find and Add X Bot

* Search for [@BWS\_X\_Bot](https://t.me/BWS_X_Bot) in Telegram
* Add the bot to your newly created group
* Make the bot an admin with:
  * Admin rights required: Yes
  * Special permissions needed: None
{% endstep %}

{% step %}
#### Track Your X Account

Monitor your personal X account performance:

{% code title="/add_accounts command" %}
```
/add_accounts @YourTwitterHandle
```
{% endcode %}

Example:

{% code title="Example command" %}
```
/add_accounts @CryptoKOL_Joe
```
{% endcode %}

What this does:

* Tracks all your posts and engagement metrics
* Builds a verifiable portfolio of your performance
* Enables discovery on xbot.ninja
* Provides data for client reports
{% endstep %}

{% step %}
#### Add Your Topics

Track keywords relevant to your content:

{% code title="/add_keywords command" %}
```
/add_keywords "crypto" "DeFi" "trading" "#Bitcoin" "$BTC"
```
{% endcode %}

What this does:

* Shows which topics you're covering
* Demonstrates your niche expertise
* Tracks community engagement with your topics
* Helps projects find you based on relevant keywords
{% endstep %}

{% step %}
#### Enable Regular Reports

Get daily performance insights:

{% code title="/set_schedule command" %}
```
/set_schedule 09:00
```
{% endcode %}

What this does:

* Sends daily performance reports at 09:00 UTC
* Tracks engagement trends over time
* Helps identify top-performing content
* Provides data for client reporting
{% endstep %}

{% step %}
#### Create Your First Report

Generate your first analytics report:

{% code title="/recreate command" %}
```
/recreate
```
{% endcode %}

What this does:

* Creates an immediate snapshot of your performance
* Shows engagement metrics and rankings
* Verifies tracking is working correctly
* Gives you shareable proof of your influence
{% endstep %}

{% step %}
#### Add Your Profile Metadata (Optional)

Add profile information to be featured on the [xbot.ninja](https://xbot.ninja/) website:

{% code title="Profile metadata commands" %}
```
/set_project_name "Your Name/Brand"
/set_project_description "Crypto KOL specializing in DeFi and trading"
/set_project_logo "https://your-profile-image-url.jpg"
```
{% endcode %}

What this does:

* Displays your KOL profile on xbot.ninja
* Helps project owners discover and hire you
* Showcases engagement metrics and expertise publicly

To get publicly listed:

* Maintain a minimum performance threshold by posting and engaging consistently
* Build authentic engagement (avoid vanity metrics)
* Monitor daily reports to track progress toward listing

Note: Featured KOLs are continuously monitored to maintain quality standards.
{% endstep %}
{% endstepper %}

***

## KOL Team Setup

Goal: Track team performance accurately and show clients real, measurable results

{% stepper %}
{% step %}
#### Create Team Analytics Group

* Open Telegram and create a new group
* Name it "KOL Team Analytics" or "\[Team Name] Performance Tracker"
* This will be your shared analytics dashboard

Tip: Make this group private and invite only team members and trusted clients.
{% endstep %}

{% step %}
#### Find and Add Bot as Admin

* Search for [@BWS\_X\_Bot](https://t.me/BWS_X_Bot) in Telegram
* Add the bot to your team group
* Make the bot an admin:
  * Admin rights required: Yes
  * Special permissions needed: None
{% endstep %}

{% step %}
#### Add Team Members

Invite all KOL team members to the group:

* Click the group name to open group info
* Tap "Add Members"
* Select all team members
* Ensure everyone can see the analytics and reports
{% endstep %}

{% step %}
#### Track All Team Accounts

Add all team members' X accounts for tracking:

{% code title="/add_accounts example" %}
```
/add_accounts @KOL1 @KOL2 @KOL3
```
{% endcode %}

Example:

{% code title="Example command" %}
```
/add_accounts @CryptoKOL_Alice @DeFiKOL_Bob @TradingKOL_Charlie
```
{% endcode %}

What this does:

* Tracks team members' posts and engagement
* Creates team-wide leaderboards
* Enables performance comparisons
* Provides aggregate metrics for client reports
{% endstep %}

{% step %}
#### Set Projects You Work For

Monitor client projects with cashtags:

{% code title="/add_cashtags example" %}
```
/add_cashtags $PROJECT1 $PROJECT2 $PROJECT3
```
{% endcode %}

Example:

{% code title="Example command" %}
```
/add_cashtags $SOL $AVAX $MATIC
```
{% endcode %}

What this does:

* Tracks team engagement with client tokens
* Shows which members promote which projects
* Demonstrates ROI to clients with verifiable metrics
* Identifies top performers per campaign
{% endstep %}

{% step %}
#### Schedule Team Reports

Set up daily team performance reports:

{% code title="/set_schedule command" %}
```
/set_schedule 10:00
```
{% endcode %}

What this does:

* Generates daily reports at 10:00 UTC
* Posts leaderboards showing top team members
* Tracks trends for each project
* Provides regular updates for team and clients

Tip: Schedule for team standups or planning meetings.
{% endstep %}

{% step %}
#### Create Your First Report

Generate your first team analytics report:

{% code title="/recreate command" %}
```
/recreate
```
{% endcode %}

What this does:

* Creates an immediate team performance snapshot
* Shows individual and aggregate metrics
* Verifies all accounts are tracked correctly
* Provides shareable data for client presentations
{% endstep %}

{% step %}
#### Add Team Metadata (Optional)

Feature your team on [xbot.ninja](https://xbot.ninja/):

{% code title="Team metadata commands" %}
```
/set_project_name "Alpha KOL Team"
/set_project_description "Elite crypto KOL team specializing in DeFi, NFTs, and trading"
/set_project_logo "https://your-team-logo-url.jpg"
```
{% endcode %}

What this does:

* Displays your KOL team on xbot.ninja
* Helps project owners discover and hire your team
* Showcases team engagement metrics publicly
{% endstep %}

{% step %}
#### Customize Team Branding (Optional)

Personalize reports with custom titles:

{% code title="Branding commands" %}
```
/set_top_title "🏆 Top Team Performers This Month" "#FFD700"
/set_best_title "⭐ Best Tweet of the Period" "#4ECDC4"
```
{% endcode %}
{% endstep %}

{% step %}
#### Exclude Internal Accounts (Optional)

Hide internal/test accounts from leaderboards:

{% code title="/add_ignore_list command" %}
```
/add_ignore_list @InternalTestAccount @TeamAdminAccount
```
{% endcode %}
{% endstep %}
{% endstepper %}

***

## Verification and Testing

{% stepper %}
{% step %}
#### Check bot status

* The bot should appear as an admin in your group
{% endstep %}

{% step %}
#### Test a command

* Run `/help` to see all available commands
{% endstep %}

{% step %}
#### Generate a report

* Run `/recreate` to create your first analytics report
{% endstep %}

{% step %}
#### Review the output

* Ensure accounts and keywords are tracked correctly
{% endstep %}

{% step %}
#### Check scheduled reports

* Wait for your scheduled time to verify automation
{% endstep %}
{% endstepper %}

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
