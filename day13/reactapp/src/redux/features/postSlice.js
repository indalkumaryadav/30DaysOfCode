import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      name: "post",
    },
    {
      name: "post",
    },
    {
      name: "post",
    },
    {
      name: "post",
    },
    {
      name: "post",
    },
    {
      name: "post",
    },
    {
      name: "post",
    },
  ],
  reducers: {
    getData(state, action) {},
  },
});

export const { getData } = postSlice.actions;
export default postSlice.reducer;
