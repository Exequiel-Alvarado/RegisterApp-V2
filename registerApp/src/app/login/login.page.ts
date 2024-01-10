import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  pass1 ="aaaa"

  login(){
    console.log(this.usuario.value.user);
    if(this.usuario.value.user==this.docente){
      console.log("ingresamos bien"),
      this.router.navigate(['/home'])
      
    }
  };
  
  constructor(private router: Router){}
  navigate(){
   
  }
  ngOnInit() {
  }

  
  
 
}
