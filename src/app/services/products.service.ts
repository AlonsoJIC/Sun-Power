import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Product, CreateProductDTO, UpdateProductDTO } from '../#models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl)
    //Reintentar la peticion
    .pipe(
      retry(3)
    );
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  //Crear producto nuevo
  create(data: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, data);
  }

  // PUT / PATCH, update
  update(id: string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  //DELETE PRODUCT
  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }


}


