const helloRequest = require('./helloRequest');
const keysRequest = require('./keyRequest');
const verifyToken = require('./verifyToken');
const tokenizeCard = require('./tokenizeCard');
const processPayment = require('./processPayment');
const authoriseReversal = require('./authoriseReversal');
const capturePayment = require('./capturePayment');
const refundPayment = require('./refundPayment');
const refundCapture = require('./refundCapture');
const processCredit = require('./processCredit');
const voidPayment = require('./voidPayment');
const voidCapture = require('./voidCapture');
const voidRefund = require('./voidRefund');
const constants = require('./constants');
const Config = require('./config');

function InitialiseVisa(options) {
    const config = new Config(options);
    return {
        constants,
        config,
        helloPost: (opts, callback) => { helloRequest(config, opts, callback); },
        createKey: (opts, callback) => { keysRequest(config, opts, callback); },
        verifyToken,
        tokenizeCard: (opts, callback) => { tokenizeCard(config, opts, callback); },
        processPayment: (opts, callback) => { processPayment(config, opts, callback); },
        authoriseReversal: (opts, callback) => { authoriseReversal(config, opts, callback); },
        capturePayment: (opts, callback) => { capturePayment(config, opts, callback); },
        refundPayment: (opts, callback) => { refundPayment(config, opts, callback); },
        refundCapture: (opts, callback) => { refundCapture(config, opts, callback); },
        processCredit: (opts, callback) => { processCredit(config, opts, callback); },
        voidPayment: (opts, callback) => { voidPayment(config, opts, callback); },
        voidCapture: (opts, callback) => { voidCapture(config, opts, callback); },
        voidRefund: (opts, callback) => { voidRefund(config, opts, callback); },
    };
}

module.exports = InitialiseVisa;

