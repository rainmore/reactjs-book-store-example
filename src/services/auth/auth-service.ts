import { AxiosInstance } from 'axios';
import { AxiosService }  from '../axios-service.ts';
import { CurrentUser }   from '../context.ts';

interface Login {
  username: string,
  password: string
}

class AuthService {
  private axiosInstance: AxiosInstance;

  constructor(private axiosService: AxiosService) {
    this.axiosInstance = this.axiosService.getAxiosInstance();
  }

  login(LoginDto: Login): Promise<CurrentUser> {
    return this.axiosInstance.post('/auth/login', LoginDto).then((response) => {
      const jwtToken = response.headers['jwt-token'];
      const currentUser: CurrentUser = response.data.data as CurrentUser;
      this.setJwtToken(jwtToken);
      this.setCurrentUser(currentUser);
      return currentUser;
    });
  }

  getJwtToken(): string | null {
    return localStorage.getItem('Jwt-Token');
  }

  setJwtToken(token: string): void {
    return localStorage.setItem('Jwt-Token', token);
  }

  resetJwtToken(): void {
    this.setJwtToken('');
  }

  getCurrentUser(): CurrentUser | null {
    const data = localStorage.getItem('CurrentUser');
    return (data) ? JSON.parse(data) as CurrentUser : null;
  }

  setCurrentUser(currentUser: CurrentUser): void {
    return localStorage.setItem('CurrentUser', JSON.stringify(currentUser));
  }

  resetCurrentUser(): void {
    return localStorage.setItem('CurrentUser', '');
  }

}

export type { AuthService };
export const authService = new AuthService(new AxiosService());
