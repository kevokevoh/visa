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
    REVERSE:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/payments/reversals',
        PROD: 'https://api.visa.com/cybersource/v2/payments/reversals',
    },
    CAPTURE:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/payments/captures',
        PROD: 'https://api.visa.com/cybersource/v2/payments/captures',
    },
    REFUND:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/payments/refunds',
        PROD: 'https://api.visa.com/cybersource/v2/payments/refunds',
    },
    REFUNDCAPTURE:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/captures/refunds',
        PROD: 'https://api.visa.com/cybersource/v2/captures/refunds',
    },
    PROCESSCREDIT:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/credits',
        PROD: 'https://api.visa.com/cybersource/v2/credits',
    },
    VOIDPAYMENT:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/payments/voids',
        PROD: 'https://api.visa.com/cybersource/v2/payments/voids',
    },
    VOIDCAPTURE:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/captures/voids',
        PROD: 'https://api.visa.com/cybersource/v2/captures/voids',
    },
    VOIDREFUND:  {
        SANDBOX: 'https://sandbox.api.visa.com/cybersource/v2/refunds/voids',
        PROD: 'https://api.visa.com/cybersource/v2/refunds/voids',
    },

};
Object.freeze(endpoints);
module.exports = endpoints;
