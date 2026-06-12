import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "../features/categories/categories.slice";

import coursesReducer from "../features/courses/courses.slice";
import authReducer from "../features/auth/authSlice";
import { accountsApi } from "../features/accounts/accounts.rtk";
import { injectStore } from "../utils/axiosClient";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    courses: coursesReducer,

    // RTK QUERY
    [accountsApi.reducerPath]:
      accountsApi.reducer,
  },

  // RTK QUERY MIDDLEWARE
  middleware: (
    getDefaultMiddleware
  ) =>
    getDefaultMiddleware().concat(
      accountsApi.middleware
    ),
});
// 🔥 QUAN TRỌNG
injectStore(store);
// TYPES
export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;

  // 🔥 THIẾU CÁI NÀY NÊN BỊ LỖI
export type AppStore = typeof store;