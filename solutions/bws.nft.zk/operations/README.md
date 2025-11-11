---
description: BWS.NFT.zK API Operations.
---

# Operations

## [Create NFT](./#create-nft)

{% hint style="info" %}
This operation is asynchronous (the blockchain network takes a while to confirm transactions). Check the blockchain transaction status and receipt using the [fetch API](../../../api-how-tos/main-api-methods/fetch-api-method.md) and the provided`jobId.`
{% endhint %}

## Creates a new NFT.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to create (Mint) a new NFT on a selected blockchain Network.

#### Request Body

| Name                                         | Type   | Description                                                                                          |
| -------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.zK                                                                                           |
| version<mark style="color:red;">\*</mark>    | number | 1                                                                                                    |
| network<mark style="color:red;">\*</mark>    | string | check [available networks](../../bws.blockchain.save/#networks)                                      |
| operation<mark style="color:red;">\*</mark>  | string | **new**                                                                                              |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check<a href="./#create-nft-method-parameters"> <strong>Method Parameters</strong></a></p><p></p> |

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

### Create NFT Method Parameters

<table><thead><tr><th width="193">Parameter</th><th width="175.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Name of your NFT.</td></tr><tr><td>description</td><td>string</td><td>The NFT description.</td></tr><tr><td>image</td><td>URL (or IPFS URI)</td><td>This is the URL or IPFS URI of your NFT image.</td></tr><tr><td>attributes  <mark style="background-color:red;">optional</mark></td><td>JSON</td><td>These are the attributes of your NFT.</td></tr></tbody></table>

#### Create NFT Request Example

{% tabs %}
{% tab title="cURL" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.NFT.zK",
    "version": 1,
    "network": "mumbai",
    "operation": "new",
    "parameters": {
        "name": "BWS NFT",
        "description": "My First NFT",
        "image": "https://uploads-ssl.webflow.com/6474d385cfec71cb21a92251/647dde8bbe8f094f5a0ee2c1_bws-violet.svg",
        "attributes":[
            {       
                "trait_type": "Rarity",
                "value": "Ultra rare" 
            }
        ]
    }
}'
```
{% endtab %}
{% endtabs %}

### Create NFT Fetch Response

<details>

<summary>Create NFT Fetch Response Example</summary>

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
                "attributes": {
                    "trait_type": "Rarity",
                    "value": "Ultra rare"
                }
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
        "receipt": {
            "_type": "TransactionReceipt",
            "blockHash": "0x56376d007d2158ffa7a196a74233db2372459ae11579e9ebce9db8cd425842f9",
            "blockNumber": 41833444,
            "contractAddress": null,
            "cumulativeGasUsed": "2448839",
            "from": "0xAb0003FA8D140ece0d63fbA2743525671FE5FE08",
            "gasPrice": "1807824549",
            "gasUsed": "134939",
            "hash": "0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
            "index": 11,
            "logs": [
                {
                    "_type": "log",
                    "address": "0xe013b879a875242193b91E6F3D8BE02458e918C1",
                    "blockHash": "0x56376d007d2158ffa7a196a74233db2372459ae11579e9ebce9db8cd425842f9",
                    "blockNumber": 41833444,
                    "data": "0x",
                    "index": 46,
                    "topics": [
                        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                        "0x0000000000000000000000000000000000000000000000000000000000000000",
                        "0x000000000000000000000000ab0003fa8d140ece0d63fba2743525671fe5fe08",
                        "0x000000000000000000000000000000000000000000000000000000000000003e"
                    ],
                    "transactionHash": "0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
                    "transactionIndex": 11
                },
                {
                    "_type": "log",
                    "address": "0xe013b879a875242193b91E6F3D8BE02458e918C1",
                    "blockHash": "0x56376d007d2158ffa7a196a74233db2372459ae11579e9ebce9db8cd425842f9",
                    "blockNumber": 41833444,
                    "data": "0x000000000000000000000000000000000000000000000000000000000000003e",
                    "index": 47,
                    "topics": [
                        "0xf8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7"
                    ],
                    "transactionHash": "0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
                    "transactionIndex": 11
                },
                {
                    "_type": "log",
                    "address": "0xe013b879a875242193b91E6F3D8BE02458e918C1",
                    "blockHash": "0x56376d007d2158ffa7a196a74233db2372459ae11579e9ebce9db8cd425842f9",
                    "blockNumber": 41833444,
                    "data": "0x000000000000000000000000000000000000000000000000000000000000003e",
                    "index": 48,
                    "topics": [
                        "0xf00d28232b285f24f2e38415deb2ceb31069e70d4505838b3911b4f02058502e"
                    ],
                    "transactionHash": "0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
                    "transactionIndex": 11
                },
                {
                    "_type": "log",
                    "address": "0x0000000000000000000000000000000000001010",
                    "blockHash": "0x56376d007d2158ffa7a196a74233db2372459ae11579e9ebce9db8cd425842f9",
                    "blockNumber": 41833444,
                    "data": "0x0000000000000000000000000000000000000000000000000000ddde1cbd7cb7000000000000000000000000000000000000000000000000862152d8b68eff6d0000000000000000000000000000000000000000000011e041061d5852d24942000000000000000000000000000000000000000000000000862074fa99d182b60000000000000000000000000000000000000000000011e04106fb366f8fc5f9",
                    "index": 49,
                    "topics": [
                        "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
                        "0x0000000000000000000000000000000000000000000000000000000000001010",
                        "0x000000000000000000000000ab0003fa8d140ece0d63fba2743525671fe5fe08",
                        "0x000000000000000000000000f903ba9e006193c1527bfbe65fe2123704ea3f99"
                    ],
                    "transactionHash": "0x4ce447adb73c291760a9674ab98380095a1a21c1d7638a9989867d8f33a817d9",
                    "transactionIndex": 11
                }
            ],
            "logsBloom": "0x0000000000000000000000000000000000000000002000000000001000000000000000000000002000000000002000000000800000000000000000000000000000000000000000000000000800000081000000400000000000010000000000000000000002080000000000000000080020010000000000008000001000000100000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000200000000000000000000000000200c000000002000000000001000000000000000000000000000000100001001020000000080000000000200000000000000000000000000000000000000000100000",
            "status": 1,
            "to": "0xe013b879a875242193b91E6F3D8BE02458e918C1"
        },
        "networkCost": 0.0,
        "networkFee": 0.0,
        "networkTotal": 0.0,
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

</details>

The [fetch operation](../../../api-how-tos/main-api-methods/fetch-api-method.md), once the NFT creation job is completed, will return the following:&#x20;

<table><thead><tr><th width="208">Parameter</th><th width="108.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td>guid</td><td>string</td><td>NFT unique id</td></tr><tr><td>network</td><td>string</td><td>Network the NFT has been created in.</td></tr><tr><td>nftTxHash</td><td>string</td><td>Blockchain transaction hash</td></tr><tr><td>nftId</td><td>string</td><td>NFT id</td></tr><tr><td>nftIPFSHash</td><td>string</td><td>NFT metadata file IPFS hash</td></tr><tr><td>nftImageIPFSHash</td><td>string</td><td>NFT image file IPFS hash</td></tr><tr><td>nftJson</td><td>json</td><td>NFT metadata json</td></tr><tr><td>url</td><td>json</td><td>(check <a href="./#nft-urls">NFT Urls</a>)</td></tr><tr><td>status</td><td>string</td><td>The NFT status: "created" or "transferred" </td></tr><tr><td>transferCodes</td><td>json</td><td>(check <a href="./#transfer-codes">Transfer Codes</a>)</td></tr></tbody></table>

#### <mark style="color:purple;">**NFT Urls**</mark>

#### Easy-to-use URLs for you to get access to NFT's most relevant data.

<table><thead><tr><th width="211.33333333333331">Parameter</th><th width="147">Type</th><th>Description</th></tr></thead><tbody><tr><td>nft</td><td>URL</td><td>NFT metada URL</td></tr><tr><td>image</td><td>URL</td><td>NFT image URL</td></tr><tr><td>transaction</td><td>URL</td><td>NFT blockchain transaction explorer URL</td></tr></tbody></table>

#### <mark style="color:purple;">**Transfer Codes**</mark>

#### Transfer codes that are required to transfer ownership when sending an NFT through email (check [NFT Ownership](../solution-overview/#networks) to learn more).

<table><thead><tr><th width="159.33333333333331">Parameter</th><th width="122">Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>string</td><td>Owner code is required to execute a transfer when sending an NFT over email.</td></tr><tr><td>receiver</td><td>string</td><td>The receiver code the new owner should indicate to execute the NFT transfer.</td></tr></tbody></table>

## [List NFTs](./#list-nfts)

## Lists your NFTs.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Get the list of your NFTs.

#### Request Body

| Name                                        | Type   | Description                                               |
| ------------------------------------------- | ------ | --------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.NFT.zK                                                |
| operation<mark style="color:red;">\*</mark> | string | list                                                      |
| parameters                                  | JSON   | check [Methods Parameters](./#list-nft-method-parameters) |

{% tabs %}
{% tab title="200 Returns the list of your NFTs." %}
```json
{
    "statusCode": 200,
    "info": [
        {
            "guid": "c1eee213-e9cb-409b-9e58-6aa3c8ea1cc5",
            "nftTxHash": "0x84c41984e2bb16d6978f84e149e6bed559de9e4c8eb1be16693b54ec729599f1",
            "nftId": "1480",
            "nftIPFSHash": "QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
            "nftImageIPFSHash": "QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "nftJson": {
                "name": "BWS NFT Limited Edition",
                "description": "This NFT is a limited edition, meticulously designed by selected artists.",
                "image": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "attributes": [
                    {
                        "value": "Ultra rare"
                    }
                ]
            },
            "url": {
                "nft": "https://ipfs.bws.ninja/ipfs/QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
                "image": "https://ipfs.bws.ninja/ipfs/QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "transaction": "https://mumbai.polygonscan.com/tx/0x84c41984e2bb16d6978f84e149e6bed559de9e4c8eb1be16693b54ec729599f1"
            },
            "status": "created",
            "network": "mumbai",
            "transferCodes": {
                "owner": "4106935b-....03cc7cc",
                "receiver": "6..cc"
            },
            "timestamp": "1701157329154"
        }
    ]
}
```
{% endtab %}
{% endtabs %}

### [List NFT Method Parameters](./#list-nft-method-parameters)

{% hint style="info" %}
If no range is defined, the last 20 NFTs are returned.
{% endhint %}

<table><thead><tr><th width="161">Parameter</th><th width="168.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>from</td><td>long</td><td>Number of milliseconds representing a timestamp to select NFTs from.</td></tr><tr><td>to</td><td>long</td><td>Number of milliseconds representing a timestamp to select NFTs to.</td></tr></tbody></table>

### [List IPFS Files call Response](./#list-ipfs-files-call-response)

#### LIST NFT Request Example

{% tabs %}
{% tab title="cURL" %}
```json
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.NFT.zK",
    "operation": "list"
}'
```
{% endtab %}
{% endtabs %}

### List NFT Response

The list operation returns the list of your NFTs, including NFT-relevant data and the network you created the NFT in.

<details>

<summary>List NFT Fetch Response Example</summary>

```json
{
    "statusCode": 200,
    "info": [
        {
            "guid": "c1eee213-e9cb-409b-9e58-6aa3c8ea1cc5",
            "nftTxHash": "0x84c41984e2bb16d6978f84e149e6bed559de9e4c8eb1be16693b54ec729599f1",
            "nftId": "1480",
            "nftIPFSHash": "QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
            "nftImageIPFSHash": "QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "nftJson": {
                "name": "BWS NFT Limited Edition",
                "description": "This NFT is a limited edition, meticulously designed by selected artists.",
                "image": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "attributes": [
                    {
                        "value": "Ultra rare"
                    }
                ]
            },
            "url": {
                "nft": "https://ipfs.bws.ninja/ipfs/QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
                "image": "https://ipfs.bws.ninja/ipfs/QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "transaction": "https://mumbai.polygonscan.com/tx/0x84c41984e2bb16d6978f84e149e6bed559de9e4c8eb1be16693b54ec729599f1"
            },
            "status": "created",
            "network": "mumbai",
            "transferCodes": {
                "owner": "4106935b-....03cc7cc",
                "receiver": "6..cc"
            },
            "timestamp": "1701157329154"
        },
            ...
        {
            "guid": "24b8b2d8-b7a1-4d0e-a881-b4a1e6de226a",
            "nftTxHash": "0x9bc9d5fc97a2ce6b076fc06d140acf842cc2f219a2144e7b4d39b7b517244686",
            "nftId": "1478",
            "nftIPFSHash": "QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
            "nftImageIPFSHash": "QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "nftJson": {
                "name": "BWS NFT Limited Edition",
                "description": "This NFT is a limited edition, meticulously designed by selected artists.",
                "image": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "attributes": [
                    {
                        "value": "Ultra rare"
                    }
                ]
            },
            "url": {
                "nft": "https://ipfs.bws.ninja/ipfs/QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
                "image": "https://ipfs.bws.ninja/ipfs/QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "transaction": "https://mumbai.polygonscan.com/tx/0x9bc9d5fc97a2ce6b076fc06d140acf842cc2f219a2144e7b4d39b7b517244686"
            },
            "status": "created",
            "network": "mumbai",
            "transferCodes": {
                "owner": "7c019f.....9a0bcf",
                "receiver": "8...f"
            },
            "timestamp": "1701109090767"
        }
    ]
}

