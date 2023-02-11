import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../#models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  product: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  // en el OnInit va lo asincrono
  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.product = data;
    });
  }
}
