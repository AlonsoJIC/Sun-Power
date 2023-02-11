//EL OBJETIVO DE ESTE SERVICE ES GUARDAR EL TOKEN Y NO TENER QUE HACER LOGIN SIEMPRE QUE SE RECARGA LA APP.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  //GUARDAR TOKEN EN LOCAL STORAGE
  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  //OBTENER EL TOKEN PARA USARLO SIEMPRE
  getToken(){
    const token = localStorage.getItem('token');
    return token;
  }
}
