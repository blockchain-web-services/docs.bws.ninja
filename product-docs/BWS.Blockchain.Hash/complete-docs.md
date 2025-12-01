# Blockchain Hash - Complete Documentation

Product Key: BWS.Blockchain.Hash
Generated: 2025-12-01T18:12:49.207Z
Files: 3
Words: 531
Characters: 6,143

---



## [FILE 1/3] README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.blockchain.hash/README.md
---

---
description: Use the blockchain as a hash table database.
---

# BWS.Blockchain.Hash

---



## [FILE 2/3] operations.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.blockchain.hash/operations.md
---

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

[CODE EXAMPLES]

#### [Method Parameters](operations.md#method-parameters)

<table><thead><tr><th width="131">Parameter</th><th width="85.33333333333331">Type</th><th width="157">Max. Size</th><th>Desciption</th></tr></thead><tbody><tr><td>key</td><td>string</td><td><em>network limits</em></td><td>The key for your data. You can use this key to select the data using <a href="operations.md#select">select </a>operation.</td></tr><tr><td>value</td><td>string</td><td><em>network limits</em></td><td>The value to save to the selected blockchain </td></tr></tbody></table>

### Curl Example



[CODE EXAMPLES]

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

[CODE EXAMPLES]

### Method Parameters

<table><thead><tr><th width="133">Parameter</th><th width="87.33333333333331">Type</th><th width="144">Max. Size</th><th>Desciption</th></tr></thead><tbody><tr><td>key</td><td>string</td><td><em>network limits</em></td><td>The hash key you previously used to save data using <a href="operations.md#insert">insert</a> operation.</td></tr></tbody></table>

### Curl Example



[CODE EXAMPLES]

---



## [FILE 3/3] solution-overview.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.blockchain.hash/solution-overview.md
---

---
description: Use the blockchain to efficiently store data in blockchain(s).
---

# Solution Overview

**BWS.Blockchain.Hash** simplifies saving data to the blockchain, enabling you to use it as a **hash database** while abstracting the complexities of blockchain infrastructure.

## **What is a Hash Database?**

A hash database is a type of database that uses **hash keys** to efficiently retrieve and store data. Each record is assigned a unique key, often derived from the data or predefined attributes, which acts as an identifier for quick lookups. Hash databases are known for their speed and scalability, making them ideal for applications requiring rapid data access.

#### **An example: saving client data to the blockchain.**

Businesses can use **BWS.Blockchain.Hash** to manage client data by storing essential information (e.g., customer profiles or transaction records) in a blockchain-based hash database. The system uses unique keys, such as client IDs or transaction numbers, to retrieve data effortlessly.&#x20;

Here's how this could work:

* **Client Information**\
  Use a unique client ID as the hash key to link to stored client details or references.
* **Data Retrieval**\
  Quickly access data associated with a hash key for reporting, auditing, or verification purposes.
* **Enhanced Trust**\
  Leverage blockchain’s immutable nature to ensure the integrity and transparency of stored records.

#### **Why Choose BWS.Blockchain.Hash?**

This solution is perfect for individuals and businesses that want to take advantage of blockchain as a trusted and efficient hash-based storage system. With **BWS.Blockchain.Hash**, you can store and retrieve data securely, gain the benefits of blockchain transparency, and provide clients with a [Certificate of Trust](../../certificate-of-trust.md) for each entry—ensuring their data is handled responsibly and verifiably.

## Available Networks



<table><thead><tr><th width="158.33333333333334">Network Id</th><th width="461">Contract Address</th><th>Version</th></tr></thead><tbody><tr><td>matchain</td><td><a href="https://matchscan.io/address/0xB5be4d761EfFE0A88941928722Ce9DCe0303B9f8">0xB5be4d761EfFE0A88941928722Ce9DCe0303B9f8</a></td><td>1</td></tr><tr><td>polygon</td><td></td><td>1</td></tr><tr><td>mumbai</td><td></td><td>1</td></tr></tbody></table>

---

