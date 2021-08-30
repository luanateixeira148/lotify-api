// // using API
// // https://developers.google.com/maps/documentation/javascript/reference/geometry#spherical.computeDistanceBetween
// // using JS
// https://www.npmjs.com/package/geolib

const { getDistance }  = require('geolib');
// Calculates the distance between two geo coordinates.

// This function takes up to 3 arguments. First 2 arguments must be valid GeolibInputCoordinates (e.g. {latitude: 52.518611, longitude: 13.408056}). Coordinates can be in sexagesimal or decimal format. The third argument is accuracy (in meters). By default the accuracy is 1 meter. If you need a more accurate result, you can set it to a lower value, e.g. to 0.01 for centimeter accuracy. You can set it higher to have the result rounded to the next value that is divisible by your chosen accuracy (e.g. 25428 with an accuracy of 100 becomes 25400).

// SELECT d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon
// FROM devices d
// JOIN tasks t ON d.id = t.device_id
// JOIN locations l ON t.location_id = l.id
// LIMIT 2;

//       d_lat       |        d_lon        |       l_lat        |        l_lon
// -------------------+---------------------+--------------------+---------------------
// 49.28116195176276 | -123.13151283081807 | 49.218687832584145 | -122.95636983061888
//  49.2638967154614 | -123.15629104616103 |  49.22731068589623 |  -123.0001020189783


const test = getDistance(
  { latitude: 49.28116195176276, longitude: -123.13151283081807 },
  { latitude: 49.218687832584145, longitude: -122.95636983061888 }
);

console.log(test);

//function that calculates for one of the records - loop thru the records.

/** This file contains database helper functions **/

// Connect to the database
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'lotify'
});

/// Distance

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

// const getLatLons = (taskId) => {
//   return pool //return the whole promise to enable the .then fxn
//     .query(`
//       SELECT d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon
//       FROM devices d
//       JOIN tasks t ON d.id = t.device_id
//       JOIN locations l ON t.location_id = l.id
//       WHERE task.id = $1`, [taskId])
//     .then((result) => {
//       return result.rows[0]; //return when the promise is resolved to enable the value inside .then
//     })
//     .catch((err) => {
//       console.error(err.message);
//       return null;
//     });
// };

// exports.getUserWithEmail = getUserWithEmail;

