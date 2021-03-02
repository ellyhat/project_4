//Define route for home page

//Install relevant packages

const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const session = require("express-session");

const database = require("../database.js");

//Define route
router.get("/", (req, res) => {

//Join user and schedule information, and apply field formatting where needed to display on the home page

let query =
  "SELECT users.user_id, users.surname, schedules.unique_key, users.firstname, schedules.week_day, TO_CHAR(schedules.start_at, 'HH:MI am') AS start_at, TO_CHAR(schedules.end_at, 'HH:MI am') as end_at, TO_CHAR(schedules.end_at, 'DD-Month-YYYY') as date FROM users JOIN schedules ON schedules.user_id=users.user_id ORDER BY users.firstname, schedules.end_at;";

  database
    .any(query)
    .then((scheduleTable) => {
      const userId = scheduleTable.user_id;
      res.render("pages/index", {
        title: "Home Page",
        scheduleTable,
        userId,
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
