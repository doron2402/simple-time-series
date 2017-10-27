'use strict';

const ts = require('../index');

const collection = [
  {
    timestamp: '2017-01-01T00:01:00.000Z',
    sog: 10,
    cog: 10,
    wmg: 10
  },
  {
    timestamp: '2017-01-01T00:09:00.000Z',
    sog: 20,
    cog: 20,
    wmg: 20
  },
  {
    timestamp: '2017-01-01T00:11:00.000Z',
    sog: 30,
    cog: 30,
    wmg: 30
  },
  {
    timestamp: '2017-01-01T00:28:00.000Z',
    sog: 40,
    cog: 40,
    wmg: 40
  },
  {
    timestamp: '2017-01-01T00:39:00.000Z',
    sog: 50,
    cog: 50,
    wmg: 50
  },
  {
    timestamp: '2017-01-01T00:55:00.000Z',
    sog: 60,
    cog: 60,
    wmg: 60
  }
]

const results = ts.mergeCollectionByTimestamp(collection,
  {
    start: '2017-01-01T00:00:00.000Z',
    end: '2017-01-01T01:00:00.000Z',
    interval: 10,
    timeIn: 'minutes',
    key: 'timestamp',
    dateFormat: 'iso'
  }
);

