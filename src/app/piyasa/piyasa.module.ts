import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiyasaPageRoutingModule } from './piyasa-routing.module';

import { PiyasaPage } from './piyasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiyasaPageRoutingModule
  ],
  declarations: [PiyasaPage]
})
export class PiyasaPageModule {}
