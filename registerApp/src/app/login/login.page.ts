import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  });

  docente = "aaaa";
  pass1 ="aaaa";
  alumno = "bbbb";

  validar= false;

  login(){

//crear object navigation extra
    let nav : NavigationExtras={
      state:{
        user : this.usuario.value.user

      }
    }

    console.log(this.usuario.value.user);
    if(this.usuario.value.user==this.docente && this.usuario.value.pass==this.pass1){
      this.router.navigate(['/home'],nav);
      this.validar=true;
    };
    if(this.usuario.value.user==this.alumno){
        this.router.navigate(['/alumno']);
        this.validar=true;
    };
    if(this.validar==false)
        this.presentAlert();
      
    }

   

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Error Login',
        subHeader: 'Verificar',
        message: 'Usuario y Contraseña',
        buttons: ['action'],
      });
  
      await alert.present();
    }
  
  constructor(private alertController: AlertController, private router: Router){}

  ngOnInit() {
  }

  
  
 
}
