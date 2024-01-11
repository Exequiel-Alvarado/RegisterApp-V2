import { Component } from '@angular/core';
import { ActivatedRoute,Route,NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  desRamoUno ="Matematicas";
  desRamoDos ="lenguaje";
  desRamoTres ="Ciencias";

  usuarioMostrar="";




  constructor(private activerouter: ActivatedRoute, private router:Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuarioMostrar = this.router.getCurrentNavigation()?.extras.state?.['user'];
      }
    });

  }

}
