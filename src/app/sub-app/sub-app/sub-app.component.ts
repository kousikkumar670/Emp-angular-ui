import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-app',
  templateUrl: './sub-app.component.html'})
export class SubAppComponent implements OnInit {
isMenuToggle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  navToggle(event:boolean){
    if(event){
     this.isMenuToggle=!this.isMenuToggle
    }
  }
}
