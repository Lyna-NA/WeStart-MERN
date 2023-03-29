const { Sequelize } = require("sequelize");
const sequelize = require("../utils/database");

module.exports = sequelize.define(
  "category",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  },
  {
    paranoid: true,  //soft delete
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt",
    tableName: "categories"
  }
);

