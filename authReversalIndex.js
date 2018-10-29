const visa = require('./initialiseVisa');
const keys =require('./keys');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "reversal",
    transactionId: '5405462460456018604004'
});
const options = {
    "clientReferenceInformation": {
        "code": "TC50171_3"
    },
    "reversalInformation": {
        "reason": "testing",
        "amountDetails": {
            "totalAmount": "102.21"
        }
    }

}
token.authoriseReversal(options, function(err, resp, data) {
    if (err) {
        // handle error
        console.error(err);
        return;
    }
    console.log(data);
});
