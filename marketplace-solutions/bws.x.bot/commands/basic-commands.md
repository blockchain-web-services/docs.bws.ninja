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

---


## Related Pages

- [Filter Setup](filter-setup) - Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
