const express = require("express");
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/note-controller");
const auth = require("../middlewares/auth");
const router = express.Router();

/**
 * @method GET
 * @controllerMethod index
 */
router.get("/",auth, index);

/**
 * @method GET
 * @param :id
 * @controllerMethod show
 */
router.get("/:id", auth, show);

/**
 * @method POST
 * @controllerMethod store
 */
router.post("", auth, [], store);

/**
 * @method PUT
 * @param :id
 * @controllerMethod update
 */
router.put("/:id", auth, [], update);

/**
 * @method DELETE
 * @param :id
 * @controllerMethod destroy
 */
router.delete("/:id", auth, destroy);

//module: export
module.exports = router;