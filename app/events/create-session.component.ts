import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession } from './shared/event.model'


@Component({
    templateUrl: 'app/events/create-session.component.html'
})

export class CreateSessionComponent implements OnInit {
        newSessionForm: FormGroup;
        name: FormControl;
        presenter: FormControl;
        duration:FormControl;
        level:FormControl;
        abstract: FormControl

    ngOnInit(){
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.name,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues){
        //console.log(formValues);
        let session: ISession = {
            id : undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.string,
            voters: []
        }
        console.log(session);
    }

}