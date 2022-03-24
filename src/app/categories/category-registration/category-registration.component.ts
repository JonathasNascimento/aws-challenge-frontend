import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoriesService } from '../categories.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-registration',
  templateUrl: './category-registration.component.html',
  styleUrls: ['./category-registration.component.css'],
})
export class CategoryRegistrationComponent implements OnInit {
  categoryFormControl = new FormControl('', [Validators.required])

  category: Category = { name: '' }
  isLoading: boolean = false

  @Output() categoryAdded = new EventEmitter<void>()

  constructor(
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  createNewCategory() {
    if (!this.categoryFormControl.valid) {
      return
    }

    this.isLoading = true

    this.categoriesService
      .createCategory(this.category)
      .subscribe((response) => {
        if (response.status == 'success') {
          this.isLoading = false

          this.categoryAdded.emit()

          this.showSnackBar(
            `Category '${this.category.name}' added successfully`,
          )

          this.category.name = ''
          this.categoryFormControl.markAsUntouched()
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
