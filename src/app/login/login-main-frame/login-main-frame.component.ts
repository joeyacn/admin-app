import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//导入Login Service
import { LoginServiceService } from '../../services/login-service.service';
declare var $:any;

@Component({
  selector: 'main-login-frame',
  templateUrl: './login-main-frame.component.html',
  styleUrls: ['./login-main-frame.component.css']
})
export class LoginMainFrameComponent implements OnInit {
  username : string;
  userpasswd : string;
  userchecked : boolean;

  ac_show_flag : boolean;
  pwd_show_flag : boolean;


  constructor(private loginservice : LoginServiceService, private router : Router) { 
    this.ac_show_flag = false;
    this.pwd_show_flag = false;
  }

  ngOnInit() {
    //拉升login背景的高度
    $('.login-bk').css({'height': $(document).height()});
  }

  onSubmit(formValue){
    console.log(formValue.username);
    console.log(formValue.userpasswd);
    //undefined
    if(formValue.username == undefined){
      this.ac_show_flag = true;
      return false;
    }

    if(formValue.userpasswd == undefined){
      this.pwd_show_flag = true;
      return false;
    }

    if(this.loginservice.RequestLogin(formValue.username, formValue.userpasswd)){
      this.router.navigate(['/home']);
    }
  }

}
