const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const crypto = require("crypto");
//const morgan = require("morgan");
const path = require("path");
//const expressLayouts = require("express-ejs-layouts");

app.use(express.json());


//Add database
const database = require('./database.js')

//Test that connection to PORT is active

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})

//test that database connection is working

//Set templating engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    database.any('SELECT * from schedules;')
    .then((scheduleTable) => {
        res.send(scheduleTable)
    })

})

app.get('/login', (req, res) => {
    res.render('form') 
})