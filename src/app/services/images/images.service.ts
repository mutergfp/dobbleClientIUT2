import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {API_CARDS_LISTE_IMAGES} from "../../configs/apis_urls";

@Injectable()
export class ImagesService {

    images:number[] = [];

    constructor(private http: HttpClient) {
        this.refresh();
    }

    public refresh(){
        this.GetListImages().subscribe(
            imgs => this.images=imgs
        );
    }

    private GetListImages(): Observable<number[]>{
        return this.http.get<number[]>(API_CARDS_LISTE_IMAGES);
    }

}
