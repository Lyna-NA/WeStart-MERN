const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    database: "express_db",
    user: "root",
    password: "P@s$123$"
});

module.exports = pool.promise();