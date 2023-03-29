const fs = require("fs");
fs.writeFile(
  "we-start-file.txt",
  "welcome in node.js - WeStart MERN",
  (error) => {
    console.log(error);
  }
);
