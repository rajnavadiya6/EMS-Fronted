import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: any;
  constructor(private location: Location, private Router: Router) { }

  ngOnInit() {
    this.data = this.location.getState()
    console.log(this.data)
    if (this.data.navigationId === 1) {
      this.Router.navigate([this.location.path().split('/')[1]]);
    }

  }

}
