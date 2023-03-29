import React, { createContext, useState } from "react";
import Post from "../models/Post";

export const AppContext = createContext<{
  posts: Post[];
  addPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  deletePost: (id: number) => void;
}>({
  posts: [],
  addPosts: (posts: Post[]) => {},
  addPost: (post: Post) => {},
  deletePost: (id: number) => {},
});

export const AppContextProvider = (props: { children: React.ReactNode }) => {
  let [posts, setPosts] = useState<Post[]>([]);

  let addPosts = (posts: Post[]) => {
    setPosts(posts);
  }

  let addPost = (post: Post) => {
    setPosts((prevState: Post[]) => {
      return [post, ...prevState];
    });
  };
  
  let deletePost = (id: number) => {
    let filteredData = posts.filter((element: Post) => element._id == id);
    setPosts(filteredData);
  };

  return (
    <AppContext.Provider
      value={{
        posts: posts,
        addPosts: addPosts,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};