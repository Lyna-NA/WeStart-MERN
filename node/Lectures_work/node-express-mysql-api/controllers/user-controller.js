const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.index = async (req, res) => {
  let data = await User.findAll();
  res.status(200).json({ status: true, message: "Success", data: data });
};

exports.show = async (req, res) => {
  // let user = await User.findById(req.params.id, [ "id", "name"]);
  let user = await User.findById(req.params.id);
  if (user != null) {
    let notes = await user.notes();
    res.status(200).json({ status: true, message: "Success", object: notes });
  } else {
    res.status(404).json({ status: false, message: "Not Found" });
  }
};

exports.store = async (req, res) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    let user = new User(null, req.body.name, req.body.email, req.body.password);
    let saved = await user.save();
    if (saved) {
      res
        .status(201)
        .json({
          status: true,
          message: "User created successfully",
          object: user,
        });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Failed to create the new user" });
    }
  } else {
    // res.status(400).json({status: false, message: errors.errors[0].msg});  //valid
    res.status(400).json({ status: false, message: errors.array()[0].msg }); //valid
  }
};

exports.update = async (req, res) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    let user = await User.findById(req.params.id);
    if (user != null) {
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;
  
      let updated = await user.update();
      res.status(updated ? 200 : 400).json({
        status: updated,
        message: updated ? "Updated Successfully" : "Failed to Update User",
      });
    } else {
      res.status(404).json({ status: false, message: "404 - Not Found " });
    }
  }else {
    // res.status(400).json({status: false, message: errors.errors[0].msg});  //valid
    res.status(400).json({ status: false, message: errors.array()[0].msg }); //valid
  }
};

exports.destroy = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user != null) {
    let deleted = await user.delete();
    if (deleted) {
      res.status(200).json({ status: true, message: "Deleted Successfully" });
    } else {
      res.status(400).json({ status: false, message: "Failed to Delete User" });
    }
  } else {
    res.status(404).json({ status: false, message: "404 - Not Found" });
  }
};
