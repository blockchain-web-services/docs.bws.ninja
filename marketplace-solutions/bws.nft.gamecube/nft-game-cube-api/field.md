# Field

Represents a **virtual sports field** tokenized into interactive zones or sections ("CUBES"). It is the foundational canvas for all game interactions.&#x20;

Each field is typically linked to a real-world sports match.\
\
Examples:

* Real Madrid Stadium
* Madison Square Garden

## new\_field

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_field**          |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_field Method Parameters

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Field name (e.g. Camp Nou)</td></tr><tr><td>sport</td><td>string</td><td>Sport (e.g. Football)</td></tr><tr><td>fieldLength</td><td>number</td><td>Field length in centimeters (e.g. 12000)</td></tr><tr><td>fieldWidth</td><td>number</td><td>Field width in centimeters (e.g. 9000)</td></tr><tr><td>cubeLength</td><td>number</td><td>The square size of a single cube (e.g. 300 for a cube of 3x3 meters)</td></tr></tbody></table>

### new\_field API Call Example

{% tabs %}
{% tab title="new_field API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_field",
  "parameters":  {
     "name": "Camp Nou",
     "sport": "football",
     "fieldLength": 12000,
     "fieldWidth": 8000,
     "cubeLength": 300      
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

#### new\_field Call Response

When the API call is successfully executed, it returns the`fieldId`, which will be used to link NFT Game Cube related objects.

All the cubes for that field are created when creating a new field.

```json
{
  "statusCode": 200,
  "info": {
    "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2"
  }
}
```

## list\_fields

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description                                  |
| ------------------------------------------- | ------ | -------------------------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.NFT.GameCube                             |
| operation<mark style="color:red;">\*</mark> | string | **list\_fields**                             |
| parameters                                  | JSON   | <p>(optional)<br>check method parameters</p> |

#### list\_fields Method Parameters (optional)

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>field_id</td><td>string</td><td>Field Id </td></tr></tbody></table>

### list\_fields API Call Example

{% tabs %}
{% tab title="new_field API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "list_fields",
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

#### list\_fields Call Response

When the API call is successfully executed, it returns the list of fields you created or a single field if `fieldId`parameter is included in the call.

```json
{
  "statusCode": 200,
  "info": {
     "fields": [
            {
                "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
                "status": "ready",
                "data": {
                    "name": "Camp Nou",
                    "sport": "football",
                    "fieldLength": 12000,
                    "fieldWidth": 8000,
                    "cubeLength": 300
                }
            }
        ]
  }
}
```

## delete\_field

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_field**       |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### delete\_field Method Parameters

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>fieldId</td><td>string</td><td>Field Id to delete.</td></tr></tbody></table>

### delete\_field API Call Example

{% tabs %}
{% tab title="delete_field API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "delete_field",
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

#### delete\_field Call Response

When the API call is executed without errors, it returns a successful status code.

{% hint style="info" %}
All the cubes created and assigned to the deleted field are also deleted.
{% endhint %}

```json
{
  "statusCode": 200,
  "info": {
    "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2"
  }
}
```

