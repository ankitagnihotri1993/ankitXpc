'use strict';
const login = require('../himanshuXPC/lib/commons/services/login.js');

module.exports = verify;
/***
 * @param credentials object to retrieve apiKey from
 * @returns Promise sending HTTP request and resolving its response
 */
async function verify(credentials) 
{
  var result = await login.ValidateAPIKey(credentials);

console.log(JSON.stringify( result));
  
  if (credentials.apiKey === result.ApiKey) {
    return true;
  }
  else {
    throw new Error('Invalid API Key');
  }
}