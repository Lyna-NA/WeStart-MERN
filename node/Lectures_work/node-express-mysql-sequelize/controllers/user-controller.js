const User = require("../models/User");

exports.index = async (req, res) => {
  let response = await User.findAll();
  return res
    .status(200)
    .json({ status: true, message: "success", data: response });
};

exports.show = async (req, res) => {
  let response = await User.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (response.length > 0) {
    return res
      .status(200)
      .json({ status: true, message: "Success", data: response[0] });
  } else {
    return res.status(404).json({ status: false, message: "Not Found - 404" });
  }
};

exports.store = async (req, res) => {
  try {
    let result = await User.create({
      name: "Mohammed Naser",
      email: "email@app.com",
    });
    console.log(result);
    return res
      .status(200)
      .json({ status: true, message: "Success", data: result });
  } catch (error) {
    console.log(error.errors[0].message);
    return res
      .status(400)
      .json({ status: false, message: error.errors[0].message });
  }
};

exports.update = async (req, res) => {
  let users = await User.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (users.length > 0) {
    let user = users[0];
    let updated = await user.update({
      name: "New Name",
      email: "updated-email@app.com",
    });
    return res
      .status(200)
      .json({ status: true, message: "Success", data: updated });
  } else {
    return res.status(404).json({ status: false, message: "Not Found - 404" });
  }
};

exports.destroy = async (req, res) => {
  let countOfDeletedRows = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  const deleted = countOfDeletedRows == 1;
  return res.status(deleted ? 200 : 404).json({
    status: deleted,
    message: deleted ? "Success" : "Failed - Not Found 404",
  });
};