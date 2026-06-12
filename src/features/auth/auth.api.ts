// features/auth/auth.api.ts
import { axiosClient } from "../../utils/axiosClient";
import { API_ENDPOINTS } from "../endpoints";
import type { LoginDto, LoginResponse, LogoutResponse } from "./auth.types";

const { accounts } = API_ENDPOINTS;

// LOGIN
export const login = async (data: LoginDto): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>(
    `${accounts}/login`,
    data
  );
  return response.data;
};

// LOGOUT
export const logoutApi = async (): Promise<LogoutResponse> => {
  const response = await axiosClient.post<LogoutResponse>(
    `${accounts}/logout`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};