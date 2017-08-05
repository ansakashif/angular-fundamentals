import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/user/profile.component.html',
})
export class ProfileComponent implements OnInit {
     profileForm: FormGroup 
     constructor(private router: Router) {

     } 
     ngOnInit() {
         let firstName = new FormControl();
         let lastName = new FormControl();
         this.profileForm = new FormGroup({
             firstName: firstName,
             lastName: lastName
         }) 
     }

     saveProfile(formValues) {
        console.log(formValues.firstName);
        this.router.navigate(['events']);
     }

     cancel() {
        this.router.navigate(['events']);
     }  
}