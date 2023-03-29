import { Outlet } from "react-router-dom/dist";
import NavMenu from "../../components/Dashboard/NavMenu";
import "../../resources/css/panel.css"

let Dashboard = () => {
    return (
      <div className="panel">
        <NavMenu />
        <div className="main-panel">
          <div className="header">
            <span>
              Hi <span> Dr. Momen,</span>
            </span>
            <input type="text" placeholder="Search" />
          </div>
          <Outlet />
        </div>
      </div>
    );
}
export default Dashboard;