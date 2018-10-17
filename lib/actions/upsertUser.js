'use strict';
const messages = require('elasticio-node').messages;
const upserUser = require('../commons/services/userService.js');
exports.process = processTrigger;

/** *
 * @param msg incoming messages which is empty for triggers
 * @param 
 * 
 *  object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password
 */
async function processTrigger(msg, cfg) {

  const self = this;
  var result = await upserUser.upsertUser(msg.body,cfg);

  self.emit('data', messages.newMessageWithBody(result));
}
