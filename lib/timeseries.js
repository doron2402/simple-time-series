'use strict';


const {
  assign,
  isTimestampAreEqual,
  isTimestampAGreater,
  getTimestampDiff,
  generateTimeseries
} = require('./helpers');


/**
 * Return a collection with equal interval
 *
 * @param collection
 * @object options {Object}
 * @params options.start {Date} - start date
 * @params options.end {Date} - end date
 * @params options.key {String} - date key
 * @params options.interval {Int} - interval must be a number
 * @params options.timeIn {String} - timeIn
 * @params options.dateFormat {String} - date format (moment)
 * @params options.realTimestamp {String} - keep the original timestamp
 *
 */
exports.mergeCollectionByTimestamp = (collection, {
  start = null,
  end = null,
  key = 'timestamp',
  interval = 10,
  timeIn = 'seconds',
  dateFormat = 'iso',
  realTimestamp = 'timestamp_original'
}) => {

  // check if the given collection is empty
  if (collection.length === 0) {
    throw new Error('Collection is empty');
  }

  if (start === null) {
    start = collection[0][key];
  }
  if (end === null) {
    end = collection[collection.length - 1][key];
  }
  const timeseriesCollection = generateTimeseries({
    start,
    end,
    interval,
    timeIn,
    key,
    dateFormat
  });

  let timeSeriesIndex = 0;
  let index = 0;
  // Loop throw the collection
  while(collection[index] && timeseriesCollection[timeSeriesIndex]) {
    // Fetch the object from the collection without reference
    const obj = JSON.parse(JSON.stringify(collection[index]));
    // Get the original timestamp
    const objOriginalTime = obj[key];

    const currentTimestamp = timeseriesCollection[timeSeriesIndex][key];
    if (isTimestampAreEqual(currentTimestamp, objOriginalTime)) {
      timeseriesCollection[timeSeriesIndex] = assign({
        timestamp: timeseriesCollection[timeSeriesIndex][key],
        originalTimestamp: objOriginalTime,
        obj: JSON.parse(JSON.stringify(obj)),
        realTimestamp,
        key
      });
      timeSeriesIndex++;
      index++;
    }
    else if (timeseriesCollection[timeSeriesIndex][realTimestamp] === undefined) {
      timeseriesCollection[timeSeriesIndex] = assign({
        timestamp: timeseriesCollection[timeSeriesIndex][key],
        originalTimestamp: objOriginalTime,
        obj: JSON.parse(JSON.stringify(obj)),
        realTimestamp,
        key
      });
      index++;
    }
    else if (isTimestampAGreater(currentTimestamp, objOriginalTime)) {
      timeseriesCollection[timeSeriesIndex] = assign({
        timestamp: timeseriesCollection[timeSeriesIndex][key],
        originalTimestamp: objOriginalTime,
        obj: JSON.parse(JSON.stringify(obj)),
        realTimestamp,
        key
      });
      index++;
    }
    // objOriginalTime is greater than
    else if (!isTimestampAGreater(currentTimestamp, objOriginalTime)) {
      // find out the diff
      const valueA = Math.abs(getTimestampDiff(currentTimestamp, objOriginalTime));
      const originalTimestamp = timeseriesCollection[timeSeriesIndex][realTimestamp];
      const valueB = Math.abs(getTimestampDiff(currentTimestamp, originalTimestamp));
      if (valueA < valueB) {
        // Replace
        timeseriesCollection[timeSeriesIndex] = assign({
          timestamp: timeseriesCollection[timeSeriesIndex][key],
          originalTimestamp: objOriginalTime,
          obj: JSON.parse(JSON.stringify(obj)),
          realTimestamp,
          key
        });
        index++;
      } else {
        timeSeriesIndex++;
      }

    }
    else {
      console.error('You should never see this');
    }

  }

  return timeseriesCollection;

};
