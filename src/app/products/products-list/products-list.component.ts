import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModel } from 'src/app/shared/models/confirm-dialog-model';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'oc-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private service: ProductsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.getProducts()
    .pipe(
      catchError(error => {
        this.snackBar.open('Cannot get Products at this time. Please try again later','Close',{
          duration:5000
        })
        return EMPTY
      })
    )
    .subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: <ConfirmDialogModel>{
        title: 'Delete product',
        message: 'Are you sure you want to delete this product?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteById(id);
      }
    });
  }

  private loadProducts() {
    this.service
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  private deleteById(id: string) {
    this.service.deleteProduct(id).subscribe((result) => {
      this.loadProducts();
      this.snackBar.open('The product has been deleted', 'Close', {
        duration: 3000,
      });
    });
  }
}
