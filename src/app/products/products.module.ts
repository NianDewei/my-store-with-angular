import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { ProgressIndicatorComponent } from '../shared/components/progress-indicator/progress-indicator.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductFormComponent,
    ToolbarComponent,
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]

})
export class ProductsModule { }
