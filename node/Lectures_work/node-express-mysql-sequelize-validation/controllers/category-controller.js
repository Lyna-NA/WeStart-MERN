const { validationResult } = require("express-validator");
const Category = require("../models/Category");
const Product = require("../models/Product");

exports.index = async (req, res) => {
  let categories = await Category.findAll({
    // include: Product,
  });
  return res.status(200).json({ status: true, data: categories });
};

exports.show = async (req, res) => {
  let category = await Category.findByPk(req.params.id, { include: Product });
  let products = await category.getProducts();

  if (category != null) {
    return res.status(200).json({ status: true, data: products });
  }
  return res.status(200).json({ status: false });
};

exports.store = async (req, res) => {
  let errors = validationResult(req);
  if(errors.isEmpty()){
    let response = await Category.create({ name: req.body.name });
    return res.status(201).json({ status: true, response: response });
  }
  return res.status(400).json({status: false, message: errors.errors[0].msg});
};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};
