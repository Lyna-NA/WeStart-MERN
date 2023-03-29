import { createSlice } from "@reduxjs/toolkit";

let expensesSlice = createSlice({
    name: "expenses-slice",
    initialState: { expenses: [] },
    reducers: {
        save(state, action){
            state.expenses = [action.payload, ...state.expenses];
            // state.expenses.push(action.payload);  // another way
        },
        read(state, action){
            state.expenses = action.payload;
        },
        delete(state, action){
            let filteredData = state.expenses.filter(
                (element) => element.id != action.payload
            );
            state.expenses = filteredData;
        }
    }
});

export const expenseReducer = expensesSlice.reducer;
export const expenseActions = expensesSlice.actions;