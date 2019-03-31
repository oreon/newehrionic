import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { LineChartComponent } from './line-chart/line-chart.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    IonicModule,
  ],
  declarations: [LineChartComponent],
  exports:[
    LineChartComponent
  ]
})
export class CompsModule {}
