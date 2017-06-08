import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated)
            return true;

        this.authService.redirectUrl = state.url;
        this.router.navigate(["/login"]);
        return false;
    }
}
