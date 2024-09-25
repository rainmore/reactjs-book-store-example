import axios, {
  AxiosResponse,
  AxiosInstance
}                       from 'axios';
import { Page }         from './dto/page.ts';
import { JsonResponse } from './dto/json-response.ts';

type Response<Type> = Page<Type> | JsonResponse<Type>;

class ApiService {

  findPage<T = any, P = Response<T>>(uri: string, params?: any): Promise<P> {
    return this.get(uri, params).then(response => {
      return response.data;
    });
  }

  get(uri: string, params?: any): Promise<AxiosResponse> {
    return this.getAxiosInstance().get(uri, {
      params: params
    });
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
