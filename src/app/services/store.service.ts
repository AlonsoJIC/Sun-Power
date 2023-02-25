import { Injectable } from '@angular/core';
import { Product } from '../#models/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShopCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  //OBSERVABLE, PARA EL CARRITO Y MUESTRE EL CONTEO DE PRODUCTOS DENTRO DE EL
  myCart$ = this.myCart.asObservable();

  constructor() { }

  //AGREGAR PRODUCTO AL CARRITO
  addProduct(product: Product) {
    this.myShopCart.push(product);
  //OBSERVABLE DEL CARRITO
    this.myCart.next(this.myShopCart);
  }

  //AGREGAR PRODUCTO AL CARRITO
  getShopCart() {
    return this.myShopCart;
  }

  //SUMAR PRODUCTOS DEL CARRITO
  getTotal() {
    return this.myShopCart.reduce((sum, item) => sum + item.price, 0);
  }
}
