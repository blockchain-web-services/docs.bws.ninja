## /add_admin

Designates specific group administrators to receive private bot notifications (e.g., credit
exhaustion, errors). If no admins are designated, the bot will attempt to notify all group
administrators. Only group administrators can execute this command.

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

---


## Related Pages

- [Topic Management](topic-management) - Configure Telegram topic/thread settings for bot operation.
- [Raid Commands](raid-commands) - Coordinate X (Twitter) engagement raids to amplify post visibility and reach.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
