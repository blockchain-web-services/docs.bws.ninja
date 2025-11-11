---
description: Writing "Hello World!" to the blockchain in just one call!
---

# Quick Start

## Get your API key

Your API requests should be authenticated using your API key (any request that doesn't include an API key will return an error).

{% hint style="info" %}
Learn how to [Get your API Key](api-how-tos/authentication/get-your-api-key.md).
{% endhint %}

## Your First BWS API Request

We're going to use the [BWS.Blockchain.Hash](solutions/bws.blockchain.hash/) solution to save a message to the blockchain.&#x20;

## Write "Hello World!" to Matchain blockchain.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/smart-contracts/call`

Let's write "Hello World!" to the Matchain blockchain network without managing network fees or Web3 wallets by calling a regular Web2 API.

#### Request Body

| Name                                         | Type   | Description                                                                                                                               |
| -------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Hash                                                                                                                       |
| version<mark style="color:red;">\*</mark>    | number | 1                                                                                                                                         |
| network<mark style="color:red;">\*</mark>    | string | matchain                                                                                                                                  |
| operation<mark style="color:red;">\*</mark>  | string | insert                                                                                                                                    |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p><strong>{</strong><br>    <strong>key: "mykey",</strong></p><p>    <strong>value: "Hello World!"</strong></p><p><strong>}</strong></p> |

Please copy & Paste one of the following code snippets and run it (remember to use your API Key).

{% tabs %}
{% tab title="curl" %}
```
curl --location 'https://api.bws.ninja/v1/smart-contracts/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Hash",
    "version": 1,
    "network": "matchain",
    "operation": "insert",
    "parameters": {
        "key": "timestamp: 1736418591440",
        "value": "Hola"
    }
}'
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
var settings = {
  "url": "https://api.bws.ninja/v1/call",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "X-Api-Key": "API-KEY",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
     "solution": "BWS.Blockchain.Hash",
    "version": 1,
    "network": "matchain",
    "operation": "insert",
    "parameters": {
        "key": "timestamp: 1736418591440",
        "value": "Hola"
    }
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
{% endtab %}

{% tab title="Phyton" %}
```python
import http.client
import json

conn = http.client.HTTPSConnection("api.bws.ninja")
payload = json.dumps({
    "solution": "BWS.Blockchain.Hash",
    "version": 1,
    "network": "matchain",
    "operation": "insert",
    "parameters": {
        "key": "timestamp: 1736418591440",
        "value": "Hola"
    }
})
headers = {
  'X-Api-Key': 'API-KEY',
  'Content-Type': 'application/json'
}
conn.request("POST", "/v1/call", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
{% endtab %}
{% endtabs %}

If executed correctly, check for`jobId` in the response body part. We will use it to verify that the blockchain operation has been completed correctly and to receive the blockchain transaction receipt and [Certificate of Trust](certificate-of-trust.md).

{% tabs %}
{% tab title="API Call response" %}
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

## Check for Status

To check for job completion and results, use the `jobId` you got from the previous call.

{% hint style="info" %}
Please note that interacting with blockchain(s) is asynchronous, so it may take some time for the operation to finish and for the blockchain receipt to be received.
{% endhint %}

## Fetch for the blockchain job status and results.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/smart-contracts/fetch`

Using the previous call response `jobId` we fetch the blockchain job started previously.

#### Request Body

| Name                                    | Type   | Description                                                                          |
| --------------------------------------- | ------ | ------------------------------------------------------------------------------------ |
| jobId<mark style="color:red;">\*</mark> | String | (use previously returned jobId, as for example 59d0f46b-0b58-4972-8aca-51d06f69f25e) |

Copy & Paste one of the following code snippets and run it (remember to use your own API Key).

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/fetch' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "jobId": "59d0f46b-0b58-4972-8aca-51d06f69f25e"
}'
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
var settings = {
  "url": "https://api.bws.ninja/v1/fetch",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "X-Api-Key": "API-KEY",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "jobId": "59d0f46b-0b58-4512-8aca-51d06f69f25e"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
{% endtab %}

{% tab title="Phyton" %}
```python
import http.client
import json

conn = http.client.HTTPSConnection("api.bws.ninja")
payload = json.dumps({
  "jobId": "59d0f46b-0b58-4512-8aca-51d06f69f25e"
})
headers = {
  'X-Api-Key': 'API-KEY',
  'Content-Type': 'application/json'
}
conn.request("POST", "/v1/fetch", payload, headers)
res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
{% endtab %}
{% endtabs %}

You should receive a response indicating the completed job and the related blockchain receipt and certificate.

{% tabs %}
{% tab title="Fetch API Call Response" %}
```json
{
    "statusCode": 200,
    "info": {
        "status": {
            "Value": "completed"
        },
        "request": {
            "solution": "BWS.Blockchain.Hash",
            "version": 1,
            "network": "matchain",
            "operation": "insert",
            "parameters": {
                "key": "timestamp: 1736418591440",
                "value": "Hola"
            }
        },
        "hash": "0xd5c51886e57b1b16e59bd866910f2c689728f9e4025a4abc14bf7b07ae21dcc8",
        "txnUrl": "https://matchscan.io/tx/0xd5c51886e57b1b16e59bd866910f2c689728f9e4025a4abc14bf7b07ae21dcc8",
        "certificateOfTrust": "https://s3.amazonaws.com/bws-backoffice-website-infra-prod/tx/matchain/0xd5c51886e57b1b16e59bd866910f2c689728f9e4025a4abc14bf7b07ae21dcc8.pdf",
        "certificateOfTrustJPG": "https://s3.amazonaws.com/bws-backoffice-website-infra-prod/tx/matchain/0xd5c51886e57b1b16e59bd866910f2c689728f9e4025a4abc14bf7b07ae21dcc8.jpg",
        "certificateOfTrustUrl": "https://prod.bws.ninja/tx.html?t=0xd5c51886e57b1b16e59bd866910f2c689728f9e4025a4abc14bf7b07ae21dcc8",
        "type": {
            "value": "blockchain-job"
        },
        "timestampInMillis": 1736418605359,
        "id": "a89bf8bf-392b-4cc3-8ded-7dbe9d43c341"
    }
}
```
{% endtab %}
{% endtabs %}

**Congratulations!** \
\
In just one call, you used BWS to save data into the Web3 blockchain ecosystem.
