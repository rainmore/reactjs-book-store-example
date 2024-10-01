import {
  AxiosInstance,
  AxiosResponse
} from 'axios';
import {
  AxiosService
} from '../axios-service.ts';
import { JsonResponse, Page, Pageable } from './types';


type Response<Type> = Page<Type> | JsonResponse<Type>;


class ApiService {

  private axiosInstance: AxiosInstance;

  constructor(private axiosService: AxiosService) {
    this.axiosInstance = this.axiosService.getAxiosInstance();
    if (localStorage.getItem('Jwt-Token')) {
      this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Jwt-Token')}`;
    }
  }

  findPage<T = any, P = Response<T>>(uri: string, params?: any, pageable?: Pageable): Promise<P> {
    const parameters = {
      ...params,
      ...pageable
    };
    return this.get(uri, parameters).then(response => {
      return response.data;
    });
  }

  get(uri: string, params?: any): Promise<AxiosResponse> {
    return this.axiosInstance.get(uri, {
      params: params
    });
  }

  post(uri: string, data: any): Promise<AxiosResponse> {
    return this.axiosInstance.post(uri, data);
  }

}

export const apiService = new ApiService(new AxiosService());