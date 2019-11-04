import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showInfo = false;
  clicks = 0;
  constructor() { }

  ngOnInit() {
  }

  toggleInfo()
  {
    if(this.showInfo)
      this.showInfo = false;
    else
      this.showInfo = true;
      this.clicks = this.clicks +1;
  }
}
