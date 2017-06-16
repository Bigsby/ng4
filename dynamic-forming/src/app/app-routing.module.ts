import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetsListComponent } from './sets-list/sets-list.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: "sets",
    component: SetsListComponent
  },
  {
    path: "list/:collection",
    component: ListComponent
  },
  {
    path: "edit/:collection/:id",
    component: FormComponent
  },
  {
    path: "**",
    redirectTo: "sets",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [
  SetsListComponent,
  ListComponent,
  FormComponent
]
