import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import App from "../pages/App";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

let AppRoutes = () =>{
    return (
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>            
        </Route>
      </Routes>
    );
};
export default AppRoutes;