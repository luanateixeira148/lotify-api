--drop existing tables
DROP TABLE IF EXISTS locations CASCADE;
--create tables
CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  logo_url VARCHAR(255) DEFAULT 'https://image.flaticon.com/icons/png/512/484/484167.png'
);

