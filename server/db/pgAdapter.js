require('dotenv').config();
const pgPromise = require('pg-promise');

const pgp = pgPromise({});

exports.db = pgp({
  host: process.env.PG_HOSTNAME,
  port: 5432,
  database: process.env.PG_DB,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
});