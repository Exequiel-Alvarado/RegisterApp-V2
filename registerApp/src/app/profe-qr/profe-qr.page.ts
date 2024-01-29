import { Component, OnInit } from '@angular/core';

import { ConsumoapiService } from '../services/consumoapi.service';
import { ActivatedRoute, Router, Route } from '@angular/router'; 

@Component({
  selector: 'app-profe-qr',
  templateUrl: './profe-qr.page.html',
  styleUrls: ['./profe-qr.page.scss'],
})
export class ProfeQrPage implements OnInit {


  
  

    [x: string]: any;
  
    nombreCursoMostrar! : string;
    idCursoMostrar! : number;
    nombreAlumnos! : string;
  
    profesorId: number = 1; 
    cursoId:any;
  
    alumnos: any[] = [];
    alumnosMostrar!: string;
  
  strinQr: any;
  
    constructor(private apiService: ConsumoapiService, private router: Router, private activeroute : ActivatedRoute) { 
  
      this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.idCursoMostrar = this.router.getCurrentNavigation()?.extras.state?.['idCurso'];
          this.nombreCursoMostrar = this.router.getCurrentNavigation()?.extras.state?.['nombreCurso'];
          this.nombreAlumnos = this.router.getCurrentNavigation()?.extras.state?.['alumnos'];
          const fechaActual = new Date().toISOString().split('T')[0];
          this.strinQr = this.idCursoMostrar+"-"+fechaActual;
        }
      })
    }
  
    
  
    ngOnInit() {
      this.apiService.obtenerAlumnosPorCurso(1,this.idCursoMostrar ).subscribe((data: any[]) => {
        this.alumnos = data;
        console.log(this.alumnos);
      });
    }
    
  }
