import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { AuthService } from '../../../services/auth.service';
import { CategoriesService } from '../../../services/categories.service';
import { CartService } from '../../../services/cart.service';
import { map } from 'rxjs/operators';

import { User } from '../../../#models/user.model';
import { Category } from '../../../#models/product.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = []
/*   total$: Observable<number>; */

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private router: Router,
    private cartService: CartService
  ) {
/*  "FUNCION CON MATBADGE QUE NO ME SIRVE"   this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    ); */
  }

  ngOnInit(): void {
    //OBSERVABLE DEL CARRITO
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    //DE LA MANO CON funcion de aqui mismogetAllCategories para llamar a todas las categorias
    this.getAllCategoies();
    //PARA LA REACTIVIDAD DE "user$"
    this.authService.user$
    .subscribe(data => {
      this.profile = data;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  //AUTH LOGIN DE USER CREADO Y TOKEN
  login() {
    this.authService.loginAndGet('alonso@gmail.com', '12345')
    .subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

  //PARA OBTENER LAS CATEGORIAS DEL API Y PODER HACER EL RENDER DE LAS MISMAS YA SEA EN NAV O DONDE QUERAMOS
  getAllCategoies(){
    this.categoriesService.getAll()
    .subscribe(data => {
      this.categories = data;
    });
  }

  //LOGOUT , REMOVER EL TOKEN Y REDIRECCIONAR TODO EN ESTA FUNCION DE BOTON
  logout(){
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }

}

