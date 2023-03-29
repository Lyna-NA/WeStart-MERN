import { useContext, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BlogsContext } from "../../context/blogs-context";
import { CategoriesContext } from "../../context/categories-context";
import BlogsController from "../../controllers/blogs-controller";
import CategoriesController from "../../controllers/categories-controller";

let UpdateBlogPage = (props) => {
  let blogsContext = useContext(BlogsContext);
  let categoriesContext = useContext(CategoriesContext);

  let categoriesController = new CategoriesController();
  let blogsController = new BlogsController();

  let navigator = useNavigate();

  let titleRef = useRef();
  let publisherRef = useRef();
  let categoryRef = useRef();
  let descriptionRef = useRef();

  let categories = categoriesContext.categories;
  let blog = {};

  let fetchData = async () => {
    if (categories.length == 0) {
      let categories_fb = await categoriesController.read();
      categoriesContext.setCategories(categories_fb);
    }

    blog = blogsContext.blogs.find((element) => (element.id = props));

    //set form data
    titleRef.current.value = blog.title;
    publisherRef.current.value = blog.publisherName;
    categoryRef.current.value = blog.categoryId;
    descriptionRef.current.value = blog.description;
  };

  useEffect(() => {fetchData();}, []);

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if (checkData()) {
      saveBlog();
    }
  };

  let checkData = () => {
    if (
      titleRef.current.value != "" &&
      publisherRef.current.value != "" &&
      categoryRef.current.value != "" &&
      descriptionRef.current.value != ""
    ) {
      return true;
    }
    alert("Please,\nEnter required data.");
    return false;
  };

  let saveBlog = async() => {
    let category = categories.find(
      (element) => (element.id = categoryRef.current.value)
    );

    blog.title = titleRef.current.value;
    blog.publisherName = publisherRef.current.value;
    blog.categoryId = category.id;
    blog.categoryName = category.name;
    blog.description = descriptionRef.current.value;
    console.log(blog);

    let result = await blogsController.update(blog);

    if(result){
      blogsContext.setBlogs((prevState) => {
        return [blog, ...prevState];
      });
      navigator(-1);
    }
  };

  return (
    <div className="new-blog-content new-blog">
      <span>Add new blog</span>
      <form onSubmit={onSubmitHandler}>
        <div></div>
        <div>
          <div>
            <div className="form-group">
              <label htmlFor="">Blog title</label>
              <input type="text" placeholder="Blog name" ref={titleRef} />
            </div>
            <div className="form-group">
              <label htmlFor="">Publisher name</label>
              <input
                type="text"
                placeholder="Ex. Momen M. Reyad Sisalem"
                ref={publisherRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Category</label>
              <select className="dropdown form-control" ref={categoryRef}>
                {categories.map((element) => (
                  <option value={element.id} key={element.id}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="">Description</label>
              <textarea
                type="text"
                placeholder="Write the description"
                ref={descriptionRef}
                className="text-area"
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <button>
            <NavLink to={"/dashboard"}>Cancel</NavLink>
          </button>
          <button type="submit">Update Blog</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateBlogPage;