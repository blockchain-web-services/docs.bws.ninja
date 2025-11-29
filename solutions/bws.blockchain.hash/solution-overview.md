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

{% hint style="warning" %}
We're currently updating this solution smart contracts for Polygon (main) and Mumbai (test). Please use Matchain.
{% endhint %}

<table><thead><tr><th width="158.33333333333334">Network Id</th><th width="461">Contract Address</th><th>Version</th></tr></thead><tbody><tr><td>matchain</td><td><a href="https://matchscan.io/address/0xB5be4d761EfFE0A88941928722Ce9DCe0303B9f8">0xB5be4d761EfFE0A88941928722Ce9DCe0303B9f8</a></td><td>1</td></tr><tr><td>polygon</td><td></td><td>1</td></tr><tr><td>mumbai</td><td></td><td>1</td></tr></tbody></table>
