## /help

Displays available bot commands and their descriptions. Shows different command sets based on whether
the user is a group administrator (full command list) or regular user (limited command list).

**Admin Only**

```
/help
```

---

## /start

Bot initialization command that handles different workflows based on context and user state.
In groups, shows simple bot running message. In private messages, manages complex state-based workflows
including payment confirmation, validation codes, and bot setup guidance.

```
/start
```
```
/start payment_success
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `payment_success` |

---

## /status

Checks the bot's operational status and provides basic information about bot availability.
Only group administrators can execute this command.

**Admin Only**

```
/status
```

---

## /get_chatid

Returns the chat ID of the group where the command is executed. Useful for debugging 
and configuration purposes. Only group administrators can execute this command.

**Admin Only**

```
/get_chatid
```

---

