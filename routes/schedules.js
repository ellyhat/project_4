const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const database = require("../database.js");
const session = require("express-session");

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

router.get("/", redirectLogin, (req, res) => {
  const userId = req.session.userId;
  const query =
    "SELECT firstname, surname FROM users WHERE user_id = '" + userId + "' ;";
  let userName;
  database.any(query).then((result) => {
    //console.log(result); - just check
    userName = `${result[0].firstname} ${result[0].surname}`;
    //console.log(userName); -just check
    return userName;
  });

  //we have to show only req.user schedule - NEED TO DO
  /* if (userId) {
    database.any("SELECT * from combined;").then((scheduleTable) => {
      res.render("pages/schedules", {
        schedule: scheduleTable,
        title: "schedules",
        userName: userName,
      });
    });
  } else {
    res.send("Login pls");
  }
});*/
  if (userId) {
    let query =
      "SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined ORDER BY firstname, date;";

    database
      .any(query)

      .then((scheduleTable) => {
        // console.log(scheduleTable)
        /*res.render('./pages/SQL-schedules', {
                title: 'Schedules List',
                layout: './pages/layout',
                scheduleTable: scheduleTable*/
        res.render("pages/schedules", {
          title: "Schedules",
          scheduleTable: scheduleTable,
          userId: userId,
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
router.post("/", (req, res) => {
  const userId = req.session.userId;
  res.redirect("/users/?user=userId");
});

module.exports = router;
