import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OnExit } from './../../../guards/exit.guard'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit, OnExit{

  constructor(){}

  ngOnInit(): void {
  }

  //FUNCION DE GUARDIAN EXIT PARA EVITAR SALIDA DEL USUARIO
  onExit() {
    const rta = confirm('Are u sure?')
    return rta;
  }
}
