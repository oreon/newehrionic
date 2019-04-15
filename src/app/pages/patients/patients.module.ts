import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { AddEditPatientComponent } from './add-edit-patients/add-edit-patients.component';
import { PatientDetailsPage } from './patient-details/patient-details.page';
import { PatientsPage } from './patient-list/patients.page';

const routes: Routes = [
  {
    path: '',
    component: PatientsPage,
    pathMatch: 'full'
  },
  {
    path: 'view/:id',
    component: PatientDetailsPage
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
  declarations: [PatientsPage, AddEditPatientComponent, PatientDetailsPage]
})
export class PatientsPageModule {}
