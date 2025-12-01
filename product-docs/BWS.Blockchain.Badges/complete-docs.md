# Blockchain Badges - Complete Documentation

Product Key: BWS.Blockchain.Badges
Generated: 2025-12-01T18:12:47.782Z
Files: 6
Words: 2,820
Characters: 30,383

---



## [FILE 1/6] README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.blockchain.badges/README.md
---

---
description: Seamlessly issue, manage, and verify digital credentials.
---

# BWS.Blockchain.Badges

<table><thead><tr><th width="131">Author</th><th width="125">Status</th><th>BWS User Interface Git</th></tr></thead><tbody><tr><td>BWS</td><td><mark style="background-color:green;">Ready</mark></td><td><a href="https://github.com/blockchain-web-services/bws-backoffice-website-badges">blockchain-web-services/bws-backoffice-website-badges</a></td></tr></tbody></table>



**BWS.Blockchain.Badges** solution revolutionizes how organizations recognize and validate individual achievements by leveraging blockchain technology's immutable and transparent nature.&#x20;

By integrating blockchain into the credentialing process, BWS.Blockchain.Badges ensure each badge carries an additional layer of trust, making every achievement recognizable and verifiable across platforms.&#x20;

### Quick Start

Check out the following sections to start issuing badges using the provided BWS solution User Interface or the solution API.

[CARD VIEW]

---



## [FILE 2/6] badges-api/README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.blockchain.badges/badges-api/README.md
---

---
description: >-
  Build or integrate Badges into your solution by using BWS Blockchain Badges
  API.
---

# Badges API

---



## [FILE 3/6] badges-api/awards-credentials.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.blockchain.badges/badges-api/awards-credentials.md
---

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



<table><thead><tr><th width="129">Parameter</th><th width="96.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>badgeId</td><td>string</td><td>The badge ID (check <a href="awards-credentials.md#create-a-new-badge">Create a new Badge</a> on how to create a Badge and get its ID).</td></tr><tr><td>issuedOn</td><td>long</td><td><a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing the date the award was issued.</td></tr><tr><td>expires </td><td>long</td><td>Optional. <a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing the date the award will expire.</td></tr><tr><td>recipient</td><td>JSON</td><td>The<a href="awards-credentials.md#new_award-recipient-parameters-json"> recipient fields</a>, including the email and name, representing the identity of the individual being awarded the badge or credential.</td></tr><tr><td><mark style="background-color:green;">blockchain</mark></td><td>string</td><td>Optional. To enhance the security and verifiability specify the blockchain to use (e.g., "matchain"). Blockchain certification ensures your credentials are tamper-proof, globally verifiable, and maintain long-term trust and transparency.</td></tr></tbody></table>

#### **new\_award Recipient Parameters JSON**

Include the below parameters to identify the certificate (award) recipient.&#x20;



<table><thead><tr><th width="127">Parameter</th><th width="80.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>email</td><td>string</td><td>The recipient email address.</td></tr><tr><td>name</td><td>string</td><td>The full name of the recipient.</td></tr></tbody></table>

### new\_award API Call Example

[CODE EXAMPLES]

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



<table><thead><tr><th width="129">Parameter</th><th width="114.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>badgeId<mark style="color:red;">*</mark></td><td>string</td><td>The badge id you want to filter awards.</td></tr><tr><td>search</td><td>string</td><td>Award recipient search keyword (e.g., Robert). The system will search for any award recipient containing the search text.</td></tr></tbody></table>

### list\_awards API Call Example

[CODE EXAMPLES]

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



[CODE EXAMPLES]

#### send\_award\_email Call Response

You will get a standard 200 response if the email is correctly sent.

```json
{
 "statusCode": 200
}
```

---



## [FILE 4/6] badges-api/badges.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.blockchain.badges/badges-api/badges.md
---

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



### new\_badge API Call Example

[CODE EXAMPLES]

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

[CODE EXAMPLES]

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

[CODE EXAMPLES]

#### delete\_badge Call Response

If the call succeeds and the badge gets deleted, you will get a standard 200 response.

```json
{
  "statusCode": 200
}
```

---



## [FILE 5/6] badges-api/issuers.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.blockchain.badges/badges-api/issuers.md
---

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



<table><thead><tr><th width="141">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Issuer Name (e.g. "Blockchain Academy")</td></tr><tr><td>url</td><td>string</td><td>Issuer website URL</td></tr><tr><td>email</td><td>string</td><td>The issuer contact email address.</td></tr></tbody></table>

### new\_issuer API Call Example

[CODE EXAMPLES]

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

[CODE EXAMPLES]

#### verify\_issuer Method Parameters

<table><thead><tr><th width="175">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>issuerId</td><td>string</td><td>The issuer ID you received when <a href="issuers.md#add-issuer">adding a new badge issuer</a>.</td></tr><tr><td>code</td><td>string</td><td>The code you received by email.</td></tr></tbody></table>

### verify\_issuer API Call Example

