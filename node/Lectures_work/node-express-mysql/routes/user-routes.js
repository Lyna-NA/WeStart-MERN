const express  = require('express');
const { index, show, update, destroy, store } = require('../controllers/user-controller');

let userRoutes = express.Router();

//api/users
/**
 * @httpMethod get
 * @controller user-controller
 * @controllerMethod index
 */
 userRoutes.get("/", index);

/**
 * @httpMethod get
 * @controller user-controller
 * @controllerMethod show
 */
 userRoutes.get("/:id", show);

/**
 * @httpMethod post
 * @controller user-controller
 * @controllerMethod store
 */
 userRoutes.post("/", store);

/**
 * @httpMethod post
 * @controller user-controller
 * @controllerMethod update
 */
 userRoutes.put("/:id", update);

/**
 * @httpMethod delete
 * @controller user-controller
 * @controllerMethod destroy
 */
 userRoutes.delete("/:id", destroy);

module.exports = userRoutes;

/**
 * Routes Naming:
 *  - index     Get     127.0.0.1:5000/api/users                //API   
 *  - show      Get     127.0.0.1:5000/api/users/{:user}        //API
 *  - create    Get     127.0.0.1:5000/api/users/create         //WEB
 *  - store     POST    127.0.0.1:5000/api/users                //API
 *  - edit      Get     127.0.0.1:5000/api/users/{:user}/edit   //WEB
 *  - update    PUT     127.0.0.1:5000/api/users/{:user}        //API
 *  - destroy   DELETE  127.0.0.1:5000/api/users/{:user}        //API
 */