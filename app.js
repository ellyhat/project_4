const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const crypto = require("crypto");
const morgan = require("morgan");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

app.use(express.json());
