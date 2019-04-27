import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";


import { ChronicConditionListPage } from './chronicCondition-list/chronicCondition-list.component';
import { ChronicConditionView } from './chronicCondition-view/chronicCondition-view.component';
import { ChronicConditionAddComponent } from './chronicCondition-add/chronicCondition-add.component';


const routes: Routes = [
{
path: "",
component: ChronicConditionListPage,
pathMatch: "full"
},
{
path: "view/:id",
component: ChronicConditionView
},
{
path: "edit/:id",
component: ChronicConditionAddComponent
},
{
path: "add",
component: ChronicConditionAddComponent
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
declarations: [
ChronicConditionListPage,
ChronicConditionAddComponent,
ChronicConditionView
]
})
export class ChronicConditionModule {}