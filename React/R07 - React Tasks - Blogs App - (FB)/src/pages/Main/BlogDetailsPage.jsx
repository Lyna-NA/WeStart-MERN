import blogImage from "../../resources/images/img3.png";
import image from "../../resources/images/img2.png";
import { useContext } from "react";
import { BlogsContext } from "../../context/blogs-context";

let BlogDetailsPage = (props) => {

  let blogsContext = useContext(BlogsContext);

  let blog = blogsContext.blogs.find((element) => element.id = props);

  return (
    <div className="blog-details main">
      <div>
        <div>
          <aside>
            <div>
              <img src={image} alt="An image here" />
            </div>
            <div>
              <span>
                <span>Blog Name:</span> {blog.title}
              </span>
              <span>
                <span>Blog Category:</span> {blog.categoryName}
              </span>
              <span>
                <span>Posted By:</span> {blog.publisherName}
              </span>
              <span>
                <span>Post Date:</span> 28.9.2022
              </span>
            </div>
          </aside>
          <article>
            <span>
              It’s Time to Code, Improve Your Coding Skills And Get Jobs
            </span>
            <p>{blog.description}</p>
          </article>
        </div>
        {/* <article>
          <span>
            It’s Time to Code, Improve Your Coding Skills And Get Jobs
          </span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
            <br /> <br /> At veroeos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed{" "}
          </p>
        </article> */}
      </div>

      <section className="trendy-blogs">
        <span>Related blogs</span>
        <section>
          <article>
            <div>
              <button>Design</button>
              <span>SEPTEMBER 28,2022</span>
            </div>
            <span>
              It's Time to Code, Improve Your Coding Skills And Get Jobs
            </span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erea.
            </p>
          </article>
          <div>
            <img src={blogImage} alt="this is an image" />
          </div>
        </section>
      </section>
    </div>
  );
};
export default BlogDetailsPage;
