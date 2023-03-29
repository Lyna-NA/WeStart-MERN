//required modules
const express = require("express");
const {
  index,
  show,
  update,
  store,
  destroy,
} = require("../controllers/note-controller");

//express: Router instance
const noteRoutes = express.Router();

//router: routes
noteRoutes.get("/", index);
noteRoutes.get("/:id", show);
noteRoutes.post("/", store);
noteRoutes.put("/:id", update);
noteRoutes.delete("/:id", destroy);

//module: export
module.exports = noteRoutes;

/**
 * Routes Naming:
 *  - index     Get     http://127.0.0.1:5000/api/notes                //API   
 *  - show      Get     http://127.0.0.1:5000/api/notes/{:note}        //API
 *  - create    Get     http://127.0.0.1:5000/api/notes/create         //WEB
 *  - store     POST    http://127.0.0.1:5000/api/notes                //API
 *  - edit      Get     http://127.0.0.1:5000/api/notes/{:note}/edit   //WEB
 *  - update    PUT     http://127.0.0.1:5000/api/notes/{:note}        //API
 *  - destroy   DELETE  http://127.0.0.1:5000/api/notes/{:note}        //API
 */