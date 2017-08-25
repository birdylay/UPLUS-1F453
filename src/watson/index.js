const request = require('request');

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImE0ZDk5YmQwLWZiZGEtNDNlMC05MjdhLTRiODM3ZWExZjI5MiIsImluc3RhbmNlSWQiOiJhNGQ5OWJkMC1mYmRhLTQzZTAtOTI3YS00YjgzN2VhMWYyOTIiLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjBjMTZiNWVkLTk4ZjEtNDZmNS1iYWYwLTg3YTMwYTQ2ZDFmZSIsImlzcyI6Imh0dHA6Ly8xMjkuNDEuMjI5LjE4ODo4MDgwL3YyL2lkZW50aXR5IiwiaWF0IjoxNTAzNTY4Mzg2LCJleHAiOjE1MDM1OTcxODZ9.CUXLoNkoHBxJQxnBqWQ0Am0uxpDCor4A6FozfUoRyg-hiS6MPN3es8ru0xBy-ARy5XhmjCFRapBGrpeIhO2Zis7CAVNtRVvcw2AmByldXQPUpTmVJORf-ewndjtA91mQGV8m6bxc3lxdansb3QM0I0vhE7YQnkbHhN0upj5yF9azBGz2AEJe8uuiqjSCVTLJVwFXbVTjdh7emXu1RPQSzvP5BJGLca8_V7S2jpQLfcDmzXntSVKjBBnIVO0W-gSRypXntQNWUse3IztKI0WOpRQSowslvvuMhTAj8kZnK5o1lMeeKPz2loOQtAOnHruIM4S0F05zmLFKRfgGugdICg'
};

var dataFormat = '{"fields": ["Branch","Program Type", "Time of Program"], "values": [["Agincourt","Cultural", "3:30-6 pm"]]}';

function callback(error, response, body) {
    let text = JSON.parse(body).values[0][7].toString();
    console.log(text);
    return text;
}

function getScore (branchName, programType, time) {
	let dataString = '{"fields": ["Branch","Program Type", "Time of Program"], "values": [["' + branchName + '","' + programType + '","' + time + '"]]}';
	let options = {
    url: 'https://ibm-watson-ml.mybluemix.net/v3/wml_instances/a4d99bd0-fbda-43e0-927a-4b837ea1f292/published_models/8f97d501-a941-404a-bd1f-cf1cb8a2edff/deployments/57a57202-ace7-48d8-a22a-3218365cc345/online',
    method: 'POST',
    headers: headers,
    body: dataString
};
	return request(options, callback);
}

module.exports = Object.freeze(
	{
		getScore,
	}
);
