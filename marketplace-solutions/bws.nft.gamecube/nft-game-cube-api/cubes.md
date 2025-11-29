# Cubes

Represents a **zone or tile within a Field**.

Each Cube is a unique NFT owned by a fan. It tracks ownership, enables rewards, and reflects live event impacts during matches.

{% hint style="danger" %}
Cubes are generated automatically when creating a new field.
{% endhint %}

## list\_cubes

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **list\_cubes**         |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_field Method Parameters

<table><thead><tr><th width="249">Parameter</th><th>Type</th><th>Desciption</th></tr></thead><tbody><tr><td>fieldId</td><td>string</td><td>Field Id.</td></tr><tr><td>limit</td><td>number</td><td>The maximum number of cubes returned (a field can have hundreds of cubes).</td></tr><tr><td>lastEvaluatedKey</td><td></td><td>(optional) If more cubes are available, include the returned key to get the next chink of cubes.</td></tr></tbody></table>

### list\_cubes API Call Example

{% tabs %}
{% tab title="list_cubes API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "list_cubes",
  "parameters":  {
     "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
     "limit": 5    
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

#### list\_cubes Call Response

When the API call is successfully executed, it returns a list of cubes and their related cube data, including the`cubeId`. If more cubes are available, the field lastEvaluatedKey is returned (include it on the API call for getting the next chunk of cubes).

```json
{
  "statusCode": 200,
  "info": {
        "cubes": [
            {
                "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
                "cubeId": "ffcab6f9-1e3f-49df-9d53-28b1cbc1df57",
                "cubeIndex": "2700_1800",
                "status": "created",
                "data": {
                    "x": 2700,
                    "y": 1800,
                    "cubeLength": 300,
                    "i": 9,
                    "j": 6
                }
            },
            {
                "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
                "cubeId": "ff86a9b3-ac68-456d-af12-2d4dc8622b94",
                "cubeIndex": "11400_1200",
                "status": "created",
                "data": {
                    "x": 11400,
                    "y": 1200,
                    "cubeLength": 300,
                    "i": 38,
                    "j": 4
                }
            },
            {
                "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
                "cubeId": "ff742a73-5cff-4f86-b8cd-afa8fc864f95",
                "cubeIndex": "9000_7500",
                "status": "created",
                "data": {
                    "x": 9000,
                    "y": 7500,
                    "cubeLength": 300,
                    "i": 30,
                    "j": 25
                }
            },
            {
                "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
                "cubeId": "ff2bec99-1e1c-479b-adb6-79775780eb56",
                "cubeIndex": "11400_3600",
                "status": "created",
                "data": {
                    "x": 11400,
                    "y": 3600,
                    "cubeLength": 300,
                    "i": 38,
                    "j": 12
                }
            },
            {
                "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
                "cubeId": "ff248cbb-e7ab-4510-817f-53f7d56cf3e0",
                "cubeIndex": "8400_7200",
                "status": "created",
                "data": {
                    "x": 8400,
                    "y": 7200,
                    "cubeLength": 300,
                    "i": 28,
                    "j": 24
                }
            }
        ],
        "lastEvaluatedKey": "ff248cbb-e7ab-4510-817f-53f7d56cf3e0"
  }
}
```

## update\_cube-price

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description             |
| ------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark> | string | **update\_cube-price**  |
| parameters                                  | JSON   | check method parameters |

#### update\_cube-price Method Parameters (optional)

<table><thead><tr><th width="143">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>field_id</td><td>string</td><td>Field Id </td></tr><tr><td>cubesList</td><td>list</td><td>A list of cubes whose price needs to be updated. Use cube data <code>i</code> and <code>j</code> indexes to identify each cube using the format <code>i_j</code> (e.g. 40_0).</td></tr><tr><td>priceInCents</td><td>number</td><td>Price in USD cents (e.g. 500 to indicate a 5USD cube price)</td></tr></tbody></table>

### update\_cube-price API Call Example

{% tabs %}
{% tab title="new_field API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "update_cube-price",
  "parameters":  {
     "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
     "cubesList": ["48_0", "51_0", "54_0"],
     "princeInCents": 500
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

#### update\_cube-price Call Response

When the API call is successfully executed, it returns the number of correctly updated cubes, the number of invalid detected cubes, and the list of invalid cubes.

```json
{
  "statusCode": 200,
  "info": {
        "updatedCubes": 3,
        "invalidCubes": 1,
        "invalidCubesList": [
            "300_848483847938474000000"
        ]
  }
}
```

