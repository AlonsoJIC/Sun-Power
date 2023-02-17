import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ImgComponent } from './components/img/img.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ImgComponent,
  ],

  imports: [
    CommonModule,
    RouterModule
  ],

  //NORMALMENTE UN SAHRED MODULO EXPORTA TODOS SUS COMPONENTES, POR LO CUAL AL HACER IMPORTS Y DECLARATIONS, AGREGAR ACA ABAJO.
  exports: [
    ProductComponent,
    ProductsComponent,
    ImgComponent,
  ]
})
export class SharedModule { }
