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
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded());

//express: use middlewares(routes)
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

//sequelize-manager: Sync & Relations
//sequelize-manager: Authenticate (Connection Check)
manager.authenticate();

//sequelize-manager: Modify Relations
manager.modifyRelations();

//sequelize-manager: Sync (Create tables from models)
manager.syncModels((message, status) => {
  if (status) {
    //express: listen
    app.listen(5000);
  }
});