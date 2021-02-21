const pgp = require("pg-promise")();
const connection = "postgres://jane@localhost:5432/project_4";
const db = pgp(connection);

module.exports = db;
