import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormsModule} from '@angular/forms';
import {AuthService} from "../services/auth/auth.service";
import {MessageService} from "../services/message/message.service";
import {Location} from "@angular/common";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username:string;
    password:string;

    constructor(private authService:AuthService,  private location:Location){

    }

    login(){
        if(this.username && this.password){
            this.authService.login(this.username, this.password,
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
