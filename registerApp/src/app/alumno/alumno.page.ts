import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route,NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage  {

  usuarioMostrar="";




  constructor(private activerouter: ActivatedRoute, private router:Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuarioMostrar = this.router.getCurrentNavigation()?.extras.state?.['user'];
      }
    });

  }

}
