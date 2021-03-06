//Define route for logout

//Install relevant packages

const express = require("express");
const router = express.Router();
//const crypto = require("crypto");
const app = express();
const session = require("express-session");

//Initialise session data

const twoHours = 1000 * 60 * 60 * 2;
const database = require("../database.js");
app.use(
  session({
    name: "sid",
    resave: true,
    cookie: {
      maxAge: twoHours,
      sameSite: true,
    },
    secret: "shh/its1asecret",
    saveUninitialized: false,
    //secure:false
  })
);

//UserId obtained from user login; user must login to start the session

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

//When user goes to logout, destroy session data

router.get("/", redirectLogin, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/");
    }
    res.clearCookie("sid");
    res.redirect("/login");
  });
});

module.exports = router;