## /help

Displays available bot commands and their descriptions. Shows different command sets based on whether
the user is a group administrator (full command list) or regular user (limited command list).

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/help
```

**Parameters:**
- None required

**User Messages:**
- Success (Admin): Full command list including cashtags management (/add_cashtags, /remove_cashtags, /clear_cashtags) and raid commands
- Success (Regular User): Limited command list with basic commands (/help, /buy, /subscription, /report)
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): "An error occurred while processing the help command."

---

## /start

Bot initialization command that handles different workflows based on context and user state.
In groups, shows simple bot running message. In private messages, manages complex state-based workflows
including payment confirmation, validation codes, and bot setup guidance.

- Persists configuration in the database for future use

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

**User Messages:**
- Success (Group): "X Bot is running. Please use /help to see the available commands."
- Success (Private - Default): "Welcome to BWS X Bot!" with "➕ Add to Group" inline button
- Success (Private - Validation): "Please copy the following code: \n\n [code] \n\n and paste it in the group chat."
- Success (Payment Success): "Thank you for your payment! Your subscription is getting confirmed and activated."
- Error (Payment Failed): "Payment failed or not completed.\n\n[Contact Support Message]"
- Error (Invalid Topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /status

Checks the bot's operational status and provides basic information about bot availability.
Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/status
```

**Parameters:**
- None required

**User Messages:**
- Success: "BWS X Bot is running.\nPlease check https://docs.bws.ninja/telegram-bots/x-bot for more information on how to set up the bot. You can use /help to see the available commands."
- Error (Non-admin): "Only admins can check the bot status."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---

## /get_chatid

Returns the chat ID of the group where the command is executed. Useful for debugging 
and configuration purposes. Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/get_chatid
```

**Parameters:**
- None required

**User Messages:**
- Success: "Chat ID: [chat_id_value]"
- Error (Non-admin): "Only admins can get the chat ID."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Related Pages

- [Filter Setup](filter-setup) - Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
