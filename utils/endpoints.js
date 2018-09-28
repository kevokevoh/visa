/* Copyright (c) 2018 by CyberSource */

const endpoints = {
    KEY: {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/payments/flex/v1/keys',
        PROD: 'https://api.visa.com/cybersource/payments/flex/v1/keys',
    },
    TOKEN: {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/payments/flex/v1/tokens',
        PROD: 'https://api.visa.com/cybersource/payments/flex/v1/tokens',
    },
    CARD:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/payments',
        PROD: 'https://api.visa.com/cybersource/v2/payments',
    },
    HELLO:  {
        SANDBOX: 'https://sandbox.api.visa.com/vdp/helloworld',
        PROD: 'https://api.visa.com/vdp/helloworld',
    },
};
Object.freeze(endpoints);
module.exports = endpoints;
