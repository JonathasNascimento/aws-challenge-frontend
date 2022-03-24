import { Category } from '../categories/category.model';

export interface Device {
  id?: number
  category?: Category
  categoryId?: number
  color: string
  partNumber: number
}
