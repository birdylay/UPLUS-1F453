const request = require('request-promise');
var test;

function getPrediction(branchName, programType, time) {
	var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImE0ZDk5YmQwLWZiZGEtNDNlMC05MjdhLTRiODM3ZWExZjI5MiIsImluc3RhbmNlSWQiOiJhNGQ5OWJkMC1mYmRhLTQzZTAtOTI3YS00YjgzN2VhMWYyOTIiLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjBjMTZiNWVkLTk4ZjEtNDZmNS1iYWYwLTg3YTMwYTQ2ZDFmZSIsImlzcyI6Imh0dHA6Ly8xMjkuNDEuMjI5LjE4ODo4MDgwL3YyL2lkZW50aXR5IiwiaWF0IjoxNTAzNjY5MTg4LCJleHAiOjE1MDM2OTc5ODh9.aJPbJjSJ52ttx60WtcSnmQpTCIOGbDcRfMHkt8nsORok-xVW4UNIQfhDOc4j6YZuFPLA43GZrJ1UKcgh-Tb5HCCV1NUwippMD6irCbBj7bwE5w8G0nmkQ15Lnt-2EfdMOh6gfKUo9ZcwiIoH4e3WPJUujg3oxHhDwCDW6eRiAjK-alEEAVdY8fCizsxMTrHTXTgRurURy8grUO2I-Y2VJ-8FaVZds9elmfP9Yv-J21NnU8xPkz7UVvyB-nPriU_o9RXSRjNywtf-Ckn0caGlE-u-4_wZ25vSr7nhOcCA8KLTvyeAlth_ZQZDWEdrM7aM4RAN8Jvc0eRYL2CxnMmslA'};

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
 
	return request(options)
    .then(function (parsedBody) {
        // POST succeeded... 

        test = [parsedBody.values[0][7].toString(), parsedBody.values[0][5][0].toString(), parsedBody.values[0][5][1].toString() ];
        return test;
    })
    .catch(function (err) {
        console.log(err);
    });
  }

module.exports = Object.freeze(
	{
		getPrediction
	}
);
