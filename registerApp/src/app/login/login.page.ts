
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';

import { Component,OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { ConsumoapiService } from '../services/consumoapi.service';
import { AlertController } from '@ionic/angular';
import { usuario } from '../modelo/usuario';
import { perfil } from '../modelo/perfil';
import { curso } from '../modelo/curso';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private typeuser!: usuario;
  private typePerfil!: perfil;
  private curso!:curso;

    usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  });

 



  docente = "dcares";
  pass1 ="aaaa";
  alumno = "ealvarado";
  pass2 ="bbbb";

  validar= false;

  login(){

//crear object navigation extra
this.consumoapi.login(this.usuario.value.user!, this.usuario.value.pass!).subscribe(
  (response) => {
    this.typeuser = response.body as unknown as usuario;
    console.log("bbb" + response.status);
    if (response.status == 200) {
      let setData: NavigationExtras = {
        state: {
          id: this.typeuser.id,
          user: this.typeuser.user,
          correo: this.typeuser.correo,
          nombre: this.typeuser.nombre,
          tipoPerfil: this.typeuser.tipoPerfil
        }
      };

      console.log("aaas"+this.typeuser.tipoPerfil);

      if (this.typeuser.tipoPerfil === 1) {
        this.auth.setAuthenticationStatus(true);
        this.router.navigate(['/home'], setData);
      }

      if (this.typeuser.tipoPerfil === 2) {
        this.auth.setAuthenticationStatus(true);
        this.router.navigate(['/alumno'], setData);
      }
    }

    if (response.status === 401) {
      this.presentAlert();

    }
  },
  (error) => {
    console.error('Error en inicio de sesión:', error);
  });
}

async presentAlert(){
const alert = await this.alertController.create({
  header: 'Error Login',
  subHeader: 'Infomación : ',
  message: 'Usuario o contraseña son incorrecto',
  buttons: ['Aceptar'],
});
await alert.present();
}
  
constructor(private router: Router, private auth:AuthGuard, private consumoapi:ConsumoapiService, private alertController :AlertController) {}

  ngOnInit() {
  }

  
  
 
}
