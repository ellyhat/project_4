const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const crypto = require("crypto");
const morgan = require("morgan");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

//Dotenv is a middle-ware that helps load variables from an .env file.

const dotenv = require("dotenv");
dotenv.config();

//The “require(‘dotenv’).config()” required the dotenv package and injects it into our project configuration.
app.use(morgan("dev"));
app.use(express.json());
app.set("view engine", "ejs");

//DESIGN
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");

app.use(bodyParser.json());
//Add database
const database = require("./database.js");

//Test that connection to PORT is active

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

//test that database connection is working

//Set templating engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  database.any("SELECT * from schedules;").then((scheduleTable) => {
    res.render("pages/index", {
      schedule: scheduleTable,
      title: "Home page",
    });
  });
});

app.get("/login", (req, res) => {
  res.render("form");
});
