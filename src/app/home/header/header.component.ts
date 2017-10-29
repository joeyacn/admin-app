import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username : string = "";
  login_date : string;
  
  constructor(private loginservice : LoginServiceService) { }
  
  ngOnInit() {
    //通过服务获取系统的Date(Nov. 2012)
    this.login_date = this.loginservice.getSysDate().getMonth() + " " + this.loginservice.getSysDate().getFullYear();

    //获取当前登陆的用户名
    this.username = this.loginservice.getUsername();
  }
  
}
