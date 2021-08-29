const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query( //distance to be added to ORDER BY statement
      `
      SELECT
        tasks.id,
        tasks.description,
        tasks.status
      FROM tasks
      JOIN devices ON tasks.device_id = devices.id
      JOIN locations ON tasks.location_id = locations.id
      ORDER BY locations.name
    `
    ).then(({ rows: tasks }) => {
      response.json(tasks);
    }).catch(err => {
      console.log(err.message);
      response.status(500).json({err:err.message});
    });
  });

  return router;
};
