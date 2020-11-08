import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DovizzComponent } from './dovizz.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DovizzComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[DovizzComponent]
})
export class DovizzModule { }
