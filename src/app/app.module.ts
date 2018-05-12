import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'




import { AppComponent } from './app.component';
import { TabComponent } from './crc/tab';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [TabComponent]
})
export class AppModule { }
