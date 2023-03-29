//modules: require
const express = require("express");
const HttpError = require("./models/HttpError");
const path = require("path");

//modules: routes
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");
const postRoutes = require("./routes/post-routes");

//modules : mongose
const mongoose = require("mongoose");
const socketIo = require("./utils/socket-io");

//express: instance
const app = express();

//app.use: urlEncoded
//Content-Type: application/x-www-form-url-encoded
app.use(express.urlencoded({ extended: true }));

// app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000")
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  next();
});

//app.use: routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

//app.user: Fallback route
app.use("/", (req, res) => {
  throw new HttpError(404, "Not Found");
});

//app.use: Thrown Error Handler
app.use((error, req, res, next) => {
  return res.status(error.code).json({ status: false, message: error.message });
});

//mongose: connect
mongoose
  .connect("mongodb://127.0.0.1:27017/posts_db")
  .then((result) => {
    //app: listen
    const server = app.listen(5000);
    // const io = require("socket.io")(server);
    const io = require("./utils/socket-io").init(server);
    socketIo.getIO().on("posts", () => {
      console.log("Posts Event");
    })
    // io.on("posts", () => {
    //   console.log("Posts Event");
    // })
  })
  .catch((error) => {});