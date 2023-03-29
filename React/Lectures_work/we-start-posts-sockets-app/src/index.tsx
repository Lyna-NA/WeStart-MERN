import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/app-context";
import AppRoutes from "./routes/app-routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  </BrowserRouter>
);