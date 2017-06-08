import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureComponent } from "./feature.component";
import { FeatureOneComponent } from "../feature-one/feature-one.component";
import { FeatureTwoComponent } from "../feature-two/feature-two.component";

const routes: Routes = [
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'one', component: FeatureOneComponent },
    { path: 'two', component: FeatureTwoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
