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


  constructor(private loginservice : LoginServiceService, private router : Router) { }

  ngOnInit() {
    //拉升login背景的高度
    $('.login-bk').css({'height': $(document).height()});
  }

  onSubmit(formValue){
    if(this.loginservice.RequestLogin(formValue.username, formValue.userpasswd)){
      this.router.navigate(['/home']);
    }
  }

}
