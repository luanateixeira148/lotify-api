-- Drop existing tables
DROP TABLE IF EXISTS devices CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;

--create tables
CREATE TABLE devices (
  id SERIAL PRIMARY KEY NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  map_url VARCHAR(255),
  -- logo_url VARCHAR(255) DEFAULT 'https://image.flaticon.com/icons/png/512/484/484167.png'
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(255) NOT NULL,
  status BOOLEAN DEFAULT FALSE,
  location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  device_id INTEGER DEFAULT 1 --REFERENCES devices(id) ON DELETE CASCADE
);




