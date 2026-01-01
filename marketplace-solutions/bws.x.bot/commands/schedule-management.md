## /set_schedule

Sets a schedule for when reports should be automatically generated. Supports both simple
daily time scheduling (HH:MM format) and advanced cron expressions for complex schedules.
Creates an EventBridge rule for scheduled report generation. Only group administrators 
can execute this command.

**Admin Only**

```
/set_schedule 12:30
```
```
/set_schedule 09:00 1 7
```
```
/set_schedule 14:30 Mon Wed Fri
```
```
/set_schedule cron(0 12 ? * MON-FRI *)
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| schedule | required | `value` |

---

## /get_schedule

Retrieves and displays the current scheduled time for automatic report generation.
Shows the configured UTC time or indicates if no schedule is set.

```
/get_schedule
```

---

## /delete_schedule

Removes the configured daily schedule for automatic report generation. Deletes the 
EventBridge rule and database entry. Only group administrators can execute this command.

**Admin Only**

```
/delete_schedule
```

---

