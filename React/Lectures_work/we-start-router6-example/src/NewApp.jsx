import { Fragment } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./style.css"

let NewApp = () => {

    let location = useLocation();
    let navigator = useNavigate();

    return (
      <Fragment>
        <ul>
          <li>
            {/* <a href="/first">First</a> */}
            {/* <Link
              to="/first"
              className={location.pathname == "/first" ? "active" : "in-active"}
            >
              First
            </Link> */}

            <NavLink
              to="/first"
              className={(props) => (props.isActive ? "active" : "in-active")}
              end
            >
              first
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/second"
              className={(props) => (props.isActive ? "active" : "in-active")}
              end
            >
              Second
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/second/third"
              className={(props) => (props.isActive ? "active" : "in-active")}
              end
            >
              Third
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/second/third/fourth"
              className={(props) => (props.isActive ? "active" : "in-active")}
              end
            >
              Fourth
            </NavLink>
          </li>
        </ul>
        <div>
          <button onClick={() => navigator("/first")}>First</button>
          <button onClick={() => navigator("/second/third/fourth", { replace:true })}>Fourth</button>
        </div>
        <Routes>
          {/* <Route path="/first">
                <h1>First</h1>
            </Route> */}
          <Route path="/first" element={<h4>First</h4>} />
          <Route path="/second" element={<h4>Second</h4>} />
          <Route path="/second/third" element={<h4>Third</h4>} />
          <Route path="/second/third/fourth" element={<h4>Fourth</h4>} />
        </Routes>
      </Fragment>
    );
}
export default NewApp;