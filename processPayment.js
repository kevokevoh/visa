const buildHeaders = require('./utils/headers')
const constants = require('./constants');
const request = require('request');


function processPayment(config, options, callback) {
    const bodyJson = JSON.stringify(options);
    console.log(bodyJson);
    const body = options;
    let headers;
    if (config.isValid()) {
        headers = buildHeaders(config, bodyJson);
    } else {
        throw new Error("Both api key and secret required.");
    }
    // headers.Accept = 'application/json';
    headers['Content-Type'] = 'application/json';

    const requestOptions = {
        url: config.getUrl(),
        method: 'POST',
        json: true,
        headers,
        body,
    };

    console.log('keys request: %o', requestOptions);
    console.log('Signed headers for POST to %s generated: %o. Request payload: \n%o.', requestOptions.url, headers, body);

    request(requestOptions, (error, response, key) => {
        if (error) console.log('error: %o', error);
        else {
            console.log('keys response: status: %s %s', response.statusCode, response.statusMessage);
            console.log('keys response: body: %o', response.body);
            console.log('keys response: headers: %o', response.headers);
        }
        callback(error, response, key);
    });
}

module.exports = processPayment;

