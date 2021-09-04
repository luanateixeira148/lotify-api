const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT * from locations;
    `
    ).then(({ rows: locations }) => {
      response.json(locations);
    }).catch(err => {
      console.log(err.message);
      response.status(500).json({err:err.message});
    });
  });

  return router;
};
