const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const database = require("../database.js");

const session = require("express-session");

router.get("/", (req, res) => {
  const users = "SELECT * FROM users;";
  database
    .any(users)
    .then((resultUsers) => {
      res.render("pages/index", {
        title: "Welcome to our page",
        users: resultUsers,
      });
    })
    .catch((err) => {
      console.error(err);
      res.render("pages/error", {
        err: err,
      });
    });
});

module.exports = router;
