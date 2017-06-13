import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicHostDirective } from './dynamic-host.directive';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicHostDirective,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    OneComponent,
    TwoComponent
  ],
  providers: [
    DynamicHostDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
