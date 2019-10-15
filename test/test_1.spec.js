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

const collection = require('./mocks/collection_01');

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