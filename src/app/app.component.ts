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
  }
