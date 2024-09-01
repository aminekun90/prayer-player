import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import {SharedModule} from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    CalendarComponent,
    SettingsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
