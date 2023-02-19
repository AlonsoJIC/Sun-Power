import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//GUARDIAN PARA DAR ACCESIBILIDAD AL ADMIN O CUSTOMER DEPENDIENDO EL ROL, PERO LA API
//DEL CURSO NO FUNCIONA. https://platzi.com/clases/2487-angular-modular/41204-guard-para-admin/
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
