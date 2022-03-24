import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoriesService } from '../categories.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['category', 'action']
  dataSource: Category[] = []

  constructor(
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {
    this.categoriesService.findCategories().subscribe((response) => {
      if (response.status == 'success') {
        this.dataSource = response.data
      }
    })
  }

  deleteCategory(category: Category) {
    if (category.id) {
      this.categoriesService
        .deleteCategory(category.id)
        .subscribe((response) => {
          if (response.status === 'success') {
            this.dataSource = this.dataSource.filter(
              (item) => item.id != category.id,
            )
          }
        })
    }
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Done', {
      horizontalPosition: 'start',
      duration: 3000,
    })
  }
}
