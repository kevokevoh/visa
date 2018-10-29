const visa = require('./initialiseVisa');
const generateCardNumber = require('./utils/cardenc');
const keys =require('./keys');
var crypto = require('crypto');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "token"
});

const cardNumber = '4111111111111111';
var hash = crypto.createHash('sha256').update(cardNumber).digest('hex');

console.log(hash);


var options = {
    "keyId": "08DNdjgX7XdtyLip3g3ZAY2q0KxJnLPH",
    "cardInfo": {
        "cardNumber": hash,
        "cardType": "001"
    }
};
token.tokenizeCard(options, function(err, resp, data) {
    if (err) {
        // handle error
        console.error(err);
        return;
    }
    console.log(data);
});



