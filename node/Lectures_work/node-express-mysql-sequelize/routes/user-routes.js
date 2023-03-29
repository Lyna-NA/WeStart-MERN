const express = require("express");
const { index, show, store, update, destroy } = require("../controllers/user-controller");

//express: Router
let router = express.Router();

//Routes
router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;