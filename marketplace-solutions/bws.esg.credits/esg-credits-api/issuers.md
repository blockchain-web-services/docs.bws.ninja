---
description: >-
  This section deals with issuers of green assets, i.e. showing, adding, and
  removing issuers of green assets
---

# Issuers

### [getIssuers](issuers.md#getissuers)

## Returns private or public issuers

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve issuers of green assets.

#### Request Body

| Name                                        | Type   | Description                |
| ------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark> | string | getIssuers                 |
| parameters                                  | JSON   | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "issuer_id": 1,
        "issuer_identifier": "35f0c1a1c08",
        "issuer_name": "X Bank",
        "issuer_currency_code": "EUR",
        "issuer_visibility": "public"
    },
    {
        "issuer_id": 6,
        "issuer_identifier": "good-bank-issuer",
        "issuer_name": "Good Bank",
        "issuer_currency_code": "SEK",
        "issuer_visibility": "private"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such issuer is registered."
}
```
{% endtab %}

{% tab title="401: Unauthorized Error messagee" %}
```json
{
    "message": "Not authorized."
}
```
{% endtab %}
{% endtabs %}

#### Operation parameters&#x20;

<table><thead><tr><th>Parameter</th><th width="151">Type/Format</th><th width="120">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getIssuers",
    "parameters": {
        "issuer_visibility": "public"
        }
    }
```
{% endtab %}
{% endtabs %}

### [addIssuer](issuers.md#addissuer)

## Creates or updates information about an existing issuer

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to add issuers of green assets. This operation also alters already existing issuer information.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | addIssuer                  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Issuer was successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Invalid issuer visibility term used."
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

<table><thead><tr><th width="217">Parameter</th><th width="157">Type/Format</th><th width="127">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_identifier</td><td>string</td><td>yes</td><td>String identifier for an issuer</td></tr><tr><td>issuer_name</td><td>string</td><td>yes</td><td>Issuer name</td></tr><tr><td>issuer_currency_code</td><td>string</td><td>yes</td><td>Currency code of the asset, as per getCurrencies</td></tr><tr><td>issuer_visibility</td><td>string</td><td>no</td><td>Public or private. Default is private, meaning not visible across different BWS accounts.</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addIssuer",
    "parameters": {
        "issuer_identifier": "good_issuer",
        "issuer_name": "Good Bank",
        "issuer_currency_code": "EUR",
        "issuer_visibility": "private"
        }
    }
```
{% endtab %}
{% endtabs %}

### [removeIssuer](issuers.md#removeissuer)

## Removes an issuer

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove issuers of green assets from the ESG.Credits data repository.

#### Request Body

| Name                                         | Type   | Description                |
| -------------------------------------------- | ------ | -------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.ESG.Credits            |
| operation<mark style="color:red;">\*</mark>  | string | removeIssuer               |
| parameters<mark style="color:red;">\*</mark> | JSON   | check Operation parameters |

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "Issuer was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Issuer was not removed. Asset(s) exist."
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

<table><thead><tr><th>Parameter</th><th>Type/Format</th><th width="133">Required</th><th>Description</th></tr></thead><tbody><tr><td>issuer_identifier</td><td>string</td><td>yes</td><td>String identifier for an issuer</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```powershell
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeIssuer",
    "parameters": {
        "issuer_identifier": "good_issuer"
    }
```
{% endtab %}
{% endtabs %}
