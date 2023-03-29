import { Fragment } from "react";
import { NavLink } from "react-router-dom";

let NavMenu = () => {
  return (
    <Fragment>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className={(props) =>
                  props.isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/dashboard"
                end
              >
                <span data-feather="home"></span>
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(props) =>
                  props.isActive ? "nav-link active" : "nav-link"
                }
                to="/dashboard/tasks/new"
              >
                <span data-feather="file"></span>
                New Task
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="users"></span>
                other link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                other link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="layers"></span>
                other link
              </a>
            </li>  */}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
export default NavMenu;
