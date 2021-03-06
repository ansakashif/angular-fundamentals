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
var forms_1 = require("@angular/forms");
var CreateSessionComponent = (function () {
    function CreateSessionComponent() {
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.presenter = new forms_1.FormControl('', forms_1.Validators.required);
        this.duration = new forms_1.FormControl('', forms_1.Validators.required);
        this.level = new forms_1.FormControl('', forms_1.Validators.required);
        this.abstract = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(400)]);
        this.newSessionForm = new forms_1.FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.name,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        //console.log(formValues);
        var session = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.string,
            voters: []
        };
        console.log(session);
    };
    return CreateSessionComponent;
}());
CreateSessionComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/events/create-session.component.html'
    }),
    __metadata("design:paramtypes", [])
], CreateSessionComponent);
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map