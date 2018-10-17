const _ = require('underscore');

module.exports = {
  autoParse: function (body  ) {
    console.log('body' + JSON.stringify(body));
    return body;
  },
  error: function (reason) {
    console.log('Oops! Error occurred - ', reason);
  },
  filterDataBasedOnModifiedDate: function (result, lastModifiedDate) {

    console.log(('Snapshot : %s'), lastModifiedDate);

    var filterResult;
    if (this.isEmpty(lastModifiedDate)) {
      filterResult = result;
    }
    else {
      filterResult = result.filter(res => (new Date(res.modified_date) > new Date(lastModifiedDate)));
    }
    return filterResult;
  },
  isEmpty: function (value) {
      return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null || value.length === 0;
  },
  getMaxDate: function (result) {

      if (this.isEmpty(result)) return;

      var modifiedObj = _.max(result, function (obj) {
          return new Date(obj.modified).getTime();
      });
      return modifiedObj.modified;
  }
};
