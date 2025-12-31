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

**User Messages:**
- Success (Group - Owner): Provides Stripe customer portal link for subscription management
- Success (Private - Owner): Direct portal access with management options
- Error (Group - No PRO): "This group doesn't have a PRO subscription. Use /buy to upgrade."
- Error (Group - Not Owner): "Only the subscription owner can manage the subscription. Please contact [owner] for assistance."
- Error (Private - No Subscription): "You don't have an active subscription. Use /buy to subscribe."
- Error (Stripe Portal): Error details from Stripe customer portal creation
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

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

**User Messages:**
- Success (Group - New Purchase): Creates Stripe checkout session and sends private message with payment link
- Success (Group - Already PRO): "You already have a PRO license for this group. Use /subscription to manage your subscription."
- Success (Private - Continue Purchase): Provides checkout link or subscription management options
- Error (Stripe Integration): Various Stripe-related error messages
- Error (State Management): "An error occurred while processing your request. Please try again."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

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

**User Messages:**
- Success (PRO): "*[Month Year] - PRO Edition*\nConsumed Credits: [number]"
- Success (FREE): "*[Month Year] - Free Edition*\nConsumed Credits: [number]\nRemaining: [number]\n\n💡 Upgrade to PRO for unlimited credits! Use /buy to upgrade."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

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

**User Messages:**
- Success: "🎉 Thank you for your payment! Your subscription is being activated and you'll receive confirmation shortly.\n\n✅ You can now return to your group and start using PRO features."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

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

**User Messages:**
- Success: "❌ Payment was cancelled.\n\n💡 You can try again anytime by using the /buy command in your group."
- Error (Exception): Generic exception message from XBotMessages.getCommandExceptionMessage()

---


## Related Pages

- [Admin](admin) - Administrative functions for managing bot notifications and permissions.
- [Basic Commands](basic-commands) - Essential bot operations including help, initialization, and status checks.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
