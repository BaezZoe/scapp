import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
/*variables a usar */
  email: string;
  password: string;
  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }

onSubmitLogin() {
console.log('estas en la funcion');
this.authservice.login(this.email, this.password).then( res => {
this.router.navigate(['/tabs']);
}).catch(err => alert('Datos incorrectos o no existe el usuario'));
}
}
