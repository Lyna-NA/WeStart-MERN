import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogRow from "../../components/Dashboard/BlogRow";
import { BlogsContext } from "../../context/blogs-context";
import BlogsController from "../../controllers/blogs-controller";

let PanelBlogsPage = () => {

  let blogsContext = useContext(BlogsContext);
  let blogsController = new BlogsController();

  let blogs = blogsContext.blogs;

  console.log(blogs)

  let fetchData = async () => {
    if (blogs != null && blogs.length == 0) {
      let blogs_fb = await blogsController.read();
      console.log("blogs_fb");
      console.log(blogs_fb);
      blogsContext.setBlogs(blogs_fb);
    }
  };

  useEffect(() => {fetchData()}, []);

  return (
    <div className="blogs-table">
      <span>All Blogs</span>
      <div>
        <div></div>
        <button>
          <NavLink to="/dashboard/blogs/new" className="btn">
            Create New Blog
          </NavLink>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Blog title</th>
            <th>Due date</th>
            <th>Publisher</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((element, index) => (
            <BlogRow key={element.id} blog={element} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PanelBlogsPage;