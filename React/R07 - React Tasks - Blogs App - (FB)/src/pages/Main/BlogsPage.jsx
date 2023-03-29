import { useContext, useEffect } from "react";
import BlogRow from "../../components/Main/BlogRow";
import { BlogsContext } from "../../context/blogs-context";
import { CategoriesContext } from "../../context/categories-context";
import BlogsController from "../../controllers/blogs-controller";

let BlogsPage = () => {
  let categoriesContext = useContext(CategoriesContext);
  let blogsContext = useContext(BlogsContext);
  let blogsController = new BlogsController();

  let categories = categoriesContext.categories;

  let filteredBlogs = blogsContext.blogs;

  let fetchData = async () => {
    if (filteredBlogs.length == 0) {
      let blogs_fb = await blogsController.read();
      blogsContext.setBlogs(blogs_fb);
    }
  };

  useEffect(() => {fetchData()}, []);

  let onCategoryFilterClickHandler = (event) => {
    // console.log(event.target.value);
    // filteredBlogs = blogsContext.blogs;
    // filteredBlogs = filteredBlogs.filter((element) => element.categoryId = event.target.value);
    // console.log(filteredBlogs);
    // console.log(blogsContext.blogs);
  }

  return (
    <div className="main">
      <section className="recent-blogs">
        <ul className="filter-blogs">
          {categories.map((element) => (
            <button
              value={element.id}
              key={element.id}
              onClick={onCategoryFilterClickHandler}
            >
              {element.name}
            </button>
          ))}
        </ul>
        {filteredBlogs.map((element) => (
          <BlogRow key={element.id} blog={element} />
        ))}
      </section>
      <section></section>
    </div>
  );
};
export default BlogsPage;