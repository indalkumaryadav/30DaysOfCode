import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodoData = createAsyncThunk("fetchtodo", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [
      {
        name: "Leanne Graham",
      },
      {
        name: "Nicholas Runolfsdottir V",
      },
    ],
    loading: false,
    error: {},
  },
  reducers: {
    getTodo(state, action) {
      state.data = [
        {
          name: "Glenna Reichert",
        },
        {
          name: "Glenna Reichert",
        },
        {
          name: "Glenna Reichert",
        },
        {
          name: "Glenna Reichert",
        },
      ];
    },
  },

  extraReducers: {
    [fetchTodoData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchTodoData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTodoData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("error", action.payload);
    },
  },
});
export const { getTodo } = todoSlice.actions;
export default todoSlice.reducer;
