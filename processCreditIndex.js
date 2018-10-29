const visa = require('./initialiseVisa');
const keys =require('./keys');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "processCredit"
});

var options = {

    "clientReferenceInformation": {
        "code": "12345678"
    },
    "orderInformation": {
        "billTo": {
            "country": "US",
            "firstName": "Test",
            "lastName": "test",
            "phoneNumber": "9999999999",
            "address1": "test",
            "postalCode": "48104-2201",
            "locality": "Ann Arbor",
            "administrativeArea": "MI",
            "email": "test@cybs.com"
        },
        "amountDetails": {
            "totalAmount": "200",
            "currency": "usd"
        }
    },
    "paymentInformation": {
        "card": {
            "expirationYear": "2031",
            "number": "4111111111111111",
            "expirationMonth": "03",
            "type": "001"
        }
    }

};
token.processCredit(options, function(err, resp, data) {
    if (err) {
        // handle error
        console.error(err);
        return;
    }
    console.log(data);
});
