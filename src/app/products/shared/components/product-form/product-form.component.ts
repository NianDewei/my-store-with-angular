import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'oc-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass'],
})
export class ProductFormComponent implements OnInit {
  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  formProduct: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    brand: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, this.minPrice(10)]),
    salePrice: new FormControl('', [Validators.required,this.minPrice(10)]),
    thumbImage: new FormControl('', [Validators.required, Validators.pattern(this.urlPattern)])
  });

  @Input() title: string = '';
  @Input() labelSubmit: string = '';
  @Input() set model(product: Product) {
    if (!product) {
      return;
    }
    this.formProduct.patchValue(product);
  }

  @Output() submit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formProduct.valid) {
      const product: Product = this.formProduct.value; //Product
      this.submit.emit(product); //send the model of data (type: Product) to the parent component
    } else {
      console.error('Form is not valid');
    }
  }
  onCancel(): void {
    this.cancel.emit();
  }

  // validation
  private minPrice(minPrice: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value !== undefined && control.value <= minPrice) {
        return {
          minprice: true
        };
      } else {
        return null;
      }
    };
  }


}
