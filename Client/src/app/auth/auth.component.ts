import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  imageUrl = '../assets/img/brimas_logo.svg';
  isCollapsed: boolean;

  toggleClass: string;

  constructor() {}

  ngOnInit() {   this.toggleArial(); }
  getUrl() {
    return 'url(\'./assets/img/1.jpg\')';
  }

  toggleArial() {
    this.isCollapsed = !this.isCollapsed;
    this.toggletheClass(this.isCollapsed);
  }

  toggletheClass(theTogler: boolean) {
    console.log(theTogler);
    if (theTogler) {
      this.toggleClass = 'collapse navbar-collapse';

      // console.log(this.toggleClass);
    } else {
      this.toggleClass = 'navbar-collapse';
      // console.log(this.toggleClass);
    }
  }
}
