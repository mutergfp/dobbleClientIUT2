import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../services/player/player.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(public auth:AuthService, public playerService:PlayerService, private route: ActivatedRoute) {
  }

  get username(){
    return this.route.snapshot.paramMap.get('username');
  }

  ngOnInit() {
    this.playerService.refresh();
  }

}
