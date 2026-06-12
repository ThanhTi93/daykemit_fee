
import { createAsyncThunk } from "@reduxjs/toolkit";

import { login, logoutApi } from "./auth.api";
import { axiosClient } from "../../utils/axiosClient";

import type {
  LoginDto,
  LoginResponse,
  RefreshResponse,
  InitAuthResponse,
  User,
  LogoutResponse,
} from "./auth.types";

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginDto,
  { rejectValue: any }
>("auth/loginUser", async (data, thunkAPI) => {
  try {
    const res = await login(data);
    return res;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const initAuth = createAsyncThunk<
  InitAuthResponse,
  void,
  { rejectValue: null }
>("auth/initAuth", async (_, thunkAPI) => {
  try {
    const refreshRes = await axiosClient.post<RefreshResponse>(
      "/accounts/refresh",
      {},
      {
        withCredentials: true,
      }
    );

    const accessToken = refreshRes.data.accessToken;

    if (!accessToken) {
      return thunkAPI.rejectWithValue(null);
    }

    const meRes = await axiosClient.get<User>("/accounts/me", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      accessToken,
      user: meRes.data,
    };
  } catch (err) {
    return thunkAPI.rejectWithValue(null);
  }
});
export const logoutUser = createAsyncThunk<
  LogoutResponse,
  void,
  { rejectValue: any }
>("auth/logoutUser", async (_, thunkAPI) => {
  try {
    const res = await logoutApi();
    return res;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});