import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { CreateSessionComponent } from './events/create-session.component';
import { EventService } from './events/event.service';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-route-activator.service'

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent
  ],
  providers: [ EventService, EventRouteActivator ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

