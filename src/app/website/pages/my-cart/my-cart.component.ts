import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../../../#models/product.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService,

  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
