## /set_x_filtering

Creates advanced named filters with complex X API query syntax. Supports combining multiple criteria
using logical operators (OR, AND) and special operators (from:, keywords:, mention:, exclude:, ignore:).
Use this for sophisticated tracking scenarios requiring multiple conditions and Boolean logic that go
beyond simple add/remove commands.

**Admin Only**

```
/set_x_filtering project_mentions mention:@MyProject OR #MyProjectToken
```
```
/set_x_filtering my_kols from:@CryptoHayes OR from:@IncomeSharks keywords:BWS
```
```
/set_x_filtering trending #DeFi OR #crypto OR #blockchain exclude:scam ignore:@SpamBot
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter_name | required | `my_filter` |
| query_syntax | required | `value` |

---

## /get_x_filtering

Lists all advanced named filters configured for your group. Shows each filter's name and its complete
X API query syntax, helping you understand what content is being tracked. Use this to review your
sophisticated filtering setup created with /set_x_filtering.

**Admin Only**

```
/get_x_filtering
```

---

## /delete_x_filtering

Deletes advanced named filters created with /set_x_filtering. Remove a specific filter by name to stop
tracking that particular query, or use the wildcard "*" to delete all advanced filters at once. This does
not affect simple filters managed with add/remove commands.

**Admin Only**

```
/delete_x_filtering my_kols
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter_name | required | `my_filter` |

---

