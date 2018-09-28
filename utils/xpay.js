/* Copyright (c) 2018 by CyberSource */

const crypto = require('crypto');

function generateXPayToken(timestamp, resourcePath, queryParams, postBody, sharedSecret) {
  const message = timestamp + resourcePath + queryParams + postBody;
  const hashString = crypto.createHmac('SHA256', sharedSecret).update(message).digest('hex');
  return `xv2:${timestamp}:${hashString}`;
}

module.exports = generateXPayToken;
