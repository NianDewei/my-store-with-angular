import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { ProductsAddComponent } from './products-add/products-add.component';

const routes: Routes = [
  {
    path: '', // /products
    component: ProductsComponent,
    children: [
      {
        path: '', //products -> /products/list
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list', // /products/list
        component: ProductsListComponent,
      },
      {
        path: 'add', // /products/add
        component: ProductsAddComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
