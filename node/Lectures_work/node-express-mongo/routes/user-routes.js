//require: modules
//express
const express = require("express");

//express-validator
const { body } = require("express-validator");
const {
  index,
  update,
  destroy,
  store,
  show,
} = require("../controllers/user-controller");

//express: router
const router = express.Router();

//router: HTTP Methods
/**
 * @method index
 * @HttpMethod GET
 * @ControllerFunction index
 * @return
 */
router.get(
  "/",
  [body("key").trim().notEmpty().withMessage("Message Here")],
  index
);

/**
 * @method show
 * @HttpMethod GET
 * @ControllerFunction show
 * @return
 */
router.get(
  "/:id",
  [body("key").trim().notEmpty().withMessage("Message Here")],
  show
);

/**
 * @method store
 * @HttpMethod POST
 * @ControllerFunction store
 * @return
 */
router.post(
  "/",
  [
    body("name")
      .notEmpty()
      .withMessage("Field name is required")
      .isAlpha("en-US", { ignore: [" "] })
      .withMessage("Field name locale must be en and without symbols")
      .isLength({ min: 3, max: 20 })
      .withMessage("Filed name length must be between 3 to 20 charachters"),
    body("email").trim().notEmpty().normalizeEmail().isEmail(),
    body("mobile").trim().notEmpty().isMobilePhone(),
    body("age").trim().notEmpty().isNumeric({ no_symbols: true }),
    body("password").trim().notEmpty().isStrongPassword({
      minLength: 4,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }),
  ],
  store
);

/**
 * @method update
 * @HttpMethod PUT
 * @ControllerFunction update
 * @return
 */
router.put(
  "/:id",
  [
    body("name")
      .notEmpty()
      .withMessage("Field name is required")
      .isAlpha("en-US", { ignore: [" "] })
      .withMessage("Field name locale must be en and without symbols")
      .isLength({ min: 3, max: 20 })
      .withMessage("Filed name length must be between 3 to 20 charachters"),
    body("email").trim().notEmpty().normalizeEmail().isEmail(),
    body("mobile").trim().notEmpty().isMobilePhone(),
    body("age").trim().notEmpty().isNumeric({ no_symbols: true }),
  ],
  update
);

/**
 * @method destroy
 * @HttpMethod DELETE
 * @ControllerFunction destroy
 * @return
 */
router.delete(
  "/:id",
  [body("key").trim().notEmpty().withMessage("Message Here")],
  destroy
);

//export: module (Router)
module.exports = router;
