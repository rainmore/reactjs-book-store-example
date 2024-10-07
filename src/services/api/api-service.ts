import { AxiosInstance, AxiosResponse } from 'axios'
import { AxiosService } from '../axios-service.ts'
import { JsonResponse, Page, Pageable } from './types'
import { authService, AuthService } from '../auth/auth-service.ts'

type Response<Type> = Page<Type> | JsonResponse<Type>

export class ApiService {
  constructor(
    private axiosService: AxiosService,
    private authService: AuthService
  ) {}

  findPage<T = any, P = Response<T>>(uri: string, params?: any, pageable?: Pageable, cancelToken?): Promise<P> {
    const parameters = {
      ...params,
      ...pageable,
      cancelToken
    }
    return this.get(uri, parameters).then((response) => {
      return response.data
    })
  }

  get(uri: string, params?: any): Promise<AxiosResponse> {
    return this.getAxioInstance().get(uri, {
      params: params,
      signal: this.axiosService.newAbortSignal(5000),
    })
  }

  post(uri: string, data: any): Promise<AxiosResponse> {
    return this.getAxioInstance().post(uri, data)
  }

  private getAxioInstance(): AxiosInstance {
    const axiosInstance = this.axiosService.getAxiosInstance()
    if (this.authService.isAuthenticated()) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${this.authService.getAuthContext()?.jwtToken}`
    }
    return axiosInstance
  }
}

export const apiService = new ApiService(new AxiosService(), authService)
