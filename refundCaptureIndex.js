const visa = require('./initialiseVisa');
const keys =require('./keys');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "refundCapture",
    transactionId: '5405462460456018604004'
});
const options = {

    "clientReferenceInformation": {
        "code": "Testing-VDP-Payments-Refund"
    },
    "orderInformation": {
        "amountDetails": {
            "totalAmount": "102.21",
            "currency": "USD"
        }
    }

};
token.refundCapture(options, function(err, resp, data) {
    if (err) {
        // handle error
        console.error(err);
        return;
    }
    console.log(data);
});
