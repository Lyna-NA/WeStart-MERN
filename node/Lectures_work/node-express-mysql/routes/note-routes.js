const express = require('express');
const { index, show, store, update, destroy } = require('../controllers/note-controller');

let noteRoutes = express.Router();

//api/notes
/**
 * @httpMethod get
 * @controller note-controller
 * @controllerMethod index
 */
 noteRoutes.get("/", index);

 /**
  * @httpMethod get
  * @controller note-controller
  * @controllerMethod show
  */
  noteRoutes.get("/:id", show);
 
 /**
  * @httpMethod post
  * @controller note-controller
  * @controllerMethod store
  */
  noteRoutes.post("/", store);
 
 /**
  * @httpMethod post
  * @controller note-controller
  * @controllerMethod update
  */
  noteRoutes.put("/:id", update);
 
 /**
  * @httpMethod delete
  * @controller note-controller
  * @controllerMethod destroy
  */
  noteRoutes.delete("/:id", destroy);

module.exports = noteRoutes;
