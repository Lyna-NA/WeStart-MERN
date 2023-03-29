//require: express
const express = require("express");
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/product-controller");

//instance: Router
const router = express.Router();

//router: Routes
router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
