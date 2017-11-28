import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { TabService } from '../services/tab.service';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { menuInfo } from '../services/menu-info';
import { TabClass } from '../services/tab-class';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username: string = '';
  items: MenuItem[];
  tabs: TabClass[];

  constructor(
    private loginservice: LoginService,
    public tabService: TabService
  ) { }

  ngOnInit() {
    // 获取当前登陆的用户名
    // this.tabService.TABS3 = [];
    this.username = this.loginservice.getUsername();
    this.items = menuInfo;
    this.getTabs();
    this.listenToCommand(this.items);
  }
  getTabs(): void {
    this.tabs = this.tabService.getTabs();
  }

  listenToCommand(items) {
    let isOpen = false;

    items.forEach(element => {
      if (element.items === undefined) {
        element.command = (event) => {

          this.tabs.forEach((tab, index) => {
            if (tab.header === event.item.label) {
              // this.tabActiveIndex = index;
              isOpen = true;
            }
          });
          if (!isOpen) {
            this.tabService.addTabView(event.item.label, element.title, true);
          }else {
            console.log(this.tabs);
          }
        };
      }else {
        this.listenToCommand(element.items);
      }
    });
  }
}
