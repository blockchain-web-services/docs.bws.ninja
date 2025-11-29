---
description: Build or integrate into your solution by using BWS Blockchain Badges API.
---

# Awards (Credentials)

Awarding a badge represents the digital acknowledgment of an individual's skills, accomplishments, or milestones. This process enables the issuance of verifiable digital credentials to individuals who meet predefined criteria, serving as a modern and secure way to recognize professional development, achievements, or learning milestones.

An **Open Badge award** is a digital credential that adheres to the Open Badge standard, ensuring it includes essential metadata such as the badge name, description, issuing organization, criteria for earning, and the recipient's details. This verifiable and interoperable format allows the awarded badge to be shared across digital platforms, embedded in resumes or social profiles, and trusted as proof of achievement worldwide.

## new\_award

Use this operation to create a new award or credential, with the option to leverage blockchain technology for added transparency and trust.

By utilizing blockchain, each award is immutably recorded on a decentralized ledger, ensuring that the credential is tamper-proof and verifiable by anyone, anywhere. This not only enhances the credibility of the award but also provides long-term assurance to recipients and organizations that the achievement cannot be altered or disputed.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                                  |
| -------------------------------------------- | ------ | ---------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Badges                                                        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_award**                                                               |
| parameters<mark style="color:red;">\*</mark> | JSON   | check [method parameters](awards-credentials.md#new_award-method-parameters) |

#### new\_award Method Parameters

{% hint style="info" %}
We currently support Matchain blockchain network to certify BWS Blokchain Badge, as the most cost effective solution (1 badge award costs 0.01 USD).
{% endhint %}

<table><thead><tr><th width="129">Parameter</th><th width="96.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>badgeId</td><td>string</td><td>The badge ID (check <a href="awards-credentials.md#create-a-new-badge">Create a new Badge</a> on how to create a Badge and get its ID).</td></tr><tr><td>issuedOn</td><td>long</td><td><a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing the date the award was issued.</td></tr><tr><td>expires </td><td>long</td><td>Optional. <a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing the date the award will expire.</td></tr><tr><td>recipient</td><td>JSON</td><td>The<a href="awards-credentials.md#new_award-recipient-parameters-json"> recipient fields</a>, including the email and name, representing the identity of the individual being awarded the badge or credential.</td></tr><tr><td><mark style="background-color:green;">blockchain</mark></td><td>string</td><td>Optional. To enhance the security and verifiability specify the blockchain to use (e.g., "matchain"). Blockchain certification ensures your credentials are tamper-proof, globally verifiable, and maintain long-term trust and transparency.</td></tr></tbody></table>

#### **new\_award Recipient Parameters JSON**

Include the below parameters to identify the certificate (award) recipient.&#x20;

{% hint style="info" %}
**Recipient email data encryption.**

When you send the recipient's email, we hash (encrypt) the original, and the readable email address is never saved into our databases.&#x20;
{% endhint %}

<table><thead><tr><th width="127">Parameter</th><th width="80.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>email</td><td>string</td><td>The recipient email address.</td></tr><tr><td>name</td><td>string</td><td>The full name of the recipient.</td></tr></tbody></table>

### new\_award API Call Example

{% tabs %}
{% tab title="Award a Badge using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
    "solution": "BWS.Blockchain.Badges",
    "operation": "new_award",
    "parameters":  {
         "badgeId": "https://badges.staging.bws.ninja/certify-badge/badge/0c4078ab-8195-40fa-9d8d-0389b5547a86",
         "issuedOn": 1707123790310,
         "recipient": {
            "email": "wile@coyote.com",
            "name": "Wile Ethelbert Coyote"
         },
         "blockchain": "matchain"    
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

#### new\_award Call Response

If everything goes ok, you get the `awardId`, which is also the URL to access the Open Badge award definition.

```json
{
    "statusCode": 200,
    "info": {
        "awardId": "https://badges.staging.bws.ninja/certify-badge/award/d7da7231-548e-4fc3-b5a9-b0ef2f34e9a8"
    }
}
```

## list\_awards

Use this operation to get a list of awards.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description           |
| ------------------------------------------- | ------ | --------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.Blockchain.Badges |
| operation<mark style="color:red;">\*</mark> | string | list\_awards          |
| parameters                                  | JSON   | optional parameters   |

#### list\_awards Method Parameters

<table><thead><tr><th width="191">Parameter</th><th width="114.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>filter</td><td>JSON</td><td>The filtering options you want to apply.</td></tr><tr><td>lastEvaluatedKey</td><td>string</td><td>Use lastEvaluatedKey for pagination. </td></tr></tbody></table>

#### list\_awards filter option Parameters

{% hint style="warning" %}
**NOTE**

If you use the filter keyword search option, a maximum of 51 awards will be returned, and no pagination will be available (lastEvaluatedKey).
{% endhint %}

<table><thead><tr><th width="129">Parameter</th><th width="114.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>badgeId<mark style="color:red;">*</mark></td><td>string</td><td>The badge id you want to filter awards.</td></tr><tr><td>search</td><td>string</td><td>Award recipient search keyword (e.g., Robert). The system will search for any award recipient containing the search text.</td></tr></tbody></table>

### list\_awards API Call Example

{% tabs %}
{% tab title="Iterate by using lastEvaluatedKey" %}
To paginate and get new items, use the lastEvaluatedKey you got on the previous call.

```
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Badges",
    "operation": "list_awards",
    "parameters": {
        "lastEvaluatedKey": "https://badges.staging.bws.ninja/certify-badge/award/db06f3e5-43c8-447f-bc82-232df1f3be62"
    }   
}'
```
{% endtab %}

{% tab title="Iterate using badgeId " %}
To list awards linked to a specific badge, use the filter option and badgeId. If pagination is required, use lastEvaluatedKey returned from previous call.

```
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Badges",
    "operation": "list_awards",
    "parameters": {
        "filter":{
            "badgeId": "https://badges.staging.bws.ninja/certify-badge/badge/0c4078ab-8195-40fa-9d8d-0389b5547a86",
        },
        "lastEvaluatedKey": "https://badges.staging.bws.ninja/certify-badge/award/e57ae87c-a50d-4187-bf5f-1aee1842b63c"
    }   
}'
```
{% endtab %}

{% tab title="Using recipient's keyword" %}
To search by recipient name, use the filtering option and set a search keyword. Note that a maximum of 51 items will be returned.

```
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Badges",
    "operation": "list_awards",
    "parameters": {
        "filter":{
            "badgeId": "https://badges.staging.bws.ninja/certify-badge/badge/0c4078ab-8195-40fa-9d8d-0389b5547a86",
            "search": "Robert"
        }
    }   
}'
```
{% endtab %}
{% endtabs %}

#### list\_awards Call Response

Once the API call is executed correctly, you will get a list of badge awards, and if more awards are available, lastEvaluatedKey parameter to use on next call.

```json
{
 "statusCode": 200,
 "info": {
    "lastEvaluatedKey": "https://badges.staging.bws.ninja/certify-badge/award/e57ae87c-a50d-4187-bf5f-1aee1842b63c",
    "count": 51,
    "items": [
            {
                "@context": "https://w3id.org/openbadges/v2",
                "type": "Assertion",
                "id": "https://badges.staging.bws.ninja/certify-badge/award/136809ce-504d-499e-98af-8773730563e6",
                "recipient": {
                    "type": "email",
                    "hashed": true,
                    "salt": "a2b6be65d7",
                    "identity": "sha256$9373dcaeaf3aa0493ad769346f185b8bcce207da6aeb7ec7dff8babad7135ad9",
                    "name": "Nexus 11"
                },
                "badge": {
                    "type": "BadgeClass",
                    "id": "https://badges.staging.bws.ninja/certify-badge/badge/004036cf-b1a6-4ac1-85fb-73c30c6d9dce",
                    "name": "test",
                    "description": "testest",
                    "image": "https://ipfs.bws.ninja/ipfs/QmU5oXpV64ZvPkmMjpqEosqSRwhfzXnKroaZpUx9ZNmmGi",
                    "criteria": {
                        "narrative": "test. "
                    },
                    "issuer": {
                        "id": "https://badges.staging.bws.ninja/certify-badge/issuer/7b48260a-e619-48ca-ae97-04ebcbbfcda7",
                        "name": "ACME Corporation Academy",
                        "url": "https://www.warnerbros.com/",
                        "email": "nacho.coll+adasdasd@bws.ninja",
                        "type": "Issuer",
                        "verified": true
                    }
                },
                "verification": {
                    "type": "HostedBadge"
                },
                "issuedOn": "2024-04-22T22:00:00Z",
                "image": "https://ipfs.bws.ninja/ipfs/QmUJuKKeh9hmEGYQ4cvK6tztkkW7UFH5H76QkUAGcCkYGu",
                "blockchain": {
                    "status": "not-requested"
                }
            },
            ...
        ]
 }
}
```

## send\_award\_email

Use this operation if you want BWS to email an award recipient, including a link to download, share, and visualize his achieved award.

<figure><img src="../../../.gitbook/assets/Award_Recipient_Email.png" alt=""><figcaption><p>Certificate Recipient Email</p></figcaption></figure>



<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description                                                                       |
| ------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.Blockchain.Badges                                                             |
| operation<mark style="color:red;">\*</mark> | string | **send\_award\_email**                                                            |
| parameters                                  | JSON   | check [**method parameters**](awards-credentials.md#send_award-method-parameters) |

#### send\_award\_email Method Parameters

<table><thead><tr><th width="129">Parameter</th><th width="114.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>awardId</td><td>string</td><td>The award ID</td></tr><tr><td>email</td><td>string</td><td>The award recipient's email address</td></tr></tbody></table>

### send\_award API Call Example

{% hint style="warning" %}
**You need to know the award recipient's email address!**

In full compliance with the General Data Protection Regulation (GDPR), our API is designed to be strongly committed to privacy and data protection. We understand the importance of safeguarding personal information and uphold the highest data privacy standards.

When our API processes email data, it does so in real time. The data is transmitted securely and never recorded, stored, or saved on our servers.
{% endhint %}

{% tabs %}
{% tab title="Send Award Email using cURL" %}
```json
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Badges",
    "operation": "send_award_email",
    "parameters": {
        "badgeId": "https://badges.staging.bws.ninja/certify-badge/award/23d09456-b660-4624-ab32-a71dc29cd40c",
        "email": "nacho.coll@bws.ninja"
}'
```
{% endtab %}
{% endtabs %}

#### send\_award\_email Call Response

You will get a standard 200 response if the email is correctly sent.

```json
{
 "statusCode": 200
}
```
