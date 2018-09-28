const request = require('request');

function tokenizeCard(config, options, callback) {
    const body = options;
    const headers= {};
    headers.Accept = 'application/json';
    headers['Content-Type'] = 'application/json';
    console.log(body);

    const requestOptions = {
        url: config.getUrl(),
        method: 'POST',
        json: true,
        headers,
        body,
    };

    console.log('keys request: %o', requestOptions);
    console.log('Signed headers for POST to %s generated: %o. Request payload: \n%o.', requestOptions.url, headers, body);

    request(requestOptions, (error, response, data) => {
        if (error) console.log('error: %o', error);
        else {
            console.log('keys response: status: %s %s', response.statusCode, response.statusMessage);
            console.log('keys response: body: %o', response.body);
            console.log('keys response: headers: %o', response.headers);
        }
        callback(error, response, data);
    });

}

module.exports = tokenizeCard;
