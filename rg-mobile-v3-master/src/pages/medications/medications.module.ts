import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicationsPage } from './medications';

@NgModule({
  declarations: [
    MedicationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicationsPage),
  ],
})
export class MedicationsPageModule {}
