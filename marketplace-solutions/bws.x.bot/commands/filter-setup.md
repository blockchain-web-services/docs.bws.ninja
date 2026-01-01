# View Filters

## /list_filters

Lists all configured filters for the current group, showing their names and a summary of what each
filter tracks. Useful for managing multiple filters and understanding your current tracking setup.

**Admin Only**

```
/list_filters
```

---

## /show_filter

Displays the complete configuration of a filter including all tracked accounts, keywords, cashtags,
mentions, exclusions, and ignored accounts. Shows the resulting X API query that will be used for tracking.

**Admin Only**

```
/show_filter
```
```
/show_filter filter=kols
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter | optional | `kols` |

---

# Add Filters

## /add_accounts

Adds one or more X (Twitter) accounts to track. Posts from these accounts will be monitored
and included in reports and leaderboards. You can optionally specify a named filter to organize
different account groups (e.g., team members, influencers, competitors).

**Admin Only**

```
/add_accounts @CryptoHayes @IncomeSharks
```
```
/add_accounts filter=team @TeamMember1 @TeamMember2
```
```
/add_accounts filter=kols @VitalikButerin @APompliano @SatoshiLite
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@CryptoHayes` |
| filter | optional | `team` |

---

## /add_keywords

Adds keywords or phrases to track in X posts. Any post containing these keywords will be
monitored and included in reports. Use quotes for multi-word phrases. Keywords can include
hashtags. Helps filter content by topics, brands, or specific terms relevant to your project.

**Admin Only**

```
/add_keywords crypto blockchain DeFi
```
```
/add_keywords "blockchain technology" "#web3" innovation
```
```
/add_keywords filter=trending Bitcoin Ethereum Solana
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| keywords | required | `crypto` |
| filter | optional | `trending` |

---

## /add_cashtags

Adds cashtags (token symbols) to track in X posts. Any post containing these cashtags will be
monitored and included in reports. Cashtags must start with $ symbol. Useful for tracking
cryptocurrency tokens, stock symbols, or project-specific ticker symbols.

**Admin Only**

```
/add_cashtags $BWS $BUILD
```
```
/add_cashtags $BTC $ETH $SOL
```
```
/add_cashtags filter=tokens $BWS $BUILD $PEPE
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| cashtags | required | `$BWS` |
| filter | optional | `tokens` |

---

## /add_mentions

Adds X handles to track when they are mentioned in posts. Any post that mentions these accounts
(using @handle) will be monitored and included in reports. Different from add_accounts which tracks
posts FROM accounts - this tracks posts ABOUT/MENTIONING accounts.

**Admin Only**

```
/add_mentions @ProjectAccount @FounderAccount
```
```
/add_mentions filter=influencers @elonmusk @APompliano
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| mentions | required | `value` |
| filter | optional | `influencers` |

---

## /add_excludes

Adds keywords or phrases to exclude from tracking. Posts containing these excluded terms will be
filtered out and NOT included in reports, even if they match other filter criteria. Use this to
remove noise, spam, or irrelevant content from your tracking.

**Admin Only**

```
/add_excludes spam scam giveaway
```
```
/add_excludes filter=clean bot automated fake
```
```
/add_excludes "buy now" "limited time" advertisement
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| keywords | required | `spam` |
| filter | optional | `clean` |

---

## /add_ignore

Adds X accounts to ignore. Posts from these accounts will be filtered out and NOT included in
reports, even if they match other filter criteria. Use this to exclude bot accounts, spam accounts,
or specific users whose posts you don't want to track.

**Admin Only**

```
/add_ignore @SpamBot @FakeAccount
```
```
/add_ignore filter=clean @UnwantedUser1 @UnwantedUser2
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@SpamBot` |
| filter | optional | `clean` |

---

# Remove/Clear Filters

## /remove_accounts

Removes specific X accounts from tracking. Posts from these accounts will no longer be monitored
or included in reports. Use this to stop tracking accounts that are no longer relevant to your project.

**Admin Only**

```
/remove_accounts @OldAccount @InactiveUser
```
```
/remove_accounts filter=kols @FormerInfluencer
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@OldAccount` |
| filter | optional | `kols` |

---

## /remove_keywords

Removes specific keywords or phrases from tracking. Posts containing only these keywords will no
longer be monitored. Use quotes for multi-word phrases.

**Admin Only**

```
/remove_keywords oldterm outdated
```
```
/remove_keywords filter=trending obsolete
```
```
/remove_keywords "old phrase" deprecated
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| keywords | required | `oldterm` |
| filter | optional | `trending` |

---

## /remove_cashtags

Removes specific cashtags from tracking. Posts containing only these cashtags will no longer be monitored.

**Admin Only**

```
/remove_cashtags $OLDTOKEN
```
```
/remove_cashtags filter=tokens $DEPRECATED
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| cashtags | required | `$OLDTOKEN` |
| filter | optional | `tokens` |

---

## /remove_mentions

Removes X handles from mention tracking. Posts mentioning only these accounts will no longer be monitored.

**Admin Only**

```
/remove_mentions @OldPartner
```
```
/remove_mentions filter=influencers @FormerAmbassador
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| mentions | required | `value` |
| filter | optional | `influencers` |

---

## /remove_excludes

Removes keywords from the exclusion list. Posts containing these terms will no longer be automatically filtered out.

**Admin Only**

```
/remove_excludes spam
```
```
/remove_excludes filter=clean "false positive"
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| keywords | required | `spam` |
| filter | optional | `clean` |

---

## /remove_ignore

Removes X accounts from the ignore list. Posts from these accounts will now be tracked if they match filter criteria.

**Admin Only**

```
/remove_ignore @ReinstatedAccount
```
```
/remove_ignore filter=clean @NowRelevantUser
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| accounts | required | `@ReinstatedAccount` |
| filter | optional | `clean` |

---

## /clear_accounts

Removes ALL tracked accounts from the filter. Use this to reset account tracking and start fresh.
This does not delete the filter itself, only clears the accounts list.

**Admin Only**

```
/clear_accounts
```
```
/clear_accounts filter=kols
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter | optional | `kols` |

---

## /clear_keywords

Removes ALL keywords from the filter. Use this to reset keyword tracking.

**Admin Only**

```
/clear_keywords
```
```
/clear_keywords filter=trending
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter | optional | `trending` |

---

## /clear_cashtags

Removes ALL cashtags from the filter. Use this to reset cashtag tracking.

**Admin Only**

```
/clear_cashtags
```
```
/clear_cashtags filter=tokens
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter | optional | `tokens` |

---

## /clear_mentions

Removes ALL mentions from the filter. Use this to reset mention tracking.

**Admin Only**

```
/clear_mentions
```
```
/clear_mentions filter=influencers
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter | optional | `influencers` |

---

## /clear_excludes

Removes ALL excluded keywords from the filter. Posts with previously excluded terms will now be tracked.

**Admin Only**

```
/clear_excludes
```
```
/clear_excludes filter=clean
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter | optional | `clean` |

---

## /clear_ignore

Removes ALL ignored accounts from the filter. Posts from previously ignored accounts will now be tracked.

**Admin Only**

```
/clear_ignore
```
```
/clear_ignore filter=clean
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| filter | optional | `clean` |

---

