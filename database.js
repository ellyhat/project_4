const pgp = require("pg-promise")();

//change to set the env variables - .env pack
const connection = `${process.env.DB_CONNECTION}`;
const db = pgp(connection);

module.exports = db;

