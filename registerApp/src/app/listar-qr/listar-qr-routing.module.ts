import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarQRPage } from './listar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ListarQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarQRPageRoutingModule {}
