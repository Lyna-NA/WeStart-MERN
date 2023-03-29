//require: body-parser
const bodyParser = require("body-parser");

//require: express
const express = require("express");

//require: user-routes
let userRoutes = require("./routes/user-routes");

//require: sequelize
const sequelize = require("./utils/database");

//instance: express
let app = express();

//express: routes
app.use("/api/users", userRoutes);

//sequelize: Authenticated & Connected & Create Tables
sequelize
  .sync()
  .then(() => {
    console.log("Connected & Tables Created");
    //express: listen
    app.listen(5000);
  })
  .catch(() => {
    console.log("Connection Error!");
  });

//use: body-parser
app.use(bodyParser.urlencoded());
