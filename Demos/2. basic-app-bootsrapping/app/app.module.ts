import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { EventsAppComponent }         from './events-app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    EventsAppComponent
  ],
  providers: [
  ],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule {
}

