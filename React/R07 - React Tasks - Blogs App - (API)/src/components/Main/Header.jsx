import { NavLink } from "react-router-dom";

let Header = () => {
    return (
      <header>
        <nav>
          <span>BLOGS</span>
          <ul>
            <li>
              <a href="/main">Home</a>
            </li>
            <li>
              <a href="/main/blogs">Blogs</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
          </ul>
          <button>Join Us</button>
        </nav>
        <span>Lt's Find The Best Trendy Blogs To Read.</span>
      </header>
    );
}
export default Header;