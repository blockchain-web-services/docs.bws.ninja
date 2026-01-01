## /add_admin

Designates specific group administrators to receive important bot notifications via private messages, such as
credit exhaustion warnings, subscription renewals, or error alerts. By default, the bot sends notifications to all
group admins, but you can use this command to limit notifications to specific admins who manage the bot. This helps
reduce notification noise for admins who don't need bot alerts. All designated users must already be group administrators.

**Admin Only**

```
/add_admin clear
```
```
/add_admin @user1 @user2 @user3
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| users | required | `@user1` |

---

