interface ListResult<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export type { ListResult }