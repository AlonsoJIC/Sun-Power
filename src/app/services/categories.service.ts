import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../#models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/categories';

  constructor(
    private http: HttpClient
  ) { }

  //PARA EL RENDER DE LAS CATEGORIAS DE LA API HACIA EL NAVBAR
  getAll(limit?: number, offset?: number){
    let params = new HttpParams();
    return this.http.get<Category[]>(this.apiUrl, {params})
  }
}
