import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiSwitchModule } from 'ngx-ui-switch';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule, UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
