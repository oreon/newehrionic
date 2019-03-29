import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'patients', loadChildren: './pages/patients/patients.module#PatientsPageModule', canActivate: [AuthGuard] },
  { path: 'patients/:id', loadChildren: './pages/patient-details/patient-details.module#PatientDetailsPageModule' },
  { path: 'notes/:id', loadChildren: './pages/notes/notes.module#NotesPageModule' },
  { path: 'add-note', loadChildren: './pages/add-note/add-note.module#AddNotePageModule' },
  { path: 'add-script', loadChildren: './pages/add-script/add-script.module#AddScriptPageModule' },
  { path: 'scripts/:id', loadChildren: './pages/scripts/scripts.module#ScriptsPageModule' },
  { path: 'add-script-item', loadChildren: './pages/add-script-item/add-script-item.module#AddScriptItemPageModule' },
  { path: 'edit-script-item/:id', loadChildren: './pages/add-script-item/add-script-item.module#AddScriptItemPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
