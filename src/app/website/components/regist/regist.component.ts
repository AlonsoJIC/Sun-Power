import { Component } from '@angular/core';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent {
  register = {
    name: '',
    email: '',
    password:'',
  };

  onRegister() {
    console.log(this.register)
  }

}
