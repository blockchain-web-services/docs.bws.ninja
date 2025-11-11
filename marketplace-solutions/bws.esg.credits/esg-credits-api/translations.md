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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "id": 1,
        "language_code": "en",
        "language": "English"
    },
    {
        "id": 2,
        "language_code": "sv",
        "language": "Svenska"
    },
    {
        "id": 3,
        "language_code": "dk",
        "language": "Dansk"
    },
    {
        "id": 4,
        "language_code": "nb",
        "language": "Norska"
    },
    {
        "id": 5,
        "language_code": "fi",
        "language": "Suomalainen"
    },
    {
        "id": 6,
        "language_code": "de",
        "language": "Deutsch"
    },
    {
        "id": 7,
        "language_code": "pl",
        "language": "Polskie"
    },
    {
        "id": 8,
        "language_code": "fr",
        "language": "Français"
    },
    {
        "id": 9,
        "language_code": "nl",
        "language": "Nederlands"
    },
    {
        "id": 10,
        "language_code": "es",
        "language": "Español"
    },
    {
        "id": 11,
        "language_code": "pt",
        "language": "Portoguêse"
    },
    {
        "id": 12,
        "language_code": "it",
        "language": "Italiano"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "More details are needed to retrieve languages."
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
    "operation": "getLanguages"
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Category translation was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such category for that reporting year."
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

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addCategoryTranslation",
    "parameters": {
        "category_id": 6,
        "reporting_year": 2023,
        "language_code": "sv",
        "translation": "Hållbar förvaltning av naturresurser"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Sub category translation was successfully changed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No sub category translation possible to register for that language code."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="124">Required</th><th>Description</th></tr></thead><tbody><tr><td>sub_category_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a sub category</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addSubCategoryTranslation",
    "parameters": {
        "sub_category_id": 10,
        "reporting_year": 2023,
        "language_code": "sv",
        "translation": "Hållbart vattenbruk"
        }
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Super indicator translation was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No super indicator translation possible to register for that reporting year."
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

<table><thead><tr><th width="196">Parameter</th><th>Type/Format</th><th width="122">Required</th><th>Description</th></tr></thead><tbody><tr><td>super_indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of a super indicator</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addSuperIndicatorTranslation",
    "parameters": {
        "super_indicator_id": 4,
        "reporting_year": 2022,
        "language_code": "sv",
        "translation": "Årligt uttag eller behandling av vatten"
	}
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Indicator translation was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No indicator translation possible to register for that language code."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="131">Required</th><th>Description</th></tr></thead><tbody><tr><td>indicator_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addIndicatorTranslation",
    "parameters": {
        "indicator_id": 4,
        "reporting_year": 2022,
        "language_code": "sv",
        "translation": "Årligt uttag eller behandling av vatten"
	}
    }
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
{
    "message": "Unit translation was successfully changed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such unit for that reporting year."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="119">Required</th><th>Description</th></tr></thead><tbody><tr><td>unit_id</td><td>number/integer</td><td>yes</td><td>Integer identifier of an indicator</td></tr><tr><td>reporting_year</td><td>number, 4 digits</td><td>yes</td><td>Year of the taxonomy</td></tr><tr><td>language_code</td><td>string</td><td>yes</td><td>Language codes as per getLanguages</td></tr><tr><td>translation</td><td>string</td><td>yes</td><td>The translated phrase</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addUnitTranslation",
    "parameters": {
        "unit_id": 4,
        "reporting_year": 2022,
        "language_code": "sv",
        "translation": "m3"
        }
    }
```
{% endtab %}
{% endtabs %}
