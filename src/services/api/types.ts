export interface JsonResponse<Type> {
  data?: Type
  messages: string[]
  timestamp: string
}

export interface Page<Type> {
  content: Type[]
  number: number
  size: number
  totalPages: number
  totalElements: number
  empty: boolean
  first: boolean
  last: boolean
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface Sort {
  direction?: SortDirection
  field: string
}

export interface Pageable {
  pageSize: number
  pageNumber: number
  sort?: Sort
}
