export interface PageDto<Type> {
  content: Type[];
  pageNumber: number;
  pageSize: number;
  total: number;
}
