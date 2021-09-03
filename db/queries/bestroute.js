const { getDistance } = require('geolib');

//DeviceLocation ( latitude: 49.2773808, longitude: -123.1275059)
//B ( latitude: 49.2784591537399, longitude: -123.127878445836)
//H ( latitude: 49.2805211655361, longitude: -123.118885222243)
//S ( latitude: 49.2770978735687, longitude: -123.120039194011)

//
// getDistance(
//   { latitude: obj.d_lat, longitude: obj.d_lon},
//   { latitude: obj.l_lat, longitude: obj.l_lon}
// );

const DB = getDistance({ latitude: 49.2773808, longitude: -123.1275059}, {latitude: 49.2784591537399, longitude: -123.127878445836});
const DH = getDistance({ latitude: 49.2773808, longitude: -123.1275059}, { latitude: 49.2805211655361, longitude: -123.118885222243});
const DS = getDistance({ latitude: 49.2773808, longitude: -123.1275059}, { latitude: 49.2770978735687, longitude: -123.120039194011});
const BH = getDistance({ latitude: 49.2784591537399, longitude: -123.127878445836}, { latitude: 49.2805211655361, longitude: -123.118885222243});
const BS = getDistance({ latitude: 49.2784591537399, longitude: -123.127878445836}, { latitude: 49.2770978735687, longitude: -123.120039194011});
const HB = getDistance({ latitude: 49.2805211655361, longitude: -123.118885222243}, {latitude: 49.2784591537399, longitude: -123.127878445836});
const HS = getDistance({ latitude: 49.2805211655361, longitude: -123.118885222243}, { latitude: 49.2770978735687, longitude: -123.120039194011});
const SB = getDistance({ latitude: 49.2770978735687, longitude: -123.120039194011}, { latitude: 49.2784591537399, longitude: -123.127878445836});
const SH = getDistance({ latitude: 49.2770978735687, longitude: -123.120039194011}, {latitude: 49.2805211655361, longitude: -123.118885222243});

// Each combination of routes are a sum of distances from point to point
// D = Device, B = Breka, H = H-mart, S = Shoppers
// These values can be taken from the database
const BHS = DB + BH + HS;
const BSH = DB + BS + SH;
const HBS = DH + HB + BS;
const HSB = DH + HS + SB;
const SBH = DS + SB + BH;
const SHB = DS + SH + HB;

// const bestRoute = (array) => {
//   // Get the first value of an array sorted in ascending order
//   return array.sort()[0];
// };
// Put all possible routes between locations into a single array
// const magic = [BHS, BSH, HBS, HSB, SBH, SHB];

const magic = [
  {id: 'BHS', distance: BHS},
  {id: 'BSH', distance: BSH},
  {id: 'HBS', distance: HBS},
  {id: 'HSB', distance: HSB},
  {id: 'SBH', distance: SBH},
  {id: 'SHB', distance: SHB}
];

const result = magic.sort(function(a, b) {
  if (a.distance < b.distance) return -1;
  if (a.distance > b.distance) return 1;
  return 0;
});

console.log((result));

// The best route url is made up of the lat and long of the device as well as concatenated addresses. We need to replace these addresses with the matchine best route.
//1.take the name of the location from the database (which is mapped to the above values)
//2.replace the spaces in the location name with '+' (splitting and concatenating)
//3.format and shape a single template literal with the final route locations appended
// Breka Bakery & Café (Davie), 855 Davie St, Vancouver, BC
// Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC
// Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC
// H-Mart+Downtown,+Robson+Street,+Vancouver,+BC
//https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC
//https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC
// const bestRoute_url = `https://www.google.com/maps/dir/${d.lat},${d.lon}/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC`;


