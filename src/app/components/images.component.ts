import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_CARDS_LISTE_IMAGES, API_CARDS_IMAGE} from "../configs/apis_urls";

@Component({
    selector: 'images-list',
    templateUrl: '../templates/images.component.html',
    styleUrls: ['../templates/images.component.css']
})
export class ImagesComponent {

    images:[number];
    isDataAvailable:boolean = false;


    api:string = API_CARDS_IMAGE;

    constructor(private http: HttpClient){
    }

    ngOnInit(){
        this.http.get(API_CARDS_LISTE_IMAGES)
            .subscribe(res =>{
                this.images = res as [number];
                this.isDataAvailable = true;
                return true
            });
    }

}
