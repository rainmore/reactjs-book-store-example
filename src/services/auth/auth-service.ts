import { AxiosInstance } from 'axios';
import { AxiosService }  from '../axios-service.ts';
import {
  AuthContext,
  CurrentUser
}                        from './types';

interface Login {
  username: string,
  password: string
}

class AuthService {
  private axiosInstance: AxiosInstance;

  constructor(private axiosService: AxiosService) {
    this.axiosInstance = this.axiosService.getAxiosInstance();
  }

  login(LoginDto: Login): Promise<AuthContext> {
    return this.axiosInstance.post('/auth/login', LoginDto).then((response) => {
      const jwtToken = response.headers['jwt-token'];
      const currentUser: CurrentUser = response.data.data as CurrentUser;
      const authContext: AuthContext = {
        currentUser,
        jwtToken
      };
      this.setAuthContext(authContext);
      return authContext;
    });
  }

  isAuthenticated(): boolean {
    return this.getAuthContext() !== null;
  }

  getAuthContext(): AuthContext | null {
    const data = localStorage.getItem('AuthContext');
    return data ? JSON.parse(data) : null;
  }

  setAuthContext(authContext: AuthContext): void {
    return localStorage.setItem('AuthContext', JSON.stringify(authContext));
  }

  resetAuthContext(): void {
    localStorage.removeItem('AuthContext');
  }

}

export type { AuthService };
export const authService = new AuthService(new AxiosService());
