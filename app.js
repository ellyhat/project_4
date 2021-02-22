const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const crypto = require("crypto");
const morgan = require("morgan");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");


//Dotenv is a middle-ware that helps load variables from an .env file.

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;


//The “require(‘dotenv’).config()” required the dotenv package and injects it into our project configuration.
app.use(morgan("dev"));
app.use(express.json());
app.set("view engine", "ejs");

//Set up Routers
const loginRouter = require('./routes/login');
app.use('/routes/login', loginRouter)

//DESIGN
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Add database
const database = require("./database.js");
console.log(database)

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

app.use("/login", loginRouter)




/*app.get("/login", (req, res) => {
  res.render("pages/login", {
    title: "Form page",
  });
});*/

/*app.post("/login", (req, res) => {
  const password = req.body.psw;
  const passwordEncr = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const currentUser = {
    email: req.body.email,
    psw: passwordEncr,
  };*/

  //compare if there are any user like that
  //database.users=== currentUser ?
  //console.log(currentUser);
  //res.redirect("/");
/*});*/
