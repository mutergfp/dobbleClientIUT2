import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule} from '@angular/forms';
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'login',
    templateUrl: '../templates/login.component.html'
})
export class LoginComponent {

    model:any={};

    constructor(private authService:AuthService){

    }

    login(){
        this.authService.login(this.model.username, this.model.password);
    }
}
