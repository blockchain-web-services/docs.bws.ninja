---
description: Use the blockchain as your trusted database.
---

# Operations

## [Insert](operations.md#insert)

Saves data to selected blockchain network you can later retrieve using [select ](operations.md#select)operation.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Value                                                          |
| -------------------------------------------- | ------ | -------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Hash                                            |
| version<mark style="color:red;">\*</mark>    | number | 1                                                              |
| network<mark style="color:red;">\*</mark>    | string | check [networks](solution-overview.md#networks)                |
| operation<mark style="color:red;">\*</mark>  | string | **insert**                                                     |
| parameters<mark style="color:red;">\*</mark> | JSON   | check [**Method Parameters**](operations.md#method-parameters) |

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

#### [Method Parameters](operations.md#method-parameters)

<table><thead><tr><th width="131">Parameter</th><th width="85.33333333333331">Type</th><th width="157">Max. Size</th><th>Desciption</th></tr></thead><tbody><tr><td>key</td><td>string</td><td><em>network limits</em></td><td>The key for your data. You can use this key to select the data using <a href="operations.md#select">select </a>operation.</td></tr><tr><td>value</td><td>string</td><td><em>network limits</em></td><td>The value to save to the selected blockchain </td></tr></tbody></table>

### Curl Example

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
    "solution": "BWS.Blockchain.Hash",
    "version": 1,
    "network": "matchain",
    "operation": "insert",
    "parameters": {
        "key": "my patient id",
        "value": "my patient data"
    }
}'
```
{% endtab %}
{% endtabs %}

## [Select](operations.md#select)

Retrieve previously saved data using [insert](operations.md#insert) operation.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                                                          |
| -------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Hash                                                                                  |
| version<mark style="color:red;">\*</mark>    | number | 1                                                                                                    |
| network<mark style="color:red;">\*</mark>    | string | check [networks](solution-overview.md#networks)                                                      |
| operation<mark style="color:red;">\*</mark>  | string | **select**                                                                                           |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="operations.md#method-parameters"><strong>Method Parameters</strong></a></p><p></p> |

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

### Method Parameters

<table><thead><tr><th width="133">Parameter</th><th width="87.33333333333331">Type</th><th width="144">Max. Size</th><th>Desciption</th></tr></thead><tbody><tr><td>key</td><td>string</td><td><em>network limits</em></td><td>The hash key you previously used to save data using <a href="operations.md#insert">insert</a> operation.</td></tr></tbody></table>

### Curl Example

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
    "contract": "Ethereum.Database.Mutable",
    "version": 1,
    "network": "matchain",
    "operation": "select",
    "parameters": {
        "key": "my patient id"
    }
}'
```
{% endtab %}
{% endtabs %}
