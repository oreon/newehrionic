import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeasurementsPage } from './measurements.page';
import { CompsModule } from '../../comps/comps.module';

const routes: Routes = [
  {
    path: '',
    component: MeasurementsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeasurementsPage]
})
export class MeasurementsPageModule {}
