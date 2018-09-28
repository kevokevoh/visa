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
    }
}

module.exports = Config;
