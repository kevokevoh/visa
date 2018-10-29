const visa = require('./initialiseVisa');
const keys =require('./keys');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "voidPayment",
    transactionId: '5408029746656236704005'
});
const options = {

    "clientReferenceInformation": {
        "code": "test_void"
    }

};
token.voidPayment(options, function(err, resp, data) {
    if (err) {
        // handle error
        console.error(err);
        return;
    }
    console.log(data);
});
