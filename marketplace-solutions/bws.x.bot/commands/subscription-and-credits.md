## /subscription

Provides access to Stripe customer portal for subscription management including billing history,
payment methods, and cancellation options. Handles both group and private message contexts
with appropriate PRO license validation and customer portal URL generation.

**Usage:**
```
/subscription` (executed in group or private chat for subscription management)
```

**Parameters:**
- None required (management command)

---

## /buy

Initiates the purchase process for X Bot Professional subscription. Handles complex multi-step
workflow that starts in group chat and continues in private messages with Stripe integration.
Creates checkout sessions for new purchases and manages subscription state transitions.

**Usage:**
```
/buy` (executed in group chat to start purchase process)
```

**Parameters:**
- None required (command triggered action)

---

## /get_credits

Displays the current credit usage and availability for the bot. Shows different information based on 
license type (FREE shows remaining credits, PRO shows unlimited usage). Credits are consumed when 
fetching posts from X (Twitter) for report generation.

**Usage:**
```
/get_credits
```

**Parameters:**
- None required

---

## /payment_success

Handles successful payment confirmation after Stripe checkout completion. This command is
automatically triggered when users return from successful Stripe payment flows via redirect URLs.
Cleans up user state and provides confirmation messaging.

**Usage:**
```
/payment_success` (automatically triggered by Stripe success URL redirect)
```

**Parameters:**
- None required (callback command from Stripe)

---

## /payment_cancelled

Handles payment cancellation when users exit Stripe checkout without completing payment.
This command is automatically triggered when users return from cancelled Stripe payment flows
via redirect URLs. Cleans up user state and provides guidance for retrying.

**Usage:**
```
/payment_cancelled` (automatically triggered by Stripe cancel URL redirect)
```

**Parameters:**
- None required (callback command from Stripe)

---


## Related Pages

- [Admin](admin) - Administrative functions for managing bot notifications and permissions.
- [Basic Commands](basic-commands) - Essential bot operations including help, initialization, and status checks.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
