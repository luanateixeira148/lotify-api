const router = require("express").Router();
const { getDistance }  = require('geolib');
const { calculateDistance } = require('../db/queries/calculateDistance');

module.exports = db => {
//   router.get("/", (request, response) => {
//     db.query( //distance to be added to ORDER BY statement
//       `
//       SELECT * from tasks;
//     `
//     ).then(({ rows: bestroute }) => {
//       response.json(bestroute);
//     }).catch(err => {
//       console.log(err.message);
//       response.status(500).json({err:err.message});
//     });
//   });


  //GET route to list all task items
  router.get("/", (request, response) => {
    db.query(`
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
        // console.log(distanceArray);
        const sortedDistance = distanceArray.slice(0,3);
        // response.json(sortedDistance);
        const myLocation = ({latitude: sortedDistance[0].d_lat, longitude: sortedDistance[0].d_lon});
        const locationB = ({latitude: sortedDistance[0].l_lat, longitude: sortedDistance[0].l_lon});
        const locationS = ({latitude: sortedDistance[1].l_lat, longitude: sortedDistance[1].l_lon});
        const locationH = ({latitude: sortedDistance[2].l_lat, longitude: sortedDistance[2].l_lon});

        const ItemB = sortedDistance[0];
        const ItemS = sortedDistance[1];
        const ItemH = sortedDistance[2];

        const DB = getDistance(myLocation, locationB);
        const DH = getDistance(myLocation, locationH);
        const DS = getDistance(myLocation, locationS);
        const BH = getDistance(locationB, locationH);
        const BS = getDistance(locationB, locationS);
        const HB = getDistance(locationH, locationB);
        const HS = getDistance(locationH, locationS);
        const SB = getDistance(locationS, locationB);
        const SH = getDistance(locationS, locationH);

        const BHS = DB + BH + HS;
        const BSH = DB + BS + SH;
        const HBS = DH + HB + BS;
        const HSB = DH + HS + SB;
        const SBH = DS + SB + BH;
        const SHB = DS + SH + HB;

        const magic = [
          {id: 'BHS', distance: BHS},
          {id: 'BSH', distance: BSH},
          {id: 'HBS', distance: HBS},
          {id: 'HSB', distance: HSB},
          {id: 'SBH', distance: SBH},
          {id: 'SHB', distance: SHB}
        ];

        const sortedMagic = magic.sort(function(a, b) {
          if (a.distance < b.distance) return -1;
          if (a.distance > b.distance) return 1;
          return 0;
        });

        const shortestRoute = sortedMagic[0];
        const shortestId = shortestRoute.id;
        // console.log(shortestId);
        const fullInfoArray = [];


        for (let i = 0; i < shortestId.length; i++) {
          if (shortestId[i] === 'B') {
            fullInfoArray.push(ItemB);
          } else if (shortestId[i] === 'S') {
            fullInfoArray.push(ItemS);
          } else if (shortestId[i] === 'H') {
            fullInfoArray.push(ItemH);
          }
        }
        // console.log(fullInfoArray); //array of objects
        // const httpsLink = "https://google.com";
        // response.json(fullInfoArray);
        //'https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+855+Davie+St,+Vancouver,+BC+V6Z+1B7/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+590+Robson+St+#200,+Vancouver,+BC+V6B+2B7/'

        const fixed = 'https://www.google.com/maps/dir/';
        const myCoord = `${fullInfoArray[0].d_lat},${fullInfoArray[0].d_lon}/`;
        const firstLocation = `${fullInfoArray[0].name}, ${fullInfoArray[0].address}/`;
        const secondLocation = `${fullInfoArray[1].name}, ${fullInfoArray[1].address}/`;
        const thirdLocation = `${fullInfoArray[2].name}, ${fullInfoArray[2].address}/`;
        const concatenated = fixed.concat(myCoord).concat(firstLocation).concat(secondLocation).concat(thirdLocation);
        console.log(concatenated);
        const output = concatenated.replace(/\s/g, '+').replace('&', '%26').replace('é', '%C3%A9');
        response.json(output);

        //https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka Bakery & Café (Davie), 855 Davie St, Vancouver, BC V6Z 1B7/Shoppers Drug Mart, 1006 Homer St, Vancouver, BC V6B 2W9/H-Mart Downtown, 590 Robson St #200, Vancouver, BC V6B 2B7/

        // response.json(httpsLink);

      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  });
  return router;
};


// BSH
// B=0
// S=1
// H=2
