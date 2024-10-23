import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";
import Todo from "../pages/Todo";
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
