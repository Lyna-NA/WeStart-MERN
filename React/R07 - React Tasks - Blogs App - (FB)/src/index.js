import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/app-routes";
import { BrowserRouter } from 'react-router-dom';
import { BlogsContextProvider } from "./context/blogs-context";
import { CategoriesContextProvider } from "./context/categories-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BlogsContextProvider>
    <CategoriesContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CategoriesContextProvider>
  </BlogsContextProvider>
);
