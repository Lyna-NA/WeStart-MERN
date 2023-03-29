//required modules
const express = require("express");
const {
  index,
  show,
  update,
  store,
  destroy,
} = require("../controllers/user-controller");
const User = require("../models/User");

/*const validationRules = [
  check("name").notEmpty().isAlpha().isLength({ min: 3, max: 20 }),
  check("email").normalizeEmail().isEmail(),
  check("password")
    .notEmpty()
    .isAlpha()
    .isNumeric()
    .isStrongPassword({
      minLength: 4,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .isLength({ min: 3, max: 15 }),
];
*/

//express: Router instance
const userRoutes = express.Router();

//router: routes
userRoutes.get("/", index);
userRoutes.get("/:id", show);
// userRoutes.post("/", validationRules, store);
userRoutes.post("/", User.validationRules, store);

userRoutes.put("/:id", User.validationRules, update);
userRoutes.delete("/:id", destroy);

//module: export
module.exports = userRoutes;

/**
 * Routes Naming:
 *  - index     Get     http://127.0.0.1:5000/api/users                //API
 *  - show      Get     http://127.0.0.1:5000/api/users/{:user}        //API
 *  - create    Get     http://127.0.0.1:5000/api/users/create         //WEB
 *  - store     POST    http://127.0.0.1:5000/api/users                //API
 *  - edit      Get     http://127.0.0.1:5000/api/users/{:user}/edit   //WEB
 *  - update    PUT     http://127.0.0.1:5000/api/users/{:user}        //API
 *  - destroy   DELETE  http://127.0.0.1:5000/api/users/{:user}        //API
 */
