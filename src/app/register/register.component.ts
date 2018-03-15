import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormsModule} from '@angular/forms';
import {AuthService} from "../services/auth/auth.service";
import {MessageService} from "../services/message/message.service";
import {Location} from "@angular/common";

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    username:string;
    password:string;
    confirmPassword:string;

    constructor(private authService:AuthService, private location:Location){

    }

    register(){
        if(this.username && this.password && this.confirmPassword){
            this.authService.register(this.username, this.password, this.confirmPassword,
                () => {
                    //Success
                    this.goBack();
                },
                () => {
                    //Fail
                }
            );
        }
    }

    goBack(){
        this.location.back();
    }

    ngOnInit(){

    }
}
