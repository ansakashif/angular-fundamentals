"use strict";
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details.component");
var _404_component_1 = require("./errors/404.component");
var create_session_component_1 = require("./events/create-session.component");
var event_route_activator_service_1 = require("./events/event-route-activator.service");
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:eventId', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: 'events/session/new', component: create_session_component_1.CreateSessionComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
];
//# sourceMappingURL=routes.js.map