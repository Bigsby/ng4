import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { LiteEvent } from "./events";

@Injectable()
export class AuthService {
    public redirectUrl: string;
    private readonly onLogin = new LiteEvent<User>();
    private readonly onLogout = new LiteEvent<void>();

    public get LoggedIn() { return this.onLogin.expose(); }
    public get LoggedOut() { return this.onLogout.expose(); }

    constructor(private http: Http, private router: Router) { }
    private innerUser: User;
    get user(): User {
        return this.innerUser;
    }

    get isAuthenticated(): boolean {
        return !!this.innerUser;
    }

    signIn(username, password): Promise<AuthenticationStatus> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let payload = JSON.stringify({ username: username, password: password });
        return this.http.post("api/auth/signin", payload, options)
            .toPromise()
            .then(response => {
                var result = response.json() as AuthenticationStatus;
                if (result.IsAuthenticated) {
                    this.innerUser = result.User;
                }
                this.onLogin.trigger(result.User);
                return result;
            });
    }

    signOut(): Promise<void> {
        this.innerUser = null;
        return this.http.get("api/auth/signout")
            .toPromise()
            .then(response => {
                this.redirectUrl = null;
                this.onLogout.trigger();
                this.router.navigate(["/"]);
            });
    }
}

export class AuthenticationStatus {
    User: User;
    IsAuthenticated: boolean;
}

export class User {
    Username: string;
    Displayname: string;
}