import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  initAuth,
  loginUser,
  logoutUser,
} from "./authThunk";

import type { User } from "./auth.types";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // Logout local: dùng khi muốn clear state ngay
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
  },

  extraReducers: (builder) => {
    builder
      // =====================
      // LOGIN
      // =====================
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isAuthenticated = true;
        state.error = null;
      })

      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload?.message || "Login failed";
      })

      // =====================
      // INIT AUTH
      // =====================
      .addCase(initAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(initAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })

      .addCase(initAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })

      // =====================
      // LOGOUT
      // =====================
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })

      .addCase(logoutUser.rejected, (state, action: any) => {
        // Dù backend logout lỗi, frontend vẫn nên clear state
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload?.message || null;
      });
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;