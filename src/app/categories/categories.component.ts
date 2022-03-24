import { Component, OnInit, ViewChild } from '@angular/core';

import { CategoryListComponent } from './category-list/category-list.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  @ViewChild(CategoryListComponent) child!: CategoryListComponent

  ngOnInit(): void {}

  onCategoryAdded() {
    this.child.loadCategories()
  }
}
