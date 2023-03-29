//modules: require
const express = require("express");
const HttpError = require("./models/HttpError");
const multer = require("multer");
const path = require("path");

//modules: routes
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");
const noteRoutes = require("./routes/note-routes");

//modules : mongose
const mongoose = require("mongoose");
const appPath = require("./utils/app-path");

//express: instance
const app = express();

//Multer:
const fileStorage = multer.diskStorage({
  destination: "images",
  filename: (req, file, callback) => {
    // console.log("filename");
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  let acceptFile =
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg";
  callback(null, acceptFile);
};

// app.use("images", (req, res, next) => {
//   path.dirname(require.main.filename);
//   next();
// });

//app.use: multer
//Content-Type: application/form-data(multipart)
app.use(
  multer({
    storage: fileStorage,
    fileFilter: fileFilter,
  }).single("image")
);

// app.use(multer({ dest: "images", fileFilter: fileFilter }).single('image'));

//app.use: urlEncoded
//Content-Type: application/x-www-form-url-encoded
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "images")));

//app.use: routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

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
  .connect("mongodb://127.0.0.1:27017/we_start_db")
  .then((result) => {
    //app: listen
    app.listen(5000);
  })
  .catch((error) => {});