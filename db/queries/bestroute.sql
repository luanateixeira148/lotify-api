
--drop existing tables
DROP TABLE IF EXISTS routes CASCADE;
--create tables
CREATE TABLE routes (
  id VARCHAR(255) NOT NULL,
  d_lat FLOAT NOT NULL,
  d_lon FLOAT NOT NULL,
  name1 VARCHAR(255) NOT NULL,
  add1 VARCHAR(255) NOT NULL,
  name2 VARCHAR(255) NOT NULL,
  add2 VARCHAR(255) NOT NULL,
  name3 VARCHAR(255) NOT NULL,
  add3 VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL
  -- ,concatenated VARCHAR(255) NOT NULL
  );

INSERT INTO routes (id, d_lat, d_lon, name1, add1, name2, add2, name3, add3, url) --, concatenated)
VALUES
--1
('BHS',
  49.2773808, -123.1275059,
  'Breka Bakery & Café (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7',
  'H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7',
  'Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9',
 'https://www.google.com/maps/dir/49.2773808,-123.1275059/'
--  ,'https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/'
),
('BSH',
  49.2773808, -123.1275059,
  'Breka Bakery & Café (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7',
  'Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9',
  'H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7',
  'https://www.google.com/maps/dir/49.2773808,-123.1275059/'
  -- 'https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC'
  -- ,'https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC'
),
('HBS',
  49.2773808, -123.1275059,
  'H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7',
  'Breka Bakery & Café (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7',
  'Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9',
  'https://www.google.com/maps/dir/49.2773808,-123.1275059/'
  -- 'https://www.google.com/maps/dir/49.2773808,-123.1275059/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9'
  -- ,'https://www.google.com/maps/dir/49.2773808,-123.1275059/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9'
),
('HSB',
  49.2773808, -123.1275059,
  'H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7',
  'Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9',
  'Breka Bakery & Café (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7',
  'https://www.google.com/maps/dir/49.2773808,-123.1275059/'
  -- 'https://www.google.com/maps/dir/49.2773808,-123.1275059/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC'
  -- ,'https://www.google.com/maps/dir/49.2773808,-123.1275059/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC'
),
('SBH',
  49.2773808, -123.1275059,
  'Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9',
  'Breka Bakery & Café (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7',
  'H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7',
  'https://www.google.com/maps/dir/49.2773808,-123.1275059/'
  -- 'https://www.google.com/maps/dir/49.2773808,-123.1275059/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC'
  -- ,'https://www.google.com/maps/dir/49.2773808,-123.1275059/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC'
),
('SHB',
  49.2773808, -123.1275059,
  'Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9',
  'H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7',
  'Breka Bakery & Café (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7',
  'https://www.google.com/maps/dir/49.2773808,-123.1275059/'
  -- 'https://www.google.com/maps/dir/49.2773808,-123.1275059/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC'
  -- ,'https://www.google.com/maps/dir/49.2773808,-123.1275059/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+Robson+Street,+Vancouver,+BC/Breka+Bakery+%26+Caf%C3%A9+(Davie),+Davie+Street,+Vancouver,+BC'
);


DROP TABLE IF EXISTS bestroute CASCADE;
--create tables
CREATE TABLE bestroute (
  best_route_url VARCHAR(255) NOT NULL
  -- ,concatenated VARCHAR(255) NOT NULL
  );

INSERT INTO bestroute (best_route_url)
SELECT concat(
url,
replace(replace(replace((concat(name1,', ',add1)), ' ', '+'), '&', '%26'), 'é', '%C3%A9'),
'/',
replace(replace((concat(name2,', ',add2)), ' ', '+'), '#', '%23'),
'/',
replace((concat(name3,', ',add3)), ' ', '+'),
'/'
) as route_url
FROM routes
WHERE id = 'BSH';

SELECT best_route_url from bestroute;
--output
-- 'https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+855+Davie+St,+Vancouver,+BC+V6Z+1B7/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+590+Robson+St+#200,+Vancouver,+BC+V6B+2B7/'
