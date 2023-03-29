const { createSlice } = require("@reduxjs/toolkit");

let tasksSlice = createSlice({
  name: "tasks-slice",
  initialState: {
    data: [],
    filteredData: [],
    item: {},
    status: "All",
    category: "All",
  },
  reducers: {
    create(state, action) {
      //  state.data = [action.payload, ...state.data];
      //  state.date.unshift(action.payload);
      state.data.push(action.payload);
      state.filteredData = state.data;
    },
    read(state, action) {
      state.data = action.payload;
      state.filteredData = state.data;
    },
    update(state, action) {
      let index = state.data.findIndex(
        (element) => element.id == action.payload.id
      );
      state.data[index] = action.payload;
      state.filteredData = state.data;
      state.item = action.payload;
    },
    delete(state, action) {
      let filteredData = state.data.filter(
        (element) => element.id != action.payload
      );
      state.data = filteredData;
    },
    //....filter!
    filterByCategory(state, action) {
      state.category = action.payload;
      if (action.payload == "All") {
        //Reset filtered array to original array
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter(
          (element) => element.categoryId == action.payload
        );
      }
      console.log(state.filteredData);
    },
    filterdBySearch(state, action) {
      state.status = action.payload;
      if (action.payload != "") {
        state.filteredData = state.filteredData.filter((element) =>
          element.name.includes(action.payload)
        );
      } else {
        //Reset filtered array to original array
        state.filteredData = state.data;
      }
    },
    filterByStatus(state, action) {
      if (action.payload != "All") {
        state.filteredData = state.data.filter(
          (element) => element.status == action.payload
        );
      } else {
        //Reset filtered array to original array
        state.filteredData = state.data;
      }
    },
    seItem(state, action) {
      state.item = action.payload;
    },
    updateStatus(state, action) {
      // action.payload.task.status = action.payload.status;
      // state.item = {...action.payload.task};
      let index = state.data.findIndex(
        (element) => element.id == action.payload.id
      );
      state.data[index] = action.payload;
      state.filteredData = state.data;
      state.item = action.payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const tasksActoins = tasksSlice.actions;
