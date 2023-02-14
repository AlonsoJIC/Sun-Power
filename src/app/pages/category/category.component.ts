import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Product } from '../../#models/product.model';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit{

  categoryId: string | null = null;
  product: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ){}

  //Para hacer paginacion de categorias por IDS
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      if (this.categoryId) {
        this.productsService.getByCategory(this.categoryId)
        .subscribe(data => {
          this.product = data;
        })
      }
    });
  }
}
