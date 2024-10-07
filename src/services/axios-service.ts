import axios, { AxiosInstance } from 'axios'

export class AxiosService {
  getAxiosInstance(): AxiosInstance {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    })

    instance.defaults.headers.common['Accept'] = 'application/json'
    instance.defaults.headers.post['Content-Type'] = 'application/json'
    instance.defaults.timeout = 10000
    return instance
  }

  newAbortSignal(timeoutMs: number | null = null) {
    const abortController = new AbortController()
    setTimeout(() => abortController.abort(), timeoutMs || 0)

    return abortController.signal
  }
}
