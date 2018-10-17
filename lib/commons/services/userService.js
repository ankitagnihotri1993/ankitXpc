const request = require('request-promise');
const UserURL = '/databases/{mydb}/collections/userInfo?apiKey={apikey}';
const util = require('../utility.js');

module.exports = {
  getAllUserInfo: async function (cfg) {

    var endPointUrl=cfg.baseUrl + UserURL.replace('{mydb}', cfg.myDB);
    var uri=endPointUrl.replace('{apikey}',cfg.apiKey);
    const requestOptions = {
      uri: uri,
      json: true
    };
    return await request.get(requestOptions).then(util.autoParse).catch(util.error);
  },
  upsertUser: async function (body, cfg) {

    var endPointUrl=cfg.baseUrl + UserURL.replace('{mydb}', cfg.myDB);
    var uri=endPointUrl.replace('{apikey}',cfg.apiKey);
    const requestOptions = {
      uri: uri,
      body: body,
      json: true
    };
    return await request.post(requestOptions).then(util.autoParse).catch(util.error);
  }
};
