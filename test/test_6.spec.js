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

const report_basic_data = [
  {
    "timestamp": "2019-05-08T17:00:00.000Z",
    "body": {
      "latitude": -50.198096,
      "longitude": 9.1755048,
      "timestamp": 1557334800,
      "course_over_ground": 117.2,
      "sog": 100
    },
    "type": "basic"
  },
  {
    "timestamp": "2019-05-08T17:01:00.000Z",
    "body": {
      "latitude": -50.198288,
      "longitude": 9.1767312,
      "timestamp": 1557334860,
      "course_over_ground": 99.3,
      "sog": 1.56,
      "roll": 1.1,
      "yaw": 105.7
    },
    "type": "basic"
  },
  {
    "timestamp": "2019-05-08T17:02:00.000Z",
    "body": {
      "latitude": -50.1984992,
      "longitude": 9.1778736,
      "timestamp": 1557334920,
      "course_over_ground": 105.2,
      "sog": 0.817,
      "roll": -6.4,
      "yaw": 108
    },
    "type": "basic"
  },
  {
    "timestamp": "2019-05-08T17:03:00.000Z",
    "body": {
      "latitude": -50.1986976,
      "longitude": 9.1790072,
      "timestamp": 1557334980,
      "course_over_ground": 102.3,
      "sog": 1.957,
      "roll": -5.5,
      "yaw": 105.4
    },
    "type": "basic"
  },
  {
    "timestamp": "2019-05-08T17:04:00.000Z",
    "body": {
      "latitude": -50.1989248,
      "longitude": 9.1801384,
      "timestamp": 1557335040,
      "course_over_ground": 106,
      "sog": 1.687,
      "roll": -1.6,
      "yaw": 109.6
    },
    "type": "basic",

  }
];

const report_payload_payload_data = [
  {
    "timestamp": "2019-05-08T17:00:00.000Z",
    "body": {
      "latitude": -50.198928,
      "longitude": 9.1801776,
      "timestamp": 1557334800,
      "do2_tc_phase_filtered": 0.592,
      "baro_pressure_filtered": 1001.2,
      "do2_temperature_filtered": 4.952
    },
    "type": "payload"

  },
  {
    "timestamp": "2019-05-08T17:01:00.000Z",
    "body": {
      "latitude": -50.1991104,
      "longitude": 9.1813224,
      "timestamp": 1557334860,
      "do2_tc_phase_filtered": 0.592,
      "baro_pressure_filtered": 1001.22,
      "do2_temperature_filtered": 4.958
    },
    "type": "payload"

  },
  {
    "timestamp": "2019-05-08T17:02:00.000Z",
    "body": {
      "latitude": -50.199312,
      "longitude": 9.1824832,
      "timestamp": 1557334920,
      "do2_tc_phase_filtered": 0.594,
      "baro_pressure_filtered": 1001.23,
      "do2_temperature_filtered": 4.705
    },
    "type": "payload"

  },
  {
    "timestamp": "2019-05-08T17:03:00.000Z",
    "body": {
      "latitude": -50.1995328,
      "longitude": 9.1836304,
      "timestamp_seconds": 1557334980,
      "do2_tc_phase_filtered": 0.593,
      "baro_pressure_filtered": 1001.24,
      "do2_temperature_filtered": 4.827
    },
    "type": "payload"
  },
  {
    "timestamp": "2019-05-08T17:04:00.000Z",
    "body": {
      "latitude": -50.1996928,
      "longitude": 9.1848216,
      "timestamp_seconds": 1557335040,
      "do2_tc_phase_filtered": 0.593,
      "baro_pressure_filtered": 1001.26,
      "do2_temperature_filtered": 4.873
    },
    "type": "payload"
  }
];

var result = ts.mergeCollectionsByKey(report_basic_data, report_payload_payload_data,{key: 'timestamp'});

Assert.equal(report_basic_data.length, 5);
Assert.equal(report_payload_payload_data.length, 5);
Assert.equal(result[0].body['do2_tc_phase_filtered'], 0.592);
Assert.equal(result[0].body['course_over_ground'], 117.2);

result.forEach((res) => {
  Assert.ok(res.body.course_over_ground);
  Assert.ok(res.body.sog);
  Assert.ok(res.body.do2_tc_phase_filtered);
  Assert.ok(res.body.baro_pressure_filtered);
});
