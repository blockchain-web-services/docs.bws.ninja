## /set_topic

Configures which forum topic (thread) the bot should send reports to in Telegram groups that use forum-style topics.
If your group uses Topics (Forums), run this command inside the specific topic where you want to receive bot reports
and updates. The bot will automatically detect the current topic and save it as the destination for all future reports.
Useful for keeping bot reports organized in a dedicated topic instead of cluttering the main chat.

**Admin Only**

```
/set_topic
```

---

## /get_topic

Displays which forum topic (thread) is currently configured to receive bot reports. Shows the topic name if available,
or the thread ID if the name isn't stored. Use this to verify where the bot will send reports in forum-style groups,
or to check if a topic has been configured at all.

**Admin Only**

```
/get_topic
```

---

