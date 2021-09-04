SELECT json_agg(t)
FROM (
  SELECT t.id, t.description, d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon
FROM devices d
JOIN tasks t ON d.id = t.device_id
JOIN locations l ON t.location_id = l.id
Limit 3
) t
