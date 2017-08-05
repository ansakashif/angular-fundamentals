import { Routes } from '@angular/router'

import { EventsListComponent} from './events/events-list.component'
import { EventDetailsComponent} from './events/event-details.component'
import { Error404Component } from './errors/404.component'
import { CreateSessionComponent } from './events/create-session.component';
import { EventRouteActivator } from './events/event-route-activator.service'

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:eventId', component: EventDetailsComponent, canActivate:[EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '', redirectTo: '/events', pathMatch:'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
]

