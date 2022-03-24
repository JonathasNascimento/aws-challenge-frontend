import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoriesService } from '../categories.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-registration',
  templateUrl: './category-registration.component.html',
  styleUrls: ['./category-registration.component.css'],
})
export class CategoryRegistrationComponent implements OnInit {
  category: Category = { name: '' }
  isLoading: boolean = false

  @Output() categoryAdded = new EventEmitter<void>()

  constructor(
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  createNewCategory() {
    this.isLoading = true
    this.categoriesService
      .createCategory(this.category)
      .subscribe((response) => {
        if (response.status == 'success') {
          this.categoryAdded.emit()
          this.isLoading = false
          this.showSnackBar(
            `Category '${this.category.name}' added successfully`,
          )
          this.category.name = ''
        }
      })
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Done', {
      horizontalPosition: 'start',
      duration: 3000,
    })
  }
}
