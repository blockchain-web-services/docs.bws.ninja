[Home](../README.md) > [Commands](README.md) > Advanced Filtering

# Advanced Filtering

Create named filters for complex tracking scenarios and multi-project management.

> **Commands in this category:** 3
> **Last Updated:** 2025-12-31

---

## Table of Contents
- [/set_x_filtering](#set_x_filtering)
- [/get_x_filtering](#get_x_filtering)
- [/delete_x_filtering](#delete_x_filtering)

---

### /set_x_filtering

Sets up monitoring filters for X (Twitter) content that will be tracked and included in reports.
Supports multiple filter types including user mentions, keywords, and account filtering.
Each filter is saved with a unique name and can contain complex query syntax.
Only group administrators can execute this command.

- Includes automatic handling of X API query length limits (512 characters)
- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

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

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB
- `saveXBotQuery()` - Persists data to DynamoDB

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

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQueriesForChatId()` - Retrieves data from DynamoDB

**User Messages:**
- Success (With Filters): "Current X filtering queries:\n\n[List of numbered filters with names and queries]"
- Success (No Filters): "No X filtering queries found. Please set a query using /set_x_filtering <filter name> <filtering>"
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

### /delete_x_filtering

Deletes specific X (Twitter) monitoring filters or all filters for the group. 
Allows administrators to remove individual filters by name or clear all filters
using the wildcard "*" parameter. Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

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

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `deleteXBotQueriesForChatId()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

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


## Related Pages

- [Quick Filter Management](quick-filters.md) - Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.
- [Schedule Management](schedule-management.md) - Configure automated report generation schedules with custom intervals.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](README.md)
- 🏠 [Home](../README.md)
