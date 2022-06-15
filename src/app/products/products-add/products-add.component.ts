import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'oc-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.sass'],
})
export class ProductsAddComponent implements OnInit {
  formAddProduct: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });

  constructor(private service: ProductsService, private route: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.formAddProduct.valid) {
      const product = this.formAddProduct.value; //Product
      console.log('Model data', product);
      this.service.addProduct(product).subscribe((result) => {
        console.log('The product has been added');
      });
    } else {
      console.error('Form is not valid');
    }
  }

  cancel() {
    this.route.navigate(['/products']);
  }
}
