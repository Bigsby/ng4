import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
