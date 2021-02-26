const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const database = require("../database.js");

const session = require("express-session");

router.get("/", (req, res) => {
  let query =
    "SELECT user_id, surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined ORDER BY firstname, date;";
  database
    .any(query)
    .then((scheduleTable) => {
      res.render("pages/index", {
        title: "Home Page",
        scheduleTable: scheduleTable,
      });
    })
    .catch((err) => {
      res.render("./pages/error", {
        title: "Error",
        layout: "./pages/layout",
        err: err.message,
      });
    });
});
module.exports = router;
