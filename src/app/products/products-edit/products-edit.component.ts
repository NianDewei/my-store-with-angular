import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'oc-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.sass'],
})
export class ProductsEditComponent implements OnInit {
  formProduct: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });

  id: string | null = '';

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
      this.formProduct.patchValue(result);
    });
  }

  submit() {
    if (this.formProduct.valid) {
      const product = this.formProduct.value; //Product
      product.id = this.id;
      console.log('This is the product', product);
      this.service.updateProduct(product).subscribe((result) => {
        this.router.navigate(['/products']);
        this.snackBar.open('The product has been updated', 'Close', {
          duration: 3000,
        });
      });
    } else {
      console.error('Form is not valid');
    }
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
