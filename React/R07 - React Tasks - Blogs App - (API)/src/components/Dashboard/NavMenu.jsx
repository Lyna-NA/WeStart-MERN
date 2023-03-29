import { NavLink } from "react-router-dom";

let NavMenu = () => {
    return (
      <aside>
        <span>
          <span>B</span>LOGS
        </span>
        <span>Admin tools</span>
        <ul>
          <li className="nav-item">
            <NavLink
              className={(props) =>
                props.isActive ? "nav-link active" : "nav-link"
              }
              to="/main/blogs"
              end
            >
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={(props) =>
                props.isActive ? "nav-link active" : "nav-link"
              }
              to="/dashboard"
              end
            >
              All Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={(props) =>
                props.isActive ? "nav-link active" : "nav-link"
              }
              to="/dashboard/categories"
            >
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="#">Settings</a>
          </li>
        </ul>
        <span>Insights</span>
        <ul>
          <li className="nav-item">
            <NavLink
              className={(props) =>
                props.isActive ? "nav-link active" : "nav-link"
              }
              to="/dashboard/notifications"
            >
              Notifications
            </NavLink>
          </li>
        </ul>
        <div>
          <span>Momen Sisalem</span>
          <span>Admin</span>
        </div>
      </aside>
    );
}
export default NavMenu;