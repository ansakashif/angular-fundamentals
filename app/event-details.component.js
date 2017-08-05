"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const event_service_1 = require("./event.service");
const router_1 = require("@angular/router");
let EventDetailsComponent = class EventDetailsComponent {
    constructor(eventService, activatedRoute, router) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId']);
    }
    returnToEvents() {
        this.router.navigate(['']);
    }
};
EventDetailsComponent = __decorate([
    core_1.Component({
        selector: 'event-details',
        template: `
   <h4>Event Details</h4>
   <div>
    <div>{{event.name}}</div>
    <div>{{event.date}} </div>      
    <div>{{event.time}}</div>
    <div>{{event.location.address}}, {{event.location.city}}, {{event.location.country}}</div>
   </div>
   <div class="back">
     <button class="btn btn-primary" (click)="returnToEvents()">Back to events</button>
   </div>
  `,
        styles: [`
    .back { margin-top:10px; }
  `]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, router_1.ActivatedRoute, router_1.Router])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map