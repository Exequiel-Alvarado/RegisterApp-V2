import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfeQrPageRoutingModule } from './profe-qr-routing.module';

import { ProfeQrPage } from './profe-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfeQrPageRoutingModule
  ],
  declarations: [ProfeQrPage]
})
export class ProfeQrPageModule {}
