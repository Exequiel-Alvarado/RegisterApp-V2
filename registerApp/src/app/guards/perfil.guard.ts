import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsumoapiService } from '../services/consumoapi.service';

@Injectable({
  providedIn: 'root',
})
export class PerfilGuard implements CanLoad {

  constructor(private consumoapi : ConsumoapiService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (this.consumoapi
      .tipoPerfil !== "docente"){
        this.router.navigateByUrl('/login');
        return false
      }
    return true  
  }
}