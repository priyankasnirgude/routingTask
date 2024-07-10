import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";


@Injectable({
    providedIn :'root'
})
export class AuthGuard implements CanActivate{
    constructor(
        private _auth : AuthService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this._auth.isAuthenticated()
        .then(res => {
            return res;
        })
    }
}