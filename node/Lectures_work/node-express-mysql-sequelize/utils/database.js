//Instantiation
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    port: "3306",
    database: "express_db",
    username: "root",
    password: "P@s$123$",
    dialect: "mysql"
});

module.exports = sequelize;