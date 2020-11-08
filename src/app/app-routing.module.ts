import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'doviz',
    loadChildren: () => import('./doviz/doviz.module').then( m => m.DovizPageModule)
  },
  {
    path: 'cevirici',
    loadChildren: () => import('./cevirici/cevirici.module').then( m => m.CeviriciPageModule)
  },
  {
    path: 'piyasa',
    loadChildren: () => import('./piyasa/piyasa.module').then( m => m.PiyasaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
