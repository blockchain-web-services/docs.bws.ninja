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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "position_id": 6,
        "position_amount": 2400000,
        "position_currency_code": "EUR",
        "position_days": 180,
        "position_start_date": "2023-02-01",
        "investor_identifier": "3a6515809856",
        "investor_name": "John Smith",
        "asset_identifier": "XS24427682",
        "asset_name": "Asset X, 5-year",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank"
    },
    {
        "position_id": 16,
        "position_amount": 300000,
        "position_currency_code": "NOK",
        "position_days": 365,
        "position_start_date": "2023-01-01",
        "investor_identifier": "3a6515809856",
        "investor_name": "John Smith",
        "asset_identifier": "XS25798443",
        "asset_name": "Asset Y, 4-year",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such position(s) for that investor."
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

<table><thead><tr><th width="188">Parameter</th><th width="133">Type/Format</th><th width="99">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>String identifier for a specified asset to include. Default is all.</td></tr><tr><td>issuer_identifier</td><td>string</td><td>no</td><td>String identifier for a specified issuer to include. Default is all.</td></tr><tr><td>user_identifier</td><td>string</td><td>no</td><td>For limiting the output to the investors that the user has access to</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getPositions",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "asset_identifier": "XS123456",
        "issuer_identifier": "good_issuer",
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y="
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Existing position was successfully changed (id). 6"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Reporting year is not available. Position is stored, but impact is not calculated."
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

<table><thead><tr><th width="223">Parameter</th><th width="183">Type/Format</th><th width="103">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset</td></tr><tr><td>position_amount</td><td>number/integer</td><td>yes</td><td>Amount of money invested</td></tr><tr><td>position_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investment, as per getCurrencies</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>no</td><td>Year of the taxonomy (if impact calculation is to be done at this stage)</td></tr><tr><td>position_days</td><td>number/integer</td><td>no</td><td>The term of the investment, default is 365 days (if impact calculation is to be done at this stage)</td></tr><tr><td>position_start_date</td><td>date/YYYY-MM-DD</td><td>no</td><td>Date of investment (for ESG Credits certificate generation)</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addPosition",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "asset_identifier": "XS123456",
        "position_amount": 2500000,
        "position_currency_code": "EUR",
        "reporting_year": 2023,
        "position_days": 180,
        "position_start_date": "2023-02-01"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "Position was successfully removed"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such position."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="126">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identfier for an investment</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removePosition",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "position_id": 45
    }
```
{% endtab %}
{% endtabs %}
