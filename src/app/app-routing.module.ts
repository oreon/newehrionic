import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cc', loadChildren: './pages/chronicCondition/chronicCondition.module#ChronicConditionModule' },
  { path: 'patients', loadChildren: './pages/patients/patients.module#PatientsPageModule' },
  { path: 'notes/:id', loadChildren: './pages/notes/notes.module#NotesPageModule' },
  { path: 'add-note', loadChildren: './pages/add-note/add-note.module#AddNotePageModule' },
  { path: 'add-script', loadChildren: './pages/add-script/add-script.module#AddScriptPageModule' },
  { path: 'scripts/:id', loadChildren: './pages/scripts/scripts.module#ScriptsPageModule' },
  { path: 'add-script-item', loadChildren: './pages/add-script-item/add-script-item.module#AddScriptItemPageModule' },
  { path: 'edit-script-item/:id', loadChildren: './pages/add-script-item/add-script-item.module#AddScriptItemPageModule' },
  { path: 'measurements/:id', loadChildren: './pages/measurements/measurements.module#MeasurementsPageModule' },
  { path: 'add-measurement', loadChildren: './pages/add-measurement/add-measurement.module#AddMeasurementPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
