import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

const PRODUCTS_URL = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    // /products: GET
    return this.httpClient.get<Product[]>(PRODUCTS_URL);
  }

  addProduct(product:Product):Observable<Product>{
    // /products: POST
    return this.httpClient.post<Product>(PRODUCTS_URL,product);
  }

  showProduct(id:string|null):Observable<Product>{
    // /products/:id: GET
    return this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`);
  }

  updateProduct(product:Product):Observable<Product>{
    // /products/:id: PUT
    return this.httpClient.put<Product>(`${PRODUCTS_URL}/${product.id}`,product);
  }

  deleteProduct(id:string|null):Observable<Product>{
    // /products/:id: DELETE
    return this.httpClient.delete<Product>(`${PRODUCTS_URL}/${id}`);
  }
}
