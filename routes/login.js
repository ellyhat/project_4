//Define route for login

//Install relevant packages

const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();

//const session = require("express-session");

//Connect SQL database
const database = require("../database.js");

const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    res.redirect("/"); //if logged in already, redirect them to home page
  } else {
    next();
  }
};

router.get("/", redirectHome, (req, res) => {
  res.render("pages/login", {
    title: "Form page",
  });
});

//User login, storing their details along with encrypted password
router.post("/", redirectHome, (req, res) => {
  const password = req.body.psw;
  const passwordEncr = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const currentUser = {
    email: req.body.email,
    psw: passwordEncr,
  };

  //This query checks whether email addresses and password are already listed in the database
  const emailPswMatch =
    "SELECT email FROM users WHERE email = '" +
    currentUser.email +
    "' AND psw = '" +
    currentUser.psw +
    "' ;";

  //This query obtains user ID if there is an already existing database entry
  const getUserId =
    "SELECT user_id FROM users WHERE email = '" + currentUser.email + "';";

  database
    .any(emailPswMatch)
    .then((result) => {
      if (result.length > 0) {
        database.any(getUserId).then((resultID) => {
          req.session.userId = resultID[0].user_id;
          return res.redirect("/");
        });
      } else res.render("pages/error", { title: "Error", err: err });
    })
    .catch((err) => {
      res.render("pages/error", { title: "Error", err: err });
    });
});

module.exports = router;