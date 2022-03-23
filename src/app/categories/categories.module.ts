import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRegistrationComponent } from './category-registration/category-registration.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryListComponent, CategoryRegistrationComponent],
  imports: [CommonModule, CategoriesRoutingModule, MaterialModule],
})
export class CategoriesModule {}
