---
description: statusCode, statusMessage, info
---

# API Responses

When calling BWS API, you can get an [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) layer [transport error](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), that is, an error that has occurred before our code is executed (for example, 503 - Service Unavailable), or a controlled error, meaning an error that is related to the parameters' values you send (404 - not found, when no data is found for your query for example).

When no transport layer error is returned, you will get a JSON message including the following parameters in the BODY part of the response:

<table><thead><tr><th width="179">Parameter</th><th width="123.33333333333334">Type</th><th>Description</th></tr></thead><tbody><tr><td>statusCode</td><td>number</td><td>The api call result code (200 if there is no error).</td></tr><tr><td>statusMessage</td><td>string</td><td>The status code related message (optional).</td></tr><tr><td>info</td><td>object</td><td>The requested information.</td></tr></tbody></table>

{% hint style="info" %}
**API RESPONSE EXAMPLE**

An API call response indicating the job id you can use to fetch results.

```json
{
  "statusCode": 200,
  "info": {
    "jobId": "543433243"
  }
}
```
{% endhint %}
