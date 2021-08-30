// const arr = [
//   {"id":1,"description":"Pick up prescriptions","d_lat":49.281949567800346,"d_lon":-123.10733333175176,"l_lat":49.218687832584145,"l_lon":-122.95636983061888},
//   {"id":2,"description":"Buy textbooks for the Web Design course","d_lat":49.281949567800346,"d_lon":-123.10733333175176,"l_lat":49.22731068589623,"l_lon":-123.0001020189783},
//   {"id":3,"description":"Buy birthday cake","d_lat":49.281949567800346,"d_lon":-123.10733333175176,"l_lat":49.21256385180465,"l_lon":-122.92250217870016}
// ];

// const { getDistance }  = require('geolib');

// Calculates the distance between two geo coordinates.

// This function takes up to 3 arguments. First 2 arguments must be valid GeolibInputCoordinates (e.g. {latitude: 52.518611, longitude: 13.408056}). Coordinates can be in sexagesimal or decimal format. The third argument is accuracy (in meters). By default the accuracy is 1 meter. If you need a more accurate result, you can set it to a lower value, e.g. to 0.01 for centimeter accuracy. You can set it higher to have the result rounded to the next value that is divisible by your chosen accuracy (e.g. 25428 with an accuracy of 100 becomes 25400).

// const test = getDistance(
//   { latitude: 49.28116195176276, longitude: -123.13151283081807 },
//   { latitude: 49.218687832584145, longitude: -122.95636983061888 }
// );
// console.log(test);


// const calculateDistance = function(arr) {
//   let result = [];
//   for (let obj of arr) {
//     console.log(obj.id);
//     const distance = getDistance(
//       { latitude: obj.d_lat, longitude: obj.d_lon},
//       { latitude: obj.l_lat, longitude: obj.l_lon}
//     );
//     result.push(distance);
//     // return result;
//   }
//   return result;
// };

// console.log(calculateDistance(arr));

//[ 13036, 9884, 15494 ]

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


// const test = getDistance(
//   { latitude: 49.28116195176276, longitude: -123.13151283081807 },
//   { latitude: 49.218687832584145, longitude: -122.95636983061888 }
// );

// console.log(test);


// Sort Formula
// const distance = [ { id: 1, distance: 10}, {id: 2, distance: 30}, {id: 3, distance: 20}]

// distance.sort(function(a, b) {
//   if (a.distance < b.distance) return -1;
//   if (a.distance > b.distance) return 1;
//   return 0;
// });

// console.log(distance);
