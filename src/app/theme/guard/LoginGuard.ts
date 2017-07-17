import { Injectable }       from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
}                           from '@angular/router';
import {Cookie} from "ng2-cookies/src/services/cookie";
import {MdDialog} from "@angular/material";

@Injectable()
export class AuthGuardLogin implements CanActivate, CanActivateChild, CanLoad {
    constructor( private router: Router,
                public dialog: MdDialog) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (Cookie.get('token') === null ||
            Cookie.get('token') === 'null' ||
            Cookie.get('token') === undefined) {
            return true;
        }

        // Store the attempted URL for redirecting

        // Create a dummy session id

        // Navigate to the login page with extras
        this.router.navigate(['main']);

        return false;
    }

}

