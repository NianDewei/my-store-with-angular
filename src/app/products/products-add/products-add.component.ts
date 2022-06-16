import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'oc-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.sass'],
})
export class ProductsAddComponent implements OnInit {

  constructor(private service: ProductsService, private route: Router,private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  submit(product:Product) {
    this.service.addProduct(product).subscribe((result) => {
      this.route.navigate(['/products']);
      this.snackBar.open('The product has been added', 'Close', {
        duration: 3000,
      });
    });
  }

  cancel() {
    this.route.navigate(['/products']);
  }
}
