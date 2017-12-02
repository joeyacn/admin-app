import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
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
  @Input() activeTabIndex: number;
  @Output() tabChangeHandler: EventEmitter<any> = new EventEmitter<any>();
  @Output() tabCloseHandler: EventEmitter<any> = new EventEmitter<any>();
  
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
    console.log(this.tabs);
    console.log(this.activeTabIndex);
  }

  ngAfterViewInit() {

    this.content_height =  $(window).height() - 101;
    //拉升content的高度，解决login界面到home界面出现的min-height bug
    //872px
    $('.content-wrapper').css({'height': this.content_height});
  }

  onTabChange(event) {
    this.tabChangeHandler.emit(event);
  }

  handleClose(event) {
    this.tabService.DeleteTabView(event.index);
    this.tabCloseHandler.emit(event);
  }
}
