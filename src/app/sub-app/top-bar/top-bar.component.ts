import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
@Output() sideNavToggleEvent=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.sideNavToggleEvent.emit(true)
}
}
