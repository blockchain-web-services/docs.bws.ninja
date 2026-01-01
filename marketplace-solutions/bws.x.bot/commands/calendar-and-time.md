## /set_calendar

Configures the start date and cadence (period) for report generation. Sets up a calendar-based 
schedule that determines when reports are automatically generated. Only group administrators 
can execute this command.

**Admin Only**

```
/set_calendar 20/06/2025 7days` - Start reports on June 20, 2025, every 7 days
```
```
/set_calendar 01/01/2025 14days` - Start reports on January 1, 2025, every 14 days
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| start_date | required | `20/06/2025` |
| cadence | required | `7days` |

---

## /get_calendar

Retrieves and displays the current calendar configuration including start date and cadence 
for report generation. Shows the configured schedule or indicates if no calendar is set.

```
/get_calendar
```

---


## Related Pages

- [Schedule Management](schedule-management) - Configure automated report generation schedules with custom intervals.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
