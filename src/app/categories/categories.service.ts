import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getApi } from 'src/environments/environment';

import { HttpResponse } from '../commons/http-response';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  readonly categoriesUrl = getApi('categories')

  constructor(private http: HttpClient) {}

  findCategories(): Observable<HttpResponse<Category[]>> {
    return this.http.get<HttpResponse<Category[]>>(this.categoriesUrl)
  }

  createCategory(category: Category): Observable<HttpResponse<Category>> {
    return this.http.post<HttpResponse<Category>>(this.categoriesUrl, category)
  }

  deleteCategory(id: number): Observable<HttpResponse<Category>> {
    return this.http.delete<HttpResponse<Category>>(
      `${this.categoriesUrl}/${id}`,
    )
  }
}
