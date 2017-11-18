import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//导入Login Service
import { LoginServiceService } from '../../services/login-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'main-login-frame',
  templateUrl: './login-main-frame.component.html',
  styleUrls: ['./login-main-frame.component.css']
})
export class LoginMainFrameComponent implements OnInit {

  private formModel : FormGroup;
  private fb: FormBuilder = new FormBuilder();
  private userID : string;
  private userPwd : string;

  constructor(private loginservice : LoginServiceService, private router : Router) { 
    this.formModel = this.fb.group({
      loginName : ['', Validators.required],

      loginPasswd : ['', [Validators.required]],

      remFlag : ['']
    });
  }

  ngOnInit() {}

  doSubmit(){
    if(this.formModel.valid){
      this.userID = this.formModel.get('loginName').value;
      this.userPwd = this.formModel.get('loginPasswd').value;

      if(this.loginservice.requestLogin(this.userID, this.userPwd)){
        this.router.navigate(['/home']);
      }else{
        alert('登录失败');
      }
      // if(this.loginservice.requestLogin(this.userID, this.userPwd)){
      //   this.router.navigate(['/home']);
      // }
    }
  }

}
