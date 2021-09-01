const router = require("express").Router();
// const { getDistance }  = require('geolib');
const { calculateDistance } = require('../db/queries/calculateDistance');


module.exports = db => {

//GET route to list all task items
  router.get("/", (request, response) => {
    db.query(`
    SELECT t.id, t.description, d.latitude d_lat, d.longitude d_lon, l.latitude l_lat, l.longitude l_lon, l.name, l.address, t.status, l.logo_url
    FROM devices d
    JOIN tasks t ON d.id = t.device_id
    JOIN locations l ON t.location_id = l.id
    `)
      .then((result) => {
      // console.log(result.rows); //return when the promise is resolved to enable the value inside .then
        const distanceArray = calculateDistance(result.rows).sort(function(a, b) {
          if (a.distance < b.distance) return -1;
          if (a.distance > b.distance) return 1;
          return 0;
        });

        response.json(distanceArray);

      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  });


//POST route to create a new task
  router.post("/", (request, response) => {
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


  //PUT route to change the status
  router.put("/:id", async (request, response) => {
    const status = request.body.status;
    const id = request.params.id;
    // console.log('STATUS AND ID', status, id)
    try {
      await db.query(`
      UPDATE tasks
      SET status = $1
      WHERE id = $2;`, [status, id])
      response.send(200)
    } catch {
      response.send(500)
    }
  });


  //PUT route to edit description/location
  router.put("/edit/:id", async (request, response) => {
    const id = request.params.id;
    const description = request.body.description;
    const locationId = request.body.location_id;
    try {
      await db.query(`
      UPDATE tasks
      SET description = $1, location_id = $2
      WHERE id = $3;`, [description, locationId, id])
      response.send(200)
    } catch {
      response.send(500)
    }
  });


  //DELETE route to delete a task
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
