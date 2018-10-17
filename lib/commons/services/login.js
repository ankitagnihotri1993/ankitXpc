const request = require('request-promise');
const UserURL = '/databases/{mydb}/collections/loginInfo?apiKey={apikey}';
const util = require('../utility.js');

module.exports = {
  ValidateAPIKey: async function (cfg) {
    var endPointUrl=cfg.baseUrl + UserURL.replace('{mydb}', cfg.myDB);
    var uri=endPointUrl.replace('{apikey}',cfg.apiKey);
    const requestOptions = {
      uri: uri,
      json: true
    };
    return await request.get(requestOptions).then(util.autoParse).catch(util.error);
  }
};