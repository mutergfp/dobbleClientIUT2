
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_USERS_LOGIN} from "../configs/apis_urls";

@Injectable()
export class AuthService{
    constructor(private http: HttpClient){

    }

    login(username:string, password:string){
        return this.http.post(API_USERS_LOGIN,{username:username, password:password})
        .subscribe(res => {
            console.log(res);
            localStorage.setItem('id_token',res.toString());
        });
    }

    logout(){
        localStorage.removeItem('id_token');
    }

    isLoggedIn(){
        return localStorage.getItem('id_token')
    }
}