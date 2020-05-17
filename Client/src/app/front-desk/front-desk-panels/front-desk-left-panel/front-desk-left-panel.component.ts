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
        name: "Front Desk Dashboard",
        icon: "fas fa-tachometer-alt",
        url: "/frontdeskdashboard"
      },

      {
        name: "Request For Quotation",
        icon: "fas fa-clipboard-list",
        url: "/requestforquote",
        badge: "2",
        badgeBg: "bg-warning"
      },
      {
        name: "Register Client",
        icon: "fas fa-briefcase",
        url: "authpage/register-client"
      },

      {
        name: "Purchases",
        icon: "fas fa-warehouse",
        url: "/purchases"
      },

      {
        name: "Appointments",
        icon: "far fa-calendar-plus",
        url: "/appointments"
      },
      {
        name: "Human Capital Management",
        icon: "fas fa-users",
        url: "/human-capital-mgt"
      },
      {
        name: "Reports And Analysis",
        icon: "fa fa-chart-line",
        url: "/reports-analysis"
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/notifications",
        badge: "2",
        badgeBg: "bg-warning"
      }
    ];
  }

}
