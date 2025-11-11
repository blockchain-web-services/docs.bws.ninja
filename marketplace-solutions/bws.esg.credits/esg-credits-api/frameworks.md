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
        "framework_visibility": "private"
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

<table><thead><tr><th>Parameter</th><th width="160">Type/Format</th><th width="123">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>framework_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getFrameworks",
    "parameters": {
        "reporting_year": 2023,
        "framework_visibility": "private"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (sexample)" %}
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
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "sub_category_volume": 11540605381,
                "framework_currency_code": "SEK",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "indicator_value": 899034000.0,
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
                "category_id": 67,
                "category_name": "Energy efficiency",
                "sub_category_id": 61,
                "sub_category_name": "Energy efficiency",
                "sub_category_volume": 304535860,
                "framework_currency_code": "SEK",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "indicator_value": 79697000.0,
                "unit_id": 25,
                "unit_name": "CO2e kg",
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
                "sub_category_volume": 15578758,
                "framework_currency_code": "SEK",
                "super_indicator_id": 28,
                "super_indicator_name": "Annual emission reduction",
                "indicator_id": 34,
                "indicator_name": "Annual emission reduction",
                "indicator_value": 2386000.0,
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

<table><thead><tr><th width="208">Parameter</th><th width="166">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getFrameworkDetails",
    "parameters": {
        "framework_identifier": "greenbond",
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Framework was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Public assets exists. Framework cannot be made private."
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

<table><thead><tr><th width="256">Parameter</th><th width="147">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>framework_name</td><td>string</td><td>yes</td><td>Framework name</td></tr><tr><td>framework_currency_code</td><td>string</td><td>yes</td><td>Currency code of the framework, as per getCurrencies</td></tr><tr><td>framework_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addFramework",
    "parameters": {
        "framework_identifier": "greenbond",
        "framework_name": "Green Bond Framework",
        "framework_currency_code": "SEK",
        "framework_visibility": "private"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Year specific data for the framework has been succesfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "The reporting year does not exist."
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

<table><thead><tr><th width="277">Parameter</th><th width="133">Type/Format</th><th width="109">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>value_outstanding</td><td>number</td><td>yes</td><td>Amount of funding raised to green projects for the framework as a whole, for the reporting year</td></tr><tr><td>allocated_amount</td><td>number</td><td>yes</td><td>Amount of funding allocated to projects for the reporting year of the framework, for the corresponding impacts registered</td></tr><tr><td>value_outstanding_framework</td><td>string</td><td>yes</td><td>Choose "yes" when use of proceeds relate to value outstanding, choose "no" when related to allocated amount</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addYearSpecificsToFramework",
    "parameters": {
        "framework_identifier": "greenbond",
        "value_outstanding": 22224856800,
        "allocated_amount": 22224856800,
        "value_outstanding_framework": "yes",
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Category volume / indicator values were successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "The indicator does not belong to this category."
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

<table><thead><tr><th width="221">Parameter</th><th>Type/Format</th><th width="133">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework</td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a sub category</td></tr><tr><td>sub_category_volume</td><td>number</td><td>yes</td><td>Amount of funding / use of proceeds</td></tr><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>indicator_value</td><td>number</td><td>yes</td><td>ESG benefit value, in the unit specified by the taxonomy</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addCategoryIndicatorToFramework",
    "parameters": {
 	"framework_identifier": "greenbond",
	"sub_category_id": 56,
	"sub_category_volume": 1634937960,
	"indicator_id": 34,
	"indicator_value": 137922,
	"reporting_year": 2023
	}
    }
```
{% endtab %}
{% endtabs %}

### removeIndicatorFromFramework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                  |
| -------------------------------------------- | ------ | ---------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits              |
| operation<mark style="color:red;">\*</mark>  | string | removeIndicatorFromFramework |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters   |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Not authorized."
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

<table><thead><tr><th width="213">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeIndicatorFromFramework",
    "parameters": {
        "framework_identifier": "greenbond",
        "indicator_id": 34,
        "sub_category_id": 56
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### removeCategoryFromFramework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | check Operation parameters |
| parameters<mark style="color:red;">\*</mark> | string | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Not authorized."
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

<table><thead><tr><th width="209">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeCategoryFromFramework",
    "parameters": {
        "framework_identifier": "greenbond",
        "sub_category_id": 35,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### removeFrameworkYearSpecifics

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                  |
| -------------------------------------------- | ------ | ---------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits              |
| operation<mark style="color:red;">\*</mark>  | string | removeFrameworkYearSpecifics |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters   |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Not authorized."
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

<table><thead><tr><th width="213">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeFrameworkYearSpecifics",
    "parameters": {
        "framework_identifier": "greenbond",
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### removeFramework

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeFramework            |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Not authorized."
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

<table><thead><tr><th width="206">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeFramework",
    "parameters": {
        "framework_identifier": "greenbond"
        }
    }
```
{% endtab %}
{% endtabs %}
