import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { menuInfo } from '../services/menu-info';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() menuClickHandler: EventEmitter<any> = new EventEmitter<any>();

  username: string = '';
  items: MenuItem[];
  constructor(
    private loginservice: LoginService
  ) { }

  ngOnInit() {
    // 获取当前登陆的用户名
    this.username = this.loginservice.getUsername();
    this.items = menuInfo;
    this.setCommand(this.items);
  }

  menuClick(item) {
    this.menuClickHandler.emit(item);
  }

  setCommand(items) {
    items.forEach(element => {
      if (element.items === undefined) {
        element.command = (event) => {
          this.menuClick(event.item);
        }
      } else {
        this.setCommand(element.items);
      }
    })
  }
}
