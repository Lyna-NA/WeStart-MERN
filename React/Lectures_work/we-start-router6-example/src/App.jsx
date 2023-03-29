import { Fragment } from "react";
import { Link, NavLink, Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import "./style.css"

let App = () => {

  let history = useHistory();
  let location = useLocation();

  return (
    <Fragment>
      <ul>
        <li>
          {/* <a href="/first">First</a> */}

          {/* <NavLink activeClassName="active" to="/first" exact>First</NavLink> */}

          {/* 
          <Link to="/first" className="active" exact>
            {location.path}
          </Link> */}

          <Link
            to="/first"
            className={location.pathname == "/first" ? "active" : "in-active"}
          >
            First
          </Link>
        </li>
        <li>
          <Link
            to="/second"
            className={location.pathname == "/second" ? "active" : "in-active"}
          >
            Second
          </Link>
        </li>
        <li>
          {/* <NavLink activeClassName="active" to="/second/third" exact>
            Third
          </NavLink> */}
          <Link
            to="/second/third"
            className={
              location.pathname == "/second/third" ? "active" : "in-active"
            }
          >
            Third
          </Link>
        </li>
        <li>
          <NavLink activeClassName="active" to="/second/third/forth" exact>
            Fourth
          </NavLink>
        </li>
      </ul>

      <div>
        <button onClick={() => history.push("/first")}>First</button>
        <button onClick={() => history.push("/second/third/forth")}>
          Fourth
        </button>
      </div>

      <Switch>
        {/* <Route path="/">
          <h4>404 - Not Found</h4>
        </Route> */}

        <Route path="/second/third/forth">
          <h4>Forth Element</h4>
        </Route>

        <Route path="/second/third">
          <h4>Third Element</h4>
        </Route>

        <Route path="/first">
          <h4>First Element</h4>
        </Route>

        <Route path="/second">
          <h4>Second Element</h4>
        </Route>

        <Route path="/">
          <h4>404 - Not Found</h4>
          <Redirect to="/first" />
        </Route>
      </Switch>
    </Fragment>
  );
}
export default App;