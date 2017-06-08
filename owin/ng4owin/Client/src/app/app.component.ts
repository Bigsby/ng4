import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService, User } from "./auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isAuthenticated = false;
    hasAuthenticationData = false;
    user: User;
    ngOnInit(): void {
        this.isAuthenticated = this.authService.isAuthenticated;
        this.hasAuthenticationData = true;

        this.authService.LoggedIn.on(user => {
            this.user = user;
            this.isAuthenticated = true;
        });

        this.authService.LoggedOut.on(() => {
            this.user = null;
            this.isAuthenticated = false;
        });
    }

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    logIn() {
        this.router.navigate(["/login"]);
    }

    logOut() {
        this.authService.signOut();
    }
}