import {Component, OnInit} from '@angular/core';
import {API_CARDS_LISTE_IMAGES, API_CARDS_IMAGE} from "../configs/apis_urls";
import {ImagesService} from "../services/images/images.service";

@Component({
    selector: 'images-list',
    templateUrl: 'images.component.html',
    styleUrls: ['images.component.css']
})
export class ImagesComponent implements OnInit {

    api:string = API_CARDS_IMAGE;

    constructor(public imagesService: ImagesService){
    }

    ngOnInit(){
        this.imagesService.refresh();
    }

}
