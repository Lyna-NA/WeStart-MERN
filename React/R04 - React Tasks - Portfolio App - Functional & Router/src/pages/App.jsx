import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../resources/css/custom.css";
import Logo from "../resources/img/logo.png";

let App = () => {
    return (
      <Fragment>
        <nav>
          <ul className="topnav">
            <li>
              <a href="#">
                <img src={Logo} height="50" />
              </a>
            </li>
            <div className="right">
              <li>
                <NavLink
                  className={(props) => (props.isActive ? "active" : "")}
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={(props) => (props.isActive ? "active" : "")}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(props) => (props.isActive ? "active" : "")}
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(props) => (props.isActive ? "active" : "")}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
        {/* START: CONTENT */}
        <Outlet />
        {/* END: CONTENT */}
        <footer>
          <div className="copyright">Copyright 2022 . All Rights Reserved.</div>
        </footer>
      </Fragment>
    );
};
export default App; 