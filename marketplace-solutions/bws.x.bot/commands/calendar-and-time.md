## /set_calendar

Configures the start date and cadence (period) for report generation. Sets up a calendar-based 
schedule that determines when reports are automatically generated. Only group administrators 
can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_calendar 20/06/2025 7days` - Start reports on June 20, 2025, every 7 days
```
```
/set_calendar 01/01/2025 14days` - Start reports on January 1, 2025, every 14 days
```

**Parameters:**
- start_date (required): Date in DD/MM/YYYY format (e.g., "20/06/2025")
- cadence (required): Period in "Ndays" format (e.g., "7days", "14days")

---

## /get_calendar

Retrieves and displays the current calendar configuration including start date and cadence 
for report generation. Shows the configured schedule or indicates if no calendar is set.

- Persists configuration in the database for future use

**Usage:**
```
/get_calendar
```

**Parameters:**
- None required

---


## Related Pages

- [Schedule Management](schedule-management) - Configure automated report generation schedules with custom intervals.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
