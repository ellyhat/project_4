const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const database = require("../database.js");
//const redis = require("redis");
const session = require("express-session");
//const redisStore = require("connect-redis")(session);

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};
router.get("/", redirectLogin, (req, res) => {
  const userId = req.session.userId;
  if (userId) {
    database.any("SELECT * from schedules;").then((scheduleTable) => {
      res.render("pages/schedules", {
        schedule: scheduleTable,
        title: "schedules",
      });
    });
  } else {
    res.send("Login pls");
  }
});
module.exports = router;