```

</details>

## [Transfer NFT](./#transfer-nft)

{% hint style="info" %}
This operation is asynchronous. \
(once executed, check the results using [fetch API](../../../api-how-tos/main-api-methods/fetch-api-method.md) and the provided`jobId)`
{% endhint %}

## Transfer an NFT ownership.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Transfer an NFT ownership by using the new owner's wallet or email address.

#### Request Body

| Name                                         | Type   | Description                                                                           |
| -------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.zK                                                                            |
| version<mark style="color:red;">\*</mark>    | number | 1                                                                                     |
| network<mark style="color:red;">\*</mark>    | string | check [available networks](../../bws.blockchain.save/#networks)                       |
| operation<mark style="color:red;">\*</mark>  | string | **transfer**                                                                          |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="./#transfer-nft-method-parameters">Method Parameters</a></p><p></p> |

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

### Transfer NFT Method Parameters

<table><thead><tr><th width="146">Parameter</th><th width="115">Type</th><th>Desciption</th><th data-hidden>Type</th></tr></thead><tbody><tr><td>nftId</td><td>string</td><td>The unique identifier of the NFT to be transferred.</td><td>string</td></tr><tr><td>address</td><td>string</td><td>Wallet address to send the NFT to (check <a href="../solution-overview/#networks">NFT Owerneship</a>)</td><td></td></tr></tbody></table>

#### Transfer NFT Request Example

{% tabs %}
{% tab title="cURL" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.NFT.zK",
    "version": 1,
    "network": "mumbai",
    "operation": "transfer",
    "parameters": {
        "nftId": "8",
        "address": "0x45577Ff414b766B31701181fE970a0B659a6FDF8"    
    }
}'
```
{% endtab %}
{% endtabs %}

