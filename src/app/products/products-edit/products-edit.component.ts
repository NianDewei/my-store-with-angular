import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'oc-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.sass'],
})
export class ProductsEditComponent implements OnInit {

  id: string | null = '';
  product: Product = {} as Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private service: ProductsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.showProduct(this.id).subscribe((result) => {
      // this.formEditProduct.setValue(result);
      // this.formProduct.patchValue(result);
      this.product = result;
    });
  }

  submit(product: Product) {
          // const product:Product = this.product; //Product
          product.id = this.id || '';
          console.log('This is the product', product);
          this.service.updateProduct(product).subscribe((result) => {
            console.table(result);
            this.router.navigate(['/products']);
            this.snackBar.open('The product has been updated', 'Close', {
              duration: 3000,
            });
          });
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
