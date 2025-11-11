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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "project_id": 1,
        "project_identifier": "NWP123",
        "project_name": "Norrbotten wind park",
        "project_allocated_amount": 11540605381,
        "project_currency_code": "SEK",
        "framework_identifier": "project-greenbond",
        "framework_name": "Project Green Bond Framework",
        "project_visibility": "private"
    },
    {
        "project_id": 2,
        "project_identifier": "SSF123",
        "project_name": "Skåne solar farm",
        "project_allocated_amount": 1634937960,
        "project_currency_code": "SEK",
        "framework_identifier": "project-greenbond",
        "framework_name": "Project Green Bond Framework",
        "project_visibility": "private"
    },
    {
        "project_id": 3,
        "project_identifier": "DWP123",
        "project_name": "Dalarna wind park",
        "project_allocated_amount": 12540605381,
        "project_currency_code": "SEK",
        "framework_identifier": "project-greenbond",
        "framework_name": "Project Green Bond Framework",
        "project_visibility": "public"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such project is registered."
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

<table><thead><tr><th width="214">Parameter</th><th width="182">Type/Format</th><th width="107">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>project_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getProjects",
    "parameters": {
        "reporting_year": 2023,
        "project_visibility": "public"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "project_id": 1,
        "project_identifier": "NWP123",
        "project_name": "Norrbotten wind park",
        "project_allocated_amount": 11540605381,
        "project_currency_code": "SEK",
        "framework_identifier": "project-greenbond",
        "framework_name": "Project Green Bond Framework",
        "project_visibility": "private",
        "project": [
            {
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "sub_category_volume": 11540605381,
                "project_currency_code": "SEK",
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
                "category_id": 63,
                "category_name": "Renewable energy",
                "sub_category_id": 55,
                "sub_category_name": "Wind power",
                "sub_category_volume": 11540605381,
                "project_currency_code": "SEK",
                "super_indicator_id": 29,
                "super_indicator_name": "Effect",
                "indicator_id": 35,
                "indicator_name": "Effect",
                "indicator_value": 1054000.0,
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
                "sub_category_volume": 11540605381,
                "project_currency_code": "SEK",
                "super_indicator_id": 30,
                "super_indicator_name": "Annual electricity/energy production",
                "indicator_id": 36,
                "indicator_name": "Annual electricity/energy production",
                "indicator_value": 2854000.0,
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
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such project is registered."
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

<table><thead><tr><th width="187">Parameter</th><th width="162">Type/Format</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getProjectDetails",
    "parameters": {
        "project_identifier": "NWP123"
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Project was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Details are missing to add project."
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

<table><thead><tr><th width="216">Parameter</th><th width="131">Type/Format</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>project_name</td><td>string</td><td>yes</td><td>Project name</td></tr><tr><td>project_currency_code</td><td>string</td><td>yes</td><td>Currency code of the project, as per getCurrencies</td></tr><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for the framework to be built</td></tr><tr><td>project_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addProject",
    "parameters": {
        "project_identifier": "NWP123",
        "project_name": "Norrbotten wind park",
        "project_currency_code": "SEK",
        "framework_identifier": "project-greenbond",
        "project_visibility": "private"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Year specific data for the project was succesfully changed."
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

<table><thead><tr><th width="191">Parameter</th><th width="160">Type/Format</th><th width="101">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>allocated_amount</td><td>number/integer</td><td>yes</td><td>Amount of funding allocated to the project for the reporting year of the framework, for the corresponding impacts registered</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addYearSpecificsToProject",
    "parameters": {
        "project_identifier": "NWP123",
        "allocated_amount": 11540605381,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
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

<table><thead><tr><th width="209">Parameter</th><th width="157">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>project_identifier</td><td>string</td><td>yes</td><td>String identifier for a project</td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a sub category</td></tr><tr><td>sub_category_volume</td><td>number</td><td>yes</td><td>Amount of funding / use of proceeds</td></tr><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>indicator_value</td><td>number</td><td>yes</td><td>ESG benefit value, in the unit specified by the taxonomy</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addCategoryIndicatorToProject",
    "parameters": {
	"project_identifier": "NWP123",
	"sub_category_id": 56,
	"sub_category_volume": 1634937960,
	"indicator_id": 34,
	"indicator_value": 137922000,
	"reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Category volumes / indicator values were successfully added to the framework."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "The referenced framework does not exist."
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

<table><thead><tr><th width="203">Parameter</th><th width="166">Type/Format</th><th width="99">Required</th><th>Description</th></tr></thead><tbody><tr><td>framework_identifier</td><td>string</td><td>yes</td><td>String identifier for a framework to be built from consolidation of associated projects</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "buildFrameworkFromProjects",
    "parameters": {
        "framework_identifier": "project-greenbond",
	"reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### removeIndicatorFramProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th>Name</th><th width="157">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeIndicatorFromProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

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

| Parameter           | Type/Format     | Required | Description |
| ------------------- | --------------- | -------- | ----------- |
| project\_identifier | string          | yes      |             |
| indicator\_id       | number/integer  | yes      |             |
| sub\_category\_id   | number/integer  | yes      |             |
| reporting\_year     | number/4 digits | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeIndicatorFromProject",
    "parameters": {
        "project_identifier": "SSF123",
        "indicator_id": 37,
        "sub_category_id": 37,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### removeCategoryFromProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th>Name</th><th width="148">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeCategoryFromProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

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

| Parameter           | Type/Format     | Required | Description |
| ------------------- | --------------- | -------- | ----------- |
| project\_identifier | string          | yes      |             |
| sub\_category\_id   | number/integer  | yes      |             |
| reporting\_year     | number/4 digits | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeCategoryFromProject",
    "parameters": {
        "project_identifier": "SSF123",
        "sub_category_id": 56
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### removeYearSpecificsFromProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th width="250">Name</th><th width="135">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeYearSpecificsFromProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

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

| Parameter          | Type/Format     | Required | Description |
| ------------------ | --------------- | -------- | ----------- |
| project\_identifer | string          | yes      |             |
| reporting\_year    | number/4 digits | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeYearSpecificsFromProject",
    "parameters": {
        "project_identifier": "SSF123",
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### removeProject

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th>Name</th><th width="191">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeProject</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

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

| Parameter           | Type/Format | Required | Description |
| ------------------- | ----------- | -------- | ----------- |
| project\_identifier | string      | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeProject",
    "parameters": {
        "project_identifier": "SSF123"
        }
    }
```
{% endtab %}
{% endtabs %}
