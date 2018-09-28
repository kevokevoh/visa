/* Copyright (c) 2018 by CyberSource */

const qs = require('qs');
const xPayToken = require('./xpay');

function generateHeaders(config, messageBody) {
    const timestamp = Math.floor(Date.now() / 1000);
    let resourcePath;
    if (config.access === "key") {
        resourcePath = 'payments/flex/v1/keys';
    }
    if (config.access === "card") {
        resourcePath = 'v2/payments';
    }
    if (config.access === "hello") {
        resourcePath = 'helloworld';
    }
    const queryParams = qs.stringify({ apikey: config.apikey });
    return {
        'X-PAY-TOKEN': xPayToken(timestamp, resourcePath, queryParams, messageBody, config.sharedSecret),
    };
}

module.exports = generateHeaders;
