import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import NavMenu from "../../components/Dashboard/NavMenu";
import { authActions } from "../../redux/auth-slice";
import { tasksActoins } from "../../redux/tasks-slice";

let Dashboard = () => {

  let dispatch = useDispatch();
  let navigator = useNavigate();

  let onSearchChangeHandler = (event) => {
    //alert(event.target.value);
    dispatch(tasksActoins.filterdBySearch(event.target.value));
  }

  let onSignOutHandler = () => {
    localStorage.setItem("logged_in", false);
    localStorage.setItem("token", "");
    dispatch(authActions.logout());
    navigator("/login", { replace : true });
  }

  return (
    <Fragment>
      <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Momen Task
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={onSearchChangeHandler}
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button className="nav-link px-3 btn-light-main btn" onClick={onSignOutHandler}>
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <NavMenu />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};
export default Dashboard;
