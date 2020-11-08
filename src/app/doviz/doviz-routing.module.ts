import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DovizPage } from './doviz.page';

const routes: Routes = [
  {
    path: '',
    component: DovizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DovizPageRoutingModule {}
