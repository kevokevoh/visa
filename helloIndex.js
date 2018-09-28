const visa = require('./initialiseVisa');
const keys =require('./keys');

var token = visa({
    // auth credentials
    apikey: keys.apiKey,
    sharedSecret: keys.sharedSecret,
    // test environment switch
    production: false,
    access: "hello",
});

var options = "";

token.helloPost(options, function(err, resp, key) {
    if (err) {
        // handle error
        console.error(err);
        return (err);
    }
    console.log(key);
});

