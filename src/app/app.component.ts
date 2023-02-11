import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //TITULO
  title = 'proyectoAngular';
  imgRta = '';

  constructor(
    private usersService: UsersService,
    private filesService: FilesService
  ) {}

  //AUTH CREAR USER
  createUser() {
    this.usersService.create({
      name: 'alonso',
      email: 'alonso@gmail.com',
      password: '12345'
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
