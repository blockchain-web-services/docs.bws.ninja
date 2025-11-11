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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
See BWS.Blockchain.Fetch
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error reading from the blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="128">Parameter</th><th width="140">Type/Format</th><th width="156">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getJobStatusFromBlockchain",
    "parameters": {
        "job_id": "8707b226-a4ac-4e34-9dde-8c9f233e0a64"
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
See operation BWS.Blockchain.Save
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error writing to the blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}s
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="233">Parameter</th><th width="156">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "writeHtmlFrameworkToBlockchain",
    "parameters": {
	"framework_identifier": "greenbond",
	"reporting_year": 2023,
   	"solution": "BWS.Blockchain.Save",
        "operation": "save",
	"version": 1,
	"network": "mumbai",
        "decimals": 1,
        "sdg_goals_included": "yes",
        "eu_objectives_included": "no",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
See operation BWS.Blockchain.Save
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error writing to the blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="228">Parameter</th><th width="153">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "writeJsonFrameworkToBlockchain",
    "parameters": {
	"framework_identifier": "greenbond",
	"reporting_year": 2023,
   	"solution": "BWS.Blockchain.Save",
        "operation": "save",
	"version": 1,
	"network": "mumbai",
        "decimals": 1,
        "sdg_goals_included": "yes",
        "eu_objectives_included": "no",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
See operation BWS.Blockchain.Save
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error writing to the blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="225">Parameter</th><th width="157">Type/Format</th><th width="113">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for the investment</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>write_investor_to_blockchain</td><td>string</td><td>no</td><td>Select "yes" to include PII to the output, default is "no"</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "writeHtmlPositionImpactsToBlockchain",
    "parameters": {
	"position_id": 6,
	"reporting_year": 2023,
   	"solution": "BWS.Blockchain.Save",
        "operation": "save",
	"version": 1,
	"network": "mumbai",
        "decimals": 1,
        "sdg_goals_included": "yes",
        "eu_objectives_included": "no",
        "write_investor_to_blockchain": "yes",
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y=",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
See operation BWS.Blockchain.Save
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error writing to the blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="230">Parameter</th><th width="164">Type/Format</th><th width="103">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for the investment</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>solution</td><td>string</td><td>yes</td><td>BWS solution to be used</td></tr><tr><td>operation</td><td>string</td><td>yes</td><td>BWS operation to be used</td></tr><tr><td>version</td><td>number/integer</td><td>yes</td><td>BWS version to be used</td></tr><tr><td>network</td><td>string</td><td>yes</td><td>Blockchain network to be used</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Number of decimals in numeral output</td></tr><tr><td>sdg_goals_included</td><td>string</td><td>no</td><td>Select "yes" to include UN SDGs in the output, otherwise "no"</td></tr><tr><td>eu_objectives_included</td><td>string</td><td>no</td><td>Select "yes"to include EU Environmental Objectives in the output, otherwise "no"</td></tr><tr><td>write_investor_to_blockchain</td><td>string</td><td>no</td><td>Select "yes" to include PII to the output, default is "no"</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "writeJsonPositionImpactsToBlockchain",
    "parameters": {
	"position_id": 6,
	"reporting_year": 2023,
   	"solution": "BWS.Blockchain.Save",
        "operation": "save",
	"version": 1,
	"network": "mumbai",
        "decimals": 1,
        "sdg_goals_included": "yes",
        "eu_objectives_included": "no",
        "write_investor_to_blockchain": "yes",
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y=",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "Link to framework blockchain entry": "https://jobs.bws.ninja/6195b7c4-9e29-4eb2-925e-84af8614d2a3.html"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error reading from the blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="149">Parameter</th><th width="157">Type/Format</th><th width="112">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getHtmlFrameworkFromBlockchain",
    "parameters": {
        "job_id": "8707b226-a4ac-4e34-9dde-8c9f233e0a64"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
TBD
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error reading from the blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="159">Parameter</th><th width="150">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getJsonFrameworkFromBlockchain",
    "parameters": {
        "job_id": "8707b226-a4ac-4e34-9dde-8c9f233e0a64"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "Link to position impact blockchain entry": "https://jobs.bws.ninja/8707b226-a4ac-4e34-9dde-8c9f233e0a64.html"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error reading from blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="173">Parameter</th><th width="144">Type/Format</th><th width="121">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getHtmlPositionImpactsFromBlockchain",
    "parameters": {
        "job_id": "8707b226-a4ac-4e34-9dde-8c9f233e0a64"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
TBD
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Error reading from blockchain."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="197">Parameter</th><th width="147">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>job_id</td><td>string</td><td>yes</td><td>String identifier for the blockchain entry</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getJsonPositionImpactsFromBlockchain",
    "parameters": {
        "job_id": "8707b226-a4ac-4e34-9dde-8c9f233e0a64"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "id": 9,
        "job_id": "d1c1bc08-8f61-4804-ae77-7c5af0572451"
    },
    {
        "id": 10,
        "job_id": "ab9b591b-06e4-42a7-9513-ec7efbe8f7b9"
    },
    {
        "id": 11,
        "job_id": "a9436bcc-4a80-4974-87b4-87ca6bc2d89c"
    },
    {
        "id": 12,
        "job_id": "e848afb2-8b9e-4c5b-b670-7d62700b2b58"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such framework is registered."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="214">Parameter</th><th width="140">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getBlockchainJobsForFrameworks",
    "parameters": {
        "framework_identifier": "greenbond"
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "id": 27,
        "job_id": "70bd33bb-36af-4980-a3b1-8d00c8885ec2"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such investor is registered."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error message" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters

<table><thead><tr><th width="186">Parameter</th><th width="151">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for the investor</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for the investment</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getBlockchainJobsForImpacts",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "position_id": 6 
    }
```
{% endtab %}
{% endtabs %}
