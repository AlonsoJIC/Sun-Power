import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError, zip } from 'rxjs';
import { Product, CreateProductDTO, UpdateProductDTO } from '../#models/product.model'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';

  constructor(
    private http: HttpClient,
  ) { }

  //OBTENER PRODUCTOS PAGINADOS DE CATEGORIA POR ID
  getByCategory(categoryId: string, ){
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`)
  }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
    //Reintentar la peticion
    .pipe(
      retry(3)
    );
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
  }


  getOne(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Something is wrong...');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('The product does not exist');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('Unauthorized');
        }
        return throwError('Ups, something is wrong :(');
      })
    )
  }


  //Crear producto nuevo
  create(dto: CreateProductDTO){
    return this.http.post<Product>(`${this.apiUrl}/products`, dto);
  }

  // PUT / PATCH, update
  update(id: string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, dto);
  }

  //DELETE PRODUCT
  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`)
  }

}


