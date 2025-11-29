---
description: >-
  This section has operations to manage end users, groups, and user's investor
  access
---

# Users

### [getUsers](users.md#getusers)

## Returns all registered users

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve the registered end users of your account.

#### Request body

<table><thead><tr><th>Name</th><th width="155">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>getUsers</td></tr><tr><td>parameters</td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "user_id": 25,
        "user_identifier": "iuwd7q8dbtqd",
        "user_first_name": "John",
        "user_last_name": "Smith",
        "user_role": "user",
        "user_email": "john.smith@xyz.com",
        "user_groups": [
            {
                "group_id": 1,
                "group": "bankers"
            },
            {
                "group_id": 2,
                "group": "investors"
            }
        ]
    },
    {
        "user_id": 26,
        "user_identifier": "76387bdt6qt",
        "user_first_name": "Mary",
        "user_last_name": "Smith",
        "user_role": "user",
        "user_email": "mary.smith@xyz.com",
        "user_groups": [
            {
                "group_id": 1,
                "group": "bankers"
            }
        ]
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No users are registered."
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

| Parameter        | Type/Format | Required | Description |
| ---------------- | ----------- | -------- | ----------- |
| user\_identifier | string      | no       |             |
| decryption\_key  | string      | no       |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getUsers",
    "parameters": {
        "user_identifier": "9c809eb86ee6",
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y="
        }
    }
```
{% endtab %}
{% endtabs %}

### [addUser](users.md#adduser)

## Creates and updates the information of a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to create users stored in ESG.Credits. Is also used to alter already existing user data.

#### Request body

<table><thead><tr><th>Name</th><th width="144">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>addUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "User successfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "User identifier is missing."
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

| Parameter         | Type/Format | Required | Description   |
| ----------------- | ----------- | -------- | ------------- |
| user\_identifier  | string      | yes      |               |
| user\_first\_name | string      | no       |               |
| user\_last\_name  | string      | no       |               |
| user\_email       | string      | no       |               |
| user\_role        | string      | no       | user or admin |
| encryption\_key   | string      | no       |               |

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addUser",
    "parameters": {
        "user_identifier": "9c809eb86ee6",
        "user_first_name": "John",
        "user_last_name": "Smith",
        "user_email": "john.smith@xyz.com",
        "user_role": "user",
        "encryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y="
        }
    }
```
{% endtab %}
{% endtabs %}

### [removeUser](users.md#removeuser)

## Removes a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove users from the ESG.Credits data repository.

#### Request body

<table><thead><tr><th>Name</th><th width="157">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "User was successfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such user."
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

| Parameter        | Type/Format | Required | Description |
| ---------------- | ----------- | -------- | ----------- |
| user\_identifier | string      | yes      |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeUser",
    "parameters": {
        "user_identifier": "9c809eb86ee6"
        }
    }
```
{% endtab %}
{% endtabs %}

### [getGroups](users.md#getgroups)

## Returns all groups

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to list available groups for when you are to connect users to groups to control access to certain functionality in your solution.

#### Request body

<table><thead><tr><th>Name</th><th width="163">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>getGroups</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
[
    {
        "id": 1,
        "group": "bankers"
    },
    {
        "id": 2,
        "group": "investors"
    },
    {
        "id": 3,
        "group": "capitalists"
    },
    {
        "id": 4,
        "group": "issuers"
    },
    {
        "id": 5,
        "group": "agents"
    },
    {
        "id": 6,
        "group": "exchanges"
    },
    {
        "id": 7,
        "group": "regulators"
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Please submit client identifier."
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
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getGroups",
    }
```
{% endtab %}
{% endtabs %}

### [addGroupToUser](users.md#addgrouptouser)

## Adds a group to a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to connect users to groups to control access to certain functionality in your solution.

#### Request body

<table><thead><tr><th>Name</th><th width="149">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>addGroupToUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Group was succesfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Group is already connected to user."
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

| Parameter        | Type/Format | Required | Description                          |
| ---------------- | ----------- | -------- | ------------------------------------ |
| user\_identifier | string      | yes      |                                      |
| group            | string      | yes      | Group that the user should belong to |

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addGroupToUser",
    "parameters": {
        "user_identifier": "9c809eb86ee6",
        "group": "bankers"
        }
    }
