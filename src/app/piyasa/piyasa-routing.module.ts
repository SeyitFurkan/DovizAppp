import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiyasaPage } from './piyasa.page';

const routes: Routes = [
  {
    path: '',
    component: PiyasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiyasaPageRoutingModule {}
