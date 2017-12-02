import { Component } from '@angular/core';
import { AccordionModule, TabViewModule, MenuItem} from 'primeng/primeng';
import { TabClass } from './services/tab-class';
import { TabService } from './services/tab.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tabs: TabClass[];
  activeTabIndex: number = 0;

  constructor(
    public tabService: TabService
  ) { }

  menuClickHandler(item) {
    this.tabs = this.tabService.getTabs();
    let isOpen = false;
    this.tabs.forEach((tab, index) => {
        if (tab.header === item.label) {
          this.activeTabIndex = index;
          isOpen = true;
        }
    });
    if (!isOpen) {
      this.tabService.addTabView(item.label, item.label, true);
      setTimeout(() => {
        this.activeTabIndex = this.tabs.length - 1;
      }, 100)
    }
  }

  tabChangeHandler(event) {
    this.activeTabIndex = event.index;
  }

  tabCloseHandler(event) {
    this.activeTabIndex = 0;
  }
}
