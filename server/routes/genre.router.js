const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const sqlParams = `SELECT movies.title, genres.name FROM "genres"
      JOIN "movies_genres" ON "genres".id= "movies_genres".genre_id
      JOIN "movies" ON "movies_genres".movie_id= "movies".id
      GROUP BY movies.title, genres.name;`;

  pool
    .query(sqlParams)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("genre Get error", error);
      res.sendStatus(500);
    });
});

module.exports = router;
