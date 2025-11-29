# Prizes

A **Prize** represents a **reward asset or benefit** that users can receive based on their CUBE performance, in a specific **Match (or Season)**. It can be a digital NFT, a token bonus, a physical good, or an experience, configurable by the solution owner to drive fan engagement and incentivize Cube ownership.\
\
Examples:

* Signed Merchandise
* VIP Match Tickets
* Zoom Call or AMA with an Athlete
* Bonus $BWS Tokens

{% hint style="info" %}
**Images**\
\
The images sent using base64 encoding are saved into IPFS using the BWS IPFS Solution. When getting object details, the IPFS URL is returned.
{% endhint %}

## new\_match-prize

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **new\_match-prize**    |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### new\_match-prize Method Parameters

<table><thead><tr><th width="145">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>matchId<mark style="color:red;">*</mark></td><td>string</td><td>The Match Id we want to assign the prize.</td></tr><tr><td>calendarId<mark style="color:red;">*</mark></td><td>string </td><td>Calendar Id of the match.</td></tr><tr><td>position<mark style="color:red;">*</mark></td><td>number</td><td>1, 2 or 3 for first, second and third prize.</td></tr><tr><td>name<mark style="color:red;">*</mark></td><td>string</td><td>The prize name (e.g. FODEN SIGNED FRAME)</td></tr><tr><td>description<mark style="color:red;">*</mark></td><td>string</td><td>Prize description (e.g. Phil Foden, known for his incredible..)</td></tr><tr><td>snapshot<mark style="color:red;">*</mark></td><td>string</td><td>An image base64 encoded string to announce the match.</td></tr><tr><td>htmlDescription</td><td>string</td><td>The HTML description of the prize (e.g. &#x3C;div>&#x3C;p>The ...)</td></tr><tr><td>image1</td><td>string</td><td>An image base64 encoded string.</td></tr><tr><td>image2</td><td>string</td><td>An image base64 encoded string.</td></tr><tr><td>image3</td><td>string</td><td>An image base64 encoded string.</td></tr></tbody></table>

### new\_match-prize API Call Example

{% tabs %}
{% tab title="new_match-prize API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "new_match-prize",
  "parameters":  {
      "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee",
      "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
      "position": 1,
      "name": "FODEN SIGNED FRAME",
      "description": "Phil Foden, known for his incredible ...",
      "snapshot": "9j/4AAQSkZJRgABAQIAHA... " /* base64 encoded image string */
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

#### new\_match-prize Call Response

When the API call is successfully executed, it returns the `prizeId` for the newly created prize.

```json
{
  "statusCode": 200,
  "info": {
       "prizeId": "b6ec4971-b573-4bfc-981c-582a33006abf"
  }
}
```

## list\_match-prizes

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **list\_match-prizes**  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### list\_match-prizes Method Parameters (optional)

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>matchId</td><td>string</td><td>The Match Id we want to list the prizes.</td></tr></tbody></table>

### list\_match-prizes API Call Example

{% tabs %}
{% tab title="list_match-prizes API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "list_match-prizes",
  "parameters":  {
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

#### list\_match-prizes Call Response

When the API call is successfully executed, it returns the match prizes, including the image IPFS url.

```json
{
  "statusCode": 200,
  "info": {
   "prizes": [
        {
            "prizeId": "b6ec4971-b573-4bfc-981c-582a33006abf",
            "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee",
            "position": "3",
            "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
            "data": {
                "name": "FODEN SIGNED FRAME",
                "description": "Phil Foden, known for his incredible skill, vision, and versatility, has dazzled fans and critics alike with his breathtaking performances.",
                "snapshot": "https://ipfs.bws.ninja/ipfs/QmSg27Xz3yWva6yM9Agn7JWYVyKH35uVdaUHe58Jhnks9a"
            }
        }
    ]
  }
}
```

## update\_match-prize

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **update-match-prize**  |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### update\_match-prize Method Parameters

<table data-full-width="true"><thead><tr><th width="145">Parameter</th><th width="90.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>matchId<mark style="color:red;">*</mark></td><td>string</td><td>The Match Id we want to assign the prize.</td></tr><tr><td>calendarId<mark style="color:red;">*</mark></td><td>string </td><td>Calendar Id of the match.</td></tr><tr><td>prizeId<mark style="color:red;">*</mark></td><td>string</td><td>The prize Id you get when creating a new match prize.</td></tr><tr><td>name</td><td>string</td><td>The prize name (e.g. FODEN SIGNED FRAME)</td></tr><tr><td>description</td><td>string</td><td>Prize description (e.g. Phil Foden, known for his incredible..)</td></tr><tr><td>snapshot</td><td>string</td><td>An image base64 encoded string to announce the match.</td></tr><tr><td>htmlDescription</td><td>string</td><td>The HTML description of the prize (e.g. &#x3C;div>&#x3C;p>The ...)</td></tr><tr><td>image1</td><td>string</td><td>An image base64 encoded string.</td></tr><tr><td>image2</td><td>string</td><td>An image base64 encoded string.</td></tr><tr><td>image3</td><td>string</td><td>An image base64 encoded string.</td></tr></tbody></table>

### update\_match-prize API Call Example

{% tabs %}
{% tab title="update-match-cube-price API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "update_match-prize",
  "parameters":  {
     "prizeId": "b6ec4971-b573-4bfc-981c-582a33006abf",
     "matchId": "e16d3f98-4eeb-44b9-837c-eddbbfe305ee",
     "calendarId": "8a7324f4-311d-43a8-a28f-87d9c424c354",
     "htmlDescription": "<div><p>The .. "
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

## delete\_match-prize

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description             |
| -------------------------------------------- | ------ | ----------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.NFT.GameCube        |
| operation<mark style="color:red;">\*</mark>  | string | **delete\_match-prize** |
| parameters<mark style="color:red;">\*</mark> | JSON   | check method parameters |

#### delete\_match-prize Method Parameters

<table><thead><tr><th width="135">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>prizeId</td><td>string</td><td>The Prize Id to delete.</td></tr></tbody></table>

### delete\_match-prize API Call Example

{% tabs %}
{% tab title="delete_match-prize API call using Node.js" %}
```javascript
const axios = require('axios');

/* build request to use BWS Badges solution */
const request = {
{
  "solution": "BWS.NFT.GameCube",
  "operation": "delete_match-prize",
  "parameters":  {
     "prizeId": "b6ec4971-b573-4bfc-981c-582a33006abf"
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

#### delete\_match-prize Call Response

When the API call is executed without errors, it returns a successful status code.

```json
{
  "statusCode": 200
}
```

