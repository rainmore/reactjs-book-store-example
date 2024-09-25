
export enum SortDirection {
  ASC,
  DESC
}

export interface Sort {
  direction?: SortDirection;
  field: string;
}

export interface PageableDto {
  pageSize: number;
  pageNumber: number;
  sort?: Sort;
}
