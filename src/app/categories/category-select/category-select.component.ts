import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css'],
})
export class CategorySelectComponent implements OnInit {
  categories: Category[] = []

  constructor(private categoriesSevice: CategoriesService) {}

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {
    this.categoriesSevice.findCategories().subscribe((response) => {
      if (response.status == 'success') {
        this.categories = response.data
      }
    })
  }
}
