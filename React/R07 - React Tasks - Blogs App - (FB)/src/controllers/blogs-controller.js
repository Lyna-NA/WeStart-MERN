import axios from "axios";
import Blog from "../models/Blog";

class BlogsController {
  //CRUD
  async create(blog) {
    try {
      let response = await axios.post(
        "https://r07---react-tasks---blogs-app-default-rtdb.firebaseio.com/blogs.json",
        {
            title: blog.title,
            publisherName: blog.publisherName,
            categoryId: blog.categoryId,
            categoryName: blog.categoryName,
            description: blog.description,
        } 
      );
      console.log("--------------************");
      console.log(response.data.name);
      console.log("--------------************");
      if (response.status == 200) {
        return response.data.name;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async read() {
    let response = await axios.get(
      "https://r07---react-tasks---blogs-app-default-rtdb.firebaseio.com/blogs.json"
    );
    if(response.data != null && response.data.length != 0){
        let blogs = [];
        for(let key in response.data){
            let current_blog = response.data[key];
            let blog = new Blog();
            
            blog.id = key;
            blog.title = blog.title;
            blog.publisherName = current_blog.publisherName;
            blog.categoryId = current_blog.categoryId;
            blog.categoryName = current_blog.categoryName;
            blog.description = current_blog.description;
            
            blogs.push(blog);
        }
        console.log(blogs);
        return blogs;
    }
  }

  async update(blog){
    try {
        let response = await axios.put(
          `https://r07---react-tasks---blogs-app-default-rtdb.firebaseio.com/blogs/${blog.id}.json`,
          {
            title: blog.title,
            publisherName: blog.publisherName,
            categoryId: blog.categoryId,
            categoryName: blog.categoryName,
            description: blog.description,
          }
        );
        return true;
    } catch (error) {
        console.log(error);
        return true;
    }
  }

  async delete(id) {
    try {
        let response = await axios.delete(
          `https://r07---react-tasks---blogs-app-default-rtdb.firebaseio.com/blogs/${id}.json`
        );
        return true;
    } catch (error) {
        console.log("error:" + error);
        return false;
    }
  }
}
export default BlogsController;