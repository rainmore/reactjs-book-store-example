import { Location, useLocation } from 'react-router-dom'
import { Page, Pageable } from './api/types'
import { UrlService } from './url-service'

export class PaginationService {
  private readonly DefaultSize: number = 10
  private readonly RangeSize: number = 7
  private readonly RangeMiddle: number = 3 // Math.floor(RangeSize / 2)

  private location: Location = useLocation()

  urlService = new UrlService()

  getBasePath(): string {
    return this.urlService.getBasePath()
  }

  getSearchParameter(): string {
    return this.location.search !== '' ? `?${this.location.search}` : ''
  }

  getPageable(): Pageable {
    const search = this.urlService.getURLSearchParams()
    const size = search.has('_size') ? Number(search.get('_size')) : this.DefaultSize
    const page = search.has('_page') ? Number(search.get('_page')) : 0
    return {
      pageSize: size,
      pageNumber: page,
    }
  }

  buildPath(pageNumber: number): string {
    const search = this.urlService.getURLSearchParams()
    const number = Math.max(pageNumber, 0)
    search.set('_page', number.toString())

    return `${this.getBasePath()}?${search.toString()}`
  }

  prevPagePath(page: Page<any>): string {
    const prev = page.first ? 0 : page.number - 1
    return this.buildPath(prev)
  }

  nextPagePath(page: Page<any>): string {
    const next = page.last ? page.totalPages - 1 : page.number + 1
    return this.buildPath(next)
  }

  firstPagePath(): string {
    return this.buildPath(0)
  }

  lastPagePath(page: Page<any>): string {
    return this.buildPath(page.totalPages - 1)
  }

  getPaginationRage(page: Page<Any>): number[] {
    const range: number[] = []

    if (page.empty) {
      return range
    }

    const rangeMax = this.RangeSize - 1
    const totalPages = page.totalPages
    let start = 0
    let end = rangeMax

    if (page.number - this.RangeMiddle > start) {
      start = page.number - this.RangeMiddle
      end = start + rangeMax
    }

    if (end >= totalPages) {
      end = totalPages - 1

      if (end - this.RangeSize < 0) {
        start = 0
      } else if (end - start < this.RangeSize) {
        start = end - rangeMax
      }
    }

    for (let i = start; i <= end; i++) {
      range.push(i)
    }

    return range
  }
}
