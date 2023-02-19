import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



//ESTE GUARDIAN ES PARA EVITAR QUE EL USUARIO SALGA CON ALGUN ALERT O METODO, A FIN DE EVITAR PERDIDAS DE DATOS PARA EL USUARIO
export interface OnExit {
  onExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: OnExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //GUARDIAN EXIT, DE LA MANO CON ONEXIT DE ACA Y DE REGISTER.COMP.TS
      return component.onExit ? component.onExit() : true;
/*       QUE SALGA UNA ALERTA DE CONFIRMACION PARA SALIR
      const rta = confirm('estas seguro?')
      return rta; */
  }

}
