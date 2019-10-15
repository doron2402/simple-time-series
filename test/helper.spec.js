'use strict';
const Assert = require('assert');
const helpers = require('../lib/helpers');

const collection = require('./mocks/collection_01');
let res;

res = helpers.sortByKey(collection, 'timestamp', 'asc');
Assert.equal(res[0].timestamp, '2016-12-31T23:59:50.000Z');

res = helpers.sortByKey(collection, 'timestamp');
Assert.equal(res[0].timestamp, '2016-12-31T23:59:50.000Z');


res = helpers.sortByKey(collection, 'timestamp', 'desc');
Assert.equal(res[0].timestamp, '2017-01-01T00:11:05.000Z', 'sorting DESC order is not working');

