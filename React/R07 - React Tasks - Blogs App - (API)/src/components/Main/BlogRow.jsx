import { useNavigate } from "react-router-dom";
import blogImage from "../../resources/images/img3.png";

let BlogRow = (props) => {

    let navigator = useNavigate();

    let onClickHandler = () => {
        navigator("/main/blogs/details" , props.blog.id);
    }

    return (
      <section onClick={onClickHandler}>
        <article>
          <div>
            <button>{props.blog.categoryName}</button>
            <span>SEPTEMBER 28,2022</span>
          </div>
          <span>
            {props.blog.title}
          </span>
          <h5>
            {props.blog.publisherName}
          </h5>
          <p>
            {props.blog.description}
          </p>
        </article>
        <div>
          <img src={blogImage} alt="this is an image" />
        </div>
      </section>
    );
}
export default BlogRow;