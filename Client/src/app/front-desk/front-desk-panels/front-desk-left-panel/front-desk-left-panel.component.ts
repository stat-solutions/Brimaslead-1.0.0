import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/other-services/layout.service';

@Component({
  selector: 'app-front-desk-left-panel',
  templateUrl: './front-desk-left-panel.component.html',
  styleUrls: ['./front-desk-left-panel.component.scss']
})
export class FrontDeskLeftPanelComponent implements OnInit {

  asidebarHeight: number;
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  title: any;
  menuList: any;
  selected: any;
  constructor(private layoutService: LayoutService) { }

  isActive(item) {
    return this.selected === item;
  }
  onItemSelect(item) {
    this.selected = (this.selected === item ? item : item);
  }
  onSubItemSelect(item) {
    event.stopPropagation();
    this.selected = (this.selected === item ? item : item);
  }


  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
    this.asidebarHeight = window.innerHeight;
  }



  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(setSidebarHeight => this.asidebarHeight = setSidebarHeight);

    this.title = 'Navigation';
    this.menuList = [
      {
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        url: "/frontdeskdashboard",
      },

      {
        name: "RFQ Preparation",
        icon: "fas fa-clipboard-list",
        url: "/phonerfqs",
      },
      {
        name: "Create Catalog Item",
        icon: "fas fa-cart-plus",
        url: "/createcatalogitem",
      },
      {
        name: "Create Client",
        icon: "fas fa-users",
        url: "/createclient",
      },
      {
        name: "Appointments",
        icon: "far fa-calendar-plus",
        url: "/makeappointment",
        badge: "2",
        badgeBg: "bg-warning",
      },
      {
        name: "File and Archive",
        icon: "fas fa-file",
        url: "/filearchive",
      },
      {
        name: "Reports",
        icon: "fa fa-chart-line",
        url: "/frontdeskreports",
      },
      {
        name: "Profile",
        icon: "fas fa-user-cog",
        url: "/frontdeskprofile",
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/frontdesknotifications",
        badge: "2",
        badgeBg: "bg-warning",
      },
    ];
  }

}
