import { useLocation } from 'react-router-dom'

export class UrlService {
  private location = useLocation()

  getBasePath(): string {
    return this.location.pathname
  }

  getSearchParameter(): string {
    return this.location.search !== '' ? `?${this.location.search}` : ''
  }

  getURLSearchParams(): URLSearchParams {
    return new URLSearchParams(this.location.search)
  }
}
