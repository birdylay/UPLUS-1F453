const request = require('request-promise');
var test;

function getPrediction(branchName, programType, time) {
	var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImE0ZDk5YmQwLWZiZGEtNDNlMC05MjdhLTRiODM3ZWExZjI5MiIsImluc3RhbmNlSWQiOiJhNGQ5OWJkMC1mYmRhLTQzZTAtOTI3YS00YjgzN2VhMWYyOTIiLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjBjMTZiNWVkLTk4ZjEtNDZmNS1iYWYwLTg3YTMwYTQ2ZDFmZSIsImlzcyI6Imh0dHA6Ly8xMjkuNDEuMjI5LjE4ODo4MDgwL3YyL2lkZW50aXR5IiwiaWF0IjoxNTAzNjQ3NjcyLCJleHAiOjE1MDM2NzY0NzJ9.OHXqcoW6opoXZOWjF2GDRNuf1SPmO9erHORc0Zlmtw1EW7sFxeZyj1-zzrVUTwDAKZPfSz84s33yHUU19uM5WLamxZsjzdD1TSN0okNM-Z4KAfpTevTmrb5TyYipmxsY9UNzFY5bcA_jOL4JmmOMqS7b5LMLlhwz8s3DHE6hGQxzAoGg4jrr5xVh8hCN2sL3otpJTBW1FnuZMZxCgM8-g_jWlhGHeqxYj_o7-CicZdf0dsnxNiHPA7GCSa6sE0lmdsJrNzGjKZIq7JMkN-gE_gDY2jQN-WqY_7ef_rkoxxPhHoc27KMFTBjP1toe_G_AK2ZzGHXbL34ddTaY-LQ7aQ'
    };

	var options = {
    method: 'POST',
    headers: headers,
    uri: 'https://ibm-watson-ml.mybluemix.net/v3/wml_instances/a4d99bd0-fbda-43e0-927a-4b837ea1f292/published_models/896f372c-f271-4028-97fa-ab375375f511/deployments/3025ce82-7cc4-4d75-9b99-d91d75ba0f7d/online',
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
