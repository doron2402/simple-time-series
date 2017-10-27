'use strict';

const Moment = require('moment');


const {
  areBothKeySet,
  isKeySet,
  mergeObjects
 } = require('./helpers');

/**
 * {Array{Object}} collectionA
 * {Array{Object}} collectionB
 * {Object}
 *  {String} key - common key to merge the collections
 */
exports.mergeCollectionsByKey = (collectionA, collectionB, { key = 'timestamp' }) => {

  // Check if one of the collection is empty
  if (collectionA.length === 0) {
    return collectionB;
  }

  if (collectionB.length === 0) {
    return collectionA;
  }

  const newCollection = [];
  let a = 0;
  let b = 0;

  const inc = (index, maxNumber) => {
    if (index < maxNumber) {
      index++;
    }
    return index;
  }


  while(a <= collectionA.length-1 || b <= collectionB.length-1) {
    if (areBothKeySet(collectionA[a], collectionB[b], key) &&
        Moment(collectionA[a][key]).diff(Moment(collectionB[b][key])) > 0) {
      // Merge Object from collection B
      newCollection.push(collectionB[b])
      b = inc(b, collectionB.length);
    }
    else if (areBothKeySet(collectionA[a], collectionB[b], key) &&
              Moment(collectionA[a][key]).diff(Moment(collectionB[b][key])) < 0) {
      // Merge Object from collection A
      newCollection.push(collectionA[a])
      a = inc(a, collectionA.length);
    }
    else if (isKeySet(collectionA, key)) {
      newCollection.push(collectionA[a])
      a = inc(a, collectionA.length);
    }
    else if (isKeySet(collectionB, key)) {
      newCollection.push(collectionB[b])
      b = inc(b, collectionB.length);
    }
    else {
      // Equal Merge the objects
      const tmp = mergeObjects(collectionA[a], collectionB[b]);
      newCollection.push(tmp);
      a = inc(a, collectionA.length);
      b = inc(b, collectionB.length);
    }
  }

  return newCollection;
};