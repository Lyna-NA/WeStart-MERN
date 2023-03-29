const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

const db = new Sequelize({
    host: "localhost",
    port: "3306",
    username: "root",
    password: "P@s$123$",
    database: "express_db",
    dialect: "mysql",
});

module.exports = db;