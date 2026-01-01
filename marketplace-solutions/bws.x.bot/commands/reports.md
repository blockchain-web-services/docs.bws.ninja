## /report

Displays the most recently generated leaderboard report for your community. The bot sends both a visual chart image
and formatted text showing engagement statistics and rankings for tracked accounts based on your configured scoring rules.
Use this to quickly share the latest community performance data without waiting for the next scheduled report. Any
community member can view reports - no admin privileges required.

**Admin Only**

```
/report
```

---

## /recreate

Triggers immediate generation of a fresh report by fetching latest X (Twitter) data and creating new leaderboards.
This bypasses the normal scheduled report generation and consumes credits. Use this when you want an updated report
outside the regular schedule, such as after adding new accounts to track or when preparing for a presentation. You
can optionally delete all existing report history to start completely fresh.

**Admin Only**

```
/recreate
```
```
/recreate delete-history
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| delete-history | optional | `value` |

---

