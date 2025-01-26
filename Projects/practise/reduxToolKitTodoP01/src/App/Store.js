import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../Feature/TodoSlics";
export const store = configureStore({
  reducer: todoReducers,
});
