const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
let sess;
const database = require("../database.js");

router.get("/", (req, res) => {
  sess = req.session;
  database.any("SELECT * from schedules;").then((scheduleTable) => {
    res.render("pages/index", {
      schedule: scheduleTable,
      title: "Home page",
    });
  });
});

module.exports = router;
