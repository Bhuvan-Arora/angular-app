import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="warning-color">Warning Component works!</div>
  `,
  styles: [`
    .warning-color
    {
      color: red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
