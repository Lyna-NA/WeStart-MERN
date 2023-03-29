import PostCard from "../components/PostCard";
import { Fragment, useEffect, useContext } from "react";
import PostsApiController from "../controllers/posts-api-controller";
import { AppContext } from "../context/app-context";
import Post from "../models/Post";
// import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import openSocket from 'socket.io-client';

let PostsPage = () => {
  let controller = new PostsApiController();
  let context = useContext(AppContext);

  let readPosts = async () => {
    const posts = await controller.all();
    context.addPosts(posts);
  };

  let startSocket = () => {
    const socket = openSocket("http://localhost:5000", {
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      // host: "localhost",
      // hostname: "localhost",
      secure: false,
      // path: " "
    });
    console.log("socket: ", socket);
    // const socket = io("http://localhost:5000");
    // socket.on("connect", (result) => {
    //   console.log("Socket Connected Successfully");
    // });
    socket.on("posts", (data) => {
      if(data.action == 'store'){
        console.log('Post Event Received: STORE');
        console.log(data);
        context.addPost(data.post);
      }else if(data.action == 'delete'){
        console.log('Post Event Received: DELETE');
        console.log(data);
        context.deletePost(data.postId);
      }
    })
  }
  useEffect(startSocket, []);

  useEffect(() => {
    readPosts();
  }, []);

  return (
    <Fragment>
      {context.posts.map((element: Post) => (
        <PostCard key={element._id} post={element} />
      ))}
    </Fragment>
  );
};
export default PostsPage;