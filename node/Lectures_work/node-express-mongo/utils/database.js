//require: modules
//module: mongodb
const mongodb = require("mongodb");

//mongodb: client
const MongoClient = mongodb.MongoClient;

//mongodb: instance
let db;

exports.connect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017/we_start_db")
    .then((client) => {
        console.log("Connected to client successfully");
        db = client.db();
        callback(true, db);
    })
    .catch((error) => {
        console.log("Failed to connect");
        callback(false, null);
    });
};

exports.database = () => {
    // console.log("**************************");
    // console.log(db);
    // console.log("**************************");
    return db;
}

// module.exports = connect; --wrong