const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const database = require("../database.js");
//const redis = require("redis");
const session = require("express-session");
//const redisStore = require("connect-redis")(session);

router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Welcome to our page",
  });
});

module.exports = router;
