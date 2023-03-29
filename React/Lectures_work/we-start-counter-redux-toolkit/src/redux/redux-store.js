const { createSlice, configureStore } = require("@reduxjs/toolkit");


let counterSlice = createSlice({
    name: "counter-slice",
    initialState: { counter: 0, visible: true },
    reducers: {
        increment(state, action){
            state.counter = state.counter + 1;
        },
        decrement(state, action){
            state.counter = state.counter - 1;
        },
        incrementByValue(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state, action){
            state.visible = !state.visible;
        }
    }
});

// export const reduxStore = configureStore(counterSlice.reducer);    // Wrong
// export const reduxStore = configureStore({ reducer: counterSlice.reducer });
export const reduxStore = configureStore({
  reducer: {
    counterReducer : counterSlice.reducer,
  }
});
export const counterActions = counterSlice.actions;
