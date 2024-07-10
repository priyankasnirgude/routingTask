import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router'; 
import { Observable } from 'rxjs';
//import { Icandeactivate } from 'src/app/shared/model/icandeactivate.interface';
//import { Icandeactivate } from 'src/app/shared/model/icandeactivate.interface';
import { Iproduct } from 'src/app/shared/model/iproduct.interface';
//import { Iproduct } from 'src/app/shared/model/iproduct';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit{

  constructor(
    private _route : ActivatedRoute,
    private _prodsvc : ProductService,
    private _router : Router,
    private _uuid : UuidService,
    private _snackbar : SnackbarService 
  ) { }
  //candeactivate!: () => boolean | Promise<boolean> | Observable<boolean>;
 // candeactivate!: () => boolean | Promise<boolean> | Observable<boolean>;
 //candeactivate!: () => boolean | Promise<boolean> | Observable<boolean>;
  

  prodform !: FormGroup;
  prodid !: string;
  prodobj !: Iproduct;
  isinEditMode : boolean = false;
  canUpdate : boolean = false;

  ngOnInit(): void {
    this.oncreateform();
    this.prodid = this._route.snapshot.params['prodId'];
    if(this.prodid){
      this.isinEditMode = true;
      this.prodobj = this._prodsvc.fetchprodobj(this.prodid);
      this.prodform.patchValue(this.prodobj);
      this._route.queryParams.subscribe(res => {
        if(res['canEdit'] === 0){
          this.prodform.disable();
          this.canUpdate = false;
        }else{
          this.prodform.enable();
          this.canUpdate = true;
        }
      })
    }
  }

  oncreateform(){
    this.prodform = new FormGroup({
      pname : new FormControl(null, Validators.required),
      pstatus : new FormControl(null, Validators.required),
      pimg : new FormControl(null, Validators.required)
    })
  }

  onupdate(){
    if(this.prodform.valid){
      let updtobj : Iproduct = {
        ...this.prodform.value,
        pId : this.prodobj.pId,
        canreturn : this.prodobj.canreturn
      }
      this._prodsvc.onUpdate(updtobj);
      this.prodform.reset();
      this._router.navigate(['/products'])
    }
  }

  onAddproduct(){
    if(this.prodform.valid){
      let newprod : Iproduct = {
        ...this.prodform.value,
        pId : this._uuid.generateUuid(),
        canreturn : Math.random() < .4? 0 : 1
      }
      this._prodsvc.onAddproduct(newprod);
    }else{
      this._snackbar.opensnackbar("Invalid data can't add product please enter valid product details")

    }
    this._router.navigate(['products']);
    this.prodform.reset();
  }

  candeactive(){
    return true
  }
}
