import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Regexp } from '../../const/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  show !: boolean;
  
  constructor(
    private _auth : AuthService,
    private _snack : SnackbarService
  ) { }

  loginform !: FormGroup;

  ngOnInit(): void {
    this.onloginform()
  }

  onloginform(){
    this.loginform = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.pattern(Regexp.email)]),
      password : new FormControl(null, [Validators.required, Validators.pattern(Regexp.password)])
    })
  }

  onuserlogin(){
    if(this.loginform.valid){
      let obj = this.loginform.value;
      this._auth.onlogin(obj);
    }else{
      this._snack.opensnackbar('Invalid email and password')
      this.loginform.reset();
    }
  }

}
