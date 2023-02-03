import { Component } from '@angular/core';
import { Product } from '../../#models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShopCart: Product[] = []
  totalCart = 0;
  product: Product[] = [
/*    {
      name: 'producto1',
      price: 565,
      image: './assets/images/node.png',
    },
    {
      name: 'producto2',
      price: 356,
      image: './assets/images/node.png'
    },
    {
      name: 'producto3',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto4',
      price: 23,
      image: './assets/images/node.png'
    },
    {
      name: 'producto5',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto6',
      price: 3434,
      image: './assets/images/node.png'
    },
    {
    name: 'producto7',
    price: 34,
    image: './assets/images/node.png'
    },
    {
      name: 'producto8',
      price: 23,
      image: './assets/images/node.png'
    },
    {
      name: 'producto9',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto10',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto11',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto12',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto13',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto14',
      price: 34,
      image: './assets/images/node.png'
    },
  */  ];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
    this.myShopCart = this.storeService.getShopCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.product = data;
    });
  }

  addToCart(){
  }

  onAddToShopCart(product: Product){
    this.storeService.addProduct(product);
    this.totalCart = this.storeService.getTotal();
  }
}
