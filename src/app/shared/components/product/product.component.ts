import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "../../../#models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    price: 0,
    images: [],
    title: '',
    id: '',
    description: '',
    category: {
      id: '',
      name: '',
    },
  };
  @Output() addedToCart = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addToCart(){
    this.addedToCart.emit(this.product)
  }

  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }
}
