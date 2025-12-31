## /set_schedule

Sets a schedule for when reports should be automatically generated. Supports both simple
daily time scheduling (HH:MM format) and advanced cron expressions for complex schedules.
Creates an EventBridge rule for scheduled report generation. Only group administrators 
can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_schedule 12:30` - Generate reports daily at 12:30 UTC
```
```
/set_schedule 14:30 Mon Wed Fri` - Generate reports on Monday, Wednesday, Friday at 14:30 UTC
```
```
/set_schedule 09:00 1 7` - Generate reports on Monday (1) and Sunday (7) at 09:00 UTC
```
```
/set_schedule 16:00 Monday Wednesday` - Generate reports on Monday and Wednesday at 16:00 UTC
```
```
/set_schedule cron(0 12 ? * MON-FRI *)` - Generate reports at 12:00 UTC on weekdays only
```
```
/set_schedule cron(0 9 ? * MON *)` - Generate reports every Monday at 09:00 UTC
```

**Parameters:**
- schedule (required): Either:
- Time in HH:MM format (24-hour, UTC timezone) for daily schedules
- Time and days: HH:MM followed by day names/numbers (e.g. "14:30 Mon Wed Fri")
- AWS EventBridge cron expression for complex schedules
- Validation:
- HH:MM format with valid hours (00-23) and minutes (00-59)
- Day formats: Numbers (Monday=1-7), short names (Mon-Sun), long names (Monday-Sunday)
- Valid AWS EventBridge cron syntax: cron(Minutes Hours Day-of-month Month Day-of-week Year)

---

## /get_schedule

Retrieves and displays the current scheduled time for automatic report generation.
Shows the configured UTC time or indicates if no schedule is set.

**Usage:**
```
/get_schedule
```

**Parameters:**
- None required

---

## /delete_schedule

Removes the configured daily schedule for automatic report generation. Deletes the 
EventBridge rule and database entry. Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/delete_schedule
```

**Parameters:**
- None required

---


## Related Pages

- [Calendar &amp; Time](calendar-and-time) - Manage calendar settings and time periods for report generation cycles.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Advanced Filtering](advanced-filtering) - Create named filters for complex tracking scenarios and multi-project management.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