```
{% endtab %}
{% endtabs %}

### [removeGroupFromUser](users.md#removegroupfromuser)

## Removes a group from a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove connections between groups and users.

#### Request body

<table><thead><tr><th>Name</th><th width="155">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeGroupFromUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Group was succesfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such user."
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

<table><thead><tr><th width="175">Parameter</th><th width="150">Type/Format</th><th width="110">Required</th><th>Description</th></tr></thead><tbody><tr><td>user_identifier</td><td>string</td><td>yes</td><td></td></tr><tr><td>group</td><td>string</td><td>yes</td><td>Group that the user no longer should belong to</td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeGroupFromUser",
    "parameters": {
        "user_identifier": "9c809eb86ee6",
        "group": "bankers"
        }
    }
```
{% endtab %}
{% endtabs %}

### [getInvestorsOfUser](users.md#getinvestorsofuser)

## Returns all investors that a user has access to

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to retrieve which investors' information a certain user has the right to access.

#### Request body

<table><thead><tr><th>Name</th><th width="174">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>getInvestorsOfUser</td></tr><tr><td>parameters</td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation (example)" %}
```json
[
    {
        "user_id": 25,
        "user_identifier": "john.smith@xzy.com",
        "investors": [
            {
                "investor_id": 19,
                "investor_identifier": "3a65rvgwv856",
                "investor_name": "Ben Watson"
            },
            {
                "investor_id": 19,
                "investor_identifier": "3b6f3waf09886",
                "investor_name": "Bill Jones"
            }
        ]
    },
    {
        "user_id": 26,
        "user_identifier": "mary.smith@xzy.com",
        "investors": [
            {
                "investor_id": 19,
                "investor_identifier": "3b6f3waf09886",
                "investor_name": "Bill Jones"
            }
        ]
    }
]
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No users are registered."
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

| Parameter        | Type/Format | Required | Description |
| ---------------- | ----------- | -------- | ----------- |
| user\_identifier | string      | no       |             |
| decryption\_key  | string      | no       |             |

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "getInvestorsOfUser",
    "parameters": {
        "user_identifier": "9c809eb86ee6",
        "decryption_key": "64dh_WtAnyMK-f3dtb5-ESweLX80P__a3FjXsgg3Y="
        }
    }
```
{% endtab %}
{% endtabs %}

### [addInvestorToUser](users.md#addinvestortouser)

## Adds an investor to a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to connect investors to users in order to control users´ access to investor specific information.

#### Request body

<table><thead><tr><th>Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>addInvestorToUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Investor was succesfully added."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "Investor is already connected to user."
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

<table><thead><tr><th width="202">Parameter</th><th width="138">Type/Format</th><th width="122">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>Investor the user should have access to</td></tr><tr><td>user_identifier</td><td>string</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "addInvestorToUser",
    "parameters": {
        "investor_identifier": "650126-1234",
        "user_identifier": "9c809eb86ee6"
        }
    }
```
{% endtab %}
{% endtabs %}

### [removeInvestorFromUser](users.md#removeinvestorfromuser)

## Removes an investor from a user

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

Use this operation to remove connections between investors and users.

#### Request body

<table><thead><tr><th>Name</th><th width="161">Type</th><th>Description</th></tr></thead><tbody><tr><td>solution<mark style="color:red;">*</mark></td><td>string</td><td>BWS.ESG.Credits</td></tr><tr><td>operation<mark style="color:red;">*</mark></td><td>string</td><td>removeInvestorFromUser</td></tr><tr><td>parameters<mark style="color:red;">*</mark></td><td>JSON</td><td>check Operation parameters</td></tr></tbody></table>

#### Example responses

{% tabs %}
{% tab title="200: OK Successful operation" %}
```json
{
    "message": "Investor was succesfully removed."
}
```
{% endtab %}

{% tab title="400: Bad Request Error message (example)" %}
```json
{
    "message": "No such investor."
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

<table><thead><tr><th width="203">Parameter</th><th width="153">Type/Format</th><th width="117">Required</th><th>Description</th></tr></thead><tbody><tr><td>investor_identifier</td><td>string</td><td>yes</td><td>Investor the user should no longer have acces to</td></tr><tr><td>user_identifier</td><td>string</td><td>yes</td><td></td></tr></tbody></table>

#### Example code

{% tabs %}
{% tab title="curl" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: API-KEY' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.ESG.Credits",
    "operation": "removeInvestorFromUser",
    "parameters": {
        "investor_identifier": "650126-1234",
        "user_identifier": "9c809eb86ee6"
        }
    }
```
{% endtab %}
{% endtabs %}
