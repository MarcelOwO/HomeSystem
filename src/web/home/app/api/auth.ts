import api from './api';

export interface LoginRequest {
  email: string;
  password: string;
}
export interface RegisterRequest {
  email: string;
  password: string;
}
export interface AuthResponse {
  token: string;
  expiresIn: number;
}
export interface User {
  id: string;
  email: string;
  username: string;
}
export interface ForgotPassword {
  email: string;
}
export interface Refresh {
  refreshToken: string;
}
export interface AccessTokenResponse {
  tokentype: string,
  accessToken: string,
  expires: 0,
  refreshToken: string,
}

export const AuthApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/login', data);
    return res.data;
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/register', data);
    return res.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },

  getCurrentUser: async (): Promise<User> => {
    const res = await api.get<User>('/auth/me');
    return res.data;
  },
};

