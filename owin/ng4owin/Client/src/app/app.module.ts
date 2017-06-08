import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { AuthComponent } from './auth/auth.component';
import { PrivateComponent } from './private/private.component';
import { SimpleService } from "./simple.service";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        OtherComponent,
        AuthComponent,
        PrivateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        SimpleService,
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }