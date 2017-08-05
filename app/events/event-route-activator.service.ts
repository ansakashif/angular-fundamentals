import { Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router'
import { Injectable } from "@angular/core"
import { EventService } from './event.service'


@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private router:Router, private eventService:EventService){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEvent(+route.params['eventId']);

        if(!eventExists){
            this.router.navigate(['/404']);
        }
            return eventExists;
    }

}