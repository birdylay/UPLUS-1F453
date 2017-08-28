const requestPromise = require('request-promise');
const request = require('request');
const user = '0c16b5ed-98f1-46f5-baf0-87a30a46d1fe';
const password = '71ba8619-2920-4169-8a3b-1ca4434ce875';
const tokenEndPoint = 'https://ibm-watson-ml.mybluemix.net/v3/identity/token';
var test;

function getTokenFromTokenEndPoint(tokenEndpoint, user, password) {
  return new Promise((resolve, reject) => {
    request.get(tokenEndpoint, {
      strictSSL: false,
      auth: {
        'user': user,
        'pass': password
      }
    }, function (err, res, body) {
      if (err) {
        reject(err);
      }
      if (!res || !res.statusCode) {
        reject(new Error('Token Endpoint failure'));
      } else {
        switch (res.statusCode) {
        case 200:
          resolve(JSON.parse(res.body).token);
          break;
        default:
          reject(new Error(`Token Endpoint returned ${res.statusCode}.
            Make sure the user is privileged to perform REST API calls.`));
        }
      }
    });
  });
}

function getPrediction(branchName, programType, time) {
    return getTokenFromTokenEndPoint(tokenEndPoint, user, password)
    .then((token) => {
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        var options = {
            method: 'POST',
            headers: headers,
            uri: 'https://ibm-watson-ml.mybluemix.net/v3/wml_instances/a4d99bd0-fbda-43e0-927a-4b837ea1f292/published_models/3a532909-f564-4393-afad-9318d6c2ddbc/deployments/b838dfc6-1087-463a-9eb2-c51e7ea80afa/online',
            body: {
                fields: ["Branch / Department", "Program Type", "Time of Program"],
                values: [[branchName, programType, time]]
            },
        json: true // Automatically stringifies the body to JSON
        };
        return requestPromise(options)
            .then(function (parsedBody) {
                // POST succeeded... 

                test = [parsedBody.values[0][7].toString(), parsedBody.values[0][5][0].toString(), parsedBody.values[0][5][1].toString() ];
                return test;
            })
            .catch(function (err) {
                console.log(err);
            });
    });
}

module.exports = Object.freeze(
	{
		getPrediction
	}
);
