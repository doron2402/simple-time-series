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

const data_set1 = [
  {
    time_interval: "2019-09-01T00:17:00.000Z",
    body: {
      vtemp: 0.986,
      ph_ext: 7.311406,
      ph_int: 7.069915,
      gps_lat: -0.14335666666666666,
      gps_lng: -141.47697833333334,
      asvco2_id: 6,
      data_time: 1567297020
    },
    type: "data:set1",
    role: true
  },
  {
    time_interval: "2019-09-01T01:17:00.000Z",
    body: {
      vtemp: 0.988,
      ph_ext: 7.309773,
      ph_int: 6.966212,
      gps_lat: -0.13589500000000002,
      gps_lng: -141.48218833333334,
      asvco2_id: 6,
      data_time: 1567300620
    },
    type: "data:set2",
    role: true
  }
]
const data_set2 = [
  {
    time_interval: "2019-09-01T00:00:00.000Z",
    body: {
      cog: 60.4,
      sog: 0.314,
      vmg: 0.01,
      yaw: 54.8,
      roll: -1.9,
      pitch: 5,
      gps_lat: -0.1441185,
      gps_lng: -141.4768384,
    },
    type: "telemetry",
    role: true
  },
  {
    time_interval: "2019-09-01T00:01:00.000Z",
    body: {
      cog: 239,
      sog: 0.275,
      vmg: 0.01,
      yaw: 53,
      roll: 6.5,
      pitch: -1.7,
      gps_lat: -0.1439876,
      gps_lng: -141.4768896
    },
    type: "telemetry",
    role: true
  },
  {
    time_interval: "2019-09-01T00:02:00.000Z",
    body: {
      cog: 161.1,
      sog: 0.238,
      vmg: -0.1,
      yaw: 58.1,
      roll: -1.4,
      pitch: -0.3,
      gps_lat: -0.1437891,
      gps_lng: -141.476928
    },
    type: "telemetry",
    role: true
  },
  {
    time_interval: "2019-09-01T00:03:00.000Z",
    body: {
      cog: 13.2,
      sog: 0.345,
      vmg: -0.13,
      yaw: 59.8,
      roll: -6.6,
      pitch: -1.7,
      gps_lat: -0.1436269,
      gps_lng: -141.4769792
    },
    type: "telemetry",
    role: true
    },
    {
    time_interval: "2019-09-01T00:04:00.000Z",
    body: {
      cog: 283.9,
      sog: 0.465,
      vmg: -0.18,
      yaw: 56.2,
      roll: 4.1,
      pitch: -1.8,
      gps_lat: -0.1435004,
      gps_lng: -141.4770816
    },
    type: "telemetry",
    role: true
    },
    {
    time_interval: "2019-09-01T00:05:00.000Z",
    body: {
      cog: 62.9,
      sog: 0.378,
      vmg: -0.03,
      yaw: 57.7,
      roll: -11.4,
      pitch: 3.2,
      gps_lat: -0.1433553,
      gps_lng: -141.4771968
    },
    type: "telemetry",
    role: true
    },
    {
    time_interval: "2019-09-01T00:06:00.000Z",
    body: {
      cog: 302.5,
      sog: 0.493,
      vmg: 0.07,
      yaw: 56.4,
      roll: 4.9,
      pitch: 1.2,
      gps_lat: -0.1432143,
      gps_lng: -141.4772864
    },
    type: "telemetry",
    role: true
  },
  {
    time_interval: "2019-09-01T01:17:00.000Z",
    body: {
      cog: 999,
      sog: 0.493,
      vmg: 0.07,
      yaw: 56.4,
      roll: 4.9,
      pitch: 1.2,
      gps_lat: -0.1432143,
      gps_lng: -141.4772864
    },
    type: "telemetry",
    role: true
  },
];


Assert.equal(data_set1.length, 2);
Assert.equal(data_set2.length, 8);

var result = ts.mergeCollectionsByKey(data_set1, data_set2, { key: 'time_interval' });
Assert.equal(result.length, 9);
Assert.equal(result[8].body.cog, 999);
Assert.equal(result[8].body.vtemp, 0.988);
