const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query( //distance to be added to ORDER BY statement
      `
      SELECT * FROM devices;
    `
    ).then(({ rows: devices }) => {
      response.json(devices);
    }).catch(err => {
      console.log(err.message);
      response.status(500).json({err:err.message});
    });
  });

  return router;
};
