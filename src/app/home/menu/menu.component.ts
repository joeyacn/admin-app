import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { TabService } from '../../services/tab.service';
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
import { navigateInfo } from "../../../assets/mock-data/navigateInfo";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username : string = "";
  items: MenuItem[];

  constructor(
    private loginservice: LoginServiceService,
    public tabService: TabService
  ) { }

  ngOnInit() {
    //获取当前登陆的用户名
    //this.tabService.TABS3 = [];
    // this.navigateInfo = navigateInfo;
    this.username = this.loginservice.getUsername();
    this.items = navigateInfo;
    this.items.forEach(element => {
        // element.items[1].command = (event) => {
        //     this.tabService.addTabView(event.item.label, 'tab5 content', true);
        // }
        element.items.forEach(ele => {
            ele.command = (event) => {
                this.tabService.addTabView(event.item.label, ele.title, true);
            }
        });
    });
  }
}
