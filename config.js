/* Copyright (c) 2018 by CyberSource */

const qs = require('qs');
const endpoints = require('./utils/endpoints');

const defaults = {
    // credentials
    apikey: null,
    sharedSecret: null,

    // env
    production: false,
    // What is being accessed
    access: "key",
    transactionId: null
};
Object.freeze(defaults);

function stripUnsupportedParams(params = {}) {
    return Object.keys(params).reduce((acc, val) => {
        if (val in defaults) acc[val] = params[val];
        return acc;
    }, {});
}

class Config {
    constructor(params) {
        Object.assign(this, defaults, stripUnsupportedParams(params));
        Object.freeze(this);
    }

    isValid() {
        return this.apikey != null && this.sharedSecret != null;
    }

    getUrl() {
        if (this.access === "key")
            return `${this.production ? endpoints.KEY.PROD : endpoints.KEY.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
        if (this.access === "token")
            return `${this.production ? endpoints.TOKEN.PROD : endpoints.TOKEN.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
        if (this.access === "card")
            return `${this.production ? endpoints.CARD.PROD : endpoints.CARD.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
        if (this.access === "hello")
            return `${this.production ? endpoints.HELLO.PROD : endpoints.HELLO.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
        if (this.access === "reversal") {
            let url = `${this.production ? endpoints.REVERSE.PROD : endpoints.REVERSE.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
            url = url.split('payments/');
            return url[0] + 'payments/' + this.transactionId + '/' + url[1];
        }
        if (this.access === "capture") {
            let url = `${this.production ? endpoints.CAPTURE.PROD : endpoints.CAPTURE.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
            url = url.split('payments/');
            return url[0] + 'payments/' + this.transactionId + '/' + url[1];
        }
        if (this.access === "refund") {
            let url = `${this.production ? endpoints.REFUND.PROD : endpoints.REFUND.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
            url = url.split('payments/');
            return url[0] + 'payments/' + this.transactionId + '/' + url[1];
        }
        if (this.access === "refundCapture") {
            let url = `${this.production ? endpoints.REFUNDCAPTURE.PROD : endpoints.REFUNDCAPTURE.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
            url = url.split('captures/');
            return url[0] + 'captures/' + this.transactionId + '/' + url[1];
        }
        if (this.access === "processCredit")
            return `${this.production ? endpoints.PROCESSCREDIT.PROD : endpoints.PROCESSCREDIT.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
        if (this.access === "voidPayment") {
            let url = `${this.production ? endpoints.VOIDPAYMENT.PROD : endpoints.VOIDPAYMENT.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
            url = url.split('payments/');
            return url[0] + 'payments/' + this.transactionId + '/' + url[1];
        }
        if (this.access === "voidCapture") {
            let url = `${this.production ? endpoints.VOIDCAPTURE.PROD : endpoints.VOIDCAPTURE.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
            url = url.split('captures/');
            return url[0] + 'captures/' + this.transactionId + '/' + url[1];
        }
        if (this.access === "voidRefund") {
            let url = `${this.production ? endpoints.VOIDREFUND.PROD : endpoints.VOIDREFUND.SANDBOX}?${qs.stringify({ apikey: this.apikey })}`;
            url = url.split('refunds/');
            return url[0] + 'refunds/' + this.transactionId + '/' + url[1];
        }

    }
}

module.exports = Config;
