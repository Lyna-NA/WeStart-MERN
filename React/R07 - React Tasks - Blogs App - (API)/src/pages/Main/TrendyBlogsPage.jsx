import blogImage from "../../resources/images/img3.png";

let TrendyBlogsPage = () => {
    return (
      <div className="main">
        <section className="recent-blogs">
          <span>Most Recent</span>
          <section>
            <article>
              <div>
                <button>Development</button>
                <span>SEPTEMBER 28,2022</span>
              </div>
              <span>
                It's Time to Code, Improve Your Coding Skills And Get Jobs
              </span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erea.
              </p>
            </article>
            <div>
              <img src={blogImage} alt="this is an image" />
            </div>
          </section>
        </section>
        <section className="trendy-blogs">
          <span>Trendy blogs</span>
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erea.
              </p>
            </article>
            <div>
              <img src={blogImage} alt="this is an image" />
            </div>
          </section>
        </section>
      </div>
    );
}
export default TrendyBlogsPage;