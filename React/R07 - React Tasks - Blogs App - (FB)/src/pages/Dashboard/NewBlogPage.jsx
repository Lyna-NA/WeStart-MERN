import { useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BlogsContext } from "../../context/blogs-context";
import { CategoriesContext } from "../../context/categories-context";
import BlogsController from "../../controllers/blogs-controller";
import CategoriesController from "../../controllers/categories-controller";
import Blog from "../../models/Blog";

let NewBlogPage = () => {

  let blogsContext = useContext(BlogsContext);
  let categoriesContext = useContext(CategoriesContext);

  let categoriesController = new CategoriesController();
  let blogsController = new BlogsController();

  let titleRef = useRef();
  let publisherRef = useRef();
  let categoryRef = useRef();
  let descriptionRef = useRef();

  let categories = categoriesContext.categories;

  let fetchData = async () => {
    if (categories.length == 0) {
      let categories_fb = await categoriesController.read();
      categoriesContext.setCategories(categories_fb);
    }
  };

  useEffect(() => {fetchData()}, []);

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if(checkData()){
      saveBlog();
    }
  }

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
  }

  let saveBlog = async () => {
    let category = categories.find(
      (element) => (element.id = categoryRef.current.value)
    );
    // console.log(category);

    let blog = new Blog(
      titleRef.current.value,
      publisherRef.current.value,
      category.id,
      category.name,
      descriptionRef.current.value
    );
    // console.log(blog);

    let newBlogId = await blogsController.create(blog);
    console.log("newBlogId: ");
    console.log(newBlogId);

    if(newBlogId != null){
      blog.id = newBlogId;
      // console.log("--------------");
      // console.log(blog);
      // console.log("--------------");
      blogsContext.setBlogs((prevState) => {
        return [blog, ...prevState];
      });
      clear();
    }
  }

  let clear = () => {
    titleRef.current.value = "";
    publisherRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
  }

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
                {categories?.map((element) => (
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
              >
              </textarea>
            </div>
          </div>
        </div>
        <div>
          <button><NavLink to={"/dashboard"}>Back</NavLink></button>
          <button type="submit">Create Blog</button>
        </div>
      </form>
    </div>
  );
};
export default NewBlogPage;
