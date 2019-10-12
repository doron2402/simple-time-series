'use strict';
const Assert = require('assert');
/**
 *
 * E2E test
 * Having a collection with 20 items
 * {
 *    timestamp: {DATE},
 *    value: {INTEGER}
 * },...
 */
const ts = require('../index');

const collection = [
  {
    timestamp: '2016-12-31T23:59:50.000Z',
    value: 1
  },
  {
    timestamp: '2017-01-01T00:00:30.000Z',
    value: 2
  },
  {
    timestamp: '2017-01-01T00:02:00.000Z',
    value: 3
  },
  {
    timestamp: '2017-01-01T00:03:00.000Z',
    value: 4
  },
  {
    timestamp: '2017-01-01T00:03:55.000Z',
    value: 5
  },
  {
    timestamp: '2017-01-01T00:04:15.000Z',
    value: 6
  },
  {
    timestamp: '2017-01-01T00:05:03.000Z',
    value: 7
  },
  {
    timestamp: '2017-01-01T00:05:10.000Z',
    value: 8
  },
  {
    timestamp: '2017-01-01T00:06:00.000Z',
    value: 9
  },
  {
    timestamp: '2017-01-01T00:07:00.000Z',
    value: 10
  },
  {
    timestamp: '2017-01-01T00:08:00.000Z',
    value: 11
  },
  {
    timestamp: '2017-01-01T00:08:50.000Z',
    value: 12
  },
  {
    timestamp: '2017-01-01T00:09:05.000Z',
    value: 13
  },
  {
    timestamp: '2017-01-01T00:09:59.000Z',
    value: 14
  },
  {
    timestamp: '2017-01-01T00:10:00.000Z',
    value: 15
  },
  {
    timestamp: '2017-01-01T00:10:01.000Z',
    value: 16
  },
  {
    timestamp: '2017-01-01T00:10:10.000Z',
    value: 17
  },
  {
    timestamp: '2017-01-01T00:10:16.000Z',
    value: 18
  },
  {
    timestamp: '2017-01-01T00:11:00.000Z',
    value: 19
  },
  {
    timestamp: '2017-01-01T00:11:05.000Z',
    value: 20
  }
];

var result = ts.mergeCollectionByTimestamp(collection,
  {
    start: '2017-01-01T00:00:00.000Z',
    end: '2017-01-01T00:10:00.000Z',
    interval: 1,
    timeIn: 'minutes',
    key: 'timestamp',
    dateFormat: 'iso'
  });

const LAST_RESULT = result.length - 1;
const LAST_COLLECTION = collection.length - 1;
Assert.notDeepEqual(collection[LAST_COLLECTION].value, result[LAST_RESULT]);
Assert.equal(collection[14].value, result[LAST_RESULT].value);
Assert.equal(result.length, 11);