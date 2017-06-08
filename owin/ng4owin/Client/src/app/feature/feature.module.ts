import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from "./feature.component";
import { FeatureOneComponent } from '../feature-one/feature-one.component';
import { FeatureTwoComponent } from '../feature-two/feature-two.component';

@NgModule({
    imports: [
        CommonModule,
        FeatureRoutingModule
    ],
    declarations: [
        FeatureComponent,
        FeatureOneComponent,
        FeatureTwoComponent
    ]
})
export class FeatureModule { }