const Note = require("../models/Note");

exports.index = async (req, res) => {
  // let data = await Note.findAll();
  // let data = await Note.all().orderBy("id", "DESC").get();
  // let data = await Note.where("title", "LIKE", "'%F%'", "OR")
  //   .where("id", ">", 11)
  //   .orderBy("id", "DESC")
  //   .get();
  let data = await Note.where("title", "LIKE", "'%F%'", "OR")
    .where("id", ">", 11)
    .count();
  return res.status(200).json({ status: true, message: "Success", data: data });
};

exports.show = async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (note != null) {
    let user = await note.user();
    res.status(200).json({ status: true, message: "success", object: user });
  } else {
    res.status(404).json({ status: false, message: "404 - Not Found" });
  }
};

exports.store = async (req, res) => {
  let note = new Note(req.body.title, req.body.info, req.body.user_id);
  const saved = await note.save();
  if (saved) {
    res.status(201).json({
      status: true,
      message: "Note Created Successfully",
      object: note,
    });
  } else {
    res.status(400).json({ status: false, message: "Failed to Create Note" });
  }
};

exports.update = async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (note != null) {
    note.title = req.body.title;
    note.info = req.body.info;
    note.userId = req.body.user_id;

    let updated = await note.update();
    res.status(updated ? 200 : 400).json({
      status: updated,
      message: updated ? "Updated Successfully" : "Failed to Update Note",
    });
  }
};

exports.destroy = async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (note != null) {
    let deleted = await note.delete();
    if (deleted) {
      res.status(200).json({ status: true, message: "Deleted Successfully" });
    } else {
      res.status(400).json({ status: false, message: "Failed to Delete Note" });
    }
  } else {
    res.status(404).json({ status: false, message: "404 - Not Found" });
  }
};
