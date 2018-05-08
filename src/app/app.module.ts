import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabComponent } from './tab';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TabComponent]
})
export class AppModule { }
