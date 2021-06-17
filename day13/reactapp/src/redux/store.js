import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import postReducer from "./features/postSlice";
import todoReducer from "./features/todoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    todo: todoReducer,
  },
});
export default store;
