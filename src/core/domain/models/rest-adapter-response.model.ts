export interface RestAdapterResponse<T> {
  data: T;
  message: string;
  status: number;
}
