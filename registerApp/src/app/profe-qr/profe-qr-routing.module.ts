import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfeQrPage } from './profe-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ProfeQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfeQrPageRoutingModule {}
