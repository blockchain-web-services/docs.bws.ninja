# ESG Credits - Complete Documentation

Product Key: BWS.ESG.Credits
Generated: 2025-12-01T18:12:48.749Z
Files: 16
Words: 11,641
Characters: 143,461

---



## [FILE 1/16] README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/README.md
---

---
description: >-
  For financial institutions that want to provide positive ESG impact reporting
  in their digital channels and investment reporting
---

# BWS.ESG.Credits

<table><thead><tr><th width="123">Author</th><th width="192">Status</th><th>Contact Support</th></tr></thead><tbody><tr><td>BWS</td><td><mark style="background-color:green;">Ready</mark></td><td><a href="https://www.greenassets.io/#contact-us">https://www.greenassets.io/#contact-us</a></td></tr></tbody></table>

\
**BWS.ESG.Credits** solution is designed to help financial institutions quickly integrate ESG impact benefits into their digital channels and investment reporting by leveraging investments in green assets.&#x20;

It serves banks, investment advisors, institutional investors, venture capitalists, and issuers of green assets by enabling the creation of detailed ESG impact reports for various stakeholders. Certification bodies can also use the API to publish quality-assured impact data.

The solution supports ICMA frameworks and custom taxonomies, allows flexible impact calculations, and integrates seamlessly with blockchain for secure, immutable storage and certification of green investments, preventing double-counting and ensuring transparency.

---



## [FILE 2/16] esg-credits-api/README.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/README.md
---

---
description: >-
  Available operations to set up and run your ESG impact services are divided
  into different sections.
---

# ESG Credits API

Under section **"Taxonomy"** you build your taxonomy structure including connections to UN SDGs and EU Environmental Development Objectives. Taxonomies can be set up with categories and sub categories as well as indicators and super indicators, where super indicators are linked to categories as per the ICMA logic. Taxonomies can be copied across to the following year if the taxonomy is identical or similar.

The section **"Translations"** contains operations to add taxonomy phrases in additional languages, making your ESG impact services multilingual, with alternative languages accessed easily through a simple parameter in your API calls.

Under section **"Currencies"** you can define the currencies that your solution will support. Foreign exchange rates for supported currencies can be set on annual basis (typically average rates).

In the section called **"Frameworks",** you input the category volumes and indicators values which build up your green framework based on your taxonomy. This dataset is consequently used for ESG impact benefit calculations throughout the solution. Frameworks can be made private or public, where in the latter case other tenants using ESG.Credits can access such frameworks.

Under section "**Projects**" you find operations to register green projects and their benefit characteristics in terms of category volumes and indicator values as per your taxonomy. Benefit characteristics of a portfolio of green projects can be consolidataed into a framework. Projects can be made private or public, where in the latter case other tenants using ESG.Credits can access such projects.

Before adding green assets for your customers / investors to see impacts from, you first need to enter the issuers, which is done under section **"Issuers"**. This can be your own franchise or one whose green assets you are re-selling. Issuers can be made private or public, where in the latter case other tenants using ESG.Credits can access such issuers.

Under section **"Assets"**, you add the green assets in scope, and connect them to the relevant framework for ESG impact calculation possibilities. Assets can be made private or public, where in the latter case other tenants using ESG.Credits can access such assets, and also calculate ESG impact benefits for investments in them.

The section **"Investors"** has operations for adding your customers / investors to the ESG.Credits API solution. This includes encryption operations for personal identifiable information. Note: It is possible to make ESG impact calculations without storing customer records in ESG.Credits, why this step can be omitted.

Before actual ESG impact calculations can be made for registered customers / investors, the position taken, or investment made, in a green assets must be registered. This is done under section **"Positions"**. Here you would also specify the term of the position, which also impacts the impact level.

In section **"Portfolio"** you can cluster positions into different portfolios, so that the impact can be calculated for each portfolio as a whole.

Under section **"Impacts"** you find operations for calculating the benefit impact from a particular position, investor, or portfolio. Operations can also support the use case where the investors are not stored in ESG.Credits, when it is only used as a calculation engine.

The **"Blockchain"** section has operations to write and read from the blockchain. This could for instance be certificates of ESG benefit impacts for increased trust and avoidance of impact benefit claim duplication. The blockchain can also be utilized to ensure that green project benefits are not double-counted across the debt capital community.

Finally, the **"Users"** section. Here you find operations for to manage the end users of your client account at BWS.ESG.Credits. It includes the possibility to connect end users to particular investors that are in scope for each user. You can also tie users to certain user groups which you can use to control availability of functionality in your user interface.

---



## [FILE 3/16] esg-credits-api/assets.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/assets.md
---

---
description: >-
  This section deals with green assets, i.e. showing, adding, and removing
  assets
---

# Assets

### [getAssets](assets.md#getassets)

## Returns information about private or public green assets

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve green assets stored in the ESG.Credits data repository.

#### Request Body

| Name                                        | Type   | Description                |
| ------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark> | string | getAssets                  |
| parameters                                  | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="230">Parameter</th><th width="160">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr><tr><td>issuer_identifier</td><td>string</td><td>no</td><td>String identifier for a specified issuer to be included. Default is all.</td></tr><tr><td>framework_identifier</td><td>string</td><td>no</td><td>String identifier for a specified framework to be included. Default is all.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getAssetFrameworkDetails](assets.md#getassetframeworkdetails)

## Returns framework details applicable to particular green asset

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the framework details of the asset in question.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getAssetFrameworkDetails   |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="192">Parameter</th><th width="163">Type/Format</th><th width="117">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset (e.g. ISIN)</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language selection as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addAsset](assets.md#addasset)

## Creates and updates information about an existing green asset

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add assets to the ESG.Credits data repository. This operation is also used to alter already existing asset information.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addAsset                   |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="238">Parameter</th><th width="188">Type/Format</th><th width="101">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset (e.g. ISIN)</td></tr><tr><td>asset_name</td><td>string</td><td>yes</td><td>Asset name</td></tr><tr><td>issuer_identifier</td><td>string</td><td>yes</td><td>String identifier for the issuer of the asset</td></tr><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the green framework of the asset</td></tr><tr><td>asset_value_outstanding</td><td>number/integer</td><td>no</td><td>Amount of money subject to green investments (framework ditto used in impact calculations)</td></tr><tr><td>asset_currency_code</td><td>string</td><td>yes</td><td>Currency code of the asset, as per getCurrencies</td></tr><tr><td>date_issued</td><td>date/YYYY-MM-DD</td><td>no</td><td>Issue date if applicable</td></tr><tr><td>date_maturity</td><td>date/YYYY-MM-DD</td><td>no</td><td>Maturation date if applicable</td></tr><tr><td>asset_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeAsset](assets.md#removeasset)

## Removes a green asset

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove green assets from the ESG.Credits data repository.

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeAsset                |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Request Body

#### Operation parameters

<table><thead><tr><th width="189">Parameter</th><th width="135">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 4/16] esg-credits-api/blockchain.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/blockchain.md
---

---
description: This section has operations to read from and write to the blockchain
---

# Blockchain

### [getJobStatusFromBlockchain](blockchain.md#getjobstatusfromblockchain)

## Reads the status from the blockchain for a particular job id

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to get an update on the status of the blockchain entry.

#### Request Body

<table><thead><tr><th>Name</th><th width="185">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>getJobStatusFromBlockchain</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example response

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="128">Parameter</th><th width="140">Type/Format</th><th width="156">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [writeHtmlFrameworkToBlockchain](blockchain.md#writehtmlframeworktoblockchain)

## Writes a framework to the blockchain for a particular reporting year (HTML format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to write your Green Bond Framework, or similar, to the blockchain e.g. for increased committment and trust. This operation writes the framework data in html-tabular format.

#### Request Body

| Name                                         | Type   | Description                    |
| -------------------------------------------- | ------ | ------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                |
| operation<mark style="color:red;">\*</mark>  | string | writeHtmlFrameworkToBlockchain |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters     |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="233">Parameter</th><th width="156">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [writeJsonFrameworkToBlockchain](blockchain.md#writejsonframeworktoblockchain)

## Writes a framework to the blockchain for a particular reporting year (JSON format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to write your Green Bond Framework, or similar, to the blockchain e.g. for increased committment and trust. This operation writes the framework data in JSON format.

#### Request Body

| Name                                         | Type   | Description                    |
| -------------------------------------------- | ------ | ------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                |
| operation<mark style="color:red;">\*</mark>  | string | writeJsonFrameworkToBlockchain |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters     |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="228">Parameter</th><th width="153">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [writeHtmlPositionImpactsToBlockchain](blockchain.md#writehtmlpositionimpactstoblockchain)

## Writes the impacts of a particular investment in a green asset to the blockchain (HTML format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to write a position's impact benefits to the blockchain to e.g. get a certificate to offset negative impacts. This operation writes the position impact data in html-tabular format.

#### Request Body

| Name                                         | Type   | Description                          |
| -------------------------------------------- | ------ | ------------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                      |
| operation<mark style="color:red;">\*</mark>  | string | writeHtmlPositionImpactsToBlockchain |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters           |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="225">Parameter</th><th width="157">Type/Format</th><th width="113">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for the investment</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>write_investor_to_blockchain</td><td>string</td><td>no</td><td>Select "yes" to include PII to the output, default is "no"</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [writeJsonPositionImpactsToBlockchain](blockchain.md#writejsonpositionimpactstoblockchain)

## Writes the impacts of a particular investment in a green asset to the blockchain (JSON format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to write a position's impact benefits to the blockchain to e.g. get a certificate to offset negative impacts. This operation writes the position impact data in JSON format.

#### Request Body

| Name                                         | Type   | Description                          |
| -------------------------------------------- | ------ | ------------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                      |
| operation<mark style="color:red;">\*</mark>  | string | writeJsonPositionImpactsToBlockchain |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters           |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="230">Parameter</th><th width="164">Type/Format</th><th width="103">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for the investment</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>write_investor_to_blockchain</td><td>string</td><td>no</td><td>Select "yes" to include PII to the output, default is "no"</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getHtmlFrameworkFromBlockchain](blockchain.md#gethtmlframeworkfromblockchain)

## Returns the framework data as written on the blockchain (HTML format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve a framework from the blockchain e.g. for increased committment and trust. This operation presents the framework data in html-tabular format.

#### Request Body

| Name                                         | Type   | Description                    |
| -------------------------------------------- | ------ | ------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                |
| operation<mark style="color:red;">\*</mark>  | string | getHtmlFrameworkFromBlockchain |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters     |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="149">Parameter</th><th width="157">Type/Format</th><th width="112">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getJsonFrameworkFromBlockchain](blockchain.md#getjsonframeworkfromblockchain)

## Returns the framework data as written on the blockchain (JSON format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve a framework from the blockchain e.g. for increased committment and trust. This operation presents the framework data in JSON format.

#### Request Body

| Name                                         | Type   | Description                    |
| -------------------------------------------- | ------ | ------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                |
| operation<mark style="color:red;">\*</mark>  | string | getJsonFrameworkFromBlockchain |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters     |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="159">Parameter</th><th width="150">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getHtmlPositionImpactsFromBlockchain](blockchain.md#gethtmlpositionimpactsfromblockchain)

## Returns the impact data for an investment as written to the blockchain (HTML format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve a position's impact benefits from the blockchain to e.g. get a certificate to offset negative impacts. This operation presents the position's impact data in html-tabular format.

#### Request Body

| Name                                       | Type   | Description                          |
| ------------------------------------------ | ------ | ------------------------------------ |
| solution<mark style="color:red;">\*</mark> | string | BWS.ESG.Credits                      |
| parameters                                 | JSON   | Check Operation parameters           |
| operation                                  | string | getHtmlPositionImpactsFromBlockchain |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="173">Parameter</th><th width="144">Type/Format</th><th width="121">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getJsonPositionImpactsFromBlockchain](blockchain.md#getjsonpositionimpactsfromblockchain)

## Returns the impact data for an investment in a green asset as written to the blockchain (JSON format)

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve a position's impact benefits from the blockchain to e.g. get a certificate to offset negative impacts. This operation presents the position's impact data in JSON format.

#### Request Body

| Name                                         | Type   | Description                          |
| -------------------------------------------- | ------ | ------------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                      |
| operation<mark style="color:red;">\*</mark>  | string | getJsonPositionImpactsFromBlockchain |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters           |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="197">Parameter</th><th width="147">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getBlockchainJobsForFrameworks](blockchain.md#getblockchainjobsforframeworks)

## Returns the blockchain job IDs for a particular framework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the blockchain entries made for frameworks.

#### Request Body

| Name                                         | Type   | Description                    |
| -------------------------------------------- | ------ | ------------------------------ |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                |
| operation<mark style="color:red;">\*</mark>  | string | getBlockchainJobsForFrameworks |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters     |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="214">Parameter</th><th width="140">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getBlockchainJobsForImpacts](blockchain.md#getblockchainjobsforimpacts)

## Returns the blockchain job IDs for a particular investor

<mark style="color:green;">`POST`</mark> `/call`

Use this operation to retrieve the blockchain entries made for position impact benefits.

#### Request Body

| Name                                         | Type   | Description                 |
| -------------------------------------------- | ------ | --------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits             |
| operation<mark style="color:red;">\*</mark>  | string | getBlockchainJobsForImpacts |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters  |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="186">Parameter</th><th width="151">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for the investor</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for the investment</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 5/16] esg-credits-api/currencies.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/currencies.md
---

---
description: >-
  This section deals with currencies and foreign exchanges rates, either
  available for your use or that you need to add to your solution account
---

# Currencies

### [getCurrencies](currencies.md#getcurrencies)

## Returns all registered currencies

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to list currencies you have registered for your account.

#### Request Body

| Name                                        | Type   | Description     |
| ------------------------------------------- | ------ | --------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits |
| operation<mark style="color:red;">\*</mark> | string | getCurrencies   |

#### Example responses

[CODE EXAMPLES]

#### Example code

[CODE EXAMPLES]

### [getFXrates](currencies.md#getfxrates)

## Returns all registered foreign exchange rates

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1`

Use this operation to list foreign exchange rates you have registered for a particular reporting year.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getFXrates                 |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="192">Parameter</th><th width="175">Type</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Calendar year that the FX rate is used for</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addCurrency](currencies.md#addcurrency)

## Adds a currency to your solution account

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add currencies that you foresee being applicable to your green asset universe, and for which you want to add foreign exchange rates.

#### Request Body

| Name                                         | Type   | Description                              |
| -------------------------------------------- | ------ | ---------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                          |
| operation<mark style="color:red;">\*</mark>  | string | addCurrency                              |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check Operation parameters</p><p></p> |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="176">Parameter</th><th width="185.33333333333331">Type/Format</th><th width="115">Required</th><th>Desciption</th></tr></thead><tbody><tr><td>currency_code</td><td>string/3 char.</td><td>yes</td><td>Standard currency code</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addFXrate](currencies.md#addfxrate)

## Adds a foreign exchange rate between two currencies

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add foreign exchnage rate for currencies applicable to your green asset universe.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addFXrate                  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="265">Parameter</th><th width="168">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>currency_code_numerator</td><td>string/3 char.</td><td>yes</td><td>Standard currency code</td></tr><tr><td>currency_code_denominator</td><td>string/3 char.</td><td>yes</td><td>Standard currency code</td></tr><tr><td>currency_code_quota</td><td>number/decimal</td><td>yes</td><td>numerator / denominator</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Calendar year that the FX rate will be used for</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeCurrency](currencies.md#removecurrency)

## Removes a currency

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove a currency from your records

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeCurrency             |
| parameters<mark style="color:red;">\*</mark> | string | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter      | Type/Format | Required | Description |
| -------------- | ----------- | -------- | ----------- |
| currency\_code | string      | yes      |             |

#### Example code

[CODE EXAMPLES]

### [removeFXrate](currencies.md#removefxrate)

## Removes an FX rate

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove an FX rate between two currencies

#### Request Body

<table><thead><tr><th>Name</th><th width="164">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeFXrate</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter         | Type/Format     | Required | Description |
| ----------------- | --------------- | -------- | ----------- |
| currency\_code\_1 | string          | yes      |             |
| currency\_code\_2 | string          | yes      |             |
| reporting\_year   | number/4 digits | yes      |             |

#### Example code

[CODE EXAMPLES]

---



## [FILE 6/16] esg-credits-api/frameworks.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/frameworks.md
---

---
description: >-
  This section has operations to build up green frameworks to which green assets
  will be tied
---

# Frameworks

### [getFrameworks](frameworks.md#getframeworks)

## Returns private or public green frameworks for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve green frameworks registered in ESG.Credits data repository.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getFrameworks              |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="160">Type/Format</th><th width="123">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>framework_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getFrameworkDetails](frameworks.md#getframeworkdetails)

## Returns details about a green framework for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operations to retrieve green framework details.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getFrameworkDetails        |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="208">Parameter</th><th width="166">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addFramework](frameworks.md#addframework)

## Creates and updates the information about a green framework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add green frameworks to the ESG.Credits data repository.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addFramework               |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="256">Parameter</th><th width="147">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>framework_name</td><td>string</td><td>yes</td><td>Framework name</td></tr><tr><td>framework_currency_code</td><td>string</td><td>yes</td><td>Currency code of the framework, as per getCurrencies</td></tr><tr><td>framework_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addYearSpecificsToFramework](frameworks.md#addyearspecificstoframework)

## Adds reporting year specific details to a green framework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to set up the green framework with details that are year specific.

#### Request Body

| Name                                        | Type   | Description                 |
| ------------------------------------------- | ------ | --------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits             |
| operation<mark style="color:red;">\*</mark> | string | addYearSpecificsToFramework |
| parameters                                  | JSON   | check Operation parameters  |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="277">Parameter</th><th width="133">Type/Format</th><th width="109">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>value_outstanding</td><td>number</td><td>yes</td><td>Amount of funding raised to green projects for the framework as a whole, for the reporting year</td></tr><tr><td>allocated_amount</td><td>number</td><td>yes</td><td>Amount of funding allocated to projects for the reporting year of the framework, for the corresponding impacts registered</td></tr><tr><td>value_outstanding_framework</td><td>string</td><td>yes</td><td>Choose "yes" when use of proceeds relate to value outstanding, choose "no" when related to allocated amount</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addCategoryIndicatorToFramework](frameworks.md#addcategoryindicatortoframework)

## Adds and updates category and indicator values to a green framework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to set up the different impact categories, indicators, and units, with specified values.

#### Request Body

| Name                                         | Type   | Description                     |
| -------------------------------------------- | ------ | ------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                 |
| operation<mark style="color:red;">\*</mark>  | string | addCategoryIndicatorToFramework |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters      |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="221">Parameter</th><th>Type/Format</th><th width="133">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a sub category</td></tr><tr><td>sub_category_volume</td><td>number</td><td>yes</td><td>Amount of funding / use of proceeds</td></tr><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>indicator_value</td><td>number</td><td>yes</td><td>ESG benefit value, in the unit specified by the taxonomy</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### removeIndicatorFromFramework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                  |
| -------------------------------------------- | ------ | ---------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits              |
| operation<mark style="color:red;">\*</mark>  | string | removeIndicatorFromFramework |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters   |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="213">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### removeCategoryFromFramework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | check Operation parameters |
| parameters<mark style="color:red;">\*</mark> | string | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="209">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### removeFrameworkYearSpecifics

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                  |
| -------------------------------------------- | ------ | ---------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits              |
| operation<mark style="color:red;">\*</mark>  | string | removeFrameworkYearSpecifics |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters   |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="213">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### removeFramework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeFramework            |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="206">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 7/16] esg-credits-api/impacts.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/impacts.md
---

---
description: >-
  This section deals with the impact from the green assets, as per the
  particular investments made in them. Any impact data is removed when the
  associated position is removed.
---

# Impacts

### [getPositionImpacts](impacts.md#getpositionimpacts)

## Returns the impacts of an investment in a green asset

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the ESG impacts of a particular position. The operation can return either a JSON formatted data set, or PDF file based on your template which you can provide to your customer as an investor report.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getPositionImpacts         |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="217">Parameter</th><th width="183">Type/Format</th><th width="120">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>integer identifier for a investment</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr><tr><td>report_template</td><td>string</td><td>no</td><td>Input report template name</td></tr><tr><td>report_name</td><td>string</td><td>no</td><td>Output report name</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getInvestorImpacts](impacts.md#getinvestorimpacts)

## Returns the impacts of an investor's investments in green assets

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the ESG impacts of a particular investor. Here the impacts of multiple investments/positions are stacked on each other.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getInvestorImpacts         |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="210">Parameter</th><th width="187">Type/Format</th><th width="117">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>For a specified asset of an investor</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getPortfolioImpacts](impacts.md#getportfolioimpacts)

## Returns the impacts of an investor's portfolio of investments in green assets

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the ESG impacts of a particular portfolio. Here the impacts of multiple investments/positions are consolidated when possibel (when the green framworks are the same).

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getPortfolioImpacts        |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="214">Parameter</th><th>Type/Format</th><th width="129">Required</th><th>Description</th></tr></thead><tbody><tr><td>portfolio_identfier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>For a specified asset in a portfolio</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [calculatePositionImpacts](impacts.md#calculatepositionimpacts)

## Calculates and stores the impact of an investor's investment in a green asset

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to calculate the ESG impacts for a particular position already registered in ESG.Credits.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | calculatePositionImpacts   |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="229">Parameter</th><th>Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a position</td></tr><tr><td>position_amount</td><td>number</td><td>yes</td><td>Amount of money invested</td></tr><tr><td>position_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investment, as per getCurrencies</td></tr><tr><td>position_days</td><td>number/integer</td><td>no</td><td>The term of the investment, default is 365 days</td></tr><tr><td>reporting_year</td><td>number/  4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [calculatePositionImpactsOnly](impacts.md#calculatepositionimpactsonly)

## Calculates and returns the impact of an investment in a green asset, without having to specify the investor and without storing the result

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to calculate the ESG impacts for a position without any data is stored or logged in ESG.Credits. This operation is applicable for cases when financial institutes wants to utilise ESG.Credits only for calculations and store and investor data in own data repositories.

#### Request Body

| Name                                         | Type   | Description                  |
| -------------------------------------------- | ------ | ---------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits              |
| operation<mark style="color:red;">\*</mark>  | string | calculatePositionImpactsOnly |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters   |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="231">Parameter</th><th>Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset</td></tr><tr><td>position_amount</td><td>number</td><td>yes</td><td>Amount of money invested</td></tr><tr><td>position_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investment, as per getCurrencies</td></tr><tr><td>position_days</td><td>number/integer</td><td>no</td><td>The term of the investment, default is 365 days</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 8/16] esg-credits-api/investors.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/investors.md
---

---
description: >-
  This section has operations to manage investors, i.e. showing, adding,
  encrypting, and removing investors
---

# Investors

### [getInvestors](investors.md#getinvestors)

## Returns all investors

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve all investors.

#### Request Body

| Name                                        | Type   | Description                |
| ------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark> | string | getInvestors               |
| parameters                                  | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="167">Parameter</th><th width="137">Type/Format</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>depryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>user_identifier</td><td>string</td><td>no</td><td>For limiting the output to the investors that the user has access to</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [generateInvestorIdentifier](investors.md#generateinvestoridentifier)

## Generates a random investor identifier

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to generate investor identifiers, for cases where they need to random and not personally identifiable information (PII).

#### Request Body

| Name                                        | Type   | Description                |
| ------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark> | string | generateInvestorIdentifier |

#### Example responses

[CODE EXAMPLES]

#### Example code

[CODE EXAMPLES]

### [generateEncryptionKey](investors.md#generateencryptionkey)

## Generates an encryption key used to encrypt personal identifiable information

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to generate an encryption, used to encrypt and decrypt personally identiable infomation (PII) in the data repository of ESG.Credits.

#### Request Body

| Name                                        | Type   | Description           |
| ------------------------------------------- | ------ | --------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits       |
| operation<mark style="color:red;">\*</mark> | string | generateEncryptionKey |

#### Example responses

[CODE EXAMPLES]

#### Example code

[CODE EXAMPLES]

### [addInvestor](investors.md#addinvestor)

## Creates and updates the information of an existing investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to create investors stored in ESG.Credits. Is also used to alter already existing investor data.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addInvestor                |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="228">Parameter</th><th width="142">Type/Format</th><th width="94">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor, potentially personally identifiable information (subject to encryption)</td></tr><tr><td>investor_name</td><td>string</td><td>yes</td><td>Personally identiable information (subject to encryption)</td></tr><tr><td>investor_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investor, as per getCurrencies (currently not utilized)</td></tr><tr><td>investor_email</td><td>string</td><td>no</td><td>For investor correspondence e.g investor reports</td></tr><tr><td>encryption_key</td><td>string</td><td>no</td><td>For encrypting personally identifiable information</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeInvestor](investors.md#removeinvestor)

## Removes an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove investors from the ESG.Credits data repository.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Creditd            |
| operation<mark style="color:red;">\*</mark>  | string | removeInvestor             |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="157">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 9/16] esg-credits-api/issuers.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/issuers.md
---

---
description: >-
  This section deals with issuers of green assets, i.e. showing, adding, and
  removing issuers of green assets
---

# Issuers

### [getIssuers](issuers.md#getissuers)

## Returns private or public issuers

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve issuers of green assets.

#### Request Body

| Name                                        | Type   | Description                |
| ------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark> | string | getIssuers                 |
| parameters                                  | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters&#x20;

<table><thead><tr><th>Parameter</th><th width="151">Type/Format</th><th width="120">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addIssuer](issuers.md#addissuer)

## Creates or updates information about an existing issuer

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add issuers of green assets. This operation also alters already existing issuer information.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addIssuer                  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="217">Parameter</th><th width="157">Type/Format</th><th width="127">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_identifier</td><td>string</td><td>yes</td><td>String identifier for an issuer</td></tr><tr><td>issuer_name</td><td>string</td><td>yes</td><td>Issuer name</td></tr><tr><td>issuer_currency_code</td><td>string</td><td>yes</td><td>Currency code of the asset, as per getCurrencies</td></tr><tr><td>issuer_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeIssuer](issuers.md#removeissuer)

## Removes an issuer

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove issuers of green assets from the ESG.Credits data repository.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeIssuer               |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="133">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_identifier</td><td>string</td><td>yes</td><td>String identifier for an issuer</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 10/16] esg-credits-api/portfolios.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/portfolios.md
---

---
description: >-
  This section includes operations to manage portfolios of green assets, i.e.
  showing, adding, and removing portfolios  and positions in them
---

# Portfolios



### [getPortfolios](portfolios.md#getportfolios)

## Returns all portfolios of all investors

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the portfolios of your investors.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getPortfolios              |
| parameters<mark style="color:red;">\*</mark> | string | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="182">Parameter</th><th width="130">Type/Format</th><th width="101">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>String identifier for an asset to include. Default is all.</td></tr><tr><td>user_identifier</td><td>string</td><td>no</td><td>For limiting the output to the investors that the user has access to</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getPortfolioPositions](portfolios.md#getportfoliopositions)

## Returns all investments in green assets in a portfolio of an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve all green investments in an investors portfolio.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getPortfolioPositions      |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation Parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation Parameters

<table><thead><tr><th>Parameter</th><th width="138">Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addPortfolio](portfolios.md#addportfolio)

## Creates and updates the information of an existing portfolio of an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to create a portfolio for an investor, next to be associated with specific investments. This operation is also used to alter already existing portfolio information.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addPortfolio               |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation Parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation Parameters

<table><thead><tr><th width="261">Parameter</th><th width="148">Type/Format</th><th width="134">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>portfolio_identifier_changed</td><td>string</td><td>no</td><td>Used to change the portfolio identifier</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addPositionToPortfolio](portfolios.md#addpositiontoportfolio)

## Adds an investment in a green asset to a portfolio of an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to associate particular investments to a portfolio. Impacts can then be consolidated on portfolio level.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addPositionToPortfolio     |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="125">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identfier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an investment</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removePositionFromPortfolio](portfolios.md#removepositionfromportfolio)

## Removes an investment in a green asset from a portfolio of an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove positions from a portfolio, prior to removal of the investment as such.

#### Request Body

| Name                                         | Type   | Description                 |
| -------------------------------------------- | ------ | --------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits             |
| operation<mark style="color:red;">\*</mark>  | string | removePositionFromPortfolio |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters  |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="121">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identfier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an investment</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removePortfolio](portfolios.md#removeportfolio)

## Removes a portfolio of an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove a portfolio, prior to removing the investor.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removePortfolio            |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="125">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 11/16] esg-credits-api/positions.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/positions.md
---

---
description: >-
  This section has operations to manage positions taken by investors in green
  assets, i.e. showing, adding, and removing positions
---

# Positions

### [getPositions](positions.md#getpositions)

## Returns the investments in green assets by an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the investments of a particlar investor.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getPositions               |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example response

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="188">Parameter</th><th width="133">Type/Format</th><th width="99">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>String identifier for a specified asset to include. Default is all.</td></tr><tr><td>issuer_identifier</td><td>string</td><td>no</td><td>String identifier for a specified issuer to include. Default is all.</td></tr><tr><td>user_identifier</td><td>string</td><td>no</td><td>For limiting the output to the investors that the user has access to</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addPosition](positions.md#addposition)

## Creates and updates an investment in a green asset of an investor

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to register investments to a particular investor.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addPosition                |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example response

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="223">Parameter</th><th width="183">Type/Format</th><th width="103">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset</td></tr><tr><td>position_amount</td><td>number/integer</td><td>yes</td><td>Amount of money invested</td></tr><tr><td>position_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investment, as per getCurrencies</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>no</td><td>Year of the taxonomy (if impact calculation is to be done at this stage)</td></tr><tr><td>position_days</td><td>number/integer</td><td>no</td><td>The term of the investment, default is 365 days (if impact calculation is to be done at this stage)</td></tr><tr><td>position_start_date</td><td>date/YYYY-MM-DD</td><td>no</td><td>Date of investment (for ESG Credits certificate generation)</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removePosition](positions.md#removeposition)

## Removes an investment in a green asset, and also its impact

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove an investment from a particular investor, where also any associated ESG impact records will be removed.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removePosition             |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation Parameters |

#### Example response

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="126">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identfier for an investment</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 12/16] esg-credits-api/projects.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/projects.md
---

---
description: >-
  This section has operations to register projects and their impact
  characteristics, and one operation to consolidate projects into a green
  framework
---

# Projects

### [getProjects](projects.md#getprojects)

## Returns private or public green projects for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve green projects registered in ESG.Credits data repository.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getProjects                |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="214">Parameter</th><th width="182">Type/Format</th><th width="107">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>project_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getProjectDetails](projects.md#getprojectdetails)

## Returns details about a green project for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operations to retrieve green project details.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getProjectDetails          |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="187">Parameter</th><th width="162">Type/Format</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addProject](projects.md#addproject)

## Creates and updates the information about a green project

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add green projects to the ESG.Credits data repository.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addProject                 |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="216">Parameter</th><th width="131">Type/Format</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>project_name</td><td>string</td><td>yes</td><td>Project name</td></tr><tr><td>project_currency_code</td><td>string</td><td>yes</td><td>Currency code of the project, as per getCurrencies</td></tr><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework to be built</td></tr><tr><td>project_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addYearSpecificsToProject](projects.md#addyearspecificstoproject)

## Adds reporting year specific details to a green project

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to set up the green project with details that are year specific.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addYearSpecificsToProject  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="191">Parameter</th><th width="160">Type/Format</th><th width="101">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>allocated_amount</td><td>number/integer</td><td>yes</td><td>Amount of funding allocated to the project for the reporting year of the framework, for the corresponding impacts registered</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addCategoryIndicatorToProject](projects.md#addcategoryindicatortoproject)

## Adds and updates category and indicator values to a green project

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to set up the different impact categories, indicators, and units, with specified values.

#### Request Body

| Name                                        | Type   | Description                   |
| ------------------------------------------- | ------ | ----------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits               |
| operation<mark style="color:red;">\*</mark> | string | addCategoryIndicatorToProject |
| parameters                                  | JSON   | check Operation parameters    |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="209">Parameter</th><th width="157">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a sub category</td></tr><tr><td>sub_category_volume</td><td>number</td><td>yes</td><td>Amount of funding / use of proceeds</td></tr><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>indicator_value</td><td>number</td><td>yes</td><td>ESG benefit value, in the unit specified by the taxonomy</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [buildFrameworkFromProjects](projects.md#buildframeworkfromprojects)

## Builds a green framework by consolidating benefit characteristics of projects

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to consolidate project impact data into a green framework, as an option to register the framework as a whole. The framework needs to be created and year specifics added. Projects need to refer to the framework.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | buildFrameworkFromProjects |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="203">Parameter</th><th width="166">Type/Format</th><th width="99">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework to be built from consolidation of associated projects</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### removeIndicatorFramProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th>Name</th><th width="157">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeIndicatorFromProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter           | Type/Format     | Required | Description |
| ------------------- | --------------- | -------- | ----------- |
| project\_identifier | string          | yes      |             |
| indicator\_id       | number/integer  | yes      |             |
| sub\_category\_id   | number/integer  | yes      |             |
| reporting\_year     | number/4 digits | yes      |             |

#### Example code

[CODE EXAMPLES]

### removeCategoryFromProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th>Name</th><th width="148">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeCategoryFromProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

[CODE EXAMPLES]

#### Operation parameters

| Parameter           | Type/Format     | Required | Description |
| ------------------- | --------------- | -------- | ----------- |
| project\_identifier | string          | yes      |             |
| sub\_category\_id   | number/integer  | yes      |             |
| reporting\_year     | number/4 digits | yes      |             |

#### Example code

[CODE EXAMPLES]

### removeYearSpecificsFromProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th width="250">Name</th><th width="135">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeYearSpecificsFromProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter          | Type/Format     | Required | Description |
| ------------------ | --------------- | -------- | ----------- |
| project\_identifer | string          | yes      |             |
| reporting\_year    | number/4 digits | yes      |             |

#### Example code

[CODE EXAMPLES]

### removeProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th>Name</th><th width="191">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter           | Type/Format | Required | Description |
| ------------------- | ----------- | -------- | ----------- |
| project\_identifier | string      | yes      |             |

#### Example code

[CODE EXAMPLES]

---



## [FILE 13/16] esg-credits-api/taxonomy.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/taxonomy.md
---

---
description: >-
  This section has operations to build up the taxonomy of choice, i.e.
  categories, indicators, and units, as well as United Nation's Sustainability
  Development Goals and EU Environmental Objectives.
---

# Taxonomy

### [getSDGs](taxonomy.md#getsdgs)

## Returns all United Nations Sustainable Development Goals

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to explore which UN SDGs that are available to reference in your taxonomy.

#### Request Body

| Name                                        | Type   | Description                |
| ------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark> | string | getSDGs                    |
| parameters                                  | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="162">Parameter</th><th width="136">Type/Format</th><th width="98">Required</th><th>Description</th></tr></thead><tbody><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getEUObjectives](taxonomy.md#geteuobjectives)

## Returns European Union Environmental Development Objectives

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to explore which EU Objectives that are available to reference in your taxonomy.

#### Request Body

| Name                                        | Type   | Description                |
| ------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark> | string | getEUObjectives            |
| parameters                                  | string | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="162">Parameter</th><th width="135">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getCategories](taxonomy.md#getcategories)

## Returns the categories of the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve all categories of your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getCategories              |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="182">Type/Format</th><th width="108">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getSubCategories](taxonomy.md#getsubcategories)

## Returns the sub categories of the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve all sub categories of your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getSubCategories           |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="175">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getSuperIndicators](taxonomy.md#getsuperindicators)

## Returns the super indicators of the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve all super indicators of your taxonomy.

#### Request Body

| Name                                         | Type   | Description               |
| -------------------------------------------- | ------ | ------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits           |
| operation<mark style="color:red;">\*</mark>  | string | getSuperIndicators        |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation arameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="125">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getIndicators](taxonomy.md#getindicators)

## Returns the indicators and super indicators of the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve all indicators of your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getIndicators              |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="121">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getUnits](taxonomy.md#getunits)

## Returns the units of the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve all units of your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getUnits                   |
| parameters<mark style="color:red;">\*</mark> | string | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="179">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addCategory](taxonomy.md#addcategory)

## Adds and updates a category to the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add a category to your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addCategory                |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="255">Parameter</th><th width="166">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>category_name</td><td>string</td><td>yes</td><td>Category name to add or change</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>category_name_changed</td><td>string</td><td>no</td><td>New category name</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addSubCategory](taxonomy.md#addsubcategory)

## Adds and updates a sub category to the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add a sub category to your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addSubCategory             |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="163">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>sub_category_name</td><td>string</td><td>yes</td><td>Sub category name to add or change</td></tr><tr><td>category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a category</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>sub_category_name_changed</td><td>string</td><td>no</td><td>New sub category name</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addGoalObjectiveToSubCategory](taxonomy.md#addgoalobjectivetosubcategory)

## Adds a SDG and EU Objective to a sub category for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add SDGs and EU Environmental Objectives to a sub category of your taxonomy.

#### Request Body

| Name                                         | Type   | Description                   |
| -------------------------------------------- | ------ | ----------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits               |
| operation<mark style="color:red;">\*</mark>  | string | addGoalObjectiveToSubCategory |
| parameters<mark style="color:red;">\*</mark> | string | check Operation parameters    |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="184">Type/Format</th><th width="99">Required</th><th>Description</th></tr></thead><tbody><tr><td>sub_category_id</td><td>number, integer</td><td>yes</td><td>Integer identifier for a sub category</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>sdg_id</td><td>number/integer</td><td>no</td><td>Integer identifier for an SDG</td></tr><tr><td>eu_objective_id</td><td>number/integer</td><td>no</td><td>Integer identifier for an EU Environmental Objective</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addUnit](taxonomy.md#addunit)

## Adds and updates a unit to the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add a unit to your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addUnit                    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="174">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>unit_name</td><td>string</td><td>yes</td><td>Unit name to add or change</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>unit_name_changed</td><td>string</td><td>no</td><td>New unit name</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addSuperIndicator](taxonomy.md#addsuperindicator)

## Adds and updates a super indicator to the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add a super category to your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addSuperIndicator          |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="233">Parameter</th><th width="153">Type/Format</th><th width="120">Required</th><th>Description</th></tr></thead><tbody><tr><td>super_indicator_name</td><td>string</td><td>yes</td><td>Super indicator name to add or change</td></tr><tr><td>category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a category</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>super_indicator_name_changed</td><td>string</td><td>no</td><td>New super indicator name</td></tr><tr><td>category_id_changed</td><td>number/integer</td><td>no</td><td>New category id</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addIndicator](taxonomy.md#addindicator)

## Adds and updates an indicator to the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add an indicator to your taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addIndicator               |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="263">Parameter</th><th width="156">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>indicator_name</td><td>string</td><td>yes</td><td>Indicator name to add or change</td></tr><tr><td>super_indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a super indicator</td></tr><tr><td>unit_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a unit</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>indicator_name_changed</td><td>string</td><td>no</td><td>New indicator name</td></tr><tr><td>super_indicator_id_changed</td><td>number/integer</td><td>no</td><td>New super indicator id</td></tr><tr><td>unit_id_changed</td><td>number/integer</td><td>no</td><td>New unit id</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getTaxonomy](taxonomy.md#gettaxonomy)

## Returns the taxonomy for a particular reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation retrieve your stored taxonomy.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getTaxonomy                |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="172">Type/Format</th><th width="100">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/integer</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [copyTaxonomyToNewYear](taxonomy.md#copytaxonomytonewyear)

## Copies a taxonomy from one reporting year to another reporting year

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to copy your taxonomy to a new year.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | copyTaxonomyToNewYear      |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="158">Type/Format</th><th width="113">Required</th><th>Description</th></tr></thead><tbody><tr><td>source_year</td><td>number/4 digits</td><td>yes</td><td>Source year of the taxonomy</td></tr><tr><td>target_year</td><td>number/4 digits</td><td>yes</td><td>Target year of the taxonomy</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeIndicator](taxonomy.md#removeindicator)

## Removes an indicator

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeIndicator            |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter       | Type/Format     | Required | Description |
| --------------- | --------------- | -------- | ----------- |
| indicator\_id   | number/integer  | yes      |             |
| reporting\_year | number/4 digits | yes      |             |
|                 |                 |          |             |

#### Example code

[CODE EXAMPLES]

### [removeSuperIndicator](taxonomy.md#removesuperindicator)

## Removes a super indicator

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeSuperIndicator       |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="190">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>super_indicator_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeUnit](taxonomy.md#removeunit)

## Removes a unit

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeUnit                 |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters&#x20;

| Parameter       | Type/Format     | Required | Description |
| --------------- | --------------- | -------- | ----------- |
| unit\_id        | number/integer  | yes      |             |
| reporting\_year | number/4 digits | yes      |             |

#### Example code

[CODE EXAMPLES]

### [removeGoalObjectiveFromSubCategory](taxonomy.md#removegoalobjectivefromsubcategory)

## Removes an SDG and EU Objective from a sub category

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove SDGs and EU Environmental Objectives from your taxonomy.

#### Request Body

| Name                                         | Type   | Description                        |
| -------------------------------------------- | ------ | ---------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                    |
| operation<mark style="color:red;">\*</mark>  | string | removeGoalObjectiveFromSubCategory |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters         |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th width="172">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a sub category</td></tr><tr><td>sdg_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an SDG</td></tr><tr><td>eu_objective_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an EU Environmental Objective</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeSubCategory](taxonomy.md#removesubcategory)

## Removes a sub category

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeSubCategory          |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter         | Type/Format     | Required | Description |
| ----------------- | --------------- | -------- | ----------- |
| sub\_category\_id | number/integer  | yes      |             |
| reporting\_year   | number/4 digits | yes      |             |

#### Example code

[CODE EXAMPLES]

### [removeCategory](taxonomy.md#removecategory)

## Removes a category

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeCategory             |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter       | Type/Format     | Required | Description |
| --------------- | --------------- | -------- | ----------- |
| category\_id    | number/integer  | yes      |             |
| reporting\_year | number/4 digits | yes      |             |

#### Example code

[CODE EXAMPLES]

---



## [FILE 14/16] esg-credits-api/translations.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/translations.md
---

---
description: >-
  This section deals with language translations of categories, indicators and
  units, i.e. making your taxonomy and frameworks multilingual. Translations are
  removed when taxonomy items are removed.
---

# Translations

### [getLanguages](translations.md#getlanguages)

## Returns all registered Languages

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to list available languages for when you are to register translations for categories, sub-categories, super-indicators, indicators, and units, when building up your taxonomy.

#### Request Body

| Name                                        | Type   | Description     |
| ------------------------------------------- | ------ | --------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits |
| operation<mark style="color:red;">\*</mark> | string | getLanguages    |

[CODE EXAMPLES]

#### Example code

[CODE EXAMPLES]

### [addCategoryTranslation](translations.md#addcategorytranslation)

## Adds a language translation to a category

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add or change a language translation to a category for your taxonomy for a particular year.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addCategoryTranslation     |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

[CODE EXAMPLES]

[CODE EXAMPLES]

### [addSubCategoryTranslation](translations.md#addsubcategorytranslation)

## Adds a language translation to a sub category

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add or change a language translation to a sub category for your taxonomy for a particular reporting year.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addSubCategoryTranslation  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="124">Required</th><th>Description</th></tr></thead><tbody><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a sub category</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addSuperIndicatorTranslation](translations.md#addsuperindicatortranslation)

## Adds a language translation to a super indicator

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add or change a language translation to a super indicator for your taxonomy for a particular reporting year.

#### Request Body

| Name                                         | Type   | Description                  |
| -------------------------------------------- | ------ | ---------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits              |
| operation<mark style="color:red;">\*</mark>  | string | addSuperIndicatorTranslation |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters   |

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="196">Parameter</th><th>Type/Format</th><th width="122">Required</th><th>Description</th></tr></thead><tbody><tr><td>super_indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a super indicator</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addIndicatorTranslation](translations.md#addindicatortranslation)

## Adds a language translation to an indicator

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add or change a language translation to a indicator for your taxonomy for a particular reporting year.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addIndicatorTranslation    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="131">Required</th><th>Description</th></tr></thead><tbody><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [addUnitTranslation](translations.md#addunittranslation)

## Adds a language translation to a unit

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add or change a language translation to a unit for your taxonomy for a particular reporting year. In many cases units are identical between languages, but this entry is still needed by the model.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addUnitTranslation         |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>unit_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 15/16] esg-credits-api/users.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/esg-credits-api/users.md
---

---
description: >-
  This section has operations to manage end users, groups, and user's investor
  access
---

# Users

### [getUsers](users.md#getusers)

## Returns all registered users

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the registered end users of your account.

#### Request body

<table><thead><tr><th>Name</th><th width="155">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>getUsers</td></tr><tr><td>parameters</td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter        | Type/Format | Required | Description |
| ---------------- | ----------- | -------- | ----------- |
| user\_identifier | string      | no       |             |
| decryption\_key  | string      | no       |             |

#### Example code

[CODE EXAMPLES]

### [addUser](users.md#adduser)

## Creates and updates the information of a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to create users stored in ESG.Credits. Is also used to alter already existing user data.

#### Request body

<table><thead><tr><th>Name</th><th width="144">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>addUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter         | Type/Format | Required | Description   |
| ----------------- | ----------- | -------- | ------------- |
| user\_identifier  | string      | yes      |               |
| user\_first\_name | string      | no       |               |
| user\_last\_name  | string      | no       |               |
| user\_email       | string      | no       |               |
| user\_role        | string      | no       | user or admin |
| encryption\_key   | string      | no       |               |

#### Example code

[CODE EXAMPLES]

### [removeUser](users.md#removeuser)

## Removes a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove users from the ESG.Credits data repository.

#### Request body

<table><thead><tr><th>Name</th><th width="157">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter        | Type/Format | Required | Description |
| ---------------- | ----------- | -------- | ----------- |
| user\_identifier | string      | yes      |             |

#### Example code

[CODE EXAMPLES]

### [getGroups](users.md#getgroups)

## Returns all groups

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to list available groups for when you are to connect users to groups to control access to certain functionality in your solution.

#### Request body

<table><thead><tr><th>Name</th><th width="163">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>getGroups</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Example code

[CODE EXAMPLES]

### [addGroupToUser](users.md#addgrouptouser)

## Adds a group to a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to connect users to groups to control access to certain functionality in your solution.

#### Request body

<table><thead><tr><th>Name</th><th width="149">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>addGroupToUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter        | Type/Format | Required | Description                          |
| ---------------- | ----------- | -------- | ------------------------------------ |
| user\_identifier | string      | yes      |                                      |
| group            | string      | yes      | Group that the user should belong to |

#### Example code

[CODE EXAMPLES]

### [removeGroupFromUser](users.md#removegroupfromuser)

## Removes a group from a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove connections between groups and users.

#### Request body

<table><thead><tr><th>Name</th><th width="155">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeGroupFromUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="175">Parameter</th><th width="150">Type/Format</th><th width="110">Required</th><th>Description</th></tr></thead><tbody><tr><td>user_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>group</td><td>string</td><td>yes</td><td>Group that the user no longer should belong to</td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [getInvestorsOfUser](users.md#getinvestorsofuser)

## Returns all investors that a user has access to

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve which investors' information a certain user has the right to access.

#### Request body

<table><thead><tr><th>Name</th><th width="174">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>getInvestorsOfUser</td></tr><tr><td>parameters</td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

| Parameter        | Type/Format | Required | Description |
| ---------------- | ----------- | -------- | ----------- |
| user\_identifier | string      | no       |             |
| decryption\_key  | string      | no       |             |

#### Example code

[CODE EXAMPLES]

### [addInvestorToUser](users.md#addinvestortouser)

## Adds an investor to a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to connect investors to users in order to control users´ access to investor specific information.

#### Request body

<table><thead><tr><th>Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>addInvestorToUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="202">Parameter</th><th width="138">Type/Format</th><th width="122">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>Investor the user should have access to</td></tr><tr><td>user_identifier</td><td>string</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

### [removeInvestorFromUser](users.md#removeinvestorfromuser)

## Removes an investor from a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove connections between investors and users.

#### Request body

<table><thead><tr><th>Name</th><th width="161">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeInvestorFromUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

[CODE EXAMPLES]

#### Operation parameters

<table><thead><tr><th width="203">Parameter</th><th width="153">Type/Format</th><th width="117">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>Investor the user should no longer have acces to</td></tr><tr><td>user_identifier</td><td>string</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

[CODE EXAMPLES]

---



## [FILE 16/16] solution-overview.md

Path: /mnt/x/Git/blockchain-web-services/bws/bws-front/docs.bws.ninja/marketplace-solutions/bws.esg.credits/solution-overview.md
---

---
description: BWS.ESG.Credits solution overview
---

# Solution Overview

This API solution is designed for financial institutions that want to quickly add ESG impact benefits to their digital channels and investment reporting. The benefits come from investments made in green assets. Typical use cases include:

1. Banks and investment advisors who want to create and provide investor reports to their broad customer base in digital channels, for the specific scope of green assets they market.
2. Institutional investors in green assets who want to create and view investment reports for their own investment portfolio of broadly available green assets.
3. Venture capitalists funding green projects that want to create and provide their sponsors with investor reports on both project and consolidated levels, for each sponsor’s investment mix.
4. Issuers of green assets that want to provide banks, advisors, and investors with impact details for promotional purposes, and for use in impact calculations.
5. Certification bodies and agents that want to digitally publish quality-assured impact characteristics of green projects and green frameworks to issuers of green assets.

By utilizing this API solution, your development team can accelerate the development of your ESG impact reporting solution. The underlying information model and calculation methods are designed to make it easy for you to add impact reporting to your digital channels and investment reporting.

Impact reporting can be done as per the ICMA framework or any taxonomy of choice. The solution supports two levels of impact categories and two levels of impact indicators, as well as any impact unit.

Impact amounts are calculated per annum or as per the term of the financial instrument. The green frameworks' “impact profile” forms the basis for calculations. Benefit characteristics of the green projects invested in can be consolidated and form your green framework.

You can tie United Nations SDGs and EU’s Environmental Objectives classifications to taxonomy impact categories as per your choice. Any combination of currencies are supported, and your choice of taxonomy language can be accessed interchangeable.

The ESG impact profile of your framework can be immutably stored in a blockchain to demonstrate your committment. Blockchain certificates for your customers' specific investment in green assets can also be issued with help of ESG.Credits. Finally, the blockchain can be utilized to ensure that green project benefits are not double-counted across the debt capital community.

---

