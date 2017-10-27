'use strict';

const Moment = require('moment');
const ts = {};

/**
 * {Date/String} start = date for example: '2017-01-01T00:00:00.000Z'
 * {Date/String} end = date for example: '2017-01-01T00:00:00.000Z'
 * {Integer} interval = default to 10 must be an integer
 * {String} timeIn = years/month/days/hours/minutes/seconds/milliseconds
 * {String} key => this will be the key in the collection that get returned
 * {String} dateFormat => iso/unix(seconds)
 */
ts.generateTimeseries = ({start, end, interval = 10, timeIn = 'seconds', key = 'timestamp', dateFormat = 'iso'}) => {
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
}


ts.mergeCollectionByTimestamp = (collection, { start = null, end = null, key = 'timestamp', interval = 10, timeIn = 'seconds', dateFormat = 'iso' }) => {
  if (collection.length === 0) {
    throw new Error('Collection is empty');
  }
  const realTimestamp = 'timestamp_original';
  if (start === null) {
    start = collection[0][key];
  }
  if (end === null) {
    end = collection[collection.length - 1][key];
  }
  const timeseriesCollection = ts.generateTimeseries({ start, end, interval, timeIn, key, dateFormat });
  const newCollection = [];
  let timeSeriesIndex = 0;
  collection.forEach((obj, index) => {
    const objOriginalTime = obj[key];
    const absoluteDiffTimeSeriesAndObject = Math.abs(Moment(timeseriesCollection[timeSeriesIndex][key]).diff(Moment(objOriginalTime), timeIn));
    if (absoluteDiffTimeSeriesAndObject < interval) {
      if (timeseriesCollection[timeSeriesIndex][realTimestamp] === undefined) {
        const ts = timeseriesCollection[timeSeriesIndex][key];
        timeseriesCollection[timeSeriesIndex] = obj;
        timeseriesCollection[timeSeriesIndex][realTimestamp] = objOriginalTime;
        timeseriesCollection[timeSeriesIndex][key] = ts;
      }
      if (
        timeseriesCollection[timeSeriesIndex][realTimestamp] &&
        Math.abs(Moment(timeseriesCollection[timeSeriesIndex][key]).diff(Moment(timeseriesCollection[timeSeriesIndex][realTimestamp]))) > Math.abs(Moment(timeseriesCollection[timeSeriesIndex][key]).diff(obj[key]))
      ) {
        const ts = timeseriesCollection[timeSeriesIndex][key];
        timeseriesCollection[timeSeriesIndex] = obj;
        timeseriesCollection[timeSeriesIndex][realTimestamp] = objOriginalTime;
        timeseriesCollection[timeSeriesIndex][key] = ts;
      } else {
        timeSeriesIndex++;
      }
    } else {
      timeSeriesIndex++;
    }
  });


  console.log(timeseriesCollection);
  return timeseriesCollection;

};

module.exports = ts;