import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username : string = "";

  constructor(private loginservice : LoginServiceService) { }

  ngOnInit() {
    //获取当前登陆的用户名
    this.username = this.loginservice.getUsername();
  }

}
