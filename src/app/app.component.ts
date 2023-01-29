import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from "./#models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'proyectoAngular';
  register = {
    name: '',
    email: '',
    password:'',
  };

  product: Product[] = [
    {
      name: 'producto1',
      price: 565,
      image: './assets/images/node.png',
    },
    {
      name: 'producto2',
      price: 356,
      image: './assets/images/node.png'
    },
    {
      name: 'producto3',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto4',
      price: 23,
      image: './assets/images/node.png'
    },
    {
      name: 'producto5',
      price: 34,
      image: './assets/images/node.png'
    },
    {
      name: 'producto6',
      price: 3434,
      image: './assets/images/node.png'
    },
    {
    name: 'producto7',
    price: 34,
    image: './assets/images/node.png'
    },
    {
      name: 'producto8',
      price: 23,
      image: './assets/images/node.png'
    },
    {
      name: 'producto9',
      price: 34,
      image: './assets/images/node.png'
    },
  ]




  onRegister() {
    console.log(this.register)
  }
}
