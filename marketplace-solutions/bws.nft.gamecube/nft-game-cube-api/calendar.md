# Calendar

Represents a **scheduled game, match, or tournament instance**—essentially, a **time-bound event** associated with a specific Field.

The `Calendar` object anchors the gameplay timeline, enabling season-based, game-based, or tournament-based fan campaigns. \
\
Examples:

* **UEFA Champions League Final**: Madrid vs PSG, for a single event calendar.
* **LaLiga 2025-2026**, including multiple matches, for the entire season calendar.

## new\_calendar

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_calendar**       |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_field Method Parameters

<table><thead><tr><th width="155">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Calendar name (e.g. LaLiga 2025-26)</td></tr></tbody></table>

### new\_calendar API Call Example

{% tabs %}
{% tab title="new_field API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_calendar",
  "parameters":  {
     "name": "2025-26"    
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

#### new\_calendar Call Response

When the API call is successfully executed, it returns the `calendarId`, which will be used to link with related objects.

```json
{
  "statusCode": 200,
  "info": {
      "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354"
  }
}
```

## list\_calendars

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description                                  |
| ------------------------------------------- | ------ | -------------------------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.NFT.GameCube                             |
| operation<mark style="color:red;">\*</mark> | string | **list\_fields**                             |
| parameters                                  | JSON   | <p>(optional)<br>check method parameters</p> |

#### list\_calendars Method Parameters (optional)

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>calendar_id</td><td>string</td><td>Calendar Id </td></tr></tbody></table>

### list\_calendars API Call Example

{% tabs %}
{% tab title="list_calendars API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "list_calendars",
  "parameters":  {
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

#### list\_calendars Call Response

When the API call is successfully executed, it returns the list of calendars you created or a single calendar if the `CalendarId` parameter is included in the call.

```json
{
  "statusCode": 200,
  "info": {
    "calendars": [
            {
                "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
                "data": {
                    "name": "2025-26"
                }
            }
        ]
  }
}
```

## delete\_calendar

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_calendar**    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### delete\_field Method Parameters

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>calendarId</td><td>string</td><td>Then Calendar Id of the calendar to delete.</td></tr></tbody></table>

### delete\_calendar API Call Example

{% tabs %}
{% tab title="delete_calendar API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "delete_calendar",
  "parameters":  {
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

#### delete\_calendar Call Response

When the API call is executed without errors, it returns a successful status code.

```json
{
  "statusCode": 200
}
```

