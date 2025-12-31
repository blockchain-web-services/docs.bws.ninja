[Home](../) > [Commands](./) > Raid Commands

# Raid Commands

Coordinate X (Twitter) engagement raids to amplify post visibility and reach.

> **Commands in this category:** 11
> **Last Updated:** 2025-12-31

---

## Table of Contents
- [/raidx](#raidx)
- [/raid_status](#raid_status)
- [/raid_stop](#raid_stop)
- [/raid_history](#raid_history)
- [/set_raid_defaults](#set_raid_defaults)
- [/get_raid_defaults](#get_raid_defaults)
- [/set_raid_message_behavior](#set_raid_message_behavior)
- [/get_raid_message_behavior](#get_raid_message_behavior)
- [/set_raid_image](#set_raid_image)
- [/auto_raid_config](#auto_raid_config)
- [/get_auto_raid_config](#get_auto_raid_config)

---

### /raidx

Starts a new raid on an X (Twitter) post. Allows community members to engage with the post
(likes, retweets, replies, quotes) and tracks progress toward target goals.
Only group administrators can start raids.

**Admin Only:** Yes - Only group administrators can execute this command.

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

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Saved/Updated:**
- `createRaidHandler()` - Persists data to DynamoDB

**User Messages:**
- Success: Raid announcement with targets and link
- Error (Non-admin): "Only admins can start raids."
- Error (Invalid URL): "Invalid X post URL."
- Error (Raids disabled): "Raids are disabled for this chat."
- Error (Max active): "Maximum active raids reached. Please wait for current raids to complete."

---

### /raid_status

Check current raid progress

- Manages raid lifecycle and status tracking

**Usage:**
```
/raid_status
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaid()` - Retrieves data from DynamoDB
- `getActiveChatRaids()` - Retrieves data from DynamoDB

**User Messages:**
**Errors:**
- ❌ Raid not found.
- ❌ An error occurred while checking raid status.

---

### /raid_stop

Stops an active raid before completion

- Manages raid lifecycle and status tracking

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/raid_stop &lt;raid_id&gt;
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaid()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateRaidStatus()` - Persists data to DynamoDB

**User Messages:**
**Errors:**
- ❌ Only admins can stop raids.
- ❌ Usage: /raid_stop &lt;raid_id&gt;  Use /raid_status to see active raids.
- ❌ Raid not found.
- ❌ An error occurred while stopping the raid.

---

### /raid_history

Show past raids

**Usage:**
```
/raid_history
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getChatRaids()` - Retrieves data from DynamoDB

**User Messages:**
**Errors:**
- ❌ An error occurred while fetching raid history.

---

### /set_raid_defaults

Configure default raid settings

**Admin Only:** Yes - Only group administrators can execute this command.

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

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaidSettings()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateRaidSettings()` - Persists data to DynamoDB
- `createDefaultRaidSettings()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Raid default settings updated successfully.  Use /get_raid_defaults to view current settings.

**Errors:**
- ❌ Only admins can change raid settings.
- ❌ No valid settings provided.
- ❌ An error occurred while updating settings.

---

### /get_raid_defaults

View current raid settings

**Usage:**
```
/get_raid_defaults
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaidSettings()` - Retrieves data from DynamoDB

**User Messages:**
**Errors:**
- ❌ An error occurred while fetching settings.

---

### /set_raid_message_behavior

Configure how raid status messages are updated (edit/repost/pin)

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_raid_message_behavior &lt;mode&gt;
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaidSettings()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateRaidSettings()` - Persists data to DynamoDB
- `createDefaultRaidSettings()` - Persists data to DynamoDB

**User Messages:**
**Errors:**
- ❌ Only admins can change raid message behavior.
- ❌ An error occurred while updating message behavior.

---

### /get_raid_message_behavior

View current raid message update behavior

**Usage:**
```
/get_raid_message_behavior
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaidSettings()` - Retrieves data from DynamoDB

**User Messages:**
**Errors:**
- ❌ An error occurred while fetching message behavior.

---

### /set_raid_image

Initiates the raid image upload flow. After executing this command, the bot
will wait for the user to send an image file which will be saved as the raid image.
The image is uploaded to the website S3 bucket for public access and displayed
in raid announcement messages. Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_raid_image
```

**Workflow:**
- Execution Context: Groups only (checked via isValidTopic)
- Admin Verification: Requires group administrator privileges
- States: Sets user state to 'waiting_for_raid_image' with chatId as info
- Flow: Command → Set state → Wait for photo message → Process photo → Clear state

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotState()` - Persists data to DynamoDB

**User Messages:**
- Success (State saved): "Please send the raid image you'd like to use. This image will appear in all raid announcements for this chat."
- Success (Photo uploaded): "Raid image uploaded successfully! Your image will now appear in future raid announcements."
- Error (Non-admin): "Only admins can set the raid image."
- Error (Invalid topic): Topic-specific error message
- Error (Upload failed): "Failed to upload raid image. Please try again."

---

### /auto_raid_config

Configure automatic raid for best tweet of the day

**Admin Only:** Yes - Only group administrators can execute this command.

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

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
2. **Admin Check**: Confirms user has administrator privileges in the group
3. **Parameter Parsing**: Extracts and validates command arguments
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaidSettings()` - Retrieves data from DynamoDB

**Saved/Updated:**
- `updateRaidSettings()` - Persists data to DynamoDB
- `createDefaultRaidSettings()` - Persists data to DynamoDB

**User Messages:**
**Success:**
- ✅ Auto-raid settings updated successfully.  Use /get_auto_raid_config to view current settings.

**Errors:**
- ❌ Only admins can change auto-raid settings.
- ❌ No valid settings provided.
- ❌ An error occurred while updating auto-raid settings.

---

### /get_auto_raid_config

View current auto-raid settings

**Usage:**
```
/get_auto_raid_config
```

**Workflow:**
1. **Topic Validation**: Verifies command is executed in allowed topic/thread
4. **Input Validation**: Validates all provided parameters meet requirements
5. **Database Operations**: Retrieves/updates relevant data in DynamoDB
8. **User Response**: Sends success/error message to the user

**Data Layer Interaction:**
**Retrieved:**
- `getRaidSettings()` - Retrieves data from DynamoDB

**User Messages:**
**Errors:**
- ❌ An error occurred while fetching auto-raid settings.

---


## Related Pages

- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Admin](admin) - Administrative functions for managing bot notifications and permissions.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
