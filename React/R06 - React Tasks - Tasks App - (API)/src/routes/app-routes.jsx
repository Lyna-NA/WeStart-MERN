import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import CategoriesPage from "../pages/Dashboard/CategoriesPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewCategoryPage from "../pages/Dashboard/NewCategoryPage";
import NewTaskPage from "../pages/Dashboard/NewTaskPage";
import TaskDetailsPage from "../pages/Dashboard/TaskDetailsPage";
import TasksPage from "../pages/Dashboard/TasksPage";
import UpdateCategoryPage from "../pages/Dashboard/UpdateCategoryPage";
import UpdateTaskPage from "../pages/Dashboard/UpdateTaskPage";
import LoginPage from "../pages/LoginPage";

let AppRoutes = () => {
  //guards
  let loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <Routes>
      <Route
        path="/login"
        element={!loggedIn ? <LoginPage /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
      >
        <Route path="/dashboard" element={<TasksPage />} />
        <Route path="/dashboard/tasks/new" element={<NewTaskPage />} />
        <Route path="/dashboard/categories" element={<CategoriesPage />} />
        <Route path="/dashboard/categories/new" element={<NewCategoryPage />} />
        <Route
          path="/dashboard/categories/update"
          element={<UpdateCategoryPage />}
        />
        <Route path="/dashboard/tasks/details" element={<TaskDetailsPage />} />
        <Route path="/dashboard/tasks/update" element={<UpdateTaskPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
