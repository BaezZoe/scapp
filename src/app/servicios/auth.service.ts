import { Injectable } from '@angular/core';
/* importando servicios de angular*/
import { AngularFireAuth } from '@angular/fire/auth';
import { reject } from 'q';
import { promise } from 'protractor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router) { }
/* primer metodo llamado login*/
login(email: string, password: string) {

  return new Promise((resolve, rejected) => {
    this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
      resolve(user);
    }).catch(err => rejected(err));
  });
 }
 /*metodo para cerrar sesion*/
 logout() {
  this.AFauth.auth.signOut().then(() => {
    this.router.navigate(['/login']);

  });
 }
}
