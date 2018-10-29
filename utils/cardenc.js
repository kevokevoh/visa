/* Copyright (c) 2018 by CyberSource */

const crypto = require('crypto');

function generateCardNumber(cardNumber, sharedSecret) {
  const hashString = crypto.createHmac('SHA256', sharedSecret).update(cardNumber).digest('hex');
  return hashString;
}

module.exports = generateCardNumber;
