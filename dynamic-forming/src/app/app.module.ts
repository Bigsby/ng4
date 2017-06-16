import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule, RoutedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from "./api.service";
import { DialogComponent } from './dialog/dialog.component';

import { FadeInAnimation } from "./animations/fade-in.animation";

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
