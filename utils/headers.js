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
    if (config.access === "reversal") {
        resourcePath = 'v2/payments/' + config.transactionId + '/reversals';
    }
    if (config.access === "capture") {
        resourcePath = 'v2/payments/' + config.transactionId + '/captures';
    }
    if (config.access === "refund") {
        resourcePath = 'v2/payments/' + config.transactionId + '/refunds';
    }
    if (config.access === "refundCapture") {
        resourcePath = 'v2/captures/' + config.transactionId + '/refunds';
    }
    if (config.access === "processCredit") {
        resourcePath = 'v2/credits';
    }
    if (config.access === "voidPayment") {
        resourcePath = 'v2/payments/' + config.transactionId + '/voids';
    }
    if (config.access === "voidCapture") {
        resourcePath = 'v2/captures/' + config.transactionId + '/voids';
    }
    if (config.access === "voidRefund") {
        resourcePath = 'v2/refunds/' + config.transactionId + '/voids';
    }
    const queryParams = qs.stringify({ apikey: config.apikey });
    return {
        'X-PAY-TOKEN': xPayToken(timestamp, resourcePath, queryParams, messageBody, config.sharedSecret),
    };
}

module.exports = generateHeaders;
