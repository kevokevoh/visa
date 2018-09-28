const qs = require('qs');
const keysRequest = require('./keyRequest');
const verifyToken = require('./verifyToken');
const tokenizeCard = require('./tokenizeCard');
const processPayment = require('./processPayment');
const helloRequest = require('./helloRequest');
const constants = require('./constants');
const Config = require('./config');

function InitialiseVisa(options) {
    const config = new Config(options);
    return {
        constants,
        config,
        createKey: (opts, callback) => { keysRequest(config, opts, callback); },
        verifyToken,
        tokenizeCard: (opts, callback) => { tokenizeCard(config, opts, callback); },
        processPayment: (opts, callback) => { processPayment(config, opts, callback); },
        helloPost: (opts, callback) => { helloRequest(config, opts, callback); },
    };
}

module.exports = InitialiseVisa;

