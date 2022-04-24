import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { SuccesAlertComponent } from './components/succes-alert/succes-alert.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { ServerComponent } from './components/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccesAlertComponent,
    WarningAlertComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
