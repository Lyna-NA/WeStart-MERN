import { Outlet } from "react-router-dom";
import Footer from "../../components/Main/Footer";
import Header from "../../components/Main/Header";
import "../../resources/css/main.css";

let Main = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Main;
