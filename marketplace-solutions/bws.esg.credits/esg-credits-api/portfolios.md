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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "portfolio_id": 1,
        "portfolio_identifier": "portfolio_john",
        "investor_identifier": "3a6515809856",
        "investor_name": "John Smith",
        "assets": [
            {
                "asset_identifier": "X123456",
                "asset_name": "Green Deposits"
            },
            {
                "asset_identifier": "XS24427682",
                "asset_name": "Asset X, 5-year"
            },
            {
                "asset_identifier": "XS25798443",
                "asset_name": "Asset Y, 4-year"
            }
        ]
    },
    {
        "portfolio_id": 3,
        "portfolio_identifier": "portfolio_mary",
        "investor_identifier": "9c809eb86ee6",
        "investor_name": "Mary Smith",
        "assets": [
            {
                "asset_identifier": "XS25798443",
                "asset_name": "Asset Y, 4-year"
            }
        ]
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such portfolio(s) for that investor."
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

<table><thead><tr><th width="182">Parameter</th><th width="130">Type/Format</th><th width="101">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>String identifier for an asset to include. Default is all.</td></tr><tr><td>user_identifier</td><td>string</td><td>no</td><td>For limiting the output to the investors that the user has access to</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getPortfolios",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "asset_identifier": "XS123456",
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y="
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "position_id": 6,
        "position_amount": 2400000,
        "position_currency_code": "EUR",
        "position_days": 180,
        "asset_identifier": "XS24427682",
        "asset_name": "Asset X, 5-year",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank"
    },
    {
        "position_id": 14,
        "position_amount": 250000,
        "position_currency_code": "EUR",
        "position_days": 180,
        "asset_identifier": "X123456",
        "asset_name": "Green Deposits",
        "issuer_identifier": "35f0c1a1c08",
        "issuer_name": "X Bank"
    },
    {
        "position_id": 16,
        "position_amount": 300000,
        "position_currency_code": "NOK",
        "position_days": 365,
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
    "message": "No position(s) in that portfolio."
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

#### Operation Parameters

<table><thead><tr><th>Parameter</th><th width="138">Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getPortfolioPositions",
    "parameters": {
        "portfolio_identifier": "portfolio_green_john"
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Portfolio was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Investor identifier does not exist."
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

#### Operation Parameters

<table><thead><tr><th width="261">Parameter</th><th width="148">Type/Format</th><th width="134">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>portfolio_identifier_changed</td><td>string</td><td>no</td><td>Used to change the portfolio identifier</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addPortfolio",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "portfolio_identifier": "portfolio_green_john",
        "portfolio_identifier_changed": ""
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "The position has been been succesfully added to the portfolio."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "The referenced portfolio does not exist."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="125">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identfier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an investment</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addPositionToPortfolio",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "portfolio_identifier": "portfolio_green_john",
        "position_id": 19
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Position successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such portfolio."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="121">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identfier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an investment</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removePositionFromPortfolio",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "portfolio_identifier": "portfolio_green_john",
        "position_id": 19
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Portfolio successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such portfolio."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="125">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>portfolio_identifier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removePortfolio",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "portfolio_identifier": "portfolio_green_john"
        }
    }
```
{% endtab %}
{% endtabs %}
