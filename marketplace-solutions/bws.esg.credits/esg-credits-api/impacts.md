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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "position_id": 6,
        "position_amount": 2400000,
        "position_currency_code": "EUR",
        "position_days": 180,
        "investor_identifier": "3a6515809856",
        "investor_name": "John Smith",
        "asset_identifier": "XS24427682",
        "asset_name": "Asset X, 5-year",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank",
        "impacts": [
            {
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "impact_amount": 485881,
                "unit_id": 25,
                "unit_name": "CO2e kg",
                "year": 2022,
                "sdg": {
                    "7": "Affordable and clean energy",
                    "13": "Climate action"
                },
                "eu_objective": {},
                "language": "English"
            },
            {
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "super_indicator_id": 29,
                "super_indicator_name": "Effect",
                "indicator_id": 35,
                "indicator_name": "Effect",
                "impact_amount": 570,
                "unit_id": 26,
                "unit_name": "kW",
                "year": 2022,
                "sdg": {
                    "7": "Affordable and clean energy",
                    "13": "Climate action"
                },
                "eu_objective": {},
                "language": "English"
            },
            {
                "category_id": 67,
                "category_name": "Energy efficiency",
                "sub_category_id": 61,
                "sub_category_name": "Energy efficiency",
                "super_indicator_id": 30,
                "super_indicator_name": "Annual electricity/energy production",
                "indicator_id": 36,
                "indicator_name": "Annual electricity/energy production",
                "impact_amount": 69,
                "unit_id": 27,
                "unit_name": "MWh",
                "year": 2022,
                "sdg": {
                    "7": "Affordable and clean energy",
                    "11": "Sustainable cities and communities"
                },
                "eu_objective": {},
                "language": "English"
            },
            {
                "category_id": 69,
                "category_name": "Circular economy",
                "sub_category_id": 63,
                "sub_category_name": "Circular economy",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "impact_amount": 1290,
                "unit_id": 25,
                "unit_name": "CO2e kg",
                "year": 2022,
                "sdg": {
                    "11": "Sustainable cities and communities",
                    "12": "Responsible consumption and production"
                },
                "eu_objective": {},
                "language": "English"
            }
        ],
        "impact_amount_sum": "N/A"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Information is not available for this position and reporting year."
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

