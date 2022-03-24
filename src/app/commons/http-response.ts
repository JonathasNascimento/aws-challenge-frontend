export interface HttpResponse<T> {
  message: string
  status: string
  data: T
}
