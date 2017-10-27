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

// report_payload:payload
const collectionA = [
  {
    "time_interval": "2019-05-08T17:00:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.2,
      "latitude": -50.198928,
      "longitude": 9.1801776
    },
    "type": "payload"
  },
  {
    "time_interval": "2019-05-08T17:01:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.22,
      "latitude": -50.1991104,
      "longitude": 9.1813224
    },
    "type": "payload"
  },
  {
    "time_interval": "2019-05-08T17:02:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.23,
      "latitude": -50.199312,
      "longitude": 9.1824832
    },
    "type": "payload"

  },
  {
    "time_interval": "2019-05-08T17:03:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.24,
      "latitude": -50.1995328,
      "longitude": 9.1836304
    },
    "type": "payload"

  },
  {
    "time_interval": "2019-05-08T17:04:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.26,
      "latitude": -50.1996928,
      "longitude": 9.1848216
    },
    "type": "payload"

  },
  {
    "time_interval": "2019-05-08T17:05:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.26,
      "latitude": -50.1998592,
      "longitude": 9.1859464
    },
    "type": "payload"

  },
  {
    "time_interval": "2019-05-08T17:06:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.28,
      "latitude": -50.2000416,
      "longitude": 9.1870024
    },
    "type": "payload"

  },
  {
    "time_interval": "2019-05-08T17:07:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.29,
      "latitude": -50.2002336,
      "longitude": 9.1881024
    },
    "type": "payload"

  },
  {
    "time_interval": "2019-05-08T17:08:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.3,
      "latitude": -50.2004,
      "longitude": 9.189224
    },
    "type": "payload"

  },
  {
    "time_interval": "2019-05-08T17:09:00.000Z",
    "body": {
      "baro_pressure_filtered": 1001.3,
      "latitude": -50.2005664,
      "longitude": 9.1903008
    },
    "type": "payload"

  }
];

const collectionB = [
  {
    "time_interval": "2019-05-08T17:00:00.000Z",
    "body": {
      "cog": 117.2,
      "sog": 1.587,
      "yaw": 99.1,
      "roll": 6.1,
      "pitch": 5.5,
      "latitude": -50.198096,
      "longitude": 9.1755048,
      "cpu_role": "master",
      "wing_yaw": 100.2,
      "data_time": 1557334800,
      "roll_peak": 23,
      "wind_side": -1,
      "pitch_peak": -12.1,
      "wing_angle": 0.5,
      "wing_turns": -3,
      "can_flags_0": 0,
      "can_flags_1": 0,
      "log_interval": 1000,
      "modem_cmd_id": 1286581,
      "rudder_angle": 2.7,
      "saildrone_id": 1020,
      "sailing_mode": "compass",
      "wind_dir_nav": 312.3,
      "battery_1_soc": 259206,
      "battery_2_soc": 259110,
      "battery_3_soc": 251971,
      "battery_4_soc": 252072,
      "roll_filtered": 4.3,
      "sailing_state": "compass_cruise",
      "operation_mode": "deployed",
      "pitch_filtered": 2.8,
      "data_time_seconds": 1557334800,
      "distance_traveled": 489499584,
      "sailing_condition": "compass_same",
      "transmit_interval": 600000,
      "data_origin_source": 3,
      "primary_nav_cmd_id": 1278880,
      "override_nav_cmd_id": -1,
      "data_origin_location": "hull",
      "gps_magnetic_variation": 333.8,
      "gps_time": null,
      "light_brightness": null,
      "vmg": null,
      "wing_pitch": null,
      "battery_8_soc": null,
      "wing_roll": null,
      "distance_to_waypoint": null,
      "battery_5_soc": null,
      "battery_7_soc": null,
      "battery_6_soc": null,
      "next_waypoint_index": null,
      "thruster_speed": null,
      "report_id": null,
      "tail_angle": null,
      "ais_silent": null
    },
    "type": "report:basic",

  },
  {
    "time_interval": "2019-05-08T17:01:00.000Z",
    "body": {
      "cog": 99.3,
      "sog": 1.56,
      "yaw": 105.7,
      "roll": 1.1,
      "pitch": 3.7,
      "latitude": -50.198288,
      "longitude": 9.1767312
    },
    "type": "report:basic",

  },
  {
    "time_interval": "2019-05-08T17:02:00.000Z",
    "body": {
      "cog": 105.2,
      "sog": 0.817,
      "yaw": 108,
      "roll": -6.4,
      "pitch": -3.3,
      "latitude": -50.1984992,
      "longitude": 9.1778736
    }
  },
  {
    "time_interval": "2019-05-08T17:03:00.000Z",
    "body": {
      "cog": 102.3,
      "sog": 1.957,
      "yaw": 105.4,
      "roll": -5.5,
      "pitch": 6.5,
      "latitude": -50.1986976,
      "longitude": 9.1790072
    }
  },
  {
    "time_interval": "2019-05-08T17:04:00.000Z",
    "body": {
      "cog": 106,
      "sog": 1.687,
      "yaw": 109.6,
      "roll": -1.6,
      "pitch": -1.1,
      "latitude": -50.1989248,
      "longitude": 9.1801384
    }
  },
  {
    "time_interval": "2019-05-08T17:05:00.000Z",
    "body": {
      "cog": 97.9,
      "sog": 1.532,
      "yaw": 94,
      "roll": 7.2,
      "pitch": 1.1,
      "latitude": -50.1991072,
      "longitude": 9.1813048
    }
  },
  {
    "time_interval": "2019-05-08T17:06:00.000Z",
    "body": {
      "cog": 99.8,
      "sog": 1.645,
      "yaw": 108.6,
      "roll": -5.9,
      "pitch": -0.3,
      "latitude": -50.1993088,
      "longitude": 9.182456
    }
  },
  {
    "time_interval": "2019-05-08T17:07:00.000Z",
    "body": {
      "cog": 130.2,
      "sog": 1.395,
      "yaw": 107.7,
      "roll": -5.2,
      "pitch": 0.7,
      "latitude": -50.1995296,
      "longitude": 9.1836016
    }
  },
  {
    "time_interval": "2019-05-08T17:08:00.000Z",
    "body": {
      "cog": 93.9,
      "sog": 1.677,
      "yaw": 104.2,
      "roll": 3,
      "pitch": 3.7,
      "latitude": -50.1996896,
      "longitude": 9.1848048
    }
  },
  {
    "time_interval": "2019-05-08T17:09:00.000Z",
    "body": {
      "cog": 88.9,
      "sog": 1.168,
      "yaw": 102.2,
      "roll": 6.5,
      "pitch": -2.7,
      "latitude": -50.199856,
      "longitude": 9.1859216
    }
  }
];


var result = ts.mergeCollectionsByKey(collectionA, collectionB,{key: 'time_interval'});

Assert.equal(collectionA.length, 10);
Assert.equal(collectionB.length, 10);
Assert.equal(result.length, 10);

