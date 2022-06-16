import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'oc-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass'],
})
export class ProductFormComponent implements OnInit {
  formProduct: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });

  @Input() title: string = '';
  @Input() labelSubmit: string = '';
  @Input() set model(product:Product){
    if(!product){
      return
    }
    this.formProduct.patchValue(product);
  }

  @Output() submit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();


  constructor() {}

  ngOnInit(): void {}

  onSubmit():void{
    if (this.formProduct.valid) {
      const product:Product = this.formProduct.value; //Product
      this.submit.emit(product); //send the model of data (type: Product) to the parent component
    } else {
      console.error('Form is not valid');
    }
  }
  onCancel():void{
    this.cancel.emit();
  }
}
