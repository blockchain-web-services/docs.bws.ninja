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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "asset_id": 4,
        "asset_identifier": "XS24427682",
        "asset_name": "Asset X, 5-year",
        "asset_value_outstanding": 1100000000,
        "asset_currency_code": "EUR",
        "asset_date_issued": "2022-02-09",
        "asset_date_maturity": "2027-08-09",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank",
        "framework_identifier": "greenbond",
        "framework_name": "Good Bank Green Bond Framework",
        "asset_visibility": "private"
    },
    {
        "asset_id": 5,
        "asset_identifier": "XS25538443",
        "asset_name": "Asset Y, 4-year",
        "asset_value_outstanding": 1100000000,
        "asset_currency_code": "EUR",
        "asset_date_issued": "2022-11-09",
        "asset_date_maturity": "2026-11-09",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank",
        "framework_identifier": "greenbond",
        "framework_name": "Good Bank Green Bond Framework",
        "asset_visibility": "private"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such asset is registered."
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

<table><thead><tr><th width="230">Parameter</th><th width="160">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr><tr><td>issuer_identifier</td><td>string</td><td>no</td><td>String identifier for a specified issuer to be included. Default is all.</td></tr><tr><td>framework_identifier</td><td>string</td><td>no</td><td>String identifier for a specified framework to be included. Default is all.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getAssets",
    "parameters": {
        "issuer_visibility": "public",
        "issuer_identifier": "good_issuer",
        "framework_identifier:" "greenbond"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "framework_id": 3,
        "framework_identifier": "greenbond",
        "framework_name": "Good Bank Green Bond Framework",
        "framework_value_outstanding": 22224856800,
        "framework_allocated_amount": 22224856800,
        "framework_active_percentage": 1.0,
        "framework_currency_code": "SEK",
        "value_outstanding_framework": "yes",
        "framework_visibility": "private",
        "framework": [
            {
                "category_id": 63,
                "category_name": "Förnyelsebar energi",
                "sub_category_id": 55,
                "sub_category_name": "Vindkraft",
                "sub_category_volume": 11540605381,
                "currency_code": "SEK",
                "super_indicator_id": 28,
                "super_indicator_name": "Årligt minskade utsläpp",
                "indicator_id": 34,
                "indicator_name": "Årligt minskade utsläpp",
                "indicator_value": 899034000.0,
                "unit_id": 25,
                "unit_name": "CO2e kg",
                "year": 2022,
                "sdg": {
                    "7": "Hållbar energi för alla",
                    "13": "Bekämpa klimatförändringar"
                },
                "eu_objective": {},
                "language": "Svenska"
            },
            {
                "category_id": 63,
                "category_name": "Förnyelsebar energi",
                "sub_category_id": 55,
                "sub_category_name": "Vindkraft",
                "sub_category_volume": 11540605381,
                "currency_code": "SEK",
                "super_indicator_id": 29,
                "super_indicator_name": "Effekt",
                "indicator_id": 35,
                "indicator_name": "Effekt",
                "indicator_value": 1054000.0,
                "unit_id": 26,
                "unit_name": "kW",
                "year": 2022,
                "sdg": {
                    "7": "Hållbar energi för alla",
                    "13": "Bekämpa klimatförändringar"
                },
                "eu_objective": {},
                "language": "Svenska"
            },
            {
                "category_id": 69,
                "category_name": "Cirkulär ekonomi",
                "sub_category_id": 63,
                "sub_category_name": "Cirkulär ekonomi",
                "sub_category_volume": 15578758,
                "currency_code": "SEK",
                "super_indicator_id": 28,
                "super_indicator_name": "Årligt minskade utsläpp",
                "indicator_id": 34,
                "indicator_name": "Årligt minskade utsläpp",
                "indicator_value": 2386000.0,
                "unit_id": 25,
                "unit_name": "CO2e kg",
                "year": 2022,
                "sdg": {
                    "11": "Hållbara städer och samhällen",
                    "12": "Hållbar konsumtion och produktion"
                },
                "eu_objective": {},
                "language": "Svenska"
            }
        ]
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No taxonomy and impact values are available for that reporting year and/or framework and/or language code."
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

<table><thead><tr><th width="192">Parameter</th><th width="163">Type/Format</th><th width="117">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset (e.g. ISIN)</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language selection as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getAssetFrameworkDetails",
    "parameters": {
        "asset_identifier": "XS123456",
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Asset successfully added. Asset needs to be private."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Suggested framework is not public. Asset needs to be private too."
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

<table><thead><tr><th width="238">Parameter</th><th width="188">Type/Format</th><th width="101">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset (e.g. ISIN)</td></tr><tr><td>asset_name</td><td>string</td><td>yes</td><td>Asset name</td></tr><tr><td>issuer_identifier</td><td>string</td><td>yes</td><td>String identifier for the issuer of the asset</td></tr><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the green framework of the asset</td></tr><tr><td>asset_value_outstanding</td><td>number/integer</td><td>no</td><td>Amount of money subject to green investments (framework ditto used in impact calculations)</td></tr><tr><td>asset_currency_code</td><td>string</td><td>yes</td><td>Currency code of the asset, as per getCurrencies</td></tr><tr><td>date_issued</td><td>date/YYYY-MM-DD</td><td>no</td><td>Issue date if applicable</td></tr><tr><td>date_maturity</td><td>date/YYYY-MM-DD</td><td>no</td><td>Maturation date if applicable</td></tr><tr><td>asset_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addAsset",
    "parameters": {
        "asset_identifier": "XS123456",
        "asset_name": "Green deposit, 4-year",
        "issuer_identifier": "good_issuer",
        "framework_identifier": "greenbond",
        "asset_value_outstanding": 1100000000,
        "asset_currency_code": "EUR",
        "date_issued": "2022-11-09",
        "date_maturity": "2026-11-09",
        "asset_visibility": "private"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "Asset was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Asset was not removed. Position(s) exist."
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

#### Request Body

#### Operation parameters

<table><thead><tr><th width="189">Parameter</th><th width="135">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeAsset",
    "parameters": {
        "asset_identifier": "XS123456"
        }
    }
```
{% endtab %}
{% endtabs %}
