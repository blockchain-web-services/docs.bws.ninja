## /set_calendar

Sets up a recurring calendar schedule for automatic report generation. Specify a start date and how often reports
should be generated (cadence in days). The bot will automatically create reports at the specified intervals starting
from the chosen date. For example, setting "20/06/2025 7days" will generate weekly reports starting June 20, 2025.
The start date can be up to 6 days in the past or any future date. All times are in UTC timezone.

**Admin Only**

```
/set_calendar 20/06/2025 7days
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| start_date | required | `20/06/2025` |
| cadence | required | `7days` |

---

## /get_calendar

Displays the current calendar schedule configuration for automatic reports, showing the start date and how often
reports are generated (cadence). Use this to verify your report generation schedule or to check if a calendar has
been configured yet. All times are shown in UTC timezone.

**Admin Only**

```
/get_calendar
```

---

