import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { Camera,CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-listar-qr',
  templateUrl: './listar-qr.page.html',
  styleUrls: ['./listar-qr.page.scss'],
})
export class ListarQRPage {
  
usuarioMostrar="";
validar2=false
  qr(){

    //crear object navigation extra
      
    
      if( this.validar2==false){this.presentAlert();}
            
          
        }
    
       
    
        async presentAlert() {
          const alert = await this.alertController.create({
            header: 'Clase Registrada',
            subHeader: 'Exitosamente',
            message: 'Puede Cerrar Sección',
            buttons: ['aceptar'],
          });
      
          await alert.present();
        }
      
        imageSource:any;

      constructor(private alertController: AlertController, private router: Router,private activerouter: ActivatedRoute,){
        this.activerouter.queryParams.subscribe(params =>{
          if(this.router.getCurrentNavigation()?.extras.state){
            this.usuarioMostrar = this.router.getCurrentNavigation()?.extras.state?.['user'];
          }
        });
    
      }

      takePicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt
        });
        this.imageSource=image.dataUrl;
      }
      
    }