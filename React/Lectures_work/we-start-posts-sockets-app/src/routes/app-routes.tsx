import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import LoginPage from "../pages/LoginPage";
import NewPostPage from "../pages/NewPostPage";
import PostsPage from "../pages/PostsPage";

let AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/posts" element={<App />}>
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/new-post" element={<NewPostPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;