# IPFS Upload - Complete Documentation

Product Key: BWS.IPFS.Upload
Generated: 2025-12-01T18:12:49.346Z
Files: 3
Words: 669
Characters: 7,659

---



## [FILE 1/3] README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.ipfs.upload/README.md
---

---
description: Easily upload Images, PDF and JSON files to IPFS.
---

# BWS.IPFS.Upload

---



## [FILE 2/3] operations.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.ipfs.upload/operations.md
---

---
description: Easily upload Images, PDF and JSON files to IPFS.
---

# Operations

## [Upload to IPFS](operations.md#upload-to-ipfs)

Use this operation to upload content to IPFS and get the IPFS Content Identifier (CID).

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                                                                         |
| -------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.IPFS.Upload                                                                                                     |
| operation<mark style="color:red;">\*</mark>  | string | **new**                                                                                                             |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="operations.md#upload-to-ipfs-method-parameters"><strong>Method Parameters</strong></a></p><p></p> |

[CODE EXAMPLES]

#### [Upload to IPFS Method Parameters](operations.md#upload-to-ipfs-method-parameters)

<table><thead><tr><th width="161">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>description</td><td>string</td><td>Short description of your content <br>(will be returned when <a href="operations.md#list-ipfs-files">listing your IPFS files</a>).</td></tr><tr><td>content</td><td>JSON /<br>base64</td><td><p>Content to save on the IPFS network. <br>We currently support:</p><ul><li>JSON (just pass the JSON or the stringified string)</li><li>File sent as a base64 encoded string</li></ul></td></tr></tbody></table>



#### Upload to IPFS Examples

[CODE EXAMPLES]

### [Upload to IPFS call Response](operations.md#upload-to-ipfs-call-response)

When the API call is successfully executed, it returns the IPFS Content Identifier (CID) along with the corresponding IPFS URI and URL. These details facilitate easy access and reference to the uploaded content on the IPFS network.

```
{
    "statusCode": 200,
    "info": {
        "cid": "QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
        "uris": {
            "ipfs": "ipfs://QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
            "url": "https://ipfs.bws.ninja/ipfs/QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN"
        }
    }
}
```

## [List IPFS Files](operations.md#list-ipfs-files)

Get the list of your IPFS files

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description                                                                |
| ------------------------------------------- | ------ | -------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.IPFS.Upload                                                            |
| operation<mark style="color:red;">\*</mark> | string | list                                                                       |
| parameters                                  | JSON   | check [Method Parameters](operations.md#list-ipfs-files-method-parameters) |

[CODE EXAMPLES]

#### [List IPFS Files Method Parameters](operations.md#list-ipfs-files-method-parameters)

<table><thead><tr><th width="161">Parameter</th><th width="168.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>from</td><td>long</td><td><a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing a timestamp to select IPFS files from.</td></tr><tr><td>to</td><td>long</td><td><a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing a timestamp to select IPFS files to.</td></tr></tbody></table>

#### LIST IPFS Files Request Example

[CODE EXAMPLES]

### [List IPFS Files call Response](operations.md#list-ipfs-files-call-response)

Once executed correctly, you will get a list of the IPFS uploaded files using BWS API. That list will contain for each file:

* the timestamp of creation ([Unix time](https://en.wikipedia.org/wiki/Unix_time) in milliseconds),&#x20;
* the IPFS Content Identifier (CID),&#x20;
* the file type,&#x20;
* and the URIs to easily access the file&#x20;
  * IPFS URI,
  * web URL - using the BWS IPFS Gateway to fetch the file.

```json
{
    "statusCode": 200,
    "info": [
        {
            "timestamp": "1700416540067",
            "cid": "QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
            "description": "Just a simple JSON for testing BWS API",
            "fileType": "json",
            "uris": {
                "ipfs": "ipfs://QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
                "url": "https://ipfs.bws.ninja/ipfs/QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN"
            }
        },
        {
            "timestamp": "1700121600009",
            "cid": "QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "description": "image for token 1325",
            "fileType": "image",
            "uris": {
                "ipfs": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "url": "https://ipfs.bws.ninja/ipfs/QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu"
            }
        }
    ]
}
```

---



## [FILE 3/3] solution-overview.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.ipfs.upload/solution-overview.md
---

---
description: Easily upload Images, PDF and JSON files to IPFS.
---

# Solution Overview

BWS **IPFS API Service** leverages the **InterPlanetary File System (IPFS)**, a distributed, peer-to-peer storage protocol designed to create a permanent and decentralized method of storing and sharing data. IPFS breaks files into smaller chunks, distributes them across the network, and assigns each file a unique content identifier (CID) for efficient retrieval.

## [BWS IPFS Gateway](solution-overview.md#bws-ipfs-gateway)

Use **ipfs.bws.ninja** as the gateway to access the files you have uploaded to IPFS using BWS.&#x20;



Check out our lovely unicorn on IPFS using the BWS Gateway: [https://ipfs.bws.ninja/ipfs/QmU7avmnTb4iVbNGCHMJmdEbsx9nRtUx7dWGpKeE7zjo8T](https://ipfs.bws.ninja/ipfs/QmU7avmnTb4iVbNGCHMJmdEbsx9nRtUx7dWGpKeE7zjo8T)

<figure><img src="../../.gitbook/assets/IPFS_Gateway_File_Example.png" alt=""><figcaption></figcaption></figure>

## **Key Features of IPFS**

* **Decentralized Storage**\
  Files are stored across multiple nodes, enhancing reliability and fault tolerance.
* **Content Addressing**\
  Data is retrieved using its CID, ensuring that files are immutable and tamper-proof.
* **Global Accessibility**\
  IPFS data can be accessed by any node in the network, fostering collaboration and resilience.

## **Supported File Types**

Our service supports **uploading images. PDF and JSON files**, making it ideal for use cases where these formats are predominant. Examples include:

* **NFT Metadata and Assets** \
  Storing JSON metadata files and associated images for blockchain applications.
* **Decentralized Content Delivery**\
  Hosting static resources like logos or graphics for web or app projects.
* **Data Integrity and Provenance**\
  Sharing structured data (e.g., JSON) in a transparent, verifiable way.

---

