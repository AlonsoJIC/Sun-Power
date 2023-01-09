import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'proyectoAngular';
  products = [
    {
      name: 'angular',
      price: 565,
      image: './assets/images/angular.png',
    },
    {
      name: 'bootstrap',
      price: 356,
      image: './assets/images/bootstrap.png'
    },
    {
      name: 'css',
      price: 34,
      image: './assets/images/css.png'
    },
    {
      name: 'git',
      price: 23,
      image: './assets/images/git.png'
    },
    {
      name: 'html',
      price: 34,
      image: './assets/images/html.png'
    },
    {
      name: 'js',
      price: 3434,
      image: './assets/images/js.png'
    },
    {
    name: 'mysql',
    price: 34,
    image: './assets/images/mysql.png'
    },
    {
      name: 'node',
      price: 23,
      image: './assets/images/node.png'
    },
    {
      name: 'shops',
      price: 34,
      image: './assets/images/shops.jpg'
    },
    {
      name: 'ts',
      price: 3434,
      image: './assets/images/ts.png'
    }
  ]
}
