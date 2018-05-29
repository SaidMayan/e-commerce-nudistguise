const pgp = require('pg-promise')();
const config = require('./dbConfig');

const db = pgp(process.env.DATABASE_URL || config);

module.exports = db;
