---
description: POST https://api.bws.ninja/v1/fetch
---

# 'fetch' API Method

Blockchain operations are mostly asynchronous, meaning you request something and need to wait until the response or confirmation is available.

Because of that, you will find most Blockchain Web Services API calls are also asynchronous, meaning you get a `jobId` you can use it to fetch the operation status and results.\


{% hint style="info" %}
**CODE EXAMPLE**

Javascript code example to 'fetch' job status and results.

```javascript
var parameters = {
  "jobId": "b064cc6b-f394-4ca4-9c51-be506e4cc59d",
};

$.ajax({
  method: 'POST',
  url: 'https://api.bws.ninja/v1/fetch',
  dataType: 'json',
  data: JSON.stringify(parameters),
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': 'ExV0d92KzQ8QgsTVnevddpbB8cUaAfPs7ntVF8g0'
  }
});
```
{% endhint %}

## Fetch

Use this operation to fetch the status and results of a previously called operation.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/fetch`

### Request Body

| Name                                         | Type | Description                                                                                                |
| -------------------------------------------- | ---- | ---------------------------------------------------------------------------------------------------------- |
| parameters<mark style="color:red;">\*</mark> | JSON | <p>check <a href="fetch-api-method.md#method-parameters"><strong>Method Parameters</strong></a></p><p></p> |

#### Method Parameters

<table><thead><tr><th width="141">Parameter</th><th width="160.33333333333334">Type</th><th>Value(s)</th></tr></thead><tbody><tr><td>jobId</td><td>string</td><td>The jobId you get when running a <a href="call-api-method.md">call API method</a>.</td></tr></tbody></table>

{% hint style="info" %}
**API RESPONSE EXAMPLE (BWS.NFT.zK)**

A response showing a job has correctly been registered.

```json
{
    "statusCode": 200,
    "statusMessage": "",
    "info": {
        "status": {
            "Value": "completed"
        },
        "request": {
            "solution": "BWS.NFT.zK",
            "version": 1,
            "network": "mumbai",
            "operation": "new",
            "parameters": {
                "name": "BWS NFT Limited Edition",
                "description": "This NFT is a limited edition, with only 100 copies in existence, each meticulously verified on the blockchain.",
                "image": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "attributes": [{
                    "trait_type": "Rarity",
                    "value": "Ultra rare"
                }]
            }
        },
        "result": {
            "guid": "ed4f3b08-482d-44d6-b4f5-3e1209a8a00b",
            "nftTxHash": "0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
            "nftId": "62",
            "nftIPFSHash": "QmVqX5XZKnzVi9fvvMFWQEmSksV6K3TefxkzdbfrsoiPKU",
            "nftImageIPFSHash": "QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "nftJson": {
                "name": "BWS NFT Limited Edition",
                "description": "This NFT is a limited edition, with only 100 copies in existence, each meticulously verified on the blockchain.",
                "image": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "attributes": {
                    "trait_type": "Rarity",
                    "value": "Ultra rare"
                }
            },
            "url": {
                "nft": "https://ipfs.io/ipfs/QmVqX5XZKnzVi9fvvMFWQEmSksV6K3TefxkzdbfrsoiPKU",
                "image": "https://ipfs.io/ipfs/QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "transaction": "https://mumbai.polygonscan.com/tx/0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9"
            },
            "status": "created",
            "network": "mumbai",
            "transferCodes": {
                "owner": "28fd5c00-085a-4f0f-b750-a4bdcf990270",
                "receiver": "0539f"
            }
        },
        "hash": "0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
        "txnUrl": "https://mumbai.polygonscan.com/tx/0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
        "certificateOfTrust": "https://s3.amazonaws.com/bws-backoffice-website-infra-staging/tx/mumbai/0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9.pdf",
        "certificateOfTrustJPG": "https://s3.amazonaws.com/bws-backoffice-website-infra-staging/tx/mumbai/0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9.jpg",
        "certificateOfTrustUrl": "https://staging.bws.ninja/tx.html?t=0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
        "guid": "0ee9b165-064d-41c8-904a-b72de22cced6",
        "type": {
            "value": "blockchain-job"
        },
        "timestampInMillis": 1698684152535
    }
}
```
{% endhint %}

## Blockchain Job Status List

When calling `fetch` API endpoint to get a job status, you can get one of the following statuses, representing which status your blockchain process is.

<table><thead><tr><th width="165">Status</th><th>Description</th></tr></thead><tbody><tr><td>registered</td><td>The job has correctly been registered for execution.</td></tr><tr><td>calling</td><td>The transaction is been called.</td></tr><tr><td>running</td><td>The transaction is running on Blockchain Network.</td></tr><tr><td>transferring</td><td>In some scenarios, there is a transfer (e.g. transferring an NFT).</td></tr><tr><td>snapshotting</td><td>The blockchain transaction has finished, and BWS is creating the <a href="../../certificate-of-trust.md">Certificate Of Trust</a> (optional).</td></tr><tr><td>completed</td><td>Call has completed (success).</td></tr><tr><td>failed</td><td>Call execution has failed.</td></tr></tbody></table>