### Transfer NFT Fetch Response

The [fetch operation](../../../api-how-tos/main-api-methods/fetch-api-method.md) for the NFT transfer API call will mainly state if the transfer has been successful ([completed](../../../api-how-tos/main-api-methods/fetch-api-method.md#fetch-status)) and the related costs.

<details>

<summary>Transfer NFT Fetch Response Example</summary>

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
            "operation": "transfer",
            "parameters": {
                "nftId": "64",
                "destination": "i...l@gmail.com"
            }
        },
        "networkCost": 0.0,
        "networkFee": 0.0,
        "networkTotal": 0.0,
        "guid": "50df20.......a0a5e",
        "type": {
            "value": "blockchain-job"
        },
        "timestampInMillis": 1698751777654
    }
}
```

</details>

## [Send NFT by Email](./#send-nft-by-email)

## Send an NFT by email.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Send an NFT by using the new owner's email address.

#### Request Body

| Name                                         | Type   | Description                                                                           |
| -------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.zK                                                                            |
| network<mark style="color:red;">\*</mark>    | string | check [available networks](../../bws.blockchain.save/#networks)                       |
| operation<mark style="color:red;">\*</mark>  | string | **send**                                                                              |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="./#transfer-nft-method-parameters">Method Parameters</a></p><p></p> |

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

### Send NFT Method Parameters

<table><thead><tr><th width="146">Parameter</th><th width="115">Type</th><th>Desciption</th><th data-hidden>Type</th></tr></thead><tbody><tr><td>nftId</td><td>string</td><td>The unique identifier of the NFT to be transferred.</td><td>string</td></tr><tr><td>email</td><td>string</td><td>Email address to send the NFT to (check <a href="../solution-overview/#networks">NFT Owerneship</a>)</td><td></td></tr></tbody></table>

#### Send NFT Request Example

{% tabs %}
{% tab title="cURL" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.NFT.zK",
    "version": 1,
    "network": "mumbai",
    "operation": "send",
    "parameters": {
        "nftId": "8",
        "email": "email@bws.ninja"    
    }
}'
```
{% endtab %}
{% endtabs %}

