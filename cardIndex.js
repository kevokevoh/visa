const visa = require('./initialiseVisa');
const keys =require('./keys');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "token"
});

var options = {
    "keyId": "08GdpX3Vu3hX9CB8k2RB6FP548oc7DBH",
    "cardDetails": {
        "cardNumber": "ejbhIpMEgYnIODcB4//rrVxMHrqHcnLD6pDRF36jlEk72bETAfiOoxmpI9pGiidqMmkgAnvJfVgR3CLAV5EdG4Mu5IWK26QRnVtwvsVEUtpah7IylbxV9MLvXh2FjIJskKCWNLidb1G4PN5963hnV3IoZd2pF99JwV9lPhOHT5ymlNeg7sTzQQDN1I0/yJApds+t79hl9QVp4PusUDfSsPQTtR2frzlH4V3W+XjHDhmy5oNhiUaVxv27cyG1SWeCKkVC9tc8zLy4pvlgoplrLV8JRaS9hfWalJjv2xtk3DXmNT2urtFv2evcI3LM/S29KlJjPXZcBp0IYyB/taunCA==",
        "cardType": "001",
        "cardExpirationYear": "2031",
        
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



