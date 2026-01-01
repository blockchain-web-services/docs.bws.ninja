## /subscription

Provides access to Stripe customer portal for subscription management including billing history,
payment methods, and cancellation options. Handles both group and private message contexts
with appropriate PRO license validation and customer portal URL generation.

```
/subscription` (executed in group or private chat for subscription management)
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `(executed` |

---

## /buy

Initiates the purchase process for X Bot Professional subscription. Handles complex multi-step
workflow that starts in group chat and continues in private messages with Stripe integration.
Creates checkout sessions for new purchases and manages subscription state transitions.

```
/buy` (executed in group chat to start purchase process)
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `(executed` |

---

## /get_credits

Displays the current credit usage and availability for the bot. Shows different information based on 
license type (FREE shows remaining credits, PRO shows unlimited usage). Credits are consumed when 
fetching posts from X (Twitter) for report generation.

```
/get_credits
```

---

## /payment_success

Handles successful payment confirmation after Stripe checkout completion. This command is
automatically triggered when users return from successful Stripe payment flows via redirect URLs.
Cleans up user state and provides confirmation messaging.

```
/payment_success` (automatically triggered by Stripe success URL redirect)
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `(automatically` |

---

## /payment_cancelled

Handles payment cancellation when users exit Stripe checkout without completing payment.
This command is automatically triggered when users return from cancelled Stripe payment flows
via redirect URLs. Cleans up user state and provides guidance for retrying.

```
/payment_cancelled` (automatically triggered by Stripe cancel URL redirect)
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `(automatically` |

---


## Related Pages

- [Admin](admin) - Administrative functions for managing bot notifications and permissions.
- [Basic Commands](basic-commands) - Essential bot operations including help, initialization, and status checks.
