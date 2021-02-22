const express = require('express')
const router = express.Router()
const crypto = require("crypto");
const app = express();

const database = require("../database.js");

router.get('/', (req,res) => {
        res.render("pages/login", {
        title: "Form page",
      });
})

router.post('/', (req,res) => {
    const password = req.body.psw;
    const passwordEncr = crypto.createHash("sha256").update(password).digest("hex");
    const currentUser = {
    email: req.body.email,
    psw: passwordEncr}
    console.log(currentUser)
   
    //this function is now working - checks whether email address and password match

    const query = 'SELECT email FROM users WHERE email = \'' + currentUser.email+'\' AND psw = \'' + currentUser.psw+'\' ;'

    database.any(query)
    .then((result) => {
        console.log(result)
        if (result.length > 0) {
            console.log("you have a match")
            res.redirect('/')
        }
        else 
            res.send("Error")
    })
    .catch((err) => {
        res.send(err.message)})
    })

module.exports = router



