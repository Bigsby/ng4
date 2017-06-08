import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from "../auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    username: string;
    password: string;
    isBusy = true;
    hasError = false;
    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        if (this.authService.isAuthenticated) {
            this.redirect();
            return;
        }
        this.isBusy = false;
        this.hasError = false;
    }

    logIn() {
        this.isBusy = true;
        this.hasError = false;
        this.authService.signIn(this.username, this.password).then(result => {
            if (result.IsAuthenticated) {
                this.redirect();
            } else {
                this.hasError = true;
                this.isBusy = false;
            }
        });
    }

    private redirect() {

            this.router.navigate([this.authService.redirectUrl || "/"]);
    }
}
