import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodoData = createAsyncThunk("fetchtodo", async () => {
  await axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    console.log(res.data);
  });
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    getTodo(state, action) {
      state.data = action.payload;
      console.log("state", state.data);
    },
  },

  extraReducers: {
    [fetchTodoData.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { getTodo } = todoSlice.actions;
export default todoSlice.reducer;
