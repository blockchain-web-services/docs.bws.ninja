---
description: Error Status Codes
---

# Error Status Codes

If an error is detected on our side while running your API call, you will get one of the following error codes:

<table><thead><tr><th width="152">Status Code</th><th width="224">Meaning</th><th>Description</th></tr></thead><tbody><tr><td>400</td><td>Bad Request</td><td> Check your request parameters.</td></tr><tr><td>401</td><td>Unauthorized</td><td>Check your API key.</td></tr><tr><td>403</td><td>Forbidden</td><td>Forbidden.</td></tr><tr><td>404</td><td>Not Found</td><td>No valid API user was found.</td></tr><tr><td>405</td><td>Method Not Allowed</td><td>You tried to run an invalid method.</td></tr><tr><td>406</td><td>Not Acceptable</td><td>Invalid format.</td></tr><tr><td>410</td><td>Gone</td><td>The requested object has been removed.</td></tr><tr><td>418</td><td>I’m a teapot</td><td>Yes, I’m a teapot.</td></tr><tr><td>429</td><td>Too Many Requests</td><td>Slow down!</td></tr><tr><td>500</td><td>Unexpected Error </td><td>Try again later.</td></tr><tr><td>503</td><td>Service Unavailable</td><td>Try again later.</td></tr></tbody></table>

{% hint style="info" %}
**API RESPONSE EXAMPLE**

An API call response indicating a 500 error:

```json
{
  "statusCode": 500,
  "statusMessage": "Unexpected Error"
}
```
{% endhint %}
