//First: require
const bodyParser = require('body-parser');
const express = require('express');
const HttpError = require('./models/http-error');
const noteRoutes = require('./routes/note-routes');
const userRoutes = require('./routes/user-routes');

//Second: express instance
const app = express();

//Middlewares
app.use(bodyParser.urlencoded());

//Routes Section
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

//Fallback Route
app.use("/", (req, res) => {
    const error = new HttpError(404, "Not Found");
    console.log("FIRST: ");
    console.log(error.message);
    throw error;
});

app.use((error, req, res, next) => {
    console.log("SECOND: ");
    console.log(error.message);
    res.status(error.code).json({message: error.message});
});

//Third: Listen
app.listen(5000);