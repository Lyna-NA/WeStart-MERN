import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { categoriesReducer } from "./categories-slice";
import { tasksReducer } from "./tasks-slice";

export const reduxStore = configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer,
        auth: authReducer,
    },
});