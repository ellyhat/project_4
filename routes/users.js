<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const app = express()
const session = require('express-session')
const database = require('../database.js')
router.get('/:userNum', (req, res) => {
	const userId = req.params.userNum
	const queryDisplayCombined = `SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined WHERE combined.user_ID = '${userId}' ORDER BY date;`
	database
		.any(queryDisplayCombined)
		.then((scheduleTable) => {
			res.render('pages/users', {
				title: 'Form page',
				scheduleTable,
			})
		})
		.catch((err) => {
			res.render('./pages/error', {
				title: 'Error',
				layout: './pages/layout',
				err: err.message,
			})
		}) // THIS IS FINE
})
router.post('/', async(req, res) => {
	try {
		const { userId } = req.session
		// console.log(`hello + ${req.session.userId}`);
		const schedule = {
			start_at: req.body.starttime,
			end_at: req.body.endtime,
			week_day: parseInt(req.body.day),
			date: req.body.date,
		}
		const insertStart = `${schedule.date} ` + `${schedule.start_at}`
		const insertEnd = `${schedule.date} ` + `${schedule.end_at}`
		const queryInsertIntoSchedule =
    'INSERT INTO schedules (user_id, week_day, start_at, end_at) VALUES($1,$2,$3,$4);'
		const Insertschedule = await database.any(queryInsertIntoSchedule, [
			userId,
			schedule.week_day,
			insertStart,
			insertEnd,
		])
		const queryUserDisplay = `SELECT * FROM users WHERE user_id = '${userId}' ;`
		const user = await database.any(queryUserDisplay)
		const userDetails = {
			surname: user[0].surname,
			firstname: user[0].firstname,
			email: user[0].email,
			psw: user[0].psw,
		}
		const query =
    'INSERT INTO combined (user_id, surname, firstname, email, psw, week_day, start_at, end_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8);'
		const insetAll = await database.any(query, [
			userId,
			userDetails.surname,
			userDetails.firstname,
			userDetails.email,
			userDetails.psw,
			schedule.week_day,
			insertStart,
			insertEnd,
		])
		const queryDisplayCombined = `SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined WHERE combined.user_ID = '${userId}' ORDER BY date;`
		database.any(queryDisplayCombined).then((scheduleTable) => {
			res.render('pages/users', {
				title: 'Form page',
				scheduleTable,
			})
		})
	} catch (error) {
		console.log(error)
	}
})
module.exports = router
=======
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const session = require("express-session");
const database = require("../database.js");
router.get("/:userNum", (req, res) => {
  const userId = req.params.userNum;
  const queryDisplayCombined = `SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined WHERE combined.user_ID = '${userId}' ORDER BY date;`;
  database
    .any(queryDisplayCombined)
    .then((scheduleTable) => {
      res.render("pages/users", {
        title: "Form page",
        scheduleTable,
      });
    })
    .catch((err) => {
      res.render("./pages/error", {
        title: "Error",
        layout: "./pages/layout",
        err: err.message,
      });
    }); // THIS IS FINE
});
router.post("/", async (req, res) => {
  try {
    const { userId } = req.session;
    // console.log(`hello + ${req.session.userId}`);
    const schedule = {
      start_at: req.body.starttime,
      end_at: req.body.endtime,
      week_day: parseInt(req.body.day),
      date: req.body.date,
    };
    const insertStart = `${schedule.date} ` + `${schedule.start_at}`;
    const insertEnd = `${schedule.date} ` + `${schedule.end_at}`;
    const queryInsertIntoSchedule =
      "INSERT INTO schedules (user_id, week_day, start_at, end_at) VALUES($1,$2,$3,$4);";
    const Insertschedule = await database.any(queryInsertIntoSchedule, [
      userId,
      schedule.week_day,
      insertStart,
      insertEnd,
    ]);
    const queryUserDisplay = `SELECT * FROM users WHERE user_id = '${userId}' ;`;
    const user = await database.any(queryUserDisplay);
    const userDetails = {
      surname: user[0].surname,
      firstname: user[0].firstname,
      email: user[0].email,
      psw: user[0].psw,
    };
    const query =
      "INSERT INTO combined (user_id, surname, firstname, email, psw, week_day, start_at, end_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8);";
    const insetAll = await database.any(query, [
      userId,
      userDetails.surname,
      userDetails.firstname,
      userDetails.email,
      userDetails.psw,
      schedule.week_day,
      insertStart,
      insertEnd,
    ]);
    const queryDisplayCombined = `SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined WHERE combined.user_ID = '${userId}' ORDER BY date;`;
    database.any(queryDisplayCombined).then((scheduleTable) => {
      res.render("pages/users", {
        title: "Form page",
        scheduleTable,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
>>>>>>> 9c5e41928dea961771069283fabf450e7da01519
