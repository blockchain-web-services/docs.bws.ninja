# View Filters

## /list_filters

Lists all filters for the current chat

```
/list_filters
```

---

## /show_filter

Shows the current configuration of the default filter

```
/show_filter
```

---

# Add Filters

## /add_accounts

Parse filter parameter from command arguments Looks for filter=name pattern and extracts it @param {string[]} args - Command arguments

**Admin Only**

```
/add_accounts @CryptoHayes @IncomeSharks
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@CryptoHayes` |

---

## /add_keywords

Add keywords to the filter configuration.

**Admin Only**

```
/add_keywords
```

---

## /add_cashtags

Add cashtags to the filter configuration.

**Admin Only**

```
/add_cashtags $BWS $BUILD
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| tags | required | `$BWS` |

---

## /add_mentions

Add mentions to the filter configuration.

**Admin Only**

```
/add_mentions @BWSCommunity @MyProject
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@BWSCommunity` |

---

## /add_excludes

Add excludes to the filter configuration.

**Admin Only**

```
/add_excludes retweet quote
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `retweet` |

---

## /add_ignore

Add ignore to the filter configuration.

**Admin Only**

```
/add_ignore @spamuser1 @botaccount
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@spamuser1` |

---

# Remove/Clear Filters

## /remove_accounts

Removes accounts from the default filter

**Admin Only**

```
/remove_accounts @CryptoHayes
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@CryptoHayes` |

---

## /remove_keywords

Remove keywords from the filter configuration.

**Admin Only**

```
/remove_keywords
```

---

## /remove_cashtags

Remove cashtags from the filter configuration.

**Admin Only**

```
/remove_cashtags $BWS
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| tags | required | `$BWS` |

---

## /remove_mentions

Remove mentions from the filter configuration.

**Admin Only**

```
/remove_mentions @BWSCommunity
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@BWSCommunity` |

---

## /remove_excludes

Remove excludes from the filter configuration.

**Admin Only**

```
/remove_excludes retweet
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `retweet` |

---

## /remove_ignore

Remove ignore from the filter configuration.

**Admin Only**

```
/remove_ignore @spamuser1
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@spamuser1` |

---

## /clear_accounts

Clear all accounts from the filter.

**Admin Only**

```
/clear_accounts
```

---

## /clear_keywords

Clear all keywords from the filter.

**Admin Only**

```
/clear_keywords
```

---

## /clear_cashtags

Clear all cashtags from the filter.

**Admin Only**

```
/clear_cashtags
```

---

## /clear_mentions

Clear all mentions from the filter.

**Admin Only**

```
/clear_mentions
```

---

## /clear_excludes

Clear all excludes from the filter.

**Admin Only**

```
/clear_excludes
```

---

## /clear_ignore

Clear all ignore from the filter.

**Admin Only**

```
/clear_ignore
```

---


## Related Pages

- [Advanced Filtering](advanced-filtering) - Create named filters for complex tracking scenarios and multi-project management.
- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Project Configuration](project-configuration) - Customize project metadata including name, description, logo, and URLs for reports.
