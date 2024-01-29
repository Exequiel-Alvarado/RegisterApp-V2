import { Component} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ConsumoapiService } from '../services/consumoapi.service'
import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage  {

  alumnoMostrar = "";

   
  
  alertButtons = ['Cerrar Sesión'];
  

  constructor( private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.alumnoMostrar = this.router.getCurrentNavigation()?.extras.state?.['user'];
      }
      
      
    })
  }


}
