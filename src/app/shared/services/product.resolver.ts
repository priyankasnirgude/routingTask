import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";
import { Iproduct } from "../model/iproduct.interface";


export class ProductResolver implements Resolve<Iproduct>{
    constructor(
        private _prodsvc : ProductService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct> | Promise<Iproduct> | Iproduct {
        let getid = route.params['prodId'];
        return this._prodsvc.fetchprodobj(getid);
    }
}