import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  // Declare height and width variables
  scrHeight:any;
  scrWidth:any;
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?:Event) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          this.onResize();
    }
  @Input() isMenuToggle:any;
  constructor() { 
    this.getScreenSize();
  }
ngOnChanges(changes:any){
if(changes["isMenuToggle"]){
}
}
  ngOnInit(): void {
  }
  ngAfterViewInit(){
  this.onResize();
  }
  onResize(){
    let sideNavConcent=document.getElementById("side-nav-content");
    if(sideNavConcent){
      sideNavConcent.style.height=this.scrHeight-52+'px'
    }
  }
}


