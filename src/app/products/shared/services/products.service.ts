import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../models/product';

const PRODUCTS_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // /products: GET
    return this.httpClient
      .get<Product[]>(PRODUCTS_URL)
      .pipe(catchError(this.handleError));
  }

  addProduct(product: Product): Observable<Product> {
    // /products: POST
    return this.httpClient
      .post<Product>(PRODUCTS_URL, product)
      .pipe(catchError(this.handleError));
  }

  showProduct(id: string | null): Observable<Product> {
    // /products/:id: GET
    return this.httpClient
      .get<Product>(`${PRODUCTS_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateProduct(product: Product): Observable<Product> {
    // /products/:id: PUT
    return this.httpClient
      .put<Product>(`${PRODUCTS_URL}/${product.id}`, product)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(id: string | null): Observable<Product> {
    // /products/:id: DELETE
    return this.httpClient
      .delete<Product>(`${PRODUCTS_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // capture error
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Client error:', error.error.message);
    } else {
      // error in the server side
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    // catch and return
    return throwError(
      () => new Error('Cannot perform the request, please try later :(')
    );
  }
}
