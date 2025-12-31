## /set_points

Sets the scoring multipliers for engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
used in leaderboard calculations. These multipliers determine how many points each type of 
engagement contributes to a user's total score. Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_points 5 1 20 10 0.01
```

**Parameters:**
- likes (required): Points awarded per like (positive number, can be decimal)
- retweets (required): Points awarded per retweet (positive number, can be decimal)
- replies (required): Points awarded per reply (positive number, can be decimal)
- quotes (required): Points awarded per quote (positive number, can be decimal)
- views (required): Points awarded per view (positive number, can be decimal)
- Validation: Each value must match positive number format (regex: /^[0-9]+(\.[0-9]+)?$/)

---

## /get_points

Retrieves and displays the current scoring multipliers for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard calculations. 
Shows either configured values or indicates default values are being used.

- Persists configuration in the database for future use

**Usage:**
```
/get_points
```

**Parameters:**
- None required

---

## /set_colors

Sets the HTML colors for displaying engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
in the leaderboard reports. Colors are stored as hexadecimal values and used for report generation.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_colors #536352 #536354 #536351 #536357 #536359
```

**Parameters:**
- likes (required): HTML hex color for likes display (e.g., #FF0000 or #F00)
- retweets (required): HTML hex color for retweets display (e.g., #00FF00)
- replies (required): HTML hex color for replies display (e.g., #0000FF)
- quotes (required): HTML hex color for quotes display (e.g., #FFFF00)
- views (required): HTML hex color for views display (e.g., #FF00FF)
- Validation: Each color must match HTML hex format (#RRGGBB or #RGB)

---

## /get_colors

Retrieves and displays the current HTML color configuration for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard reports. Shows either 
configured colors or default values if none are set.

- Persists configuration in the database for future use

**Usage:**
```
/get_colors
```

**Parameters:**
- None required

---

## /set_top_title

Sets the title text and color for the main leaderboard section in generated reports.
Allows customization of the primary heading displayed at the top of leaderboard reports.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_top_title "Weekly Leaderboard" #476a30
```
```
/set_top_title "X Engagement Rankings" #ff6b6b
```

**Parameters:**
- title_text (required): Text content for the title (in quotes if contains spaces)
- color (required): Hex color code in #RRGGBB format (e.g., #476a30)

---

## /set_best_title

Sets the title text and color for the best tweet section in generated reports.
Allows customization of the heading displayed above the highlighted best tweet.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_best_title "Tweet of the Day" #ff6b6b
```
```
/set_best_title "Top Performance" #28a745
```

**Parameters:**
- title_text (required): Text content for the title (in quotes if contains spaces)
- color (required): Hex color code in #RRGGBB format (e.g., #ff6b6b)

---

## /set_engagement_title

Sets the title text and color for the engagement scoring section in generated reports.
Allows customization of the heading displayed above engagement scoring rules and metrics.
Only group administrators can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_engagement_title "Scoring Rules" #28a745
```
```
/set_engagement_title "Engagement Metrics" #6f42c1
```

**Parameters:**
- title_text (required): Text content for the title (in quotes if contains spaces)
- color (required): Hex color code in #RRGGBB format (e.g., #28a745)

---

## /get_titles

Retrieves and displays all current title configurations for the report sections including
top title (main leaderboard), best title (best tweet), and engagement title (scoring rules).
Shows either configured values or default values for each section.

- Persists configuration in the database for future use

**Usage:**
```
/get_titles
```

**Parameters:**
- None required

---

## /set_top_count

Sets the number of users to display in the report leaderboard. This controls how many 
top-performing users are shown in the generated reports. Only group administrators 
can execute this command.

- Persists configuration in the database for future use

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_top_count 10
```

**Parameters:**
- count (required): Positive integer representing number of users to show in leaderboard
- Validation: Must be a positive integer (regex: /^[1-9][0-9]*$/)

---

## /get_top_count

Retrieves and displays the current number of users configured to show in the report 
leaderboard. Shows either the configured value or indicates default value (10) is being used.

- Persists configuration in the database for future use

**Usage:**
```
/get_top_count
```

**Parameters:**
- None required

---


## Related Pages

- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Project Configuration](project-configuration) - Customize project metadata including name, description, logo, and URLs for reports.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
