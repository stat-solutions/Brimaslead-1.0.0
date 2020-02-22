import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  imageUrl = './assets/blimassLead.jpg';
  boxUsage = 'How';
  usage = ['Our Moto', 'Our Vision', 'Our Mission', 'Our Purpose', 'Core Values'];
  boxUsage2 = 'With Who';
  usage2 = ['Our Clients', 'Our Suppliers', 'Our Mission', 'Our Purpose', 'Core Values'];

  boxUsage3 = 'About Us';
  usage3 = ['Our Products', 'Our Team', 'Our Services', 'Others', 'Others'];

  isCollapsed: boolean;

  toggleClass: string;

  constructor() { }

  ngOnInit() {
    this.toggleArial();
  }

  toggleArial() {


    this.isCollapsed = !this.isCollapsed;
    this.toggletheClass(this.isCollapsed);

  }

  toggletheClass(theTogler: boolean) {

    if (theTogler) {

      this.toggleClass = 'collapse navbar-collapse';

      // console.log(this.toggleClass);
    } else {

      this.toggleClass = 'navbar-collapse';
      // console.log(this.toggleClass);
    }

  }

}
