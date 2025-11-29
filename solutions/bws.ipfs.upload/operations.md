---
description: Easily upload Images, PDF and JSON files to IPFS.
---

# Operations

## [Upload to IPFS](operations.md#upload-to-ipfs)

Use this operation to upload content to IPFS and get the IPFS Content Identifier (CID).

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                         | Type   | Description                                                                                                         |
| -------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>   | string | BWS.IPFS.Upload                                                                                                     |
| operation<mark style="color:red;">\*</mark>  | string | **new**                                                                                                             |
| parameters<mark style="color:red;">\*</mark> | JSON   | <p>check <a href="operations.md#upload-to-ipfs-method-parameters"><strong>Method Parameters</strong></a></p><p></p> |

{% tabs %}
{% tab title="200 Returns the IPFS CID and useful URIs." %}
```json
{
    "statusCode": 200,
    "info": {
        "cid": "QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
        "uris": {
            "ipfs": "ipfs://QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
            "url": "https://ipfs.bws.ninja/ipfs/QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN"
        }
    }
}
```
{% endtab %}
{% endtabs %}

#### [Upload to IPFS Method Parameters](operations.md#upload-to-ipfs-method-parameters)

<table><thead><tr><th width="161">Parameter</th><th width="102.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>description</td><td>string</td><td>Short description of your content <br>(will be returned when <a href="operations.md#list-ipfs-files">listing your IPFS files</a>).</td></tr><tr><td>content</td><td>JSON /<br>base64</td><td><p>Content to save on the IPFS network. <br>We currently support:</p><ul><li>JSON (just pass the JSON or the stringified string)</li><li>File sent as a base64 encoded string</li></ul></td></tr></tbody></table>

{% hint style="warning" %}
Please note that when uploading your file:

* You must optimize your content to be less than 1 MB in size (there is a hard limit of 5MB when uploading files to IPFS using our API).
* We currently support JSON, images, and PDF files.

If your use case requires higher file sizes or other file types, please contact us.
{% endhint %}

#### Upload to IPFS Examples

{% tabs %}
{% tab title="Upload an Image using nodejs" %}
```javascript
const fs = require('fs');
const axios = require('axios');

/* get the file you want to upload to IPFS */
const fileData = fs.readFileSync('./files/image.png');

/* encode file content to base64 */
const encodedData = fileData.toString('base64');

/* build request to use BWS IPFS solution */
const request = {
   "solution": "BWS.IPFS.Upload",
   "operation": "new",
   "parameters": {
        description: "My first IPFS file using BWS API!",
        parameters: {
            content: encodedData
        }
    }
};

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

{% tab title="Upload JSON using cURL" %}
```json
curl --location 'https://api.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.IPFS.Upload",
    "operation": "new",
    "parameters": {
         "description": "Just a simple JSON for testing BWS API",
         "content": {
                "text": "Hello World!"
             } 
    }
}'
```
{% endtab %}
{% endtabs %}

### [Upload to IPFS call Response](operations.md#upload-to-ipfs-call-response)

When the API call is successfully executed, it returns the IPFS Content Identifier (CID) along with the corresponding IPFS URI and URL. These details facilitate easy access and reference to the uploaded content on the IPFS network.

```
{
    "statusCode": 200,
    "info": {
        "cid": "QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
        "uris": {
            "ipfs": "ipfs://QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
            "url": "https://ipfs.bws.ninja/ipfs/QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN"
        }
    }
}
```

## [List IPFS Files](operations.md#list-ipfs-files)

Get the list of your IPFS files

<mark style="color:green;">`POST`</mark> `https://api.bws.ninja/v1/call`

### Request Body

| Name                                        | Type   | Description                                                                |
| ------------------------------------------- | ------ | -------------------------------------------------------------------------- |
| solution<mark style="color:red;">\*</mark>  | string | BWS.IPFS.Upload                                                            |
| operation<mark style="color:red;">\*</mark> | string | list                                                                       |
| parameters                                  | JSON   | check [Method Parameters](operations.md#list-ipfs-files-method-parameters) |

{% tabs %}
{% tab title="200 The list of files you uploaded to IPFS" %}
<pre class="language-json"><code class="lang-json"><strong>{
</strong>    "statusCode": 200,
    "statusMessage": "",
    "info": [
        {
            "": ""
        }
    ]
}
</code></pre>
{% endtab %}
{% endtabs %}

#### [List IPFS Files Method Parameters](operations.md#list-ipfs-files-method-parameters)

<table><thead><tr><th width="161">Parameter</th><th width="168.33333333333331">Type</th><th>Desciption</th></tr></thead><tbody><tr><td>from</td><td>long</td><td><a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing a timestamp to select IPFS files from.</td></tr><tr><td>to</td><td>long</td><td><a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> in milliseconds representing a timestamp to select IPFS files to.</td></tr></tbody></table>

#### LIST IPFS Files Request Example

{% tabs %}
{% tab title="cURL" %}
```json
curl --location 'https://api.staging.bws.ninja/v1/call' \
--header 'X-Api-Key: XqaLg...729v' \
--header 'Content-Type: application/json' \
--data '{
    "solution": "BWS.IPFS.Upload",
    "operation": "list"
    "parameters": {
        "from": 1700404140000
        "to": 1700411940000
    }
}'
```
{% endtab %}
{% endtabs %}

### [List IPFS Files call Response](operations.md#list-ipfs-files-call-response)

Once executed correctly, you will get a list of the IPFS uploaded files using BWS API. That list will contain for each file:

* the timestamp of creation ([Unix time](https://en.wikipedia.org/wiki/Unix_time) in milliseconds),&#x20;
* the IPFS Content Identifier (CID),&#x20;
* the file type,&#x20;
* and the URIs to easily access the file&#x20;
  * IPFS URI,
  * web URL - using the BWS IPFS Gateway to fetch the file.

```json
{
    "statusCode": 200,
    "info": [
        {
            "timestamp": "1700416540067",
            "cid": "QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
            "description": "Just a simple JSON for testing BWS API",
            "fileType": "json",
            "uris": {
                "ipfs": "ipfs://QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN",
                "url": "https://ipfs.bws.ninja/ipfs/QmXmCX9S6ANVjYJh3rJmXjqgYtYv7WZLUDL2XCwdPrvUwN"
            }
        },
        {
            "timestamp": "1700121600009",
            "cid": "QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
            "description": "image for token 1325",
            "fileType": "image",
            "uris": {
                "ipfs": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
                "url": "https://ipfs.bws.ninja/ipfs/QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu"
            }
        }
    ]
}
```

