const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const session = require("express-session");

const database = require("../database.js");

router.get("/", (req, res) => {
    const userId = req.session.userId;
    console.log(userId)

    query = "SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at FROM combined WHERE combined.user_ID = '" + userId + "';"

    database.any(query)

        .then((scheduleTable) => {
            console.log(scheduleTable)
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
            console.log(req.body) 

            /*Left-over steps:
            1. Convert this input to an acceptable timetstamp string
            2. insert it into our combined table along with other stuff
            3. display the new table */
        })
        


    
  });


module.exports = router;
