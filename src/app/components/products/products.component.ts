import { Component, Input } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../#models/product.model';
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
  @Input() product: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    price: 0,
    images: [],
    title: '',
    id: '',
    description: '',
    category: {
      id: '',
      name: '',
    },
  }

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
    this.myShopCart = this.storeService.getShopCart();
  }

//Agregar a carrito lo agregue y sume
  onAddToShopCart(product: Product){
    this.storeService.addProduct(product);
    this.totalCart = this.storeService.getTotal();
  }
  addToCart(){
  }

//Boton de ver detalles para abrir y cerrar ventana
  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail
  }

//Ver detalle del producto
  onShowDetail(id: string) {
    this.productsService.getProduct(id)
    .subscribe(data =>{
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

//Crear producto
  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'New Product',
      description: 'New Product description',
      images: ["https://placeimg.com/640/480/any"],
      price: 1000,
      categoryId: 1,
    }
    this.productsService.create(product)
    .subscribe(data => {
      this.product.unshift(data);
    })
  }

  //PUT / PATCH, update
  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'New title'
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
    .subscribe( data => {
      const productIndex = this.product.findIndex(item => item.id === this.productChosen.id);
      this.product[productIndex] = data;
      this.productChosen = data;
    })
  }

  //DELETE PRODUCT
  deleteProduct(){
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(() =>{
      const productIndex = this.product.findIndex(item => item.id === this.productChosen.id);
      this.product.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

}
