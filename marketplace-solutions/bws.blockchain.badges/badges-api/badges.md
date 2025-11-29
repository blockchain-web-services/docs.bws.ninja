---
description: Build or integrate into your solution by using BWS Blockchain Badges API.
---

# Badges

A badge is a digital representation of an accomplishment, skill, or authorization that an individual can earn and display. It acts as verifiable proof of the user's achievements and can be shared across various digital platforms, enhancing their professional and personal credibility.

In the context of the Open Badge standard, a badge is represented as a JSON object that includes key metadata such as the badge name, description, criteria for earning it, issuing organization, and recipient information. This standardized format ensures interoperability and enables badges to be verified, trusted, and recognized globally.

## new\_badge

Use this operation to create a Badge you can later use to certify recognition (award/credentials).

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                      |
| -------------------------------------------- | ------ | ---------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Badges                                            |
| operation<mark style="color:red;">\*</mark>  | string | **new\_badge**                                                   |
| parameters<mark style="color:red;">\*</mark> | JSON   | check [method parameters](badges.md#new_badge-method-parameters) |

#### new\_badge Method Parameters

<table><thead><tr><th width="141">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>issuerId</td><td>string</td><td>The badge issuer ID (check <a href="badges.md#add-badge-issuer">Add Badge Issuer</a>)</td></tr><tr><td>name</td><td>string</td><td>Badge name (e.g. "Certified Data Analyst").</td></tr><tr><td>description</td><td>string</td><td>A description of the badge and what it represents.</td></tr><tr><td>criteria</td><td>string</td><td>Narrative describing the criteria to earn the badge.</td></tr><tr><td>image</td><td>base64</td><td>The image representing the badge as a base64 encoded string.</td></tr></tbody></table>

{% hint style="info" %}
**Your badge image will be saved on the InterPlanetary File System (IPFS) and served from the BWS IPFS gateway service.**\
\
The images you use should be optimized to be consumed over the internet.&#x20;

* You must create your badge image to be less than 1 MB in size for fast access (there is a hard limit of 5MB).
* Only the PNG image type is accepted.
{% endhint %}

### new\_badge API Call Example

{% tabs %}
{% tab title="Create a new Badge using Node.js" %}
```javascript
const fs = require('fs');
const axios = require('axios');

/* get the file representing the badge */
const fileData = fs.readFileSync('./files/badge.png');

/* encode file content to base64 */
const encodedData = fileData.toString('base64');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.Blockchain.Badges",
  "operation": "new_badge",
  "parameters":  {
     "name": "Cloud Developer",
     "description": "Recognizes professionals who have demonstrated expertise in cloud computing, including development and management of cloud applications and services.",
     "criteria": "To earn this badge, complete an accredited course in cloud computing, demonstrate practical experience with a portfolio of cloud projects, and pass an exam on cloud computing concepts, service models, and development practices.",
     "image": encodedData         
  }
}

/* call BWS API using Axios */
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.bws.ninja/v1/call',
  headers: { 
    'X-Api-Key': 'XqaLg...... A5k2V729v', /* use your API key here! */
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(request)
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

```
{% endtab %}
{% endtabs %}

#### new\_badge Call Response

When the API call is successfully executed, it returns the badge `id`, which is also the url you can use to fetch the badge image.

```
{
  "statusCode": 200,
  "info": {
    "badgeId": "https://badges.staging.bws.ninja/certify-badge/badge/0c4078ab-8195-40fa-9d8d-0389b5547a86"
  }
}
```

## list\_badges

Use this operation to get the list of all the badges you created.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                        | Type   | Description           |
| ------------------------------------------- | ------ | --------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.Blockchain.Badges |
| operation<mark style="color:red;">\*</mark> | string | **list\_badges**      |

### list\_badges API Call Example

{% tabs %}
{% tab title="List Badges using cURL" %}
```json
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Badges",
    "operation": "list_badges"
}'
```
{% endtab %}
{% endtabs %}

#### list\_badges Call Response

Once executed correctly, you will get a list of your badges, including the badge ID and the badge data.

```json
{
 "statusCode": 200,
 "info": [
    {
        "@context": "https://w3id.org/openbadges/v2",
        "type": "BadgeClass",
        "id": "https://badges.staging.bws.ninja/certify-badge/badge/a51233aa-f3a9-43ac-b784-a0e72ec93036",
        "name": "BWS Blockchain Developer Associate",
        "description": "Recognizes professionals who have demonstrated expertise in blockchain, including development of applications using BWS cloud services.",
        "image": "https://ipfs.bws.ninja/ipfs/QmXAkiFMsrMYQEiZE76oZ2hT4YEu97bvh8wdCnApvpFdeG",
        "criteria": {
            "narrative": "To earn the Certified Blockchain Professional - BWS Cloud Services badge, candidates must complete an approved training course, demonstrate practical experience with BWS cloud services, submit a project, and pass a comprehensive written and practical exam."
        },
        "issuer": {
            "id": "https://badges.staging.bws.ninja/certify-badge/issuer/d9623c7f-41ee-4481-86d4-974a322210b3",
            "name": "Blockchain Web Services",
            "url": "https://www.bws.ninja",
            "email": "badges@bws.ninja",
            "type": "Issuer",
            "verified": true
        }
    }
 ]
}
```

## delete\_badge

Use this API operation to delete an existing Badge.

{% hint style="info" %}
**You can only delete badges with no active Awards!**

Once a certificate has been awarded to an individual (recipient), the related badge can not be deleted.
{% endhint %}

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                                                  |
| -------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Badges                                                                        |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_badge**                                                                            |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="badges.md#delete_badge-method-parameters">method parameters</a></p><p></p> |

#### delete\_badge Method Parameters

<table><thead><tr><th width="141">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>badgeId</td><td>string</td><td>The badge ID to delete.</td></tr></tbody></table>

### delete\_badge API Call Example

{% tabs %}
{% tab title="Delete a Badge using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.Blockchain.Badges",
  "operation": "delete_badge",
  "parameters":  {
     "badgeId": "https://badges.staging.bws.ninja/certify-badge/badge/0c4078ab-8195-40fa-9d8d-0389b5547a86"   
  }
}

/* call BWS API using Axios */
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.bws.ninja/v1/call',
  headers: { 
    'X-Api-Key': 'XqaLg...... A5k2V729v', /* use your API key here! */
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(request)
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

```
{% endtab %}
{% endtabs %}

#### delete\_badge Call Response

If the call succeeds and the badge gets deleted, you will get a standard 200 response.

```json
{
  "statusCode": 200
}
```
