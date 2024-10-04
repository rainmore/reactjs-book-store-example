export interface JsonResponse<Type> {
  data?: Type
  messages: string[]
  timestamp: string
}

export interface Page<Type> {
  content: Type[]
  pageNumber: number
  pageSize: number
  total: number
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
