[Home](../) > [Commands](./) > Project Configuration

# Project Configuration

Customize project metadata including name, description, logo, and URLs for reports.

> **Commands in this category:** 10
> **Last Updated:** 2025-12-31

---

### /set_project_name

Sets the project name for the community. This name will be displayed in reports
and on the website. Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_name My Awesome Project
```
```
/set_project_name "Community Token Project"
```

**Parameters:**
- project_name (required): The name of the project

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

---

### /get_project_name

Retrieves and displays the current project name. If no name is set,
displays a message indicating no project name has been configured.

- Persists configuration in the database for future use

**Usage:**
```
/get_project_name
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

---

### /set_project_description

Sets the project description for the community. This description provides
context about the project's goals and purpose. Only group administrators 
can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_description A revolutionary DeFi platform for community governance
```
```
/set_project_description "Building the future of decentralized social networks"
```

**Parameters:**
- project_description (required): The description of the project

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

---

### /get_project_description

Retrieves and displays the current project description. If no description is set,
displays a message indicating no project description has been configured.

- Persists configuration in the database for future use

**Usage:**
```
/get_project_description
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

---

### /set_project_long_description

Sets the detailed project description for the community. This allows for longer,
more comprehensive project information. Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_long_description This is a comprehensive description of our project...
```

**Parameters:**
- long_description (required): The detailed description of the project

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

---

### /get_project_long_description

Retrieves the current detailed project description.

- Persists configuration in the database for future use

**Usage:**
```
/get_project_long_description
```

**Parameters:**
None

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

---

### /set_project_logo

Initiates the project logo upload flow. After executing this command, the bot
will wait for the user to send an image file which will be saved as the project logo.
The logo is uploaded to the website S3 bucket for public access.
Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_logo
```

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: Sets user state to 'waiting_for_project_logo' with chatId as info
- Flow: Command → Set state → Wait for photo message → Process photo → Clear state

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotState()` - Persists data to DynamoDB

---

### /get_project_logo

Retrieves and displays the current project logo URL. If no logo is set,
displays a message indicating no project logo has been configured.

- Persists configuration in the database for future use

**Usage:**
```
/get_project_logo
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

---

### /set_project_urls

Sets project URLs (website, social media, documentation, etc.). 
Accepts multiple URLs separated by spaces or commas.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_urls https://example.com https://twitter.com/project
```
```
/set_project_urls website.com, discord.gg/invite, github.com/project
```

**Parameters:**
- urls (required): One or more URLs separated by spaces or commas

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

---

### /get_project_urls

Retrieves the current project URLs.

- Persists configuration in the database for future use

**Usage:**
```
/get_project_urls
```

**Parameters:**
None

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getXBotSettings()` - Retrieves data from DynamoDB

---


## Related Pages

- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Leaderboard Customization](leaderboard-customization) - Customize scoring points, colors, titles, and display settings for leaderboard reports.
- [Filter Setup](filter-setup) - Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
