//require: modules
//express
const express = require("express");

//routes
const userRoutes = require("./routes/user-routes");

//mongo-database
const mongo = require("./utils/database");

//express: instance
const app = express();

//express: use middlewares
//express: url-encoded (parser)
app.use(express.urlencoded());

//routes
app.use("/api/users", userRoutes);
// app.use();

//mongodb: connection
mongo.connect((status, db) => {
  if (status) {
    // mongo.database();
    // console.log(db);
    //express: listen
    app.listen(5000);
  }
});

// mongo.database();