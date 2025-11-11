# Live Events

`LiveEvent` is the **base API object** used to **record an in-match event** that occurs at a specific coordinate (`x`, `y`) on a Field during a scheduled Match (`Calendar`). It is the **primary mechanism** by which game data—such as goals, moves, fouls, or plays—is captured and mapped to corresponding Cubes for scoring and reward processing.

This API serves as a trusted interface to power fan engagement:

* **Manually** via the **organizer dashboard or solution UI (BWS Solution Interface)**
* **Automatically** via **BWS-provided machine learning models** that detect and push game events in real time (e.g., AI-driven goal recognition, chess move capture)
* Through your application.

## new\_event

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_event**          |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_event Method Parameters

<table><thead><tr><th width="152">Parameter</th><th width="99.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>matchId</td><td>string</td><td>The Match Id for which you want to register the event.</td></tr><tr><td>fieldId</td><td>string</td><td>The Field Id the match is linked to.</td></tr><tr><td>calendarId</td><td>string </td><td>The calendar Id the match is linked to.</td></tr><tr><td>event</td><td>JSON</td><td>check event parameter</td></tr></tbody></table>

#### new\_event Event Parameter

<table><thead><tr><th width="152">Parameter</th><th width="99.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>coordinates</td><td>JSON</td><td>check coordinates parameter</td></tr><tr><td>eventTypeId</td><td>string</td><td>The Event Type Id of the event you want to register.</td></tr></tbody></table>

#### new\_event Coordinates Parameter

<table><thead><tr><th width="152">Parameter</th><th width="99.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>x</td><td>string</td><td>The 2D x coordinate of the event. </td></tr><tr><td>y</td><td>string</td><td>The 2D y coordinate of the event.</td></tr></tbody></table>

### new\_event API Call Example

{% tabs %}
{% tab title="new_event API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_event",
  "parameters":  {
      "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee",
      "fieldId": "5a1486f3-753c-4194-b2d4-ea68b6e420c2",
      "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
      "event":  {
        "coordinates": {
          "x": "45",
          "y": "40"
        },
      "eventTypdId": "34339c99-43cf-4fe9-b632-4f8606e3c1bc"
      }
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

#### new\_event Call Response

When the API call is executed without errors, it returns a successful status code.

```json
{
  "statusCode": 200
}
```

