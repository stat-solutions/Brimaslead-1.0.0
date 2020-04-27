import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  imageUrl = "../assets/img/brimas_logo.svg";

  isCollapsed: boolean;

  toggleClass: string;

  constructor() {}

  ngOnInit() {
    this.toggleArial();
  }

  toggleArial() {
    this.isCollapsed = !this.isCollapsed;
    this.toggletheClass(this.isCollapsed);
  }

  toggletheClass(theTogler: boolean) {
    if (theTogler) {
      this.toggleClass = "collapse navbar-collapse";

      // console.log(this.toggleClass);
    } else {
      this.toggleClass = "navbar-collapse";
      // console.log(this.toggleClass);
    }
  }
  getUrl() {
    return 'url(\'./assets/img/1.jpg\')';
  }
}
