import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'proyectoAngular';
  registro = {
    name: '',
    email: '',
    password:'',
  };
  products = [
    {
      name: 'angular',
      price: 565,
      image: './assets/images/node.png',
    },
    {
      name: 'bootstrap',
      price: 356,
      image: './assets/images/node.png'
    },
    {
      name: 'css',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'git',
      price: 23,
      image: './assets/images/node.png'
    },
    {
      name: 'html',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'js',
      price: 3434,
      image: './assets/images/node.png'
    },
    {
    name: 'mysql',
    price: 34,
    image: './assets/images/node.png'
    },
    {
      name: 'node',
      price: 23,
      image: './assets/images/node.png'
    },
    {
      name: 'shops',
      price: 34,
      image: './assets/images/node.png'
    },
  ]
}
