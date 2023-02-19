import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //TITULO
  title = 'Boutique Online';
  imgRta = '';

  constructor(
    private usersService: UsersService,
    private filesService: FilesService,
    private authService: AuthService,
    private tokenService: TokenService,

  ) {}

  //EN EL ONINIT VA LO ASINCRONO
  ngOnInit(): void {
    //FUNC PARA LA REACTIVIDAD DEL USUARIO LOGEADO
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.profile()
      .subscribe()
    }
  }

  }
