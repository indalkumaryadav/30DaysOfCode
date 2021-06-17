import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "indal",
  },
  reducers: {
    updateData(state, action) {},
    deleteData(state, action) {},
  },
});
// export const { updateData, deleteData } = userSlice.actions;
export default userSlice.reducer;
