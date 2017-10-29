import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content_height : number;
  
  constructor(public changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    
    this.content_height =  $(window).height() - 101;
    //拉升content的高度，解决login界面到home界面出现的min-height bug
    //872px
    $('.content-wrapper').css({'height': this.content_height});
  }
}
