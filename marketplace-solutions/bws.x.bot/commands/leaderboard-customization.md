## /set_points

Sets the scoring multipliers for engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
used in leaderboard calculations. These multipliers determine how many points each type of 
engagement contributes to a user's total score. Only group administrators can execute this command.

**Admin Only**

```
/set_points 5 1 20 10 0.01
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| likes | required | `50` |
| retweets | required | `50` |
| replies | required | `50` |
| quotes | required | `50` |
| views | required | `value` |

---

## /get_points

Retrieves and displays the current scoring multipliers for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard calculations. 
Shows either configured values or indicates default values are being used.

```
/get_points
```

---

## /set_colors

Sets the HTML colors for displaying engagement metrics (Likes, Retweets, Replies, Quotes, Views) 
in the leaderboard reports. Colors are stored as hexadecimal values and used for report generation.
Only group administrators can execute this command.

**Admin Only**

```
/set_colors #536352 #536354 #536351 #536357 #536359
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| likes | required | `50` |
| retweets | required | `50` |
| replies | required | `50` |
| quotes | required | `50` |
| views | required | `value` |

---

## /get_colors

Retrieves and displays the current HTML color configuration for engagement metrics 
(Likes, Retweets, Replies, Quotes, Views) used in leaderboard reports. Shows either 
configured colors or default values if none are set.

```
/get_colors
```

---

## /set_top_title

Sets the title text and color for the main leaderboard section in generated reports.
Allows customization of the primary heading displayed at the top of leaderboard reports.
Only group administrators can execute this command.

**Admin Only**

```
/set_top_title "Weekly Leaderboard" #476a30
```
```
/set_top_title "X Engagement Rankings" #ff6b6b
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| title_text | required | `My Title` |
| color | required | `#FF5733` |

---

## /set_best_title

Sets the title text and color for the best tweet section in generated reports.
Allows customization of the heading displayed above the highlighted best tweet.
Only group administrators can execute this command.

**Admin Only**

```
/set_best_title "Top Performance" #28a745
```
```
/set_best_title "Tweet of the Day" #ff6b6b
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| title_text | required | `My Title` |
| color | required | `#FF5733` |

---

## /set_engagement_title

Sets the title text and color for the engagement scoring section in generated reports.
Allows customization of the heading displayed above engagement scoring rules and metrics.
Only group administrators can execute this command.

**Admin Only**

```
/set_engagement_title "Scoring Rules" #28a745
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| title_text | required | `My Title` |
| color | required | `#FF5733` |

---

## /get_titles

Retrieves and displays all current title configurations for the report sections including
top title (main leaderboard), best title (best tweet), and engagement title (scoring rules).
Shows either configured values or default values for each section.

```
/get_titles
```

---

## /set_top_count

Sets the number of users to display in the report leaderboard. This controls how many 
top-performing users are shown in the generated reports. Only group administrators 
can execute this command.

**Admin Only**

```
/set_top_count 10
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| count | required | `value` |

---

## /get_top_count

Retrieves and displays the current number of users configured to show in the report 
leaderboard. Shows either the configured value or indicates default value (10) is being used.

```
/get_top_count
```

---


## Related Pages

- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Project Configuration](project-configuration) - Customize project metadata including name, description, logo, and URLs for reports.
