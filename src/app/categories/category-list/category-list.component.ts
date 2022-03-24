import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';

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
    private dialog: MatDialog,
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
    this.openDialog(() => {
      this.deleteCategoryHandle(category)
    })
  }

  private deleteCategoryHandle(category: Category) {
    if (category.id) {
      this.categoriesService
        .deleteCategory(category.id)
        .subscribe((response) => {
          if (response.status === 'success') {
            this.dataSource = this.dataSource.filter(
              (item) => item.id != category.id,
            )
          } else {
            this.showSnackBar(response?.message)
          }
        })
    }
  }

  openDialog(onConfirm: () => void) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      width: '400px',
      data: {
        title: 'Remove Category',
        description: 'Are you sure you want to remove this category?',
        buttonConfirm: 'Remove',
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirm') {
        onConfirm()
      }
    })
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Done', {
      horizontalPosition: 'start',
    })
  }
}
