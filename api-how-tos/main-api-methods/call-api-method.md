---
description: POST https://api.bws.ninja/v1/call
---

# 'call' API Method

BWS Solutions use a single API endpoint to call BWS Solutions: `https://api.bws.ninja/v1/call`

{% hint style="info" %}
**CODE EXAMPLE**

The following javascript code shows how to use [BWS.Blockchain.Save](../../solutions/bws.blockchain.save/) to write "Hello World!" to the mumbai blockchain network using the `save` operation.

```javascript
const response = await fetch("https://api.bws.ninja/v1/call", {
  method: "post",
  body: JSON.stringify({
    solution: "BWS.Blockchain.Save",
    version: 1,
    network: "mumbai",
    operation: "save",
    parameters: {
      value: "Hello World!",
    },
  }),
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "your api key",
  },
});
const result = await response.json();

if (result.statusCode != 200) throw new Error(result.statusMessage);

return result;
```
{% endhint %}

### Method Parameters

Please include the following parameters on each API call in the Body part of a POST request message using [JSON](https://en.wikipedia.org/wiki/JSON) format (`Content-Type` header attribute must be set to `application/json`)

<table><thead><tr><th width="140">Parameter</th><th width="104">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution</td><td>string</td><td>The solution id. <br><em>Each BWS Solution has a unique ID</em> <br><em>(e.g. BWS.Blockchain.Save)</em></td></tr><tr><td>version</td><td>number</td><td>The solution version to use.<br><em>As solutions may get upgraded with new features, it's important to note which version you want to use.</em></td></tr><tr><td>network</td><td>string</td><td>The network id to use.<br><em>Each solution will be available on different blockchain networks, just set here which one to use.</em></td></tr><tr><td>operation</td><td>string</td><td>The operation id to call.<br>Each <em>BWS Solution provides multiple operations to provide a full set of features.</em> </td></tr><tr><td>parameters</td><td>json</td><td>Each operation requires a different set of parameters.<br><em>Check the operation parameters documentation.</em></td></tr></tbody></table>

Please note:

* The `solution`, `operation` and `parameters` attributes are used to call any of the Blockchain Web Services available solutions.
* `network` is the blockchain network you want to use (for example, use the `mumbai`network to test without requiring any funds).&#x20;
* Check the available networks for the selected solution you plan to use.

### API call Response

Whenever you execute a `call` to run a BWS solution, please note the following:

* You will get a 200 status code if your call is correctly received.
* If your call is asynchronous, the `info` response attribute will contain the `jobId` you can use to call the [fetch ](fetch-api-method.md)operation to get the call status and results.
* If your call is synchronous, the `info` part will contain the call result values.

{% hint style="info" %}
**API RESPONSE EXAMPLE**

Response example when running a call to an asynchronous operation.

```json
{
  "statusCode": 200,
  "info": {
    "jobId": "aacee908-3a85-4966-945c-ab8f09ebabf9"
  }
}
```
{% endhint %}
