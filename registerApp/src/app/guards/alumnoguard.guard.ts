import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { Router,NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlumnoguardGuard implements CanActivate {

  
  private isAuthenticated = false;
  setAuthenticatedstatus (status : boolean){
    this.isAuthenticated = status;
  }

  constructor (private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated){
      return true;
    }
    return this.router.navigate(['/login']);
    }
  
}
