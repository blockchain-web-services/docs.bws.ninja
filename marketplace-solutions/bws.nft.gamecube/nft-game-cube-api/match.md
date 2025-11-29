# Match

A **Match** is a **time-bound, gameplay session** tied to a specific Field, during which events are tracked, points are awarded, and fan interactions occur. It represents a game instance—such as a football match, chess round, or tournament heat—scheduled via the `Calendar` object and hosted on a defined `Field`.\


Examples:

* PSG vs. Manchester City
* Green Bay Packers vs Chicago Bears
* Magnus Carlsen vs Hikaru Nakamura

{% hint style="info" %}
**Images**\
\
The images sent using base64 encoding are saved into IPFS using the BWS IPFS Solution. When getting object details, the IPFS URL is returned.
{% endhint %}

## new\_match

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_match**          |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_match Method Parameters

{% hint style="info" %}
**Optionals**

All parameters are optional (except calendarId and startTimeInMillis).
{% endhint %}

<table><thead><tr><th width="182">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>calendarId<mark style="color:red;">*</mark></td><td>string </td><td>Calendar Id the match should be included in.</td></tr><tr><td>startTimeInMillis<mark style="color:red;">*</mark></td><td>number</td><td>The expected match start time in milliseconds.</td></tr><tr><td>name</td><td>string</td><td>The match short name.</td></tr><tr><td>description</td><td>string</td><td>Match description.</td></tr><tr><td>image</td><td>string</td><td>An image base64 encoded string to announce the match.</td></tr><tr><td>team1Name</td><td>string</td><td>The team name (e.g. Manchester City)</td></tr><tr><td>team1Flag</td><td>string</td><td>An image base64 ecoded string representing the team flag.</td></tr><tr><td>team2Name</td><td>string </td><td>The team name (e.g. LA Lakers)</td></tr><tr><td>team2Flag</td><td>string</td><td>An image base64 ecoded string representing the team flag.</td></tr><tr><td>status</td><td>string</td><td>The match status. Use one of the following values: "scheduled", "playing", "finished", "canceled".</td></tr><tr><td>priceInCents</td><td>number</td><td>The default price in USD cents for all the cubes if no specific price is defined for a cube (e.g. 1000 for 10 USD).</td></tr></tbody></table>

### new\_match API Call Example

{% tabs %}
{% tab title="new_match API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to create a new NFT Game Cube match */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_match",
  "parameters":  {
      "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
      "startTimeInMillis": 1737795600000,
      "name": "PSG vs Man City",
      "description": "Paris Saint-Germain will face Manchester City ...",
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

#### new\_match Call Response

When the API call is successfully executed, it returns the`matchId` for the newly created match.

```json
{
  "statusCode": 200,
  "info": {
        "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee"
  }
}
```

## update\_match

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **update\_match**       |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### update\_match Method Parameters

{% hint style="info" %}
**Optionals**

All parameters are optional (except calendarId and matchId)\
Only provide those you want to update.
{% endhint %}

<table><thead><tr><th width="182">Parameter</th><th width="114.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>calendarId<mark style="color:red;">*</mark></td><td>string </td><td>Calendar Id the match is included in.</td></tr><tr><td>matchId<mark style="color:red;">*</mark></td><td>string</td><td>The Match Id we want to update.</td></tr><tr><td>startTimeInMillis</td><td>number</td><td>The expected match start time in milliseconds.</td></tr><tr><td>name</td><td>string</td><td>The match short name.</td></tr><tr><td>description</td><td>string</td><td>Match description.</td></tr><tr><td>image</td><td>string</td><td>An image base64 encoded string to announce the match.</td></tr><tr><td>team1Name</td><td>string</td><td>The team name (e.g. Manchester City)</td></tr><tr><td>team1Flag</td><td>string</td><td>An image base64 ecoded string representing the team flag.</td></tr><tr><td>team2Name</td><td>string </td><td>The team name (e.g. LA Lakers)</td></tr><tr><td>team2Flag</td><td>string</td><td>An image base64 ecoded string representing the team flag.</td></tr><tr><td>status</td><td>string</td><td>The match status. Use one of the following values: "scheduled", "playing", "finished", "canceled"</td></tr><tr><td>priceInCents</td><td>number</td><td>The price in USD cents (e.g. 1000 for 10 USD)</td></tr></tbody></table>

### update\_match API Call Example

{% tabs %}
{% tab title="update_match API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to update match description only */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_match",
  "parameters":  {
      "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
      "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee",
      "description": "Paris Saint-Germain will face Manchester City ...",
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

#### update\_match Call Response

When the API call is successfully executed, it returns the`matchId` for the updated match.

```json
{
  "statusCode": 200,
  "info": {
        "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee"
  }
}
```

## list\_matches

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description             |
| ------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark> | string | **list\_matches**       |
| parameters                                  | JSON   | check method parameters |

#### list\_matches Method Parameters (optional)

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>calendar_id</td><td>string</td><td>The Calendar Id the match is linked to.</td></tr><tr><td>matchId</td><td>string</td><td>(optional) The Match Id we want to list.</td></tr></tbody></table>

### list\_matches API Call Example

{% tabs %}
{% tab title="list_matches API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "list_matches",
  "parameters":  {
      "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
      "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee"  
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

#### list\_matches Call Response

When the API call is successfully executed, it returns the matches for the provided calendar. If we give a Match Id, it will just return the match we want to list.

```json
{
  "statusCode": 200,
  "info": {
    "matches": [
        {
            "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
            "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee",
            "startTimeInMillis": "1737795600000",
            "status": "scheduled",
            "data": {
                "name": "PSG vs Man City",
                "description": "Paris Saint-Germain will face Manchester City ...",
                "image": "https://ipfs.bws.ninja/ipfs/QmQnRDsQPvNJ9RgT9bagHmCLQVxCyZxatkPpj3Avb1hsM8"
            }
        }
    ]
  }
}
```

## delete\_match

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_calendar**    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### delete\_match Method Parameters

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>matchId</td><td>string</td><td>The Match Id of the match we want to delete.</td></tr><tr><td>calendarId</td><td>string</td><td>The Calendar Id the match is linked to.</td></tr></tbody></table>

### delete\_match API Call Example

{% tabs %}
{% tab title="delete_match API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "delete_match",
  "parameters":  {
     "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee",
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

#### delete\_match Call Response

When the API call is executed without errors, it returns a successful status code.

```json
{
  "statusCode": 200
}
```

