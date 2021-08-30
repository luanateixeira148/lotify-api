SELECT json_agg(t)
FROM (
  SELECT t.id, t.description, d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon
FROM devices d
JOIN tasks t ON d.id = t.device_id
JOIN locations l ON t.location_id = l.id
) t


--using SQL
--https://docs.microsoft.com/en-us/answers/questions/187492/tsql-calculating-distance-between-two-points-latit.html

-- SELECT d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon
-- FROM devices d
-- JOIN tasks t ON d.id = t.device_id
-- JOIN locations l ON t.location_id = l.id
-- LIMIT 2;

--        d_lat       |        d_lon        |       l_lat        |        l_lon
-- -------------------+---------------------+--------------------+---------------------
--  49.28116195176276 | -123.13151283081807 | 49.218687832584145 | -122.95636983061888
--   49.2638967154614 | -123.15629104616103 |  49.22731068589623 |  -123.0001020189783

--  DEClARE
--  @lat decimal(18,15),
--  @lng decimal(18,15)
--  SET @lat = 47.639322;
--  SET @lng = -122.128383;

--  Declare @source geography = geography::Point(30.20491677226107, -95.45612258030434, 4326);
--  Declare @destination geography= geography::Point(30.120021042878015, -95.44187468725596, 4326);

--  Declare @source geography = geography::Point(30.20491677226107, -95.45612258030434, 4326);
--  Declare @destination geography= geography::Point(30.120021042878015, -95.44187468725596, 4326);


--  Select @source.STDistance(@destination) as Meters
--  Select @source.STDistance(@destination) / 1000 as Kilometers
--  Select @source.STDistance(@destination) / 1609.344 as Miles
