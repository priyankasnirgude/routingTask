import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Icandeactivate } from 'src/app/shared/model/icandeactivate.interface';
//import { Icandeactivate } from 'src/app/shared/model/icandeactivate.interface';
import { Iuser } from 'src/app/shared/model/Iuser.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit, Icandeactivate{

  constructor(
    private _route : ActivatedRoute,
    private _usersvc : UserService,
    private _router : Router,
    private _uuid : UuidService,
    private _snackbar : SnackbarService
  ) { }

  userForm !: FormGroup;
  userId !: string;
  userobj !: Iuser;
  canUpdate !: boolean;
  isinEditmode : boolean = false;


  ngOnInit(): void {
    this.oncreateform();
    this.userId = this._route.snapshot.params['userId'];
    this.getuserobj();
    if(this.userId){
      this.isinEditmode =true;

      this.userForm.patchValue(this.userobj);

      this._route.queryParams
      .subscribe(res => {
        if(res['userRole'] == 'Admin'){
          this.userForm.enable()
          this.canUpdate = true;
        }else{
          this.userForm.disable();
          this.canUpdate = false;
        }
      })
    }else{
      this.isinEditmode = false;
    }
  }

  oncreateform(){
    this.userForm = new FormGroup({
      username : new FormControl(null, Validators.required),
      userRole : new FormControl(null, Validators.required),
      userProfile : new FormControl(null, Validators.required)
    })
  }

  getuserobj(){
    this._route.params.subscribe(res => {
      this.userobj = this._usersvc.fetchuserobj(this.userId)
    })
  }

  onupdateuser(){
    if(this.userForm.valid){
      let updateobj = {
        ...this.userForm.value,
        userId:this.userobj.userId
      }
      this._usersvc.onupdateuser(updateobj);
      this.userForm.reset();
      this._router.navigate(['/users'])
    }
  }

  onadduser(){
    if(this.userForm.valid){
      let newuser = {
        ...this.userForm.value,
        userId : this._uuid.generateUuid()
      }
      this._usersvc.onAddnewsuser(newuser);
    }else{
      this._snackbar.opensnackbar("Invalid data cant add product please enter valid product details")
    }
    this._router.navigate(['users'])
    this.userForm.reset();
  }

  candeactivate(){
    if(this.userForm.dirty){
      return confirm('Are you sure you want to discard changes');

    }
    return true
  }
}
