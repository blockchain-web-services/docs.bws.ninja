## /report

Displays the last generated report for the group. Retrieves and sends the most recent 
leaderboard report including both image and text components. The report shows user 
engagement statistics and rankings based on configured scoring rules.

```
/report
```

---

## /recreate

Forces the generation of a new report by triggering the tweet fetching and report generation 
process. This command consumes credits and can optionally delete existing report history.
Only group administrators can execute this command, and requires X token and filtering 
queries to be configured.

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
| value | required | `delete-history` |

---

