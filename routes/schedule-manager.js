const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const session = require("express-session");

const database = require("../database.js");

router.get("/", (req, res) => {

    /*let query = 'DROP TABLE combined;'
    database.any(query)

    query = 'CREATE TABLE combined AS SELECT users.*, schedules.unique_key, schedules.week_day, schedules.start_at, schedules.end_at FROM users LEFT JOIN schedules ON users.user_id = schedules.user_id;'
    database.any(query) */

    const userId = req.session.userId;
    console.log(userId)

    query = "SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined WHERE combined.user_ID = '" + userId + "' ORDER BY date;"

    database.any(query)

        .then((scheduleTable) => {
           // console.log(scheduleTable)
            /*res.render('./pages/SQL-schedules', {
                title: 'Schedules List',
                layout: './pages/layout',
                scheduleTable: scheduleTable*/
                res.render("pages/schedule-manager", {
                    title: "Form page", scheduleTable: scheduleTable
                  });
            })
        

        .catch((err) => {
            res.render('./pages/error', { title: 'Error', layout: './pages/layout', err: err.message })
        })

        router.post("/", (req, res) => {
            const schedule = {
                start_at: req.body.starttime,
                end_at: req.body.endtime,
                week_day: parseInt(req.body.day),
                date: req.body.date
            }



            const insertStart = `${schedule.date} ` + `${schedule.start_at}`
            const insertEnd = `${schedule.date} ` + `${schedule.end_at}`


query = 'INSERT INTO schedules (user_id, week_day, start_at, end_at) VALUES($1,$2,$3,$4);'
database.any(query, [userId, schedule.week_day, insertStart, insertEnd])

.catch((err) => {

    res.render('./pages/error', { title: 'Error', layout: './pages/layout', err: err.message })
})

query = "SELECT * FROM users WHERE user_id = '" + userId + "' ;"
database.any(query)
.then((result) => {
   const userDetails = {
       surname: result[0].surname,
       firstname: result[0].firstname,
       email: result[0].email,
       psw: result[0].psw
   }
   console.log(userDetails.email)
   console.log(result)

query = 'INSERT INTO combined (user_id, surname, firstname, email, psw, week_day, start_at, end_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8);'
database.any(query, [userId, userDetails.surname, userDetails.firstname, userDetails.email, userDetails.psw, schedule.week_day, insertStart, insertEnd])

})




})
        


    
});


module.exports = router;
