//require: body-parser
const bodyParser = require("body-parser");

//require: routes
const categoryRoutes = require("./routes/category-routes");
const productRoutes = require("./routes/products-routes");

//require: sequelize
const sequelize = require("./utils/database");

//require: SequelizeManager
const SequelizeManager = require("./utils/sequelize-manager");
const manager = new SequelizeManager();

//require: models
const Product = require("./models/Product");
const Category = require("./models/Category");

//require: express
const express = require("express");

//instance: express
const app = express();

//express: use middlewares
app.use(bodyParser.urlencoded());

//express: use middlewares(routes)
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

//sequelize-manager: Sync & Relations
//sequelize-manager: Authenticate (Connection Check)
manager.authenticate();

//sequelize-manager: Sync (Create tables from models)
manager.syncModels((message, status) => {
  if (status) {
    // console.log("WE ARE IN APP ENTRY POINT");
    app.listen(5000);
    // console.log(message);
  }
});

//sequelize-manager: Modify Relations
manager.modifyRelations();

// //Category hasMany Products
// Category.hasMany(Product);

// //Product belongsTo Category
// Product.belongsTo(Category, { onDelete: "CASCADE", foreignKey: "category_id" });

// //sequelize: Authenticate (Connection Check)
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connected Successfully");
//   })
//   .catch((error) => {
//     console.log("connection Failed");
//   });

// //sequelize: Sync (Create tables from models)
// sequelize
//   .sync(/*{ force: true }*/)
//   .then((result) => {
//     console.log("Tables Created");
//   })
//   .catch((error) => {
//     console.log("Failed to create tables!");
//   });

//express: listen
// app.listen(5000);
