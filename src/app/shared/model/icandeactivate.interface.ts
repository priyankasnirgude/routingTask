import { Observable } from "rxjs";

  
  export interface Icandeactivate{
    candeactivate : () => boolean | Promise<boolean> | Observable<boolean>;
  }