# Event Types

Defines **in-game occurrences** like goals, assists, or plays.

Events are registered with spatial coordinates and timestamps, affecting cube owners whose zones match the action location.

Examples:

* Pass
* Goal

## new\_event-type

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_event-type**     |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_event-type Method Parameters

<table><thead><tr><th width="175">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>fieldId</td><td>string</td><td>The Match Id we want to assign the prize.</td></tr><tr><td>eventTypeName</td><td>string </td><td>The event type name (e.g. "pass").</td></tr><tr><td>eventTypePoints</td><td>string</td><td>The number of points to assign when the event is detected on a specific cube (e.g. "100").</td></tr></tbody></table>

### new\_event-type API Call Example

{% tabs %}
{% tab title="new_event-type API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_event-type",
  "parameters":  {
      "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
      "eventTypeName": "pass",
      "eventTypePoints": "100"
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

#### new\_event-type Call Response

When the API call is successfully executed, it returns the `evenTypeId`for the newly created event type (to be used when registering events).

```json
{
  "statusCode": 200,
  "info": {
       "eventTypeId": "34339c99-43cf-4fe9-b632-4f8606e3c1bc"
  }
}
```

## list\_event-types

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **list\_match-prizes**  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### list\_event-types Method Parameters (optional)

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>fieldId</td><td>string</td><td>The Field Id to get the list of events.</td></tr></tbody></table>

### list\_match-prizes API Call Example

{% tabs %}
{% tab title="list_match-prizes API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "list_event-types",
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

#### list\_event-types Call Response

When the API call is successfully executed, it returns the field available events.

```json
{
  "statusCode": 200,
  "info": {
    "eventTypes": [
        {
            "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
            "eventTypeId": "34339c99-43cf-4fe9-b632-4f8606e3c1bc",
            "eventTypeName": "pass",
            "eventTypePoints": "100"
        }
    ]
  }
}
```

## update\_event-type

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **update\_event-type**  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### update\_event-type Method Parameters

<table><thead><tr><th width="169">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>eventTypeId</td><td>string</td><td>The Event Type Id we want to update the assigned points.</td></tr><tr><td>fieldId</td><td>string</td><td>The Field Id the event is linked to.</td></tr><tr><td>eventTypePoints</td><td>string</td><td>The new number points assigned to the event (e.g. "1000")</td></tr></tbody></table>

### update\_event-type API Call Example

{% tabs %}
{% tab title="update-event-type API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "update_event-type",
  "parameters":  {
     "eventTypdId": "34339c99-43cf-4fe9-b632-4f8606e3c1bc",
     "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
     "eventTypePoints": "1000"
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

#### update\_match-prize Call Response

When the API call is executed without errors, it returns a successful status code.

```json
{
  "statusCode": 200
}
```

## delete\_event-type

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_event-type**  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### delete\_event-type Method Parameters

<table><thead><tr><th width="162">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>eventTypeId</td><td>string</td><td>The Event Type Id if the event we want to delete.</td></tr><tr><td>fieldId</td><td>string</td><td>The Field Id the event is linked to.</td></tr></tbody></table>

### delete\_event-type API Call Example

{% tabs %}
{% tab title="delete_event-type API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "delete_event-type",
  "parameters":  {
     "eventTypdId": "34339c99-43cf-4fe9-b632-4f8606e3c1bc",
     "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
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

#### delete\_event-type Call Response

When the API call is executed without errors, it returns a successful status code.

```json
{
  "statusCode": 200
}
```

