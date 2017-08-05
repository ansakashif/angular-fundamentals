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
var core_1 = require("@angular/core");
var event_service_1 = require("./event.service");
var router_1 = require("@angular/router");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, activatedRoute, router) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId']);
    };
    EventDetailsComponent.prototype.returnToEvents = function () {
        this.router.navigate(['']);
    };
    return EventDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventDetailsComponent.prototype, "event", void 0);
EventDetailsComponent = __decorate([
    core_1.Component({
        selector: 'event-details',
        template: "\n   <h4>Event Details</h4>\n   <div>\n    <div>{{event?.name}}</div>\n    <div>{{event?.date}} </div>      \n    <div>{{event?.time}}</div>\n    <div>{{event?.location?.address}}, {{event?.location?.city}}, {{event?.location?.country}}</div>\n   </div>\n   <div class=\"back\">\n     <button class=\"btn btn-primary\" (click)=\"returnToEvents()\">Back to events</button>\n   </div>\n  ",
        styles: ["\n    .back { margin-top:10px; }\n  "]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, router_1.ActivatedRoute, router_1.Router])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map