import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientsPage } from './patients.page';
import { AddEditPatientComponent } from './add-edit-patients/add-edit-patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsPage
  },
  {
    path: 'edit/:id',
    component: AddEditPatientComponent
  },
  {
    path: 'add',
    component: AddEditPatientComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientsPage, AddEditPatientComponent]
})
export class PatientsPageModule {}
