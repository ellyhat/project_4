const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const database = require("../database.js");

const session = require("express-session");

router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Welcome to our page",
  });
});

module.exports = router;
