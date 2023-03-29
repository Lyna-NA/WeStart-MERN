//require: express
const express = require("express");
const { body } = require("express-validator");
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/product-controller");
const Category = require("../models/Category");
const Product = require("../models/Product");

//instance: Router
const router = express.Router();

//router: Routes
router.get("/", index);
router.get("/:id", show);
router.post(
  "/",
  [
    // body("gender")
    //   .notEmpty()
    //   .withMessage("Enter gender value!")
    //   .isIn(["M", "F", "f", "m"])
    //   .withMessage("Gender must be either F or M"),
    body("category_id")
      .isNumeric({ no_symbols: true })
      .custom((value, { req }) => {
        return Category.findByPk(value).then((result) => {
          if (!result) {
            return Promise.reject("Category not exist");
          }
        });
      }),
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Field name is required")
      .isAlphanumeric()
      .isLength({ min: 3, max: 30 })
      .withMessage("Field name must be between 3 and 30 value")
      .custom((value, { req }) => {
        //exists: products, name
        return Product.findOne({ where: { name: value } }).then((result) => {
          if (result) {
            return Promise.reject("The value for Product Name already exists.");
          }
        });
        // .catch();
      }),
    // .withMessage("The value for Product Name already exists."),
    body("price")
      // .isNumeric({ no_symbols: true })
      // .withMessage("Price must be a vaild number")
      .isFloat({ min: 0, max: 400 })
      // .custom((value, { req }) => {
      //   if (value >= 0 && value <= 500) {
      //     return true;
      //   }
      //   return false;
      // })
      // .isLength({ min: 1, max: 500 })
      .withMessage("Price must be between 0 to 400"),
  ],
  store
);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
