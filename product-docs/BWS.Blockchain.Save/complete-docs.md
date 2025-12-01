# Blockchain Save - Complete Documentation

Product Key: BWS.Blockchain.Save
Generated: 2025-12-01T18:12:49.057Z
Files: 3
Words: 233
Characters: 2,928

---



## [FILE 1/3] README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.blockchain.save/README.md
---

---
description: An efficient way to store data on the blockchain.
---

# BWS.Blockchain.Save

---



## [FILE 2/3] operations.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.blockchain.save/operations.md
---

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

[CODE EXAMPLES]

#### Method Parameters

<table><thead><tr><th width="143">Parameter</th><th width="103.33333333333331">Type</th><th width="156">Max. Size</th><th>Desciption</th></tr></thead><tbody><tr><td>value</td><td>string</td><td>(check network)</td><td>The value to save to blockchain.</td></tr></tbody></table>

## Curl Example



[CODE EXAMPLES]

---



## [FILE 3/3] solution-overview.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/solutions/bws.blockchain.save/solution-overview.md
---

---
description: An efficient way to store data on the blockchain.
---

# Solution Overview

**BWS.Blockchain.Save** streamlines the process of storing data on the blockchain by abstracting away the complexities of blockchain infrastructure.

With this solution, individuals and enterprises can effortlessly leverage the security and trustworthiness of blockchain technology without facing steep learning curves or high costs.

Easily write data to the blockchain and receive a  [Certificate of Trust](../../certificate-of-trust.md), providing verifiable proof of the data's integrity and authenticity. **BWS.Blockchain.Save** is the perfect tool for those who want the benefits of blockchain without the technical overhead.

## [Available Networks](solution-overview.md#networks) <a href="#networks" id="networks"></a>



<table><thead><tr><th width="140">Network Id</th><th width="464.33333333333337">Contract Address</th><th>Version</th></tr></thead><tbody><tr><td>matchain</td><td></td><td>1</td></tr><tr><td>polygon</td><td></td><td></td></tr><tr><td>mumbai</td><td></td><td></td></tr></tbody></table>

---

