'use strict';
const messages = require('elasticio-node').messages;
const getAllUser = require('../commons/services/userService.js');
const utility = require('../commons/utility.js');
exports.process = processTrigger;

/***
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password
 * @param snapshot object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password
 */
async function processTrigger(msg, cfg,snapshot) {
  var self = this;
  var result = await getAllUser.getAllUserInfo(cfg);
  var lastModified = snapshot.lastModified || '';
  var filterResult = utility.filterDataBasedOnModifiedDate(result, lastModified);
  snapshot.lastModified = utility.getMaxDate(result);
  if(!utility.isEmpty(filterResult)){
  filterResult.forEach(element => {

   // console.log('data', messages.newMessageWithBody(element));
   self.emit('data', messages.newMessageWithBody(element));
  });}
 self.emit('end');
}
