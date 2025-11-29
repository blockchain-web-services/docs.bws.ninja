# Plays (Field-Calendar)

This relationship models the **temporal lifecycle of a Field** in the NFT Game Cube solution. A `Field` defines a sports ground's static, spatial configuration (like a 12×8 football pitch), while `Calendar` entries dynamically represent individual **matches**, **tournaments**, or **rounds** on that Field.

Examples:

* PSG Champions League 2026&#x20;
* New York Knicks 2026 NBA Season

{% hint style="info" %}
**Images**\
\
The images sent using base64 encoding are saved into IPFS using the BWS IPFS Solution. When getting object details, the IPFS URL is returned.
{% endhint %}

## new\_field-calendar

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_calendar**       |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_field-calendar Method Parameters

<table><thead><tr><th width="155">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>fieldId</td><td>string</td><td>Field Id.</td></tr><tr><td>calendarId</td><td>string </td><td>Calendar Id.</td></tr><tr><td>description</td><td>string </td><td>The field calendar name (e.g. PSG 2025-26)</td></tr><tr><td>image</td><td>string</td><td>An image base64 encoded.</td></tr></tbody></table>

### new\_field-calendar API Call Example

{% tabs %}
{% tab title="new_field-calendar API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_field-calendar",
  "parameters":  {
      "fieldId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
      "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
      "description": "PSG 2025-26",
      "image": "9j/4AAQSkZJRgABAQIAHA... " /* base64 encoded image string */
  }
}

/* call BWS API using Axios */
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.bws.ninja/v1/call',
  headers: { 
    'X-Api-Key': 'XqaLg...... A5k2V729v', /* use your API key here! */
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(request)
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

```
{% endtab %}
{% endtabs %}

#### new\_field-calendar Call Response

When the API call is successfully executed, it returns the `fieldId` and `calendarId` used to create the calendar and the related data, including the name and the image IPFS url.

```json
{
  "statusCode": 200,
  "info": {
        "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
        "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
        "data": {
            "name": "PSG 2025-26",
            "image": "https://ipfs.bws.ninja/ipfs/QmQnRDsQPvNJ9RgT9bagHmCLQVxCyZxatkPpj3Avb1hsM8"
        }
  }
}
```

## list\_field-calendars

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description               |
| ------------------------------------------- | ------ | ------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.NFT.GameCube          |
| operation<mark style="color:red;">\*</mark> | string | **list\_field-calendars** |
| parameters                                  | JSON   | check method parameters   |

#### list\_field-calendars Method Parameters (optional)

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>field_id</td><td>string</td><td>Field Id </td></tr></tbody></table>

### list\_field-calendars API Call Example

{% tabs %}
{% tab title="list_field-calendars API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "list_field-calendars",
  "parameters":  {
      "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2"  
  }
}

/* call BWS API using Axios */
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.bws.ninja/v1/call',
  headers: { 
    'X-Api-Key': 'XqaLg...... A5k2V729v', /* use your API key here! */
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(request)
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

```
{% endtab %}
{% endtabs %}

#### list\_field-calendars Call Response

When the API call is successfully executed, it returns the calendars list linked to the provided field.

```json
{
  "statusCode": 200,
  "info": {
    "calendars": [
            {
                "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
                "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
                "data": {
                    "name": "PSG 2025-26",
                    "image": "https://ipfs.bws.ninja/ipfs/QmQnRDsQPvNJ9RgT9bagHmCLQVxCyZxatkPpj3Avb1hsM8"
                }
            }
        ]
  }
}
```

## delete\_field-calendar

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_calendar**    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### delete\_field-calendar Method Parameters

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>fieldId</td><td>string </td><td>The Filed Id we used to create the relationship we want to delete.</td></tr><tr><td>calendarId</td><td>string</td><td>The Calendar Id we used to create the relatinship to delete.</td></tr></tbody></table>

### delete\_field-calendar API Call Example

{% tabs %}
{% tab title="delete_field-calendar API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "delete_calendar",
  "parameters":  {
     "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
     "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354"  
  }
}

/* call BWS API using Axios */
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.bws.ninja/v1/call',
  headers: { 
    'X-Api-Key': 'XqaLg...... A5k2V729v', /* use your API key here! */
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(request)
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

```
{% endtab %}
{% endtabs %}

#### delete\_field-calendar Call Response

When the API call is executed without errors, it returns a successful status code.

```json
{
  "statusCode": 200
}
```

