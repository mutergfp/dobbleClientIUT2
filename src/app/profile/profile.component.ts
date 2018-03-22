import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../services/player/player.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(public auth:AuthService, public playerService:PlayerService, private route: ActivatedRoute, private location:Location) {
  }

  get username(){
    return this.route.snapshot.paramMap.get('username');
  }

  ngOnInit() {
    this.playerService.refresh();
  }

  goBack(){
    this.location.back();
  }
}
