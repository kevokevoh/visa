flex = require('@cybersource/flex-sdk-web');
const resp = {
    keyId: '08I8dkdbN6CQE4YK8HApWNRseHF1pREf',
    der: 
    { format: 'X.509',
      algorithm: 'RSA',
      publicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiowzmBds92F2lc6r5Lw4XT3lpTmTATPb0PW/SuWSZKMEi+84gilSZOvs0FnMWU79bhJuOmWVdfCHgNa9SbRAeju+FooCQ4eYIkldJ9LKCzt6Z9QYT3sYPIADxNzTawYjeHmUdQ6N9VmJRHpQL04b6e9V0/U6ObJJaVhIToX17t59KP1M0Kys1t6MijyLbSHHdxHgbijiAvrJ367hxjWP3b9wvgOOd82jWhz4KvESkTOVUrbdPXhAEhdI4E5PwldD9vhaL1Ya2V0e9RZT913XZsRrZTern8rIXrTEtN33hBN50c2nOW4vQvrKR6RreHkhDPFmF6Oa2NnFeZKzdVEg0wIDAQAB' },
    jwk: 
    { kty: 'RSA',
      use: 'enc',
      kid: '08I8dkdbN6CQE4YK8HApWNRseHF1pREf',
      n: 'iowzmBds92F2lc6r5Lw4XT3lpTmTATPb0PW_SuWSZKMEi-84gilSZOvs0FnMWU79bhJuOmWVdfCHgNa9SbRAeju-FooCQ4eYIkldJ9LKCzt6Z9QYT3sYPIADxNzTawYjeHmUdQ6N9VmJRHpQL04b6e9V0_U6ObJJaVhIToX17t59KP1M0Kys1t6MijyLbSHHdxHgbijiAvrJ367hxjWP3b9wvgOOd82jWhz4KvESkTOVUrbdPXhAEhdI4E5PwldD9vhaL1Ya2V0e9RZT913XZsRrZTern8rIXrTEtN33hBN50c2nOW4vQvrKR6RreHkhDPFmF6Oa2NnFeZKzdVEg0w',
      e: 'AQAB' }
};


const options = {
    kid: resp.jwk.kid,
    keystore: resp.jwk,
    cardInfo: {
      cardNumber: "4111 1111 1111 1111",
      cardType: "001",
    },
    production: false // without specifying this tokens are created in test env
};
flex.createToken(options, (response) => {
    if (response.error) {
      alert('There has been an error!');
      console.log(response);
      return;
    }
});
