const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const app = express();
const database = require("../database.js");

const session = require("express-session");

router.post("/:scheduleNum", (req, res) => {
  const scheduleID = req.params.scheduleNum;

  const queryDeleteSchedule = `DELETE FROM combined WHERE start_at = '${scheduleID}' `;

  database
    .query(queryDeleteSchedule)
    .then((scheduleTable) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.render("./pages/error", {
        title: "Error",
        err: err.message,
      });
    });
}); // THIS IS FINE
module.exports = router;
