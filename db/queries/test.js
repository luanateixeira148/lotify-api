const { getDistance } = require('geolib');
const { Pool } = require('pg');

const arr =
[{"id":1,"description":"Pick up prescription","d_lat":49.2773808,"d_lon":-123.1275059,"l_lat":49.2770978735687,"l_lon":-123.120039194011}, {"id":2,"description":"Stock up on instant noodles","d_lat":49.2773808,"d_lon":-123.1275059,"l_lat":49.2805211655361,"l_lon":-123.118885222243}, {"id":3,"description":"Buy birthday cake","d_lat":49.2773808,"d_lon":-123.1275059,"l_lat":49.2784591537399,"l_lon":-123.127878445836}];

// const convert = JSON.stringify([1,2,3,4,5]);
// console.log(convert);


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

// console.log(calculateDistance(arr));


// const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'lotify'
});

const getBestRoute = () => {
  return pool
    .query(`
    SELECT t.id, t.description, d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon, l.name, l.address, t.status, l.map_url
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
      return JSON.stringify(distanceArray);
      // response.json(distanceArray);

    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });
};

console.log(getBestRoute());

// const getCoordinates = () => {
//   return pool //return the whole promise to enable the .then fxn
//     .query(`
//     SELECT t.id, t.description, d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon
//     FROM devices d
//     JOIN tasks t ON d.id = t.device_id
//     JOIN locations l ON t.location_id = l.id
//     Limit 3
//     `)
//     .then((result) => {
//       // console.log(result.rows); //return when the promise is resolved to enable the value inside .then
//       console.log(calculateDistance(result.rows));
//     })
//     .catch((err) => {
//       console.error(err.message);
//       return null;
//     });
// };
// // getCoordinates();
// exports.getCoordinates = getCoordinates;
