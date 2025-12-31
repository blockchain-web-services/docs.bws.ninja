[Home](../) > [Commands](./) > Filter Setup

# Filter Setup

Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.

> **Commands in this category:** 20
> **Last Updated:** 2025-12-31

---

## View Filters

### /list_filters

Lists all filters for the current chat

**Usage:**
```
/list_filters
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQueriesForChatId()` - Retrieves data from DynamoDB

---

### /show_filter

Shows the current configuration of the default filter

- Includes automatic handling of X API query length limits (512 characters)

**Usage:**
```
/show_filter
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

---

## Add Filters

### /add_accounts

Parse filter parameter from command arguments Looks for filter=name pattern and extracts it @param {string[]} args - Command arguments

- Validates input format before processing
- Updates the X API query filter automatically
- Includes automatic handling of X API query length limits (512 characters)

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/add_accounts
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
7. **Overflow Check**: Ensures query stays within X API limits (512 chars)
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getOrCreateFilter()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide accounts to add.
- ⚠️ Please provide accounts to add.
- ⚠️ No valid accounts provided. Accounts should start with @ and contain only letters, numbers, and underscores.
- ⚠️ Please provide accounts to add.\n\n

---

### /add_keywords

Add keywords to the filter configuration.

- Validates input format before processing
- Updates the X API query filter automatically
- Includes automatic handling of X API query length limits (512 characters)

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/add_keywords
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
7. **Overflow Check**: Ensures query stays within X API limits (512 chars)
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getOrCreateFilter()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide keywords.
- ⚠️ Please provide keywords.
- ⚠️ No valid keywords provided.
- ⚠️ Please provide keywords.\n\n

---

### /add_cashtags

Add cashtags to the filter configuration.

- Validates input format before processing
- Updates the X API query filter automatically
- Includes automatic handling of X API query length limits (512 characters)

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/add_cashtags
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
7. **Overflow Check**: Ensures query stays within X API limits (512 chars)
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getOrCreateFilter()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide cashtags to add.
- ⚠️ Please provide cashtags to add.
- ⚠️ No valid cashtags provided. Cashtags must start with $ and contain only letters and numbers (e.g., $BWS, $BUILD, $DEGEN).
- ⚠️ Please provide cashtags to add.\n\n

---

### /add_mentions

Add mentions to the filter configuration.

- Updates the X API query filter automatically
- Includes automatic handling of X API query length limits (512 characters)

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/add_mentions
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
7. **Overflow Check**: Ensures query stays within X API limits (512 chars)
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getOrCreateFilter()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide mentions.
- ⚠️ Please provide mentions.\n\n

---

### /add_excludes

Add excludes to the filter configuration.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/add_excludes
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getOrCreateFilter()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide exclusion options.
- ⚠️ No valid exclusion options provided.
- ⚠️ Please provide exclusion options.\n\n
- ⚠️ No valid exclusion options provided.\n

---

### /add_ignore

Add ignore to the filter configuration.

- Validates input format before processing
- Updates the X API query filter automatically
- Includes automatic handling of X API query length limits (512 characters)

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/add_ignore
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
7. **Overflow Check**: Ensures query stays within X API limits (512 chars)
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getOrCreateFilter()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide users to ignore.
- ⚠️ No valid usernames provided.
- ⚠️ Please provide users to ignore.\n\n

---

## Remove/Clear Filters

### /remove_accounts

Removes accounts from the default filter

- Validates input format before processing
- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/remove_accounts
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide accounts to remove.
- ⚠️ Please provide accounts to remove.
- ⚠️ No filter configured. Use /add_accounts to start.
- ⚠️ Please provide accounts to remove.\n\n

---

### /remove_keywords

Remove keywords from the filter configuration.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/remove_keywords
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide keywords to remove.
- ⚠️ Please provide keywords to remove.
- ⚠️ No filter configured.
- ⚠️ Please provide keywords to remove.\n\n

---

### /remove_cashtags

Remove cashtags from the filter configuration.

- Validates input format before processing
- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/remove_cashtags
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide cashtags to remove.
- ⚠️ Please provide cashtags to remove.
- ⚠️ No filter configured. Use /add_cashtags to start.
- ⚠️ Please provide cashtags to remove.\n\n

---

### /remove_mentions

Remove mentions from the filter configuration.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/remove_mentions
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide mentions to remove.
- ⚠️ No filter configured.
- ⚠️ Please provide mentions to remove.\n\n

---

### /remove_excludes

Remove excludes from the filter configuration.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/remove_excludes
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide exclusions to remove.
- ⚠️ No filter configured.
- ⚠️ Please provide exclusions to remove.\n\n

---

### /remove_ignore

Remove ignore from the filter configuration.

- Validates input format before processing
- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/remove_ignore
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Warnings/Info:**
- ⚠️ Please provide users to stop ignoring.
- ⚠️ No filter configured.
- ⚠️ Please provide users to stop ignoring.\n\n

---

### /clear_accounts

Clear all accounts from the filter.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/clear_accounts
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Cleared all accounts from filter.

**Warnings/Info:**
- ⚠️ No filter configured.

---

### /clear_keywords

Clear all keywords from the filter.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/clear_keywords
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Cleared all keywords from filter.

**Warnings/Info:**
- ⚠️ No filter configured.

---

### /clear_cashtags

Clear all cashtags from the filter.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/clear_cashtags
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Cleared all cashtags from filter.

**Warnings/Info:**
- ⚠️ No filter configured.

---

### /clear_mentions

Clear all mentions from the filter.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/clear_mentions
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Cleared all mentions from filter.

**Warnings/Info:**
- ⚠️ No filter configured.

---

### /clear_excludes

Clear all excludes from the filter.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/clear_excludes
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Cleared all exclusions from filter.

**Warnings/Info:**
- ⚠️ No filter configured.

---

### /clear_ignore

Clear all ignore from the filter.

- Updates the X API query filter automatically

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/clear_ignore
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
6. **Query Construction**: Builds X API query string from components
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotQuery()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateXBotQueryComponents()` - Persists data to DynamoDB
- `deleteXBotQuery()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Cleared all ignored users from filter.

**Warnings/Info:**
- ⚠️ No filter configured.

---


## Related Pages

- [Advanced Filtering](advanced-filtering) - Create named filters for complex tracking scenarios and multi-project management.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Project Configuration](project-configuration) - Customize project metadata including name, description, logo, and URLs for reports.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
