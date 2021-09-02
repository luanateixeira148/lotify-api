--insert fake data for devices, tasks, locations
INSERT INTO devices (latitude, longitude)
VALUES
-- (49.28116195176276, -123.13151283081807),
-- (49.2638967154614, -123.15629104616103),
-- (49.236191016748386, -122.99721258042348),
-- (49.219528920425184, -123.00842520126788),
-- (49.286922346957994, -123.12220007455659),
-- (49.220995351212, -122.95398578027219),
-- (49.21440491476529, -122.92299413504236),
-- (49.281949567800346, -123.10733333175176),
(49.2773808,-123.1275059);

INSERT INTO locations (name, address, latitude, longitude)
VALUES
--1
('Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9', 49.2770978735687, -123.120039194011),
--2
('H-Mart Downtown', '590 Robson St #200, Vancouver, BC V6B 2B7', 49.2805211655361, -123.118885222243),
--3
('Breka Bakery & Café (Davie)', '855 Davie St, Vancouver, BC V6Z 1B7', 49.2784591537399, -123.127878445836),
--4
('JINYA Ramen Bar - Vancouver','541 Robson St, Vancouver, BC V6B 2B7', 49.28058528341301, -123.1179179890574),
--5
('Metropolis at Metrotown', '4700 Kingsway, Burnaby, BC V5H 4M5', 49.22731068589623, -123.0001020189783),
--6
('London Drugs', '710 Granville St, Vancouver, BC V6Z 1E4', 49.282224267179856, -123.11814011590013),
--7
('Walmart Supercenter', '610 6th St, New Westminster, BC V3L 3C2', 49.21256385180465, -122.92250217870016),
--8
('CF Pacific Center', '701 W Georgia St, Vancouver, BC V7Y 1G5', 49.28334159584531, -123.11836841961),
--9
('International Village Mall', '88 W Pender St, Vancouver, BC V6B 6N9', 49.280184229282376, -123.10683600480496),
--10
('Best Buy Station Square', 'Station Square, 6200 McKay Ave Unit 200, Burnaby, BC V5H 4L7', 49.22720599357389, -123.0034522066196),
--11
('PetSmart Station Square', '6200 McKay Ave #100, Burnaby, BC V5H 4L8', 49.227089919635034, -123.00312399522734),
--12
('Dollarama Station Square', 'Station Square, 6200 McKay Ave, Burnaby, BC V5H 4L7', 49.22681431076529, -123.00382808425319),
--13
('Shoppers Drug Mart', '1006 Homer St, Vancouver, BC V6B 2W9', 49.2770978735687, -123.120039194011),
--14
('Shoppers Drug Mart', '586 Granville St, Vancouver, BC V6C 1X5', 49.2836597885791, -123.116115910585),
--15
('Shoppers Drug Mart', '1295 Seymour St, Vancouver, BC V6B 3N6', 49.2757179790343, -123.126901002407),
--16
('Shoppers Drug Mart', '1125 Davie St, Vancouver, BC V6E 1N2', 49.280986978287, -123.131480644735),
--17
('Shoppers Drug Mart', '748 Burrard St Unit 104 & 201, Vancouver, BC V6Z 2V6', 49.2770978735687, -123.120039194011),
--18
('Shoppers Drug Mart', '1202 W Pender St, Vancouver, BC V6E 2S9', 49.2888821128813, -123.1239119);

INSERT INTO tasks (description, location_id, status)
VALUES
('Pick up prescription', 1, TRUE),
('Stock up on instant noodles', 2, TRUE),
('Buy birthday cake', 3, TRUE),
('Try out this ramen place', 4, TRUE),
('Find bluelight screen filter', 5, FALSE),
('Get photos developed', 6, FALSE),
('Pick up homo milk', 7, FALSE),
('Buy one dozen eggs', 7, FALSE),
('Visit the food court', 8, FALSE),
('Buy eye drops', 9, FALSE),
('Claim speaker warranty', 10, FALSE),
('Get printer ink', 10, FALSE),
('Buy cat litter', 11, FALSE),
('Grab party supplies', 12, FALSE);

-- INSERT INTO tasks (description, location_id, device_id)
-- VALUES
-- ('Pick up prescriptions', 1, 1),
-- ('Buy textbooks for the Web Design course', 2, 2),
-- ('Buy birthday cake', 3, 3),
-- ('Buy eye drops', 4, 4),
-- ('Buy bluelight screen filter', 5, 5),
-- ('Return Dress', 6, 6),
-- ('Pick up milk', 7, 7),
-- ('Try out this ramen place', 8, 8);


-- INSERT INTO tasks (description, location_name)
-- SELECT
-- FROM tasks t
-- JOIN locations l

-- ('Pick up prescriptions', 1),
-- ('Buy textbooks for the Web Design course', 2),
-- ('Buy birthday cake', 3),
-- ('Buy eye drops', 4),
-- ('Buy bluelight screen filter', 5),
-- ('Return Dress', 6),
-- ('Pick up milk', 7),
-- ('Try out this ramen place', 8);
