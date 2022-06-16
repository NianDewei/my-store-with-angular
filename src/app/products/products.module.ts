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

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
