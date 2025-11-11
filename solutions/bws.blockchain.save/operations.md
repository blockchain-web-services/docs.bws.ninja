---
description: Save data to  blockchain.
---

# Operations

## [Save](operations.md#save)

Use this operation to save data to the selected blockchain.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                                         |
| -------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Save                                                                 |
| version<mark style="color:red;">\*</mark>    | number | 1                                                                                   |
| network<mark style="color:red;">\*</mark>    | string | check [networks](solution-overview.md#networks)                                     |
| operation<mark style="color:red;">\*</mark>  | string | **save**                                                                            |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="operations.md#method-parameters">Method Parameters</a></p><p></p> |

{% tabs %}
{% tab title="200 Returns the related job Id" %}
<pre class="language-json"><code class="lang-json"><strong>{
</strong>    "statusCode": 200,
    "statusMessage": "",
    "info": {
        "jobId": "59d0f46b-0b58-4972-8aca-51d06f69f25e"
    }
}
</code></pre>
{% endtab %}
{% endtabs %}

#### Method Parameters

<table><thead><tr><th width="143">Parameter</th><th width="103.33333333333331">Type</th><th width="156">Max. Size</th><th>Desciption</th></tr></thead><tbody><tr><td>value</td><td>string</td><td>(check network)</td><td>The value to save to blockchain.</td></tr></tbody></table>

## Curl Example

{% hint style="info" %}
This operation is asynchronous.\
Once executed, check the results using [fetch API](../../api-how-tos/main-api-methods/fetch-api-method.md) and the provided`jobId.`
{% endhint %}

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Save",
    "version": 1,
    "network": "mumbai",
    "operation": "save",
    "parameters": { 
        "value": "Hello World!"
    }
}'
```
{% endtab %}
{% endtabs %}
