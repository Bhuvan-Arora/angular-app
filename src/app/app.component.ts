import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  isNavOpen:boolean = false;
  isSwitchEnable:boolean = false;
  
  @ViewChild('navSheet', {static : false}) navSheet; 
  @ViewChild('navButton', {static : false}) navButton; 

  toggleNav(){
    if(this.isNavOpen)
     this.isNavOpen = false;
    else
      this.isNavOpen = true;
  }


}
