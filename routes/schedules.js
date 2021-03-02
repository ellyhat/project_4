/*//Define route for schedules

//Install relevant packages

const express = require("express");
const router = express.Router();
//const crypto = require("crypto");
const app = express();
//const session = require("express-session");

//Connect database
const database = require("../database.js");

//Redirect the user to login before creating a new schedule
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

//Get user name associated with user ID
router.get("/", redirectLogin, (req, res) => {
  const userId = req.session.userId;
  const query =
    "SELECT firstname, surname FROM users WHERE user_id = '" + userId + "' ORDER BY firstname;";
  let userName;
  database.any(query).then((result) => {
    //console.log(result); - just check
    userName = `${result[0].firstname} ${result[0].surname}`;
    //console.log(userName); -just check
    return userName;
  });
  if (userId) {
    let query =
      "SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined ORDER BY firstname, date;";
    database
      .any(query)
      .then((scheduleTable) => {
        res.render("pages/schedules", {
          title: "Schedules",
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
  }
});
module.exports = router;*/