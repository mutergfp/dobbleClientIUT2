import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:string;

  constructor(public auth:AuthService, private route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  ngOnInit() {
  }

}
