import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../#models/user.model';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    //OBSERVABLE DEL CARRITO
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  //AUTH LOGIN DE USER CREADO Y TOKEN
  login() {
    this.authService.loginAndGet('alonso@gmail.com', '12345')
    .subscribe(user => {
      this.profile = user;
    });
  }

}

