import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateSyntaxComponent } from "./template-syntax/template-syntax.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: "templateSyntax",
    component: TemplateSyntaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
