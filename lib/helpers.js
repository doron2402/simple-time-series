'use strict';

const Hoek = require('hoek');
const Moment = require('moment');

/**
 * Helpers function
 */

const helpers = {};

/**
 * Merge two object,
 * {Object} objA
 * {Object} objB
 */
helpers.mergeObjects = (objA, objB) => {
  return Hoek.merge(objA, objB);
};


helpers.assign = ({timestamp, originalTimestamp, obj, realTimestamp = 'timestamp_original', key = 'timestamp' }) => {
  const tmp = obj;
  tmp[realTimestamp] = originalTimestamp
  tmp[key] = timestamp;
  return tmp;
};


helpers.areBothKeySet = (collectionA, collectionB, key) => {
  return helpers.isKeySet(collectionA, key) &&
  helpers.isKeySet(collectionB, key);
};


helpers.isKeySet = (coll, key) => {
  return coll && coll[key];
};


helpers.isTimestampAreEqual = (ts1, ts2) => {
  helpers.getTimestampDiff(ts1,ts2) === 0;
};


helpers.isTimestampAGreater = (ts1, ts2) => {
  helpers.getTimestampDiff(ts1,ts2) > 0;
};


helpers.getTimestampDiff = (ts1, ts2) => {
  return Moment(ts1).diff(Moment(ts2), 'milliseconds');
};


/**
* {Date/String} start = date for example: '2017-01-01T00:00:00.000Z'
* {Date/String} end = date for example: '2017-01-01T00:00:00.000Z'
* {Integer} interval = default to 10 must be an integer
* {String} timeIn = years/month/days/hours/minutes/seconds/milliseconds
* {String} key => this will be the key in the collection that get returned
* {String} dateFormat => iso/unix(seconds)
*/
helpers.generateTimeseries = ({start, end, interval = 10, timeIn = 'seconds', key = 'timestamp', dateFormat = 'iso'}) => {
 let startDate = null; //Start date moment object
 let endDate = null; //End date moment object

 try {
   startDate = Moment(start);
   endDate = Moment(end);
   interval = parseInt(interval);
 } catch (e) {
   console.error(e);
   return e;
 }

 startDate.add()


 const datesArray = [];

 while (startDate.diff(endDate) <= 0) {
   const tmp = {};
   if (dateFormat === 'unix') {
     tmp[key] = startDate.unix();
   } else if(dateFormat === 'iso') {
     tmp[key] = startDate.toISOString();
   } else {
     // Pass a format
     tmp[key] = startDate.format(dateFormat);
   }

   datesArray.push(tmp);
   startDate.add(interval, timeIn);
 }

 return datesArray;
};

module.exports = helpers;
