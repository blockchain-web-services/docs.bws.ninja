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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "sdg_id": 1,
        "goal_no": "1",
        "sdg": "No poverty",
        "language": "English"
    },
    {
        "sdg_id": 2,
        "goal_no": "2",
        "sdg": "Zero hunger",
        "language": "English"
    },
    {
        "sdg_id": 3,
        "goal_no": "3",
        "sdg": "Good health and well-being",
        "language": "English"
    },
    {
        "sdg_id": 4,
        "goal_no": "4",
        "sdg": "Quality education",
        "language": "English"
    },
    {
        "sdg_id": 5,
        "goal_no": "5",
        "sdg": "Gender equality",
        "language": "English"
    },
    {
        "sdg_id": 6,
        "goal_no": "6",
        "sdg": "Clean water and sanitation",
        "language": "English"
    },
    {
        "sdg_id": 7,
        "goal_no": "7",
        "sdg": "Affordable and clean energy",
        "language": "English"
    },
    {
        "sdg_id": 8,
        "goal_no": "8",
        "sdg": "Decent work and economic growth",
        "language": "English"
    },
    {
        "sdg_id": 9,
        "goal_no": "9",
        "sdg": "Industry, innovation and infrastructure",
        "language": "English"
    },
    {
        "sdg_id": 10,
        "goal_no": "10",
        "sdg": "Reduced inequality",
        "language": "English"
    },
    {
        "sdg_id": 11,
        "goal_no": "11",
        "sdg": "Sustainable cities and communities",
        "language": "English"
    },
    {
        "sdg_id": 12,
        "goal_no": "12",
        "sdg": "Responsible consumption and production",
        "language": "English"
    },
    {
        "sdg_id": 13,
        "goal_no": "13",
        "sdg": "Climate action",
        "language": "English"
    },
    {
        "sdg_id": 14,
        "goal_no": "14",
        "sdg": "Life below water",
        "language": "English"
    },
    {
        "sdg_id": 15,
        "goal_no": "15",
        "sdg": "Life on land",
        "language": "English"
    },
    {
        "sdg_id": 16,
        "goal_no": "16",
        "sdg": "Peace and strong justice institutions",
        "language": "English"
    },
    {
        "sdg_id": 17,
        "goal_no": "17",
        "sdg": "Partnerships to achieve the goal",
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "More details are needed to retrieve SDGs."
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

<table><thead><tr><th width="162">Parameter</th><th width="136">Type/Format</th><th width="98">Required</th><th>Description</th></tr></thead><tbody><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getSDGs",
     "parameters": {
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "eu_objectiv_id": 1,
        "objective_no": "1",
        "objective": "Climate change mitigation",
        "language": "English"
    },
    {
        "eu_objectiv_id": 2,
        "objective_no": "2",
        "objective": "Climate change adaptation",
        "language": "English"
    },
    {
        "eu_objectiv_id": 3,
        "objective_no": "3",
        "objective": "Sustainable use and protection of water and marine resources",
        "language": "English"
    },
    {
        "eu_objectiv_id": 4,
        "objective_no": "4",
        "objective": "Transition to a circular economy",
        "language": "English"
    },
    {
        "eu_objectiv_id": 5,
        "objective_no": "5",
        "objective": "Pollution prevention and control",
        "language": "English"
    },
    {
        "eu_objectiv_id": 6,
        "objective_no": "6",
        "objective": "Protection and restoration of biodiversity and ecosystems",
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "More details are needed to retrieve EU Objectives."
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

<table><thead><tr><th width="162">Parameter</th><th width="135">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

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
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "category_id": 63,
        "category_name": "Renewable energy",
        "language": "English"
    },
    {
        "category_id": 64,
        "category_name": "Green buildings",
        "language": "English"
    },
    {
        "category_id": 65,
        "category_name": "Sustainable forestry",
        "language": "English"
    },
    {
        "category_id": 66,
        "category_name": "Clean transportation",
        "language": "English"
    },
    {
        "category_id": 67,
        "category_name": "Energy efficiency",
        "language": "English"
    },
    {
        "category_id": 68,
        "category_name": "Pollution prevention and control",
        "language": "English"
    },
    {
        "category_id": 69,
        "category_name": "Circular economy",
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such categories registered."
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

<table><thead><tr><th>Parameter</th><th width="182">Type/Format</th><th width="108">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getCategories",
    "parameters": {
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "sub_category_id": 55,
        "sub_category_name": "Wind power",
        "category_id": 63,
        "category_name": "Renewable energy",
        "sdg": {
            "7": "Affordable and clean energy",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "sub_category_id": 56,
        "sub_category_name": "Hydro- and solar power, biogas",
        "category_id": 63,
        "category_name": "Renewable energy",
        "sdg": {
            "7": "Affordable and clean energy",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "sub_category_id": 57,
        "sub_category_name": "Green buildings",
        "category_id": 64,
        "category_name": "Green buildings",
        "sdg": {
            "7": "Affordable and clean energy",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "sub_category_id": 58,
        "sub_category_name": "Sustainable forestry",
        "category_id": 65,
        "category_name": "Sustainable forestry",
        "sdg": {
            "13": "Climate action",
            "15": "Life on land"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "sub_category_id": 59,
        "sub_category_name": "Biogas/electrical buses and electrical cars",
        "category_id": 66,
        "category_name": "Clean transportation",
        "sdg": {
            "11": "Sustainable cities and communities",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "sub_category_id": 60,
        "sub_category_name": "Electric trains",
        "category_id": 66,
        "category_name": "Clean transportation",
        "sdg": {
            "11": "Sustainable cities and communities",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such sub categories registered."
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

<table><thead><tr><th>Parameter</th><th width="175">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getSubCategories",
    "parameters": {
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "category_id": 63,
        "category_name": "Renewable energy",
        "language": "English"
    },
    {
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "category_id": 64,
        "category_name": "Green buildings",
        "language": "English"
    },
    {
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "category_id": 67,
        "category_name": "Energy efficiency",
        "language": "English"
    },
    {
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "category_id": 69,
        "category_name": "Circular economy",
        "language": "English"
    },
    {
        "super_indicator_id": 29,
        "super_indicator_name": "Effect",
        "category_id": 63,
        "category_name": "Renewable energy",
        "language": "English"
    },
    {
        "super_indicator_id": 29,
        "super_indicator_name": "Effect",
        "category_id": 67,
        "category_name": "Energy efficiency",
        "language": "English"
    },
    {
        "super_indicator_id": 31,
        "super_indicator_name": "Annual energy savings",
        "category_id": 64,
        "category_name": "Green buildings",
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such super indicators registered."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="125">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getSuperIndicators",
    "parameters": {
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "indicator_id": 34,
        "indicator_name": "Annual emission reduction",
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "language": "English"
    },
    {
        "indicator_id": 35,
        "indicator_name": "Effect",
        "super_indicator_id": 29,
        "super_indicator_name": "Effect",
        "language": "English"
    },
    {
        "indicator_id": 36,
        "indicator_name": "Annual electricity/energy production",
        "super_indicator_id": 30,
        "super_indicator_name": "Annual electricity/energy production",
        "language": "English"
    },
    {
        "indicator_id": 37,
        "indicator_name": "Annual energy savings",
        "super_indicator_id": 31,
        "super_indicator_name": "Annual energy savings",
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such indicators registered."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="121">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getIndicators",
    "parameters": {
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "unit_id": 25,
        "unit_name": "CO2e kg",
        "language": "English"
    },
    {
        "unit_id": 26,
        "unit_name": "kW",
        "language": "English"
    },
    {
        "unit_id": 27,
        "unit_name": "MWh",
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such units registered."
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

<table><thead><tr><th>Parameter</th><th width="179">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>no</td><td>Language codes as per getLanguages. Default is the original language.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getUnits",
    "parameters": {
        "reporting_year": 2023,
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Category was successfully added (id). 67"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Suggested category name to change was not found."
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

<table><thead><tr><th width="255">Parameter</th><th width="166">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>category_name</td><td>string</td><td>yes</td><td>Category name to add or change</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>category_name_changed</td><td>string</td><td>no</td><td>New category name</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addCategory",
    "parameters": {
        "category_name": "Circular economy",
        "reporting_year": 2023,
        "category_name_changed": "",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Sub category name was successfully changed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Suggested sub category name is already in use."
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

<table><thead><tr><th>Parameter</th><th width="163">Type/Format</th><th width="106">Required</th><th>Description</th></tr></thead><tbody><tr><td>sub_category_name</td><td>string</td><td>yes</td><td>Sub category name to add or change</td></tr><tr><td>category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a category</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>sub_category_name_changed</td><td>string</td><td>no</td><td>New sub category name</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addSubCategory",
    "parameters": {
        "sub_category_name": "Circular economy",
        "category_id": 69,
        "reporting_year": 2023,
        "sub_category_name_changed": "",
        "category_id_changed": "",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "SDG was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "That SDG is already assigned to this sub category."
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

<table><thead><tr><th>Parameter</th><th width="184">Type/Format</th><th width="99">Required</th><th>Description</th></tr></thead><tbody><tr><td>sub_category_id</td><td>number, integer</td><td>yes</td><td>Integer identifier for a sub category</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>sdg_id</td><td>number/integer</td><td>no</td><td>Integer identifier for an SDG</td></tr><tr><td>eu_objective_id</td><td>number/integer</td><td>no</td><td>Integer identifier for an EU Environmental Objective</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addGoalObjectiveToSubCategory",
    "parameters": {
        "sub_category_id": 63,
        "reporting_year": 2023,
        "sdg_id": 12,
        "eu_objective_id": ""
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Unit was successfully added (id). 45"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No unit possible to register for that language code."
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

<table><thead><tr><th>Parameter</th><th width="174">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>unit_name</td><td>string</td><td>yes</td><td>Unit name to add or change</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>unit_name_changed</td><td>string</td><td>no</td><td>New unit name</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
<pre class="language-powershell"><code class="lang-powershell">curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addUnit",
    "parameters": {
        "unit_name": "MWh",
        "reporting_year": 2023,
        "unit_name_changed": "",
        "language_code": "en"
        }
<strong>    }
</strong></code></pre>
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Super indicator name was successfully changed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such super indicator for that reporting year."
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

<table><thead><tr><th width="233">Parameter</th><th width="153">Type/Format</th><th width="120">Required</th><th>Description</th></tr></thead><tbody><tr><td>super_indicator_name</td><td>string</td><td>yes</td><td>Super indicator name to add or change</td></tr><tr><td>category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a category</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>super_indicator_name_changed</td><td>string</td><td>no</td><td>New super indicator name</td></tr><tr><td>category_id_changed</td><td>number/integer</td><td>no</td><td>New category id</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addSuperIndicator",
    "parameters": {
        "super_indicator_name": "Annual energy savings",
        "category_id": 64,
        "reporting_year": 2023,
        "super_indicator_name_changed": "",
        "category_id_changed": "",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Indicator was sucessfully added (id). 23"
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Suggested indicator name is already in use."
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

<table><thead><tr><th width="263">Parameter</th><th width="156">Type/Format</th><th width="104">Required</th><th>Description</th></tr></thead><tbody><tr><td>indicator_name</td><td>string</td><td>yes</td><td>Indicator name to add or change</td></tr><tr><td>super_indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a super indicator</td></tr><tr><td>unit_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a unit</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>indicator_name_changed</td><td>string</td><td>no</td><td>New indicator name</td></tr><tr><td>super_indicator_id_changed</td><td>number/integer</td><td>no</td><td>New super indicator id</td></tr><tr><td>unit_id_changed</td><td>number/integer</td><td>no</td><td>New unit id</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Selection of original language code as per getLanguages</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addIndicator",
    "parameters": {
        "indicator_name": "Annual energy savings",
        "super_indicator_id": 31,
        "unit_id": 27,
        "reporting_year": 2023,
        "indicator_name_changed": "",
        "super_indicator_id_changed": "",
        "unit_id_changed": "",
        "language_code": "en"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "category_id": 63,
        "category_name": "Renewable energy",
        "sub_category_id": 55,
        "sub_category_name": "Wind power",
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "indicator_id": 34,
        "indicator_name": "Annual emission reduction",
        "unit_id": 25,
        "unit_name": "CO2e kg",
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
        "sub_category_id": 56,
        "sub_category_name": "Hydro- and solar power, biogas",
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "indicator_id": 34,
        "indicator_name": "Annual emission reduction",
        "unit_id": 25,
        "unit_name": "CO2e kg",
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
        "sub_category_id": 56,
        "sub_category_name": "Hydro- and solar power, biogas",
        "super_indicator_id": 29,
        "super_indicator_name": "Effect",
        "indicator_id": 35,
        "indicator_name": "Effect",
        "unit_id": 26,
        "unit_name": "kW",
        "sdg": {
            "7": "Affordable and clean energy",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "category_id": 64,
        "category_name": "Green buildings",
        "sub_category_id": 57,
        "sub_category_name": "Green buildings",
        "super_indicator_id": 31,
        "super_indicator_name": "Annual energy savings",
        "indicator_id": 37,
        "indicator_name": "Annual energy savings",
        "unit_id": 27,
        "unit_name": "MWh",
        "sdg": {
            "7": "Affordable and clean energy",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "category_id": 65,
        "category_name": "Sustainable forestry",
        "sub_category_id": 58,
        "sub_category_name": "Sustainable forestry",
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "indicator_id": 34,
        "indicator_name": "Annual emission reduction",
        "unit_id": 25,
        "unit_name": "CO2e kg",
        "sdg": {
            "13": "Climate action",
            "15": "Life on land"
        },
        "eu_objective": {},
        "language": "English"
    },
    {
        "category_id": 66,
        "category_name": "Clean transportation",
        "sub_category_id": 59,
        "sub_category_name": "Biogas/electrical buses and electrical cars",
        "super_indicator_id": 28,
        "super_indicator_name": "Annual emission reduction",
        "indicator_id": 34,
        "indicator_name": "Annual emission reduction",
        "unit_id": 25,
        "unit_name": "CO2e kg",
        "sdg": {
            "11": "Sustainable cities and communities",
            "13": "Climate action"
        },
        "eu_objective": {},
        "language": "English"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such taxonomy registered."
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

<table><thead><tr><th>Parameter</th><th width="172">Type/Format</th><th width="100">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/integer</td><td>yes</td><td>Year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getTaxonomy",
    "parameters": {
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Taxonomy was successfully copied."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (see example)" %}
```json
{
    "message": "Not copied, taxonomy already exists for target year."
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

<table><thead><tr><th>Parameter</th><th width="158">Type/Format</th><th width="113">Required</th><th>Description</th></tr></thead><tbody><tr><td>source_year</td><td>number/4 digits</td><td>yes</td><td>Source year of the taxonomy</td></tr><tr><td>target_year</td><td>number/4 digits</td><td>yes</td><td>Target year of the taxonomy</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "copyTaxonomyToNewYear",
    "parameters": {
        "source_year": 2022,
        "target_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Indicator was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Cannot remove indicator. Still used in a framework."
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

| Parameter       | Type/Format     | Required | Description |
| --------------- | --------------- | -------- | ----------- |
| indicator\_id   | number/integer  | yes      |             |
| reporting\_year | number/4 digits | yes      |             |
|                 |                 |          |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeIndicator",
    "parameters": {
        "indicator_id": 13,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Super indicator was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such super indicator."
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

<table><thead><tr><th width="190">Parameter</th><th>Type/Format</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>super_indicator_id</td><td>number/integer</td><td>yes</td><td></td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeSuperIndicator",
    "parameters": {
        "super_indicator_id": 56,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Unit was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Cannot remove unit. Still referred to by an indicator."
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

#### Operation parameters&#x20;

| Parameter       | Type/Format     | Required | Description |
| --------------- | --------------- | -------- | ----------- |
| unit\_id        | number/integer  | yes      |             |
| reporting\_year | number/4 digits | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeUnit",
    "parameters": {
        "unit_id": 14,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "The SDG was successfully removed from this sub category."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "That SDG does not exist for this sub category."
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

<table><thead><tr><th>Parameter</th><th width="172">Type/Format</th><th width="114">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for a sub category</td></tr><tr><td>sdg_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an SDG</td></tr><tr><td>eu_objective_id</td><td>number/integer</td><td>yes</td><td>Integer identifier for an EU Environmental Objective</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeGoalObjectiveFromSubCategory"
    "parameters": {
        "reporting_year": 2023
        "sub_category_id": 13
        "sdg_id": 4
        "eu_objective_id": 2
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Sub category was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Cannot remove sub category. Position needs to be removed first."
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

| Parameter         | Type/Format     | Required | Description |
| ----------------- | --------------- | -------- | ----------- |
| sub\_category\_id | number/integer  | yes      |             |
| reporting\_year   | number/4 digits | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeSubCategory",
    "parameters": {
        "sub_category_id": 35,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Category was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Cannot remove category. Still referred to by a sub category."
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

| Parameter       | Type/Format     | Required | Description |
| --------------- | --------------- | -------- | ----------- |
| category\_id    | number/integer  | yes      |             |
| reporting\_year | number/4 digits | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeCategory",
    "parameters": {
        "category_id": 57,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}
