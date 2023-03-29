import { Fragment } from "react";
import Project from "../components/Project";
import ThirdImage from "../resources/img/3.jpg"
import SecondImage from "../resources/img/2.jpg"

let Projects = () => {
    return (
      <Fragment>
        <div class="cover-page">
          <div class="tit">
            <h1>Project</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" class="active">
                  project
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section id="project">
          <div class="flex project pt-30">
            <Project image={SecondImage} title={"title can be here"} />
            <Project image={ThirdImage} title={"title can be here"} />
            <Project image={SecondImage} title={"title can be here"} />
          </div>
          <div class="flex project pt-30">
            <Project image={SecondImage} title={"title can be here"} />
            <Project image={ThirdImage} title={"title can be here"} />
            <Project image={SecondImage} title={"title can be here"} />
          </div>
          <div class="flex project pt-30">
            <Project image={SecondImage} title={"title can be here"} />
            <Project image={ThirdImage} title={"title can be here"} />
            <Project image={SecondImage} title={"title can be here"} />
          </div>
          <div class="flex project pt-30">
            <Project image={SecondImage} title={"title can be here"} />
            <Project image={ThirdImage} title={"title can be here"} />
            <Project image={SecondImage} title={"title can be here"} />
          </div>
          <div class="flex project">
            <Project image={SecondImage} title={"title can be here"} />
            <Project image={ThirdImage} title={"title can be here"} />
            <Project image={SecondImage} title={"title can be here"} />
          </div>
        </section>
      </Fragment>
    );
};
export default Projects;