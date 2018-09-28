const buildHeaders = require('./utils/headers');
const request = require('request');

function keyRequest(config, options, callback) {
    const body = options;
    const bodyJson = body;
    let headers;
    if (config.isValid()) {
        headers = buildHeaders(config, bodyJson);
    } else {
        throw new Error("Both api key and secret required.");
    }
    headers.Accept = 'application/json';
    headers['Content-Type'] = 'application/json';

    const requestOptions = {
        url: config.getUrl(),
        method: 'GET',
        headers,
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

module.exports = keyRequest;

