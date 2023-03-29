const Post = require("../models/Post");
const socket = require("../utils/socket-io");

exports.index = async (req, res) => {
  let posts = await Post.find();
  res.status(200).json({ status: true, data: posts });
};

exports.show = async (req, res) => {
  //
};

exports.store = async (req, res) => {
  let result = await Post.insertMany({
    title: req.body.title,
    info: req.body.info,
    owner: req.userId,
  });

  if (result != null) {
    //TODO: Execute socket.io
    // socket.getIO().on("posts", (data) => {
    //   console.log("Event: Posts");
    //   console.log("data: ", data);
    // })

    let status = socket
      .getIO()
      .emit("posts", { action: "store", post: result[0] });

    console.log("status: ", status);

    res.status(201).json({
      status: true,
      message: "Post createdd successfully",
      object: result,
    });
  } else {
    res.status(400).json({ status: false, message: "Failed to create post" });
  }
};

exports.update = async (req, res) => {
  //
};

exports.destroy = async (req, res) => {
  let post = await Post.findById(req.params.id);
  if (post != null) {
    if (post.owner == req.userId) {
      let deleted = await Post.deleteOne({ _id: req.params.id });
      if (deleted) {
        //TODO: Execute socket.io
        socket
          .getIO()
          .emit("posts", { action: "delete", postId: req.params.id });

        res.status(200).json({
          status: true,
          message: "Post deleted successfully",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "Failed to delete post",
        });
      }
    } else {
      res.status(403).json({
        status: false,
        message: "Delete rejected, not the owner",
      });
    }
  } else {
    res.status(404).json({
      status: false,
      message: "Failed to find target post",
    });
  }
};