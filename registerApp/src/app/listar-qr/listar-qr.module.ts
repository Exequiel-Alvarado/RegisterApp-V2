import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarQRPageRoutingModule } from './listar-qr-routing.module';

import { ListarQRPage } from './listar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarQRPageRoutingModule
  ],
  declarations: [ListarQRPage]
})
export class ListarQRPageModule {}
