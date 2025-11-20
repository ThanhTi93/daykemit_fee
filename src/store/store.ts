import { configureStore } from "@reduxjs/toolkit";

// import reducer ở đây (ví dụ categories)
import categoriesReducer from "../features/categories/categories.slice";
import coursesReducer from "../features/courses/courses.slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    courses : coursesReducer
  },
});

// types để dùng với hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
