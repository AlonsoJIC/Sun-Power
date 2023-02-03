import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "../../#models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    price: 0,
    image: '',
    title: '',
    id: '',
    description: '',
    category: '',
  };
  @Output() addedToCart = new EventEmitter<Product>();

  ngOnInit(): void {
  }

  addToCart(){
    this.addedToCart.emit(this.product)
  }
}
