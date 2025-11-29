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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "investor_id": 19,
        "investor_identifier": "3a6515809856",
        "investor_name": "John Smith",
        "investor_currency_code": "USD",
        "investor_email": "john.smith@xyz.com"
    },
    {
        "investor_id": 20,
        "investor_identifier": "9c809eb86ee6",
        "investor_name": "Mary Smith",
        "investor_currency_code": "USD",
        "investor_email": "mary.smith@xyz.com"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No investors are registered."
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

<table><thead><tr><th width="167">Parameter</th><th width="137">Type/Format</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>depryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>user_identifier</td><td>string</td><td>no</td><td>For limiting the output to the investors that the user has access to</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getInvestors",
    "parameters": {
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y="
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "investor_identifier": "38af93cb6de"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Investor identifier generation failed. Try again!"
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

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "generateInvestorIdentifier"
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Generated key for encrypting and decrypting PIIs is (keep it safely): Nl5ZBnKXHXvvW7v1os7c5W9Ag_1hPLEuOb-G-ZU0="
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Investor identifier generation failed. Try again!"
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

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "generateEncryptionKey"
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Investor was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Suggested investor reporting currency does not exist."
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

<table><thead><tr><th width="228">Parameter</th><th width="142">Type/Format</th><th width="94">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor, potentially personally identifiable information (subject to encryption)</td></tr><tr><td>investor_name</td><td>string</td><td>yes</td><td>Personally identiable information (subject to encryption)</td></tr><tr><td>investor_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investor, as per getCurrencies (currently not utilized)</td></tr><tr><td>investor_email</td><td>string</td><td>no</td><td>For investor correspondence e.g investor reports</td></tr><tr><td>encryption_key</td><td>string</td><td>no</td><td>For encrypting personally identifiable information</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addInvestor",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "investor_name": "John Smith",
        "investor_currency_code": "SEK",
        "investor_email": "john.smith@xyz.com",
        "encryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y="
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "Investor was successfully removed." 
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Investor was not removed. Position(s) exist."
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

<table><thead><tr><th>Parameter</th><th width="157">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeInvestor",
    "parameters": {
        "investor_identifier": "9c807eb86ee6"
        }
    }
```
{% endtab %}
{% endtabs %}
