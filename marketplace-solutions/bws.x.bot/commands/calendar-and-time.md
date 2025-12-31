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

**User Messages:**
- Success: "Calendar set to start on [formatted_date] and repeat every [N] days."
- Error (Missing params): "Please provide both start date and cadence. Example: /set_calendar 20/06/2025 7days"
- Error (Invalid date format): "Invalid date format. Please use DD/MM/YYYY format. Example: /set_calendar 20/06/2025 7days"
- Error (Invalid cadence): "Invalid cadence format. Please use format like '7days' or '14days'. Example: /set_calendar 20/06/2025 7days"
- Error (Past date): "Start date must be in the future. Please provide a future date."
- Error (Non-admin): "Only admins can set the calendar."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

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

**User Messages:**
- Success (Configured): "Calendar is set to start on [formatted_date] and repeat every [N] days.\n\nAll times are processed and displayed in UTC."
- Success (Not Configured): "No calendar set. Please set the calendar using /set_calendar <start day> <cadence in days>"
- Error (Parse Failure): "Invalid calendar format found in database. Please reconfigure using /set_calendar."
- Error (Invalid topic): "This command is not allowed in this topic."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Related Pages

- [Schedule Management](schedule-management) - Configure automated report generation schedules with custom intervals.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
