import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TabPanel} from 'primeng/primeng';
import { TabClass } from '../services/tab-class';
import { TabService } from '../services/tab.service';
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content_height: number;
  tabs: TabClass[];

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public tabService: TabService
  ) {}

  ngOnInit() {
    this.getTabs();
  }

  getTabs(): void {
    this.tabs = this.tabService.getTabs();
  }

  ngAfterViewInit() {

    this.content_height =  $(window).height() - 101;
    //拉升content的高度，解决login界面到home界面出现的min-height bug
    //872px
    $('.content-wrapper').css({'height': this.content_height});
  }

  onTabChange(event) {
      console.log(event);
  }

  handleClose(event) {
    let index = event.index;
    this.tabService.DeleteTabView(index);
    console.log(this.tabs);
      //   this.tabViewResponseService.closeTabNav(this.uiTabView.el.nativeElement);
  }
}
