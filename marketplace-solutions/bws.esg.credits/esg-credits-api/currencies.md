---
description: >-
  This section deals with currencies and foreign exchanges rates, either
  available for your use or that you need to add to your solution account
---

# Currencies

### [getCurrencies](currencies.md#getcurrencies)

## Returns all registered currencies

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to list currencies you have registered for your account.

#### Request Body

| Name                                        | Type   | Description     |
| ------------------------------------------- | ------ | --------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits |
| operation<mark style="color:red;">\*</mark> | string | getCurrencies   |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "id": 1,
        "currency_code": "EUR"
    },
    {
        "id": 2,
        "currency_code": "USD"
    },
    {
        "id": 3,
        "currency_code": "SEK"
    },
    {
        "id": 4,
        "currency_code": "DKK"
    },
    {
        "id": 5,
        "currency_code": "NOK"
    },
    {
        "id": 6,
        "currency_code": "GBP"
    },
    {
        "id": 7,
        "currency_code": "CAD"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "More details are needed to retrieve currencies."
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
    "operation": "getCurrencies"
    }
```
{% endtab %}
{% endtabs %}

### [getFXrates](currencies.md#getfxrates)

## Returns all registered foreign exchange rates

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1`

Use this operation to list foreign exchange rates you have registered for a particular reporting year.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | getFXrates                 |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Returns a list of FX rates (example)" %}
```json
[
    {
        "fx_conversion_id": 1,
        "year": 2022,
        "numerator_currency_code": "EUR",
        "denominator_currency_code": "DKK",
        "fx_rate": 7.4406
    },
    {
        "fx_conversion_id": 2,
        "year": 2022,
        "numerator_currency_code": "EUR",
        "denominator_currency_code": "EUR",
        "fx_rate": 1.0
    },
    {
        "fx_conversion_id": 3,
        "year": 2022,
        "numerator_currency_code": "DKK",
        "denominator_currency_code": "DKK",
        "fx_rate": 1.0
    },
    {
        "fx_conversion_id": 4,
        "year": 2022,
        "numerator_currency_code": "DKK",
        "denominator_currency_code": "EUR",
        "fx_rate": 0.13439776362121333
    },
    {
        "fx_conversion_id": 5,
        "year": 2022,
        "numerator_currency_code": "EUR",
        "denominator_currency_code": "NOK",
        "fx_rate": 10.1682
    },
    {
        "fx_conversion_id": 6,
        "year": 2022,
        "numerator_currency_code": "NOK",
        "denominator_currency_code": "NOK",
        "fx_rate": 1.0
    },
    {
        "fx_conversion_id": 7,
        "year": 2022,
        "numerator_currency_code": "NOK",
        "denominator_currency_code": "EUR",
        "fx_rate": 0.09834582325288645
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No FX rates registered for that reporting year."
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

<table><thead><tr><th width="192">Parameter</th><th width="175">Type</th><th width="105">Required</th><th>Description</th></tr></thead><tbody><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Calendar year that the FX rate is used for</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getFXrates",
    "parameters": {
         "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}

### [addCurrency](currencies.md#addcurrency)

## Adds a currency to your solution account

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add currencies that you foresee being applicable to your green asset universe, and for which you want to add foreign exchange rates.

#### Request Body

| Name                                         | Type   | Description                              |
| -------------------------------------------- | ------ | ---------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits                          |
| operation<mark style="color:red;">\*</mark>  | string | addCurrency                              |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check Operation parameters</p><p></p> |

#### Example responses

{% tabs %}
{% tab title="200 Successful operation" %}
```json
{
	"message": "Currency code was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
	"message": "Suggested currency code already exists."
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

<table><thead><tr><th width="176">Parameter</th><th width="185.33333333333331">Type/Format</th><th width="115">Required</th><th>Desciption</th></tr></thead><tbody><tr><td>currency_code</td><td>string/3 char.</td><td>yes</td><td>Standard currency code</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addCurrency",
    "parameters": {
         "currency_code": "EUR"
        }
    }
```
{% endtab %}
{% endtabs %}

### [addFXrate](currencies.md#addfxrate)

## Adds a foreign exchange rate between two currencies

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add foreign exchnage rate for currencies applicable to your green asset universe.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addFXrate                  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "FX rate was succesfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Currency code is not available."
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

<table><thead><tr><th width="265">Parameter</th><th width="168">Type/Format</th><th width="102">Required</th><th>Description</th></tr></thead><tbody><tr><td>currency_code_numerator</td><td>string/3 char.</td><td>yes</td><td>Standard currency code</td></tr><tr><td>currency_code_denominator</td><td>string/3 char.</td><td>yes</td><td>Standard currency code</td></tr><tr><td>currency_code_quota</td><td>number/decimal</td><td>yes</td><td>numerator / denominator</td></tr><tr><td>reporting_year</td><td>number/4 digits</td><td>yes</td><td>Calendar year that the FX rate will be used for</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addFXrate",
    "parameters": {
         "currency_code_numerator": "EUR",
         "currency_code_denominator": "SEK",
         "currency_code_quota": 10.145,
         "reporting_year": 2023
         }
    }
```
{% endtab %}
{% endtabs %}

### [removeCurrency](currencies.md#removecurrency)

## Removes a currency

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove a currency from your records

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeCurrency             |
| parameters<mark style="color:red;">\*</mark> | string | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Currency was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Currency was not removed. FX rate still exist."
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

| Parameter      | Type/Format | Required | Description |
| -------------- | ----------- | -------- | ----------- |
| currency\_code | string      | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeCurrency",
    "parameters": {
        "currency_code": EUR
        }
    }
```
{% endtab %}
{% endtabs %}

### [removeFXrate](currencies.md#removefxrate)

## Removes an FX rate

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove an FX rate between two currencies

#### Request Body

<table><thead><tr><th>Name</th><th width="164">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeFXrate</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "FX rate was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such currency combination."
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
| currency\_code\_1 | string          | yes      |             |
| currency\_code\_2 | string          | yes      |             |
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
    "operation": "removeFXrate",
    "parameters": {
        "currency_code_1": EUR,
        "currency_code_2": SEK,
        "reporting_year": 2023
        }
    }
```
{% endtab %}
{% endtabs %}
