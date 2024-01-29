import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ConsumoapiService } from '../services/consumoapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioMostrar = "";
  correoMostrar = "";
  idMostrar!: number;

  idProfesor! : number ;
  idCurso! : number ;
  
  cursos: any[] = [];

  constructor(private consumoapi:ConsumoapiService, private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuarioMostrar = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.correoMostrar = this.router.getCurrentNavigation()?.extras.state?.['correo'];
        this.idMostrar = this.router.getCurrentNavigation()?.extras.state?.['idProfesor'];
      }
    })
  }

  verDetalleCurso(cursoId: number, nombre: string) {
    let setData: NavigationExtras = {
      state: {
        idCurso : cursoId,
        nombreCurso : nombre,
        nombreAlumno : nombre
      }
    };
    this.router.navigate(['/profe-qr'],setData);
  }

  ngOnInit() {
    this.consumoapi.obtenerCursosPorProfesor(this.idMostrar).subscribe(data => {
      this.cursos = data;
      console.log(this.cursos);
    });


  }

}