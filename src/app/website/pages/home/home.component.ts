import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../#models/product.model';
import { ProductsService } from '../../../services/products.service';
import { UsersService } from '../../../services/users.service';
import { FilesService } from '../../../services/files.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  imgRta = '';

  product: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
    private filesService: FilesService,

  ) { }

  //EN EL ONINIT VA LO ASINCRONO
  ngOnInit(): void {};

  //AUTH CREAR USER
  createUser() {
    this.usersService.create({
      name: 'alonso',
      email: 'alonso@gmail.com',
      password: '12345',
      //role: 'Admin', //CAMBIAR ESTO SI DA ERROR EN ALGUN MOMENTO POR CULPA DEL API DEL CURSO
    })
    .subscribe(rta =>{
      console.log(rta);
    })
  }

  //EVENTO DESCARGAR PDF, DE LA MANO CON FILES.SERVICE
  downloadPdf(){
    this.filesService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'aplicattion/pdf')
    .subscribe()
  }

  //EVENTO SUBIR ARCHIVO, DE LA MANO CON FILES.SERVICE
  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file)
      .subscribe(rta => {
        this.imgRta = rta.location;
      });
    }
  }
}
