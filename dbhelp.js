const { Pool } = require("pg");

/**
 *Makes a pool of connections to the named database.  it is assumed the db is on localhost.
 * @param {string} dbName name of database to connect to
 */
function makeDBConnectionPool(dbName) {
    //Understanding the details is not important here.
    return new Pool({
        database: dbName,
    });
}

module.exports = { makeDBConnectionPool };