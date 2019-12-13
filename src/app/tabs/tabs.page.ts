import { Component } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public authservice: AuthService) {}
/*metodo para desconectar o cerrar sesion */
  Onlogout() {
  this.authservice.logout();
 }
}
