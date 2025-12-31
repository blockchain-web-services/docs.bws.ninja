[Home](../) > [Commands](./) > Reports

# Reports

Generate and manage performance analytics reports for tracked X content.

> **Commands in this category:** 2
> **Last Updated:** 2025-12-31

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

### /recreate

Forces the generation of a new report by triggering the tweet fetching and report generation 
process. This command consumes credits and can optionally delete existing report history.
Only group administrators can execute this command, and requires X token and filtering 
queries to be configured.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

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

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB
- `getXBotQueriesForChatId()` - Retrieves data from DynamoDB

**User Messages:**
- Success: "Recreating report (new credits will be consumed)... please wait."
- Error (Non-admin): "Only admins can recreate the report."
- Error (No X Token): "X token not set. Please set the X token using /set_x_token <token>"
- Error (No Queries): "No queries found. Please set a query using /set_x_filtering <filter name> <filtering>"
- Error (Future Start Date): "Cannot recreate report. The calendar period start date ([date]) is set in the future. The report generation will automatically begin when the period starts."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Related Pages

- [Quick Filter Management](quick-filter-management) - 
- [Leaderboard Customization](leaderboard-customization) - Customize scoring points, colors, titles, and display settings for leaderboard reports.
- [Project Configuration](project-configuration) - Customize project metadata including name, description, logo, and URLs for reports.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
