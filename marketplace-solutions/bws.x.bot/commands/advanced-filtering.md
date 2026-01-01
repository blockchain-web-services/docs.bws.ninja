## /set_x_filtering

Sets up monitoring filters for X (Twitter) content that will be tracked and included in reports.
Supports multiple filter types including user mentions, keywords, and account filtering.
Each filter is saved with a unique name and can contain complex query syntax.
Only group administrators can execute this command.

**Admin Only**

```
/set_x_filtering project_mentions mention:@MyProject OR #MyProjectToken
```
```
/set_x_filtering my_kols_1 from:@CryptoHayes OR from:@IncomeSharks keywords:BWS mention:@BWSCommunity
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter_name | required | `my_filter` |
| filtering_query | required | `my_filter` |

---

## /get_x_filtering

Retrieves and displays all currently configured X (Twitter) monitoring filters for the group.
Shows filter names and their associated query syntax, helping users understand what content
is being tracked for report generation.

```
/get_x_filtering
```

---

## /delete_x_filtering

Deletes specific X (Twitter) monitoring filters or all filters for the group. 
Allows administrators to remove individual filters by name or clear all filters
using the wildcard "*" parameter. Only group administrators can execute this command.

**Admin Only**

```
/delete_x_filtering my_kols_1
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `my_kols_1` |

---

