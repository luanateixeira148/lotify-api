/** This file contains database helper functions **/

// https://www.npmjs.com/package/geolib
const { getDistance }  = require('geolib');


// function that calculates for one of the records - loop thru the records.
const calculateDistance = function(arr) {
  let result = [];
  for (let obj of arr) {
    console.log(obj.id);
    let distance = getDistance(
      { latitude: obj.d_lat, longitude: obj.d_lon},
      { latitude: obj.l_lat, longitude: obj.l_lon}
    );
    distance = Math.round(distance / 1000 * 10) / 10;
    result.push({...obj, distance});
    // return result;
  }
  return result;
};
exports.calculateDistance = calculateDistance;

// Connect to the database
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'lotify'
});

/// Distance

const getCoordinates = () => {
  return pool //return the whole promise to enable the .then fxn
    .query(`
    SELECT t.id, t.description, d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon
    FROM devices d
    JOIN tasks t ON d.id = t.device_id
    JOIN locations l ON t.location_id = l.id
    Limit 3
    `)
    .then((result) => {
      // console.log(result.rows); //return when the promise is resolved to enable the value inside .then
      console.log(calculateDistance(result.rows));
    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });
};
// getCoordinates();
exports.getCoordinates = getCoordinates;


//sorted by distance
const sortedData = () => {
  return pool //return the whole promise to enable the .then fxn
    .query(`
    SELECT t.id, t.description, d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon, l.name, l.address, t.status, l.logo_url
    FROM devices d
    JOIN tasks t ON d.id = t.device_id
    JOIN locations l ON t.location_id = l.id
    `)
    .then((result) => {
      // console.log(result.rows); //return when the promise is resolved to enable the value inside .then
      const distanceArray = calculateDistance(result.rows).sort(function(a, b) {
        if (a.distance < b.distance) return -1;
        if (a.distance > b.distance) return 1;
        return 0;
      });

      console.log(distanceArray);

    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });
};

sortedData();

exports.sortedData = sortedData;
