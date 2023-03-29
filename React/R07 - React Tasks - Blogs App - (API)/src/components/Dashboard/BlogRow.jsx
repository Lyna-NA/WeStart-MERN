import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogsContext } from "../../context/blogs-context";
import BlogsController from "../../controllers/blogs-controller";

let BlogRow = (props) => {

  let blogsContext = useContext(BlogsContext);
  let blogsController =  new BlogsController();

  let navigator = useNavigate();
  
  let onDeleteHandler = async() => {

    let result = await blogsController.delete(props.blog.id);
    console.log("deleted? :" + result);

    if(result){
      let filteredArray = blogsContext.blogs.filter(
        (element) => element.id != props.blog.id
      );
      blogsContext.setBlogs(filteredArray);
    }
  };

  let onUpdateHandler = () => {
    navigator("/dashboard/blogs/update", props.blog.id);
  };

  return (
    <tr>
      <td>
        <button>{props.blog.categoryName}</button>
      </td>
      <td>{props.blog.title}</td>
      <td>{new Date().toJSON()}</td>
      <td>{props.blog.publisherName}</td>
      <td>
        <button onClick={onUpdateHandler}>Update</button>
        <button onClick={onDeleteHandler}>Delete</button>
      </td>
    </tr>
  );
};
export default BlogRow;