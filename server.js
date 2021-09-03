// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const morgan     = require('morgan');
const cors = require('cors');
// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const tasksRoutes = require("./routes/tasks");
const devicesRoutes = require("./routes/devices");
const locationsRoutes = require("./routes/locations");
const bestRoute = require("./routes/bestroute");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/tasks", tasksRoutes(db));
app.use("/api/devices", devicesRoutes(db));
app.use("/api/locations", locationsRoutes(db));
app.use("/api/bestroute", bestRoute(db));
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
