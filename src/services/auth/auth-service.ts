import { ApiService } from "../api-service";
import { LoginDto } from "./dto/login-dto";

export class AuthService {
  constructor(private apiService: ApiService) {}

  login(LoginDto: LoginDto) {
    this.apiService.post('/api/auth', LoginDto).then((response) => {
      console.log(response);
    }).catch( (error) => {
      console.log(error);
    });

  }
}