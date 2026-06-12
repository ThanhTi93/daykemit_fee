export interface User {
  id: number;
  email: string;
  username?: string;
  role?: string;
  avatar?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface RefreshResponse {
  accessToken: string;
}

export interface InitAuthResponse {
  accessToken: string;
  user: User;
}

export interface LogoutResponse {
  message: string;
}