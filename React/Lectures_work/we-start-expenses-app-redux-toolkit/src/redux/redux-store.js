import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./expenses-slice";


export const reduxStore = configureStore({reducer: expenseReducer});
