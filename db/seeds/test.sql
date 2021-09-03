
DROP TABLE IF EXISTS test CASCADE;

CREATE TABLE test (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  map_url VARCHAR(255),
  logo_url VARCHAR(255) DEFAULT 'https://image.flaticon.com/icons/png/512/484/484167.png'
);


INSERT INTO test (name, address, latitude, longitude, map_url)
VALUES
--1
('Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9', 49.2770978735687, -123.120039194011, 'https://www.google.ca/maps/dir/James+MCDoughal,+Howe+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/'),
--2
('H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7', 49.2805211655361, -123.118885222243, 'https://www.google.ca/maps/dir/James+MCDoughal,+Howe+Street,+Vancouver,+BC/H-Mart+Downtown,+590+Robson+St+%23200,+Vancouver,+BC+V6B+2B7/'),
--3
('Breka Bakery '||chr(38)||' Caf'||chr(233)||' (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7', 49.2784591537399, -123.127878445836, 'https://www.google.ca/maps/dir/James+MCDoughal,+Howe+Street,+Vancouver,+BC/Breka+Bakery+'||chr(38)||'+Caf'||chr(233)||'+(Davie),+Davie+Street,+Vancouver,+BC/');

--https://www.google.ca/maps/dir/James+MCDoughal,+Howe+Street,+Vancouver,+BC/Breka+Bakery+&+Café+(Davie),+Davie+Street,+Vancouver,+BC/
