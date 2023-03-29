import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

let App = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default App;