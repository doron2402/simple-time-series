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
    timestamp: '2017-01-01T00:01:00.000Z',
    value: 1
  },
  {
    timestamp: '2017-01-01T00:02:00.000Z',
    value: 2
  },
  {
    timestamp: '2017-01-01T00:03:00.000Z',
    value: 3
  },
  {
    timestamp: '2017-01-01T00:04:00.000Z',
    value: 4
  },
  {
    timestamp: '2017-01-01T00:05:00.000Z',
    value: 5
  },
  {
    timestamp: '2017-01-01T00:06:00.000Z',
    value: 6
  },
  {
    timestamp: '2017-01-01T00:07:00.000Z',
    value: 7
  },
  {
    timestamp: '2017-01-01T00:08:00.000Z',
    value: 8
  },
  {
    timestamp: '2017-01-01T00:09:00.000Z',
    value: 9
  },
  {
    timestamp: '2017-01-01T00:10:00.000Z',
    value: 10
  },
  {
    timestamp: '2017-01-01T00:11:00.000Z',
    value: 11
  },
  {
    timestamp: '2017-01-01T00:12:00.000Z',
    value: 12
  },
  {
    timestamp: '2017-01-01T00:13:00.000Z',
    value: 13
  },
  {
    timestamp: '2017-01-01T00:14:00.000Z',
    value: 14
  },
  {
    timestamp: '2017-01-01T00:15:00.000Z',
    value: 15
  },
  {
    timestamp: '2017-01-01T00:16:00.000Z',
    value: 16
  },
  {
    timestamp: '2017-01-01T00:17:00.000Z',
    value: 17
  },
  {
    timestamp: '2017-01-01T00:18:00.000Z',
    value: 18
  },
  {
    timestamp: '2017-01-01T00:19:00.000Z',
    value: 19
  },
  {
    timestamp: '2017-01-01T00:20:00.000Z',
    value: 20
  },
  {
    timestamp: '2017-01-01T00:23:00.000Z',
    value: -10
  },
  {
    timestamp: '2017-01-01T00:26:00.000Z',
    value: -20
  }
];

var result = ts.mergeCollectionByTimestamp(collection,
  {
    start: '2017-01-01T00:00:00.000Z',
    end: '2017-01-01T00:25:00.000Z',
    interval: 5,
    timeIn: 'minutes',
    key: 'timestamp',
    dateFormat: 'iso'
  });


Assert.equal(result.length, 6);
Assert.equal(result[0].timestamp, '2017-01-01T00:00:00.000Z')
Assert.equal(result[0].timestamp_original, '2017-01-01T00:01:00.000Z')
Assert.equal(result[4].timestamp, '2017-01-01T00:20:00.000Z')
Assert.equal(result[4].timestamp_original, '2017-01-01T00:20:00.000Z')
Assert.equal(result[5].timestamp, '2017-01-01T00:25:00.000Z')
Assert.equal(result[5].timestamp_original, '2017-01-01T00:26:00.000Z')