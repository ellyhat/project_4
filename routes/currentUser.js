const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const session = require("express-session");
const database = require("../database.js");

router.get("/", (req, res) => {
  let userId = req.params.userNum;
  console.log(userId); //OK
  const queryDisplayCombined =
    "SELECT surname, firstname, week_day, TO_CHAR(start_at, 'HH:MI am') AS start_at, TO_CHAR(end_at, 'HH:MI am') as end_at, TO_CHAR(end_at, 'DD-Month-YYYY') as date FROM combined WHERE combined.user_ID = '" +
    userId +
    "' ORDER BY date;";
  database
    .any(queryDisplayCombined)
    .then((scheduleTable) => {
      res.render("pages/users", {
        title: "Form page",
        scheduleTable: scheduleTable,
      });
    })
    .catch((err) => {
      res.render("./pages/error", {
        title: "Error",
        err: err.message,
      });
    });
});

module.exports = router;
