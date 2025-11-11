---
description: '''X-Api-Key'': ''<my-api-key>'''
---

# Authentication

All of your calls must contain your API key by using the `'X-Api-Key'`header attribute.

{% hint style="info" %}
**CODE EXAMPLE**

A javascript code example showing how to include your API Key.

```javascript
$.ajax({
    ...
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': 'my-api-key'
    },
    ...
});
```
{% endhint %}
