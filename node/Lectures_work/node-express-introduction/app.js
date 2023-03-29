const bodyParser = require("body-parser");
const express = require("express");
const HttpError = require("./models/HttpError");
const userRoutes = require("./routes/app-routes");
const app = express(); //creating instance of express

//-----------------------Application Requests---------------------

// app.use((req, res) => {
//     console.log(`Method: ${req.method}`);
//     console.log(`URL: ${req.url}`);
//     console.log(`BASE-URL: ${req.baseUrl}`);
//     console.log("Node.js Starts : FIRST");
//     req.next();
// });

// app.use((req, res) => {
//     console.log("Node.js Next : SECOND");
//     // res.json({status: true, message: "Success"});
//     console.log("------");
//     res.status(201).json({status: true, message: "Success!"});
// });

app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

// app.post("/store", (req, res) => {
//   console.log(`POST REQUEST: ${req.url}`);
//   console.log(req.body);
//   res
//     .status(201)
//     .json({ status: true, message: "POST REQUEST", data: req.body.name });
// });

// app.get("/all", (req, res) => {
//   console.log(`GET REQUEST: ${req.url}`);
//   res.status(200).json({ status: true, message: "GET REQUEST" });
// });

//Prefix: /api/users/?
//app.use('/prefix-uri', exported-routes-module);
app.use("/api/users", userRoutes);

//fallback route
app.use("/", (req, res) => {
  // res.status(404).json({ status: false, message: "Not Found" });
  const notFoundError = new HttpError(400, "Not Found");
  // res.status(notFoundError.code).json({ message: notFoundError.message });
  // throw new HttpError(404, "Not Found");
  // res.status(404).json(new HttpError(404, "Not Found"));
  // console.log(error);
  throw notFoundError;
});

app.use((error, req, res, next) => {
  // console.log("--------------");
  // console.log(error.message);
  res.status(error.code).json({message: error.message});
});

app.listen(5000);
