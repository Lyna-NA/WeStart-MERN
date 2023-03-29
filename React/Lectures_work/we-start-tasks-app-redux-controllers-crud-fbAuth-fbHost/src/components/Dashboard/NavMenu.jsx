import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

let NavMenu = () => {

  let loggedIn = useSelector((state) => state.auth.loggedIn);
  let token = useSelector((state) => state.auth.token);

  return (
    <Fragment>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            
            {/* <li className="nav-item">
              {loggedIn? 'TRUE': 'FALSE'}
            </li>

            <li className="nav-item">
              {token}
            </li> */}

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

            <li className="nav-item">
              <NavLink
                className={(props) =>
                  props.isActive ? "nav-link active" : "nav-link"
                }
                to="/dashboard/categories"
                end
              >
                <span data-feather="file"></span>
                Categories
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                className={(props) =>
                  props.isActive ? "nav-link active" : "nav-link"
                }
                to="/dashboard/categories/new"
              >
                <span data-feather="file"></span>
                New Category
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
