[Home](../) > [Commands](./) > Admin

# Admin

Administrative functions for managing bot notifications and permissions.

> **Commands in this category:** 1
> **Last Updated:** 2025-12-31

---

### /add_admin

Designates specific group administrators to receive private bot notifications (e.g., credit
exhaustion, errors). If no admins are designated, the bot will attempt to notify all group
administrators. Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/add_admin @user1 @user2 @user3` - Designate specific admins
```
```
/add_admin clear` - Remove all designated admins (will notify all admins)
```

**Parameters:**
- users (required): Mentioned users (via @username) or "clear" to remove all
- Validation:
- All mentioned users must be current group administrators
- Maximum 10 admins can be designated
- Overwrites previous list (does not append)

**Workflow:**
- Execution Context: Groups only (no DMs)
- Admin Verification: Requires group administrator privileges
- States: No state management required
- Flow:
1. Validate caller is admin
2. Parse mentioned users from message entities
3. Verify each mentioned user is admin via getChatMember
4. Save verified admin IDs to settings
5. Reply with success message listing added admins

**Data Layer Interaction:**
**Saved/Updated:**
- `saveXBotSetting()` - Persists data to DynamoDB

**User Messages:**
- Success (Admins added): Lists designated admins with usernames
- Success (Cleared): Confirmation that all designated admins were removed
- Error (Non-admin): "Only administrators can designate notification recipients."
- Error (Not in group): "This command can only be used in group chats."
- Error (Users not admin): Lists users who are not administrators
- Error (No users provided): Usage instructions
- Error (Too many admins): "You can designate a maximum of 10 admins."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Related Pages

- [Topic Management](topic-management) - Configure Telegram topic/thread settings for bot operation.
- [Raid Commands](raid-commands) - Coordinate X (Twitter) engagement raids to amplify post visibility and reach.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
