import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../pages/Dashboard/CategoriesPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewCategoryPage from "../pages/Dashboard/NewCategoryPage";
import NewTaskPage from "../pages/Dashboard/NewTaskPage";
import TaskDetailsPage from "../pages/Dashboard/TaskDetailsPage";
import TasksPage from "../pages/Dashboard/TasksPage";
import UpdateCategoryPage from "../pages/Dashboard/UpdateCategoryPage";
import LoginPage from "../pages/LoginPage";

let AppRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<TasksPage />} />
          <Route path="/dashboard/tasks/new" element={<NewTaskPage />} />
          <Route path="/dashboard/categories" element={<CategoriesPage />} />
          <Route path="/dashboard/categories/new" element={<NewCategoryPage />} />
          <Route path="/dashboard/categories/update" element={<UpdateCategoryPage />} />
          <Route
            path="/dashboard/tasks/details"
            element={<TaskDetailsPage />}
          />
        </Route>
      </Routes>
    );
}
export default AppRoutes;