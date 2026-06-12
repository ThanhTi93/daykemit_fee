export interface Account {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface CreateAccountDto {
  username: string;
  email: string;
  password: string;
}

export interface UpdateAccountDto {
  username?: string;
  email?: string;
}

export interface DeleteResponse {
  message: string;
}