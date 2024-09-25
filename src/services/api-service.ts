import axios, {
  AxiosResponse,
  AxiosInstance
}                       from 'axios';
import { PageDto }         from './dto/page-dto.ts';
import { JsonResponseDto } from './dto/json-response-dto.ts';
import { PageableDto } from './dto/pageable-dto.ts';

type ResponseDto<Type> = PageDto<Type> | JsonResponseDto<Type>;

export class ApiService {

  findPage<T = any, P = ResponseDto<T>(uri: string, params?: any, pageable?: PageableDto): Promise<P> {
    return this.get(uri, params).then(response => {
      return response.data;
    });
  }

  get(uri: string, params?: any): Promise<AxiosResponse> {
    return this.getAxiosInstance().get(uri, {
      params: params
    });
  }

  post(uri: string, data: any): Promise<AxiosResponse> {
    return this.getAxiosInstance().post(uri, data);
  }

  private getAxiosInstance(): AxiosInstance {
    const instance = axios.create({
      baseURL: import.meta.env.BASE_URL
    });

    // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    instance.defaults.headers.common['Accept'] = 'application/json';
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance.defaults.timeout = 10000;
    return instance;
  }

}

export {
  
}