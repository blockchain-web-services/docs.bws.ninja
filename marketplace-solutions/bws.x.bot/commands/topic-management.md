## /set_topic

Sets the specific topic (forum thread) where the bot should send reports in Telegram groups 
that use forum-style topics. This command must be executed within the target topic thread.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_topic` (executed within the desired topic thread)
```

**Parameters:**
- None required (automatically captures current topic context)

**User Messages:**
- Success (With Name): "Topic set to \"[topic name]\"."
- Success (Without Name): "Topic set with ID [thread_id]."
- Error (Non-admin): "Only admins can set the topic."
- Error (Not in Topic): "This command can only be used in a topic chat."
- Error (No Thread ID): "This command can only be used in a topic chat with an existing topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /get_topic

Retrieves and displays the currently configured topic (forum thread) where the bot 
sends reports. Shows either the topic name or thread ID if configured.

- Persists configuration in the database for future use

**Usage:**
```
/get_topic
```

**Parameters:**
- None required

**User Messages:**
- Success (With Name): "Bot will send reports to topic \"[topic name]\"."
- Success (Without Name): "Bot will send reports to topic ID [thread_id]."
- Success (Not Configured): "No topic set. Please set the topic using /set_topic in a topic chat."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Related Pages

- [Admin](admin) - Administrative functions for managing bot notifications and permissions.
- [Basic Commands](basic-commands) - Essential bot operations including help, initialization, and status checks.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