<table><thead><tr><th width="217">Parameter</th><th width="183">Type/Format</th><th width="120">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>integer identifier for a investment</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr><tr><td>report_template</td><td>string</td><td>no</td><td>Input report template name</td></tr><tr><td>report_name</td><td>string</td><td>no</td><td>Output report name</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getPositionImpacts",
    "parameters": {
        "position_id": 45,
        "reporting_year": 2023,
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y=",
        "category_only": "",
        "sub_category_only": "",
        "super_indicator_only": "",
        "indicator_only": "",
        "decimals": 0;
        "language_code": "en",
        "report_template": "",
        "report_name": ""
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "position_id": 6,
        "position_amount": 2400000,
        "position_currency_code": "EUR",
        "position_days": 180,
        "investor_identifier": "3a6515809856",
        "investor_name": "John Smith",
        "asset_identifier": "XS24427682",
        "asset_name": "Asset X, 5-year",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank",
        "impacts": [
            {
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "impact_amount": 485881,
                "unit_id": 25,
                "unit_name": "CO2e kg",
                "year": 2022,
                "sdg": {
                    "7": "Affordable and clean energy",
                    "13": "Climate action"
                },
                "eu_objective": {},
                "language": "English"
            },
            {
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "super_indicator_id": 29,
                "super_indicator_name": "Effect",
                "indicator_id": 35,
                "indicator_name": "Effect",
                "impact_amount": 570,
                "unit_id": 26,
                "unit_name": "kW",
                "year": 2022,
                "sdg": {
                    "7": "Affordable and clean energy",
                    "13": "Climate action"
                },
                "eu_objective": {},
                "language": "English"
            },
            {
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "super_indicator_id": 30,
                "super_indicator_name": "Annual electricity/energy production",
                "indicator_id": 36,
                "indicator_name": "Annual electricity/energy production",
                "impact_amount": 1542,
                "unit_id": 27,
                "unit_name": "MWh",
                "year": 2022,
                "sdg": {
                    "7": "Affordable and clean energy",
                    "13": "Climate action"
                },
                "eu_objective": {},
                "language": "English"
            }
        ]
    },
    {
        "position_id": 14,
        "position_amount": 250000,
        "position_currency_code": "EUR",
        "position_days": 180,
        "investor_identifier": "3a6515809856",
        "investor_name": "Lukas Schoultz",
        "asset_identifier": "X123456",
        "asset_name": "Green Deposits",
        "issuer_identifier": "35f0c1a1c08",
        "issuer_name": "Nordea Bank",
        "impacts": [
            {
                "category_id": 1,
                "category_name": "Clean transportation",
                "sub_category_id": 1,
                "sub_category_name": "Electric cars",
                "super_indicator_id": 1,
                "super_indicator_name": "Annual emissions avoided",
                "indicator_id": 1,
                "indicator_name": "Annual emissions avoided",
                "impact_amount": 597,
                "unit_id": 1,
                "unit_name": "kg CO2",
                "year": 2022,
                "sdg": {
                    "11": "Sustainable cities and communities"
                },
                "eu_objective": {
                    "1": "Climate change mitigation",
                    "2": "Climate change adaptation"
                },
                "language": "English"
            },
            {
                "category_id": 1,
                "category_name": "Clean transportation",
                "sub_category_id": 2,
                "sub_category_name": "Electric trains",
                "super_indicator_id": 1,
                "super_indicator_name": "Annual emissions avoided",
                "indicator_id": 1,
                "indicator_name": "Annual emissions avoided",
                "impact_amount": 256,
                "unit_id": 1,
                "unit_name": "kg CO2",
                "year": 2022,
                "sdg": {
                    "11": "Sustainable cities and communities"
                },
                "eu_objective": {},
                "language": "English"
            },
            {
                "category_id": 4,
                "category_name": "Renewable energy",
                "sub_category_id": 7,
                "sub_category_name": "Wind",
                "super_indicator_id": 2,
                "super_indicator_name": "Annual energy production",
                "indicator_id": 2,
                "indicator_name": "Annual energy production",
                "impact_amount": 31,
                "unit_id": 2,
                "unit_name": "MWh",
                "year": 2022,
                "sdg": {
                    "3": "Good health and well-being",
                    "7": "Affordable and clean energy",
                    "8": "Decent work and economic growth",
                    "9": "Industry, innovation and infrastructure",
                    "11": "Sustainable cities and communities",
                    "12": "Responsible consumption and production",
                    "13": "Climate action"
                },
                "eu_objective": {},
                "language": "English"
            } 
        ]
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Information is not available for this investor and reporting year."
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

<table><thead><tr><th width="210">Parameter</th><th width="187">Type/Format</th><th width="117">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>String identifier for an investor</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>For a specified asset of an investor</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getInvestorImpacts",
    "parameters": {
        "investor_identifier": "9c809eb86ee6",
        "asset_identifier": "XS123456",
        "reporting_year": 2023,
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y=",
        "category_only": "",
        "sub_category_only": "",
        "super_indicator_only": "",
        "indicator_only": "",
        "decimals": 0;
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "portfolio_identifier": "portfolio_john",
        "investor_identifier": "3a6515809856",
        "investor_name": "John Smith",
        "positions": [
            {
                "position_id": 6,
                "position_amount": 2400000,
                "position_currency_code": "EUR",
                "position_days": 180,
                "asset_identifier": "XS24427682",
                "asset_name": "Asset Y, 5-year",
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
        ],
        "impacts": [
            {
                "category_id": 1,
                "category_name": "Rena transporter",
                "sub_category_id": 1,
                "sub_category_name": "Elbilar",
                "super_indicator_id": 1,
                "super_indicator_name": "Årliga utsläpp undvikna",
                "indicator_id": 1,
                "indicator_name": "Årliga utsläpp undvikna",
                "impact_amount": 597,
                "unit_id": 1,
                "unit_name": "kg CO2",
                "year": 2022,
                "sdg": {
                    "11": "Hållbara städer och samhällen"
                },
                "eu_objective": {
                    "1": "Begränsning av klimatförändringar",
                    "2": "Anpassning till klimatförändringar"
                },
                "language": "Svenska"
            },
            {
                "category_id": 1,
                "category_name": "Rena transporter",
                "sub_category_id": 2,
                "sub_category_name": "Elektriska tåg",
                "super_indicator_id": 1,
                "super_indicator_name": "Årliga utsläpp undvikna",
                "indicator_id": 1,
                "indicator_name": "Årliga utsläpp undvikna",
                "impact_amount": 256,
                "unit_id": 1,
                "unit_name": "kg CO2",
                "year": 2022,
                "sdg": {
                    "11": "Hållbara städer och samhällen"
                },
                "eu_objective": {},
                "language": "Svenska"
            },
            {
                "category_id": 2,
                "category_name": "Energieffektivitet",
                "sub_category_id": 3,
                "sub_category_name": "Energieffektivitet",
                "super_indicator_id": 1,
                "super_indicator_name": "Årliga utsläpp undvikna",
                "indicator_id": 1,
                "indicator_name": "Årliga utsläpp undvikna",
                "impact_amount": 70,
                "unit_id": 1,
                "unit_name": "kg CO2",
                "year": 2022,
                "sdg": {
                    "7": "Hållbar energi för alla",
                    "8": "Anständiga arbetsvillkor och ekonomisk tillväxt",
                    "9": "Hållbar industri, innovationer och infrastruktur"
                },
                "eu_objective": {},
                "language": "Svenska"
            },
            {
                "category_id": 69,
                "category_name": "Cirkulär ekonomi",
                "sub_category_id": 63,
                "sub_category_name": "Cirkulär ekonomi",
                "super_indicator_id": 28,
                "super_indicator_name": "Årligt minskade utsläpp",
                "indicator_id": 34,
                "indicator_name": "Årligt minskade utsläpp",
                "impact_amount": 1323,
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
    "message": "Information is not available for this portfolio and reporting year.."
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

<table><thead><tr><th width="214">Parameter</th><th>Type/Format</th><th width="129">Required</th><th>Description</th></tr></thead><tbody><tr><td>portfolio_identfier</td><td>string</td><td>yes</td><td>String identifier for a portfolio</td></tr><tr><td>asset_identifier</td><td>string</td><td>no</td><td>For a specified asset in a portfolio</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>decryption_key</td><td>string</td><td>no</td><td>For decrypting personally identifiable information</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getPortfolioImpacts",
    "parameters": {
        "portfolio_identifier": "portfolio_green_john",
        "asset_identifier": "XS123456",
        "reporting_year": 2023,
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y=",
        "category_only": "",
        "sub_category_only": "",
        "super_indicator_only": "",
        "indicator_only": "",
        "decimals": 0;
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Position impacts were successfully calculated."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "The FX-rate is not available."
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

<table><thead><tr><th width="229">Parameter</th><th>Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>position_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a position</td></tr><tr><td>position_amount</td><td>number</td><td>yes</td><td>Amount of money invested</td></tr><tr><td>position_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investment, as per getCurrencies</td></tr><tr><td>position_days</td><td>number/integer</td><td>no</td><td>The term of the investment, default is 365 days</td></tr><tr><td>reporting_year</td><td>number/  4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getEUObjectives",
    "parameters": {
	"position_id": 6,
	"position_amount": 250000,
	"position_currency_code": "EUR",
	"position_days": 365,
	"reporting_year": 2023
	}
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "position_amount": 4856800,
        "position_currency_code": "SEK",
        "position_days": 365,
        "asset_identifier": "XS24427682",
        "asset_name": "Asset X, 5-year",
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank",
        "impacts": [
            {
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "impact_amount": 196466,
                "unit_id": 25,
                "unit_name": "CO2e kg",
                "year": 2022,
                "sdg": {
                    "7": "Affordable and clean energy",
                    "13": "Climate action"
                },
                "eu_objective": {},
                "language": "English"
            },
            {
                "category_id": 69,
                "category_name": "Circular economy",
                "sub_category_id": 63,
                "sub_category_name": "Circular economy",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "impact_amount": 521,
                "unit_id": 25,
                "unit_name": "CO2e kg",
                "year": 2022,
                "sdg": {
                    "11": "Sustainable cities and communities",
                    "12": "Responsible consumption and production"
                },
                "eu_objective": {},
                "language": "English"
            }
        ],
        "impact_amount_sum": "N/A"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Information is not available for this asset and reporting year."
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

<table><thead><tr><th width="231">Parameter</th><th>Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>asset_identifier</td><td>string</td><td>yes</td><td>String identifier for an asset</td></tr><tr><td>position_amount</td><td>number</td><td>yes</td><td>Amount of money invested</td></tr><tr><td>position_currency_code</td><td>string</td><td>yes</td><td>Currency code of the investment, as per getCurrencies</td></tr><tr><td>position_days</td><td>number/integer</td><td>no</td><td>The term of the investment, default is 365 days</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>sub_category_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>super_indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>indicator_only</td><td>number/integer</td><td>no</td><td>Default is all</td></tr><tr><td>decimals</td><td>number/integer</td><td>no</td><td>Default is 0 decimals</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "calculatePositionImpactsOnly",
    "parameters": {
        "asset_identifier": "XS123456",
        "position_amount": 250000,
        "position_currency_code": "EUR",
        "position_days": 365,
        "reporting_year": 2023,
        "category_only": "",
        "sub_category_only": "",
        "super_indicator_only": "",
        "indicator_only": "",
        "decimals": 0;
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}
