import { Component, OnInit } from '@angular/core';

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

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.findCategories().subscribe((response) => {
      if (response.status == 'success') {
        this.dataSource = response.data
      }
    })
  }
}
