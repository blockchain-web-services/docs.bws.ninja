---
description: Blockchain Badges Issuers.
---

# Issuers

An Issuer represents an entity or organization responsible for defining, creating, and awarding digital badges to acknowledge and verify individual achievements, skills, or competencies.

## new\_issuer

Use this API operation to set up a new Issuer, enabling them to design and issue digital badges and manage awards efficiently. This operation is the first step in establishing a trusted source for verifiable credentials within your platform.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                        |
| -------------------------------------------- | ------ | ------------------------------------------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Badges                                              |
| operation<mark style="color:red;">\*</mark>  | string | **new\_issuer**                                                    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check [method parameters](issuers.md#new_issuer-method-parameters) |

#### new\_issuer Method Parameters

{% hint style="warning" %}
**Use an email address you have access to!**\
\
To confirm your authorization to use the provided email, we will send a verification message to it ([How to Verify a Badge Issuer](issuers.md#how-to-verify-a-badge-issuer)).
{% endhint %}

<table><thead><tr><th width="141">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Issuer Name (e.g. "Blockchain Academy")</td></tr><tr><td>url</td><td>string</td><td>Issuer website URL</td></tr><tr><td>email</td><td>string</td><td>The issuer contact email address.</td></tr></tbody></table>

### new\_issuer API Call Example

{% tabs %}
{% tab title="new_issuer API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.Blockchain.Badges",
  "operation": "new_issuer",
  "parameters":  {
     "name": "Cloud Academy",
     "url": "https://mycloudacademywebsiteurl.com",
     "email": "contact@mycloudacademywebsiteurl.com"      
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

#### new\_issuer Call Response

When the API call is successfully executed, it returns the `issuerId`, which also serves as the URL to retrieve the Issuer's Open Badge v2.0 JSON.&#x20;

This JSON file contains metadata about the Badge Issuer, including essential information such as the organization's name, description, and verification details, formatted according to the Open Badge standard for interoperability and trust.

```json
{
  "statusCode": 200,
  "info": {
    "issuerId": "https://badges.staging.bws.ninja/certify-badge/issuer/a68d1d72-1365-4114-8349-0b2e220f43e3"
  }
}
```

### [How to verify a Badge Issuer](issuers.md#how-to-verify-a-badge-issuer)

When you create a new Badge Issuer, we send an email for verification, including a verification link and a verification code.

<figure><img src="../../../.gitbook/assets/image (16).png" alt=""><figcaption><p>Badge Issuer verification Email example.</p></figcaption></figure>

To verify an Issuer, you - or someone with access to the provided email inbox - should click on the verification link or send you the verification code (once you get the code, use the [verify\_issuer ](issuers.md#verify_issuer)API call to verify the issuer).

{% hint style="warning" %}
**Only verified issuers can create and award badges.**

Only verified issuers can create and award badges, ensuring high trust and authenticity in the digital credentialing system.
{% endhint %}

## verify\_issuer

To legitimate badge issuers, we send a verification link and code to the address you use when calling [new\_issuer](issuers.md#new_issuer) API call operation.

Use the following operation to verify an issuer using the provided code.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                           |
| -------------------------------------------- | ------ | --------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Badges                                                 |
| operation<mark style="color:red;">\*</mark>  | string | **verify\_issuer**                                                    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check [method parameters](issuers.md#verify_issuer-method-parameters) |

{% tabs %}
{% tab title="200 Standard 200 response" %}
```json
{
    "statusCode": 200
}
```
{% endtab %}
{% endtabs %}

#### verify\_issuer Method Parameters

<table><thead><tr><th width="175">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>issuerId</td><td>string</td><td>The issuer ID you received when <a href="issuers.md#add-issuer">adding a new badge issuer</a>.</td></tr><tr><td>code</td><td>string</td><td>The code you received by email.</td></tr></tbody></table>

### verify\_issuer API Call Example

{% tabs %}
{% tab title="Verify Issuer using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.Blockchain.Badges",
  "operation": "verify_issuer",
  "parameters":  {
     "issuerId": "https://badges.staging.bws.ninja/certify-badge/issuer/a68d1d72-1365-4114-8349-0b2e220f43e3",
     "code": "THFJD"         
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

#### verify\_issuer Call Response

When the API call is successfully executed and the issuer gets verified, you will get a 200 status code.

```
{
  "statusCode": 200
  "info": "issuer has been verified"
}
```

## list\_issuers

Get the list of the issuers you created.

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                        | Type   | Description           |
| ------------------------------------------- | ------ | --------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.Blockchain.Badges |
| operation<mark style="color:red;">\*</mark> | string | **list\_issuers**     |

### list\_issuers API Call Example

{% tabs %}
{% tab title="List Issuers using cURL" %}
```json
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.Blockchain.Badges",
    "operation": "list_issuers"
}
```
{% endtab %}
{% endtabs %}

#### list\_issuers Call Response

Once executed correctly, you will get a list of your account issuers.

```json
{
 "statusCode": 200,
 "info": [
   {
      "@context": "https://w3id.org/openbadges/v2",
      "id": "https://badges.staging.bws.ninja/certify-badge/issuer/d9623c7f-41ee-4481-86d4-974a322210b3",
      "name": "Blockchain Web Services",
      "url": "https://www.bws.ninja",
      "email": "badges@bws.ninja",
      "type": "Issuer",
      "verified": true
   }
 ]
}
```

## delete\_issuer

Use this API operation to delete an existing Issuer.

{% hint style="info" %}
**You can only delete issuers with no active Badges!**

Only issuers that have not awarded any badge can be deleted.
{% endhint %}

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                                             |
| -------------------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.Blockchain.Badges                                                                   |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_issuer**                                                                      |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="issuers.md#delete_issuer-parameters">method parameters</a></p><p></p> |

#### delete\_issuer Method Parameters

<table><thead><tr><th width="141">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>issuerId</td><td>string</td><td>The issuer ID you received when <a href="issuers.md#add-issuer">adding a new badge issuer</a>.</td></tr></tbody></table>

### delete\_issuer API Call Example

{% tabs %}
{% tab title="Delete an Issuer using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.Blockchain.Badges",
  "operation": "delete_issuer",
  "parameters":  {
     "issuerId": "https://badges.staging.bws.ninja/certify-badge/issuer/105c00ba-3c18-4d49-938c-566e60d25537"   
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

#### delete\_issuer Call Response

When the API call is successfully executed, you will get an OK status response code.

```json
{
  "statusCode": 200
}
```
