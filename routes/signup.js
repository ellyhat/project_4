const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const redis = require("redis");
const session = require("express-session");
const redisStore = require("connect-redis")(session);

const twoHours = 1000 * 60 * 60 * 2;
const database = require("../database.js");
app.use(
  session({
    name: "sid",
    resave: false,
    cookie: {
      maxAge: twoHours,
      sameSite: true,
    },
    secret: "shh/its1asecret",
    saveUninitialized: false,
    //secure:false
  })
);

router.get("/", (req, res) => {
  res.render("pages/signup", {
    title: "Sign up page",
  });
});

router.post("/", (req, res) => {
  res.redirect("/");
});

module.exports = router;