### Send NFT by Email Response

As a confirmation message response, if the NFT send is confirmed you will get your NFT-related details, including the codes that the new owner will have to use to execute a blockchain NFT transfer.

<details>

<summary>Transfer NFT Fetch Response Example</summary>

```json
{
    "statusCode": 200,
    "info": {
        "guid": "ca06da65-04d4-4e16-b43b-0e9ee3eff622",
        "nftTxHash": "0x4ebe1ada2b3ad01f30eeeb0836d346a161c034192db52251708bb5fd0e51976a",
        "nftId": "1479",
        "nftIPFSHash": "QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
        "nftImageIPFSHash": "QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
        "nftJson": {
            "name": "BWS NFT Limited Edition",
            "description": "This NFT is a limited edition, meticulously designed by selected artists.",
            "image": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "attributes": [
                {
                    "value": "Ultra rare"
                }
            ]
        },
        "url": {
            "nft": "https://ipfs.bws.ninja/ipfs/QmTzNJ4tpWvYP2t5YxVnbgtX2pvkKyLPoHcdH1JBFXpW9W",
            "image": "https://ipfs.bws.ninja/ipfs/QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "transaction": "https://mumbai.polygonscan.com/tx/0x4ebe1ada2b3ad01f30eeeb0836d346a161c034192db52251708bb5fd0e51976a"
        },
        "status": "emailed",
        "network": "mumbai",
        "transferredTo": "i.....l@gmail.com",
        "transferCodes": {
            "owner": "fbcf8083-b6....7be198",
            "receiver": "6...4"
        },
        "timestamp": "1701157244215"
    }
}
```

</details>

