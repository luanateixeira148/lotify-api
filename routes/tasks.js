const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query( //distance to be added to ORDER BY statement
      `
      SELECT *
      FROM tasks
      JOIN devices ON tasks.device_id = devices.id
      JOIN locations ON tasks.location_id = locations.id
      ORDER BY locations.name;
    `
    ).then(({ rows: tasks }) => {
      response.json(tasks);
    }).catch(err => {
      console.log(err.message);
      response.status(500).json({err:err.message});
    });
  });

  router.put("/", (request, response) => {
    console.log(request.body);
    const locationId = request.body.location_id;
    const description = request.body.description;
    // const { description, locationId } = request.body;

    db.query(
      `
      INSERT INTO tasks (description, location_id) VALUES ($1::text, $2::integer)
      RETURNING *
    `,

      [description, locationId]
    )
      .then(({ rows: tasks }) => {
        response.json(tasks[0]);
      })
      .catch(err => {
        console.log(err.message);
        response.status(500).json({err:err.message});
      });
  });

  router.delete("/:id", (request, response) => {

    db.query(`DELETE FROM tasks WHERE id = $1::integer`, [
      request.params.id])
      .then(() => {
        response.status(204).send('');
      })
      .catch(err => {
        console.log(err.message);
        response.status(500).json({err:err.message});
      });

  });

  return router;
};
