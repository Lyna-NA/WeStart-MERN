const { validationResult } = require("express-validator");
const Category = require("../models/Category");
const Product = require("../models/Product");
const product = require("../models/Product");

exports.index = (req, res) => {};

exports.show = async (req, res) => {
  let product = await Product.findByPk(req.params.id, { include: Category });
  if (product != null) {
    // let category = await product.getCategory();
    return res
      .status(200)
      .json({ status: true, object: product /*product.category*/ });
  }
  return res.status(404).json({ status: false });
};

exports.store = async (req, res) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    const category = await Category.findByPk(req.body.category_id);
    let newProduct = await Product.create({
      name: req.body.name,
      price: req.body.price,
    });
    //await product.setCategory(category);
    // console.log("----------------");
    // console.log(newProduct);
    await category.addProduct(newProduct);
    return res.status(201).json({ status: true, object: newProduct });
  }
  return res
    .status(400)
    .json({ status: false, message: errors.array()[0].msg });
};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};
