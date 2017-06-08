import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { OtherComponent } from "./other/other.component";
import { AuthComponent } from "./auth/auth.component";
import { PrivateComponent } from "./private/private.component";
import { AuthGuard } from "./auth.guard";

import { FeatureModule } from "./feature/feature.module";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    },
  {
      path: "other",
      component: OtherComponent
  },
  {
      path: "login",
      component: AuthComponent
  },
  {
      path: "private",
      component: PrivateComponent,
      canActivate: [AuthGuard]
  },
  {
      path: "feature",
      //loadChildren: () => FeatureModule
      loadChildren: "./feature/feature.module#FeatureModule"
  },
  {
      path: "",
      pathMatch: "full",
      redirectTo: "/home"
  },
  {
      path: "**",
      redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