[CODE EXAMPLES]

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

[CODE EXAMPLES]

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

[CODE EXAMPLES]

#### delete\_issuer Call Response

When the API call is successfully executed, you will get an OK status response code.

```json
{
  "statusCode": 200
}
```

---



## [FILE 6/6] badges-user-interface.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.blockchain.badges/badges-user-interface.md
---

---
description: >-
  Easy to use Badges user interface to add issuers, badges and award
  certificates.
---

# Badges User Interface

Blockchain Badges provides a cutting-edge solution for issuing and managing verifiable digital credentials. Built on the open badge standard and enhanced with blockchain certification, our platform ensures secure, tamper-proof badges that can be trusted worldwide.

We offer a robust API for seamless integration into custom systems and a user-friendly interface for companies seeking a more straightforward, no-code solution. Whether through custom integration or an intuitive UI, Blockchain Badges makes credentialing straightforward and accessible for organizations of any size.

## [How to Start](badges-user-interface.md#how-to-start)

Visit www.bws.ninja, create an account (free), and select 'Blockchain Badges' from the top menu once you're in.&#x20;

<figure><img src="../../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

### [Naming Conventions](badges-user-interface.md#naming-conventions)



Let's define the nomenclature you will find in our built-in interface and our [solution API](badges-api/).

**Issuer (Organization, Institution or Individual)**

An issuer is an entity that provides and awards digital badges to recipients.

When a badge is awarded, the issuer's information is encoded within the badge, allowing recipients to showcase their skills or achievements with verifiable proof of where the badge came from and what it represents.

**Badge (Digital Certificate, Credential)**

A badge is a digital representation of a skill, achievement, or learning outcome that an individual has acquired. It serves as verifiable, portable digital marks of recognition that can be shared across various platforms and environments.

**Award (Recognition, Accreditation, Endorsement)**

An award is a formal recognition of an individual's achievement, skill, or competency, represented by the issue of a digital badge. It validates the recipient's accomplishment and allows them to display and use the badge to symbolize their success and capability.



## [Manage Issuers](badges-user-interface.md#manage-issuers)

Using a simple Issuers list overview, you can Add and Delete badge issuers. Please note that once an Issuer has released an Award, you cannot delete it - badge data should be immutable for trust and transparency.

<figure><img src="../../.gitbook/assets/Issuers_UI_List.png" alt=""><figcaption><p>Issuers List</p></figcaption></figure>

To **add a new issuer**, click on the "+ Badge Issuer" button, inform the Issuer Name, Issuer Email, and Issuer Website, and click the "Add Issuer" button.

<figure><img src="../../.gitbook/assets/Issuers_UI_New.png" alt=""><figcaption><p>Information required to define a new Issuer</p></figcaption></figure>

Once registered, your new Issuer will get listed, and you can start creating new badges and reward Digital Certificates.



**How do you verify an issuer "manually"?**

If the issuer email owner prefers not to click on links provided in emails, ask him to send you the code included (for example, "CYMDF"). You can then verify the issuer by selecting "Verify Issuer" from the actions menu on the list.

<figure><img src="../../.gitbook/assets/Issuers_UI_Verify.png" alt=""><figcaption><p>Verify an Issuer using the code</p></figcaption></figure>

## [Define new Badges](badges-user-interface.md#define-new-badges)

Once you've set up the Badge Issuers you manage, you can begin creating and customizing the badges you'll award to your alumni, team, or other recipients. Our intuitive badge designer tool makes this process simple and flexible. Start with a template, add images and text, and customize colors to reflect your branding or the recognized achievement. Designing a badge has never been easier!

<figure><img src="../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

As for the Open Badge specification, a badge consists of an image, a name, a description, and the criteria to be awarded.



## [Reward a Badge](badges-user-interface.md#reward-a-badge)

To create a new award, start by selecting the Issuer and the certificate you wish to award to an individual. Then, click the **"+ Award"** button. Enter the Certificate name, recipient’s email, and validity period. You can also choose from two optional features to enhance the award process:

1. **Send Award Email**: This option sends an email to the recipient with instructions on downloading and sharing their badge, ensuring a smooth and seamless experience.
2. **Blockchain Certification**: By enabling this option, the badge is certified on the blockchain, adding an extra layer of security and verifiability. Blockchain certification ensures the badge is tamper-proof and traceable, providing long-term credibility and trust for both the issuer and the recipient.



Once all details are set, click the **"Award Badge"** button to finalize the process.

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>



### Award Email

When a new award is created, you can email the recipient clear instructions on downloading and sharing their newly earned achievement. The email template below will notify the recipient if you send download instructions.

<figure><img src="../../.gitbook/assets/Award_Recipient_Email.png" alt=""><figcaption><p>Download Instructions</p></figcaption></figure>

## [Search Awards](badges-user-interface.md#search-awards)

You can use the recipient's name to search for awarded certificates. Go to the Award Badges menu option, select the badge you awarded the recipient, and use the search box to filter the results.&#x20;

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

---

