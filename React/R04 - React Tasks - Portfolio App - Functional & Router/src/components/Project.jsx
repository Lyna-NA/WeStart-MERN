import { Fragment } from "react";

let Project = (props) => {
    return (
      <Fragment>
        <div className="item">
          <div className="container">
            <img src={props.image} alt="Avatar" className="image" />
            <div className="overlay">
              <div className="text">{props.title}</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
};
export default Project;