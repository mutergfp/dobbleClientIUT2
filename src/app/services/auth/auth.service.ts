
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_USERS_LOGIN, API_USERS_REGISTER} from "../../configs/apis_urls";
import {MessageService} from "../message/message.service";

@Injectable()
export class AuthService{

    userLogged:boolean;

    constructor(private http: HttpClient, private messageService:MessageService){
        this.userLogged = this.isLoggedIn();
    }

    login(username:string, password:string, callBackSuccess: () => void, callBackError: () => void){
        return this.http.post(API_USERS_LOGIN,{username:username, password:password})
            .subscribe(
                res => {
                    console.log(res);
                    localStorage.setItem('id_token',res.toString());
                    localStorage.setItem('username',username);
                    this.userLogged = true;
                    callBackSuccess();
                },
                err => {
                    if(err instanceof ErrorEvent){
                        this.messageService.add("Le service de login semble indisponible, veuillez réessayer plus tard.");
                    }else{
                        switch (err.status){
                            case 401 :
                                if (!username.length || !password.length){
                                    if(!username.length){
                                        this.messageService.add("Vous devez entrer un nom d'utilisateur.");
                                    }
                                    if(!password.length){
                                        this.messageService.add("Vous devez entrer un mot de passe.");
                                    }
                                }else {
                                    this.messageService.add("Identifiants incorrects.");
                                }break;
                            default : this.messageService.add("Le service de login semble indisponible, veuillez réessayer plus tard.");break;
                        }
                    }
                    callBackError();
                });
    }

    register(username:string, password:string, confirmPassword:string, callBackSuccess: () => void, callBackError: () => void){
        console.log({username:username, password:password, confirmPassword:confirmPassword});
        return this.http.post(API_USERS_REGISTER,{username:username, password:password, confirmPassword:confirmPassword})
            .subscribe(
                res => {
                    this.messageService.add("Création du compte avec succès.");
                    console.log(res);
                    this.login(username,password,callBackSuccess,callBackError);
                },
                err => {
                    if(err instanceof ErrorEvent){
                        this.messageService.add("Le service d'enregistrement semble indisponible, veuillez réessayer plus tard.");
                    }else{
                        switch (err.status){
                            case 400 :
                                if(!username.length || !password.length || !confirmPassword.length){
                                    if(!username.length){
                                        this.messageService.add("Vous devez entrer un nom d'utilisateur.");
                                    }
                                    if(!password.length){
                                        this.messageService.add("Vous devez entrer un mot de passe.");
                                    }else if(!confirmPassword.length){
                                        this.messageService.add("Vous devez confirmer le mot de passe.");
                                    }
                                }else if(password!=confirmPassword){
                                    this.messageService.add("Les deux mots de passes sont différents.");
                                }else{
                                    this.messageService.add("Le nom d'utilisateur entré est déjà utilisé.");
                                }break;
                            default : this.messageService.add("Le service d'enregistrement semble indisponible, veuillez réessayer plus tard.");break;
                        }
                    }
                    callBackError();
                }
            )
    }

    logout(){
        localStorage.removeItem('id_token');
        localStorage.removeItem('username');
        this.userLogged = false;
    }

    isLoggedIn(){
        return localStorage.getItem('id_token')!=null && localStorage.getItem('username')!=null;
    }

    getUserName(){
        if(this.isLoggedIn())
            return localStorage.getItem('username');
    }

}