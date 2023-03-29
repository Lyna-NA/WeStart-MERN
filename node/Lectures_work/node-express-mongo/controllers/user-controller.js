const { json } = require("express");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.index = async (req, res) => {
  let response = await User.findAll();
  return res
    .status(200)
    .json({ status: true, message: "Success", data: response });
};

exports.show = async (req, res) => {
  let response = await User.findById(req.params.id);
  return res.status(response != null ? 200 : 422).json({
    status: response != null,
    message: response != null ? "Success" : "Failed to find object",
    object: response,
  });
};

exports.store = async (req, res) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {

    let hashedPassword = await bcrypt.hash(req.body.password, 12);

    let user = new User(
      req.body.name,
      req.body.email,
      req.body.mobile,
      hashedPassword,
      req.body.age
    );
    let response = await user.save();
    return res
      .status(201)
      .json({ status: true, message: "Success", data: user });
  }
  return res.status(422).json({ status: false, message: "Failed, Error data" });
};

exports.update = async (req, res) => {
  // try {
  let user = await User.findById(req.params.id);
  if (user != null) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.age = req.body.age;

    let response = await user.update();

    return res
      .status(200)
      .json({ status: true, message: "Sucess", object: user });
  }
  return res
    .status(422)
    .json({ status: false, message: "Failed to find object" });
  // } catch (error) {
  //   console.log("Error");
  //   return res
  //     .status(422)
  //     .json({ status: false, message: "Failed to find object" });
  // }
};

//CODE REUSEABILITY - DRY (Don't Repeat Your Self!) - Maintainability
exports.destroy = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user != null) {
    let deleteResult = await user.delete();
    let deleted = deleteResult.deletedCount == 1;
    return res.status(deleted ? 200 : 400).json({
      status: deleted,
      message: deleted ? "Success" : "Delete Failed",
      response: deleted
    });
  }
  return res.status(404).json({
    status: false,
    message: "Failed to find object",
  });
};
