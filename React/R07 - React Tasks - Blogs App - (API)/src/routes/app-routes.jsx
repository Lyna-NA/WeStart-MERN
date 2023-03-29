import { Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewBlogPage from "../pages/Dashboard/NewBlogPage";
import NewCategoryPage from "../pages/Dashboard/NewCategoryPage";
import PanelBlogsPage from "../pages/Dashboard/PanelBlogsPage";
import PanelCategoriesPage from "../pages/Dashboard/PanelCategoriesPage";
import PanelNotificationsPage from "../pages/Dashboard/PanelNotificationsPage";
import UpdateBlogPage from "../pages/Dashboard/UpdateBlogPage";
import BlogDetailsPage from "../pages/Main/BlogDetailsPage";
import BlogsPage from "../pages/Main/BlogsPage";
import Main from "../pages/Main/Main";
import TrendyBlogsPage from "../pages/Main/TrendyBlogsPage";

let AppRoutes = () => {
    return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<PanelBlogsPage />} />
          <Route
            path="/dashboard/categories"
            element={<PanelCategoriesPage />}
          />
          <Route
            path="/dashboard/notifications"
            element={<PanelNotificationsPage />}
          />
        </Route>
        <Route path="/dashboard/blogs/new" element={<NewBlogPage />} />
        <Route path="/dashboard/blogs/update" element={<UpdateBlogPage />} />
        <Route path="/dashboard/categories/new" element={<NewCategoryPage />} />
        <Route path="/main" element={<Main />}>
          <Route path="/main" element={<TrendyBlogsPage />} />
          <Route path="/main/blogs" element={<BlogsPage />} />
          <Route path="/main/blogs/details" element={<BlogDetailsPage />} />
        </Route>
      </Routes>
    );
}
export default AppRoutes;