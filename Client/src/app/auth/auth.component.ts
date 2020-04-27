import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  imageUrl = "../assets/img/brimas_logo.svg";

  constructor() {}

  ngOnInit() {}
  getUrl() {
    return 'url(\'./assets/img/1.jpg\')';
  }
}
