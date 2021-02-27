const pgp = require("pg-promise")();

const connection = "postgres://postgres:butzy@localhost:5432/project_4"
//change to set the env variables - .env pack
//const connection = `${process.env.DB_CONNECTION}`;
const db = pgp(connection);

module.exports = db;

//have changed jane to postgres:butzy
