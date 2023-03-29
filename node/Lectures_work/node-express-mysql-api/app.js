//required modules
const bodyParser = require("body-parser");
const express = require("express");
const userRoutes = require("./routes/user-routes");
const noteRoutes = require("./routes/note-routes");
const HttpError = require("./models/HttpError");

//express: instance 
const app = express();

//express: use middlewares
app.use(bodyParser.urlencoded());

//express: use routes
app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

//express: fallback-route
app.use("/", (req, res) => {
    // console.log("FIRST: ");
    throw new HttpError(404, "Not Found Route - 404");
});

//express: error catch
app.use((error, req, res, next) => {
    // console.log("SECOND: ");
    console.log(error.message);
    res.status(error.code).json({ status: false, message: error.message });
});

//express: listen
app.listen(5000);

/**
 * /users/store
 * /users/update
 */