import axios from "axios";
import { setToken, logout } from "../features/auth/authSlice";
import type { AppStore } from "../store/store";

let storeRef: AppStore;

export const injectStore = (store: AppStore) => {
  storeRef = store;
};

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// REQUEST
axiosClient.interceptors.request.use((config) => {
  const token = storeRef?.getState().auth.token;

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE
axiosClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // ⚠️ dùng axios thường (không dùng axiosClient)
        const res = await axios.post<{ accessToken: string }>(
          `${import.meta.env.VITE_API_URL}/accounts/refresh`,
          {},
          { withCredentials: true }
        );

        const newToken = res.data.accessToken;

        storeRef.dispatch(setToken(newToken));

        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axiosClient(originalRequest);
      } catch (err) {
        storeRef.dispatch(logout());
      }
    }

    return Promise.reject(error);
  }
);
