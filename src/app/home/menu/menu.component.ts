import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username : string = "";

  constructor(
    private loginservice: LoginServiceService,
    public tabService: TabService
  ) { }

  ngOnInit() {
    //获取当前登陆的用户名
    //this.tabService.TABS3 = [];
    this.username = this.loginservice.getUsername();
  }
}
