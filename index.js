'use strict';


module.exports = {
  mergeCollectionByTimestamp: require('./lib/timeseries').mergeCollectionByTimestamp,
  mergeCollectionsByKey: require('./lib/merge').mergeCollectionsByKey
};
