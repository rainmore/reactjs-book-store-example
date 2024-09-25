export interface Page<Type> {
  content: Type[];
  pageNumber: number;
  pageSize: number;
  total: number;
}
