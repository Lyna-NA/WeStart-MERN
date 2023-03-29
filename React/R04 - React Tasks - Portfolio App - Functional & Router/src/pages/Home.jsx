import { Fragment } from "react";
import Project from "../components/Project";
import ThirdImage from "../resources/img/3.jpg"
import SecondImage from "../resources/img/2.jpg"
import ContactForm from "../components/ContactForm";

let Home = () => {
    return (
      <Fragment>
        <div className="main-cover">
          <div className="overllay">
            <div className="Cover-content">
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
              <p>
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
              </p>
              <a href="">about us</a>
            </div>
          </div>
        </div>
        <section id="about">
          <div className="about flex main-container">
            <div className="item">
              <img src={ThirdImage} alt="" />
            </div>
            <div className="item pt-30">
              <span className="green u-text-sup">ABOUT US</span>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
                facilisis sed ornare eu, lobortis in odio. Praesent convallis
                urna a lacus interdum ut hendrerit risus congue. Nunc sagittis
                dictum nisi, sed ullamcorper ipsum dignissim .
              </p>
              <div>
                <a href="" className="green-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="project">
          <div className="text-center">
            <span className="green u-text-sup  ">Project</span>
            <h2>We Offer Quality Service For Your Business</h2>
          </div>
          <div className="flex project pt-30">
            <Project image={SecondImage} title={"title can be here"} />
            <Project image={ThirdImage} title={"title can be here"} />
            <Project image={SecondImage} title={"title can be here"} />
          </div>
          <div className="flex project">
            <Project image={ThirdImage} title={"title can be here"} />
            <Project image={SecondImage} title={"title can be here"} />
            <Project image={ThirdImage} title={"title can be here"} />
          </div>
        </section>
        <ContactForm />
      </Fragment>
    );
};
export default Home; 