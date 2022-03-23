import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApi } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  findCategories() {
    return this.http.get(getApi('categories'))
  }
}
