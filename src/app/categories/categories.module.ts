import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRegistrationComponent } from './category-registration/category-registration.component';
import { CategorySelectComponent } from './category-select/category-select.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    CategoryRegistrationComponent,
    CategorySelectComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CategorySelectComponent],
})
export class CategoriesModule {}
