import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iuser } from "../model/Iuser.interface";


@Injectable({
    providedIn : 'root'
})
export class UserResolver implements Resolve<Iuser>{
    constructor(private _usrsvc : UserService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iuser> | Iuser | Promise<Iuser> {
        let getid = route.params['userId'];
        return this._usrsvc.fetchuserobj(getid);
        
    }
} 