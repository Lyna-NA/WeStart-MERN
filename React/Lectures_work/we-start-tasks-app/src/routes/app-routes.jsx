import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewTaskPage from "../pages/Dashboard/NewTaskPage";
import TaskDetailsPage from "../pages/Dashboard/TaskDetailsPage";
import TasksPage from "../pages/Dashboard/TasksPage";
import LoginPage from "../pages/LoginPage";

let AppRoutes = () => {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard" element={<TasksPage />}/>
                <Route path="/dashboard/tasks/new" element={<NewTaskPage />}/>
                <Route path="/dashboard/tasks/:id/details" element={<TaskDetailsPage />}/>
            </Route>
        </Routes>
    );
}
export default AppRoutes;