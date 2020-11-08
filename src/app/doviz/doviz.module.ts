import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DovizPageRoutingModule } from './doviz-routing.module';

import { DovizPage } from './doviz.page';
import { DovizzModule } from '../dovizz/dovizz.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DovizzModule,
    DovizPageRoutingModule,
    
  ],
  declarations: [DovizPage]
})
export class DovizPageModule {}
