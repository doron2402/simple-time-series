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

const collectionA = [];

const collectionB = [{
  timestamp: '2017-01-01T00:02:00.000Z',
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
  timestamp: '2017-01-01T00:09:30.000Z',
  value: 10
}];


var result = ts.mergeCollectionsByKey(collectionA, collectionB,{key: 'timestamp'});

Assert.equal(collectionA.length, 0);
Assert.equal(collectionB.length, 7);
Assert.equal(result.length, 7);

