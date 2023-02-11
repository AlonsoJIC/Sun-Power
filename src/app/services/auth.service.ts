//AUTH
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from './../#models/auth.model';
import { User } from './../#models/user.model';
import { TokenService } from './../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/auth';


  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  //AUTH LOGIN FUNCTION
  login(email: string, password: string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
    //GUARDAR TOKEN EN MEMORIA
      .pipe(
        tap(response => this.tokenService.saveToken(response.access_token))
      )
    ;
  }

  //AUTH PROFILE FUNCTION Y GETPROFILE, VA DE LA MANO CON TOKEN
  profile(){
    return this.http.get<User>(`${this.apiUrl}/profile`, {
    });
  }

  //AUTH  FUNCTION VA DE LA MANO CON TOKEN
  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.profile()),
    )
  }
}
