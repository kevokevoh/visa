const visa = require('./initialiseVisa');
const keys =require('./keys');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "card"
});

var options = {
    "clientReferenceInformation": {
        "code": "TC50171_3"
    },
    "processingInformation": {
        "commerceIndicator": "internet"
    },
    "aggregatorInformation": {
        "subMerchant": {
            "cardAcceptorID": "1234567890",
            "country": "US",
            "phoneNumber": "650-432-0000",
            "address1": "900 Metro Center",
            "postalCode": "94404-2775",
            "locality": "Foster City",
            "name": "Visa Inc",
            "administrativeArea": "CA",
            "region": "PEN",
            "email": "test@cybs.com"
        },
        "name": "V-Internatio",
        "aggregatorID": "123456789"
    },
    "orderInformation": {
        "billTo": {
            "country": "US",
            "lastName": "VDP",
            "address2": "Address 2",
            "address1": "201 S. Division St.",
            "postalCode": "48104-2201",
            "locality": "Ann Arbor",
            "administrativeArea": "MI",
            "firstName": "RTS",
            "phoneNumber": "999999999",
            "district": "MI",
            "buildingNumber": "123",
            "company": "Visa",
            "email": "test@cybs.com"
        },
        "amountDetails": {
            "totalAmount": "102.21",
            "currency": "USD"
        }
    },
    "paymentInformation": {
        "card": {
            "expirationYear": "2031",
            "number": "5555555555554444",
            "securityCode": "123",
            "expirationMonth": "12",
            "type": "002"
        }
    }
};
token.processPayment(options, function(err, resp, data) {
    if (err) {
        // handle error
        console.error(err);
        return;
    }
    console.log(data);
});



