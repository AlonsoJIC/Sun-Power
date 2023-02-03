import { Injectable } from '@angular/core';
import { Product } from '../#models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShopCart: Product[] = []

  constructor() { }

  addProduct(product: Product) {
    this.myShopCart.push(product);
  }

  getShopCart() {
    return this.myShopCart;
  }

  getTotal() {
    return this.myShopCart.reduce((sum, item) => sum + item.price, 0);
  }
}
