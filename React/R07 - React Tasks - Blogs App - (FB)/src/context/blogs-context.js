import { createContext, useState } from "react";

export const BlogsContext = createContext({
    blogs: [],
    setBlogs: () => {}
});

export const BlogsContextProvider = (props) => {
    let [blogsArray, setBlogsArray] = useState([]);

    return (
      <BlogsContext.Provider
        value={{
          blogs: blogsArray,
          setBlogs: setBlogsArray,
        }}
      >
        {props.children}
      </BlogsContext.Provider>
    );
};