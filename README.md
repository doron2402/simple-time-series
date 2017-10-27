# TimeSeries

> For best practices and example checkout the tests

## API
  - Create timeseries data from one collection
  ```javascript
    ts.mergeCollectionByTimestamp(collection,
    {
      start: '2017-01-01T00:00:00.000Z',
      end: '2017-01-01T00:10:00.000Z',
      interval: 1,
      timeIn: 'minutes',
      key: 'timestamp',
      dateFormat: 'iso'
    });
  ```
  - Merge two collection by date key
  ```javascript
    ts.mergeCollectionsByKey(collectionA, collectionB,{key: 'timestamp'});
  ```

## Why?
  - You have a collection with dates and you want to break it to equal intervals. for example your data look like this
  ```javascript
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
  ```

  But you need it to be move it to 10 minutes intervals
  ```javascript
  [
     {
      timestamp: '2017-01-01T00:00:00.000Z',
      timestamp_original: '2017-01-01T00:01:00.000Z',
      sog: 10,
      cog: 10,
      wmg: 10
    },
    {
      timestamp: '2017-01-01T00:10:00.000Z',
      timestamp_original: '2017-01-01T00:09:00.000Z',
      sog: 20,
      cog: 20,
      wmg: 20
    },
    ...
  ]
  ```
  - I'm saving the original timestamp as `timestamp_original` for debugging purposes.

  ### The logic
    - Use the closest time to the time interval
    - If the time absolute value is greater than the interval move to the next interval, this mean if the interval is 1 min and the closest time to 13:00 is 13:02:10 I will skip `13:00` and `13:01`

  ## For more checkout the [tests](test)

  ## For feature request create a github issue.