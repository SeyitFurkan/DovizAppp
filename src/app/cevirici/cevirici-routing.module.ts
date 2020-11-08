import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeviriciPage } from './cevirici.page';

const routes: Routes = [
  {
    path: '',
    component: CeviriciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeviriciPageRoutingModule {}
