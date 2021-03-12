import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/other-services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-finance.component.html',
  styleUrls: ['./left-panel-finance.component.scss']
})
export class LeftPanelFinanceComponent implements OnInit {
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
  imageurl = '../../../../assets/avatar3.jpg';
  title: any;
  menuList: any;
  selected: any;
  userName: any;
  constructor(private layoutService: LayoutService) {}

  isActive(item) {
    return this.selected === item;
  }
  onItemSelect(item) {
    this.selected = this.selected === item ? item : item;
  }
  onSubItemSelect(item) {
    event.stopPropagation();
    this.selected = this.selected === item ? item : item;
  }

  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
    this.asidebarHeight = window.innerHeight;
  }

  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(
      setSidebarHeight => (this.asidebarHeight = setSidebarHeight)
    );

    this.title = 'Navigation';

    this.menuList = [
      {
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        url: "/finance",
      },
      {
        name: "Receivables and Payables",
        icon: "fas fa-dollar",
        url: "/R-and-Ps",
        subMenu: [
          {
            name: "Suppliers",
            icon: "fas fa-warehouse",
            url: "/R-and-Ps/suppliers",
          },
          {
            name: "Clients",
            icon: "fas fa-users",
            url: "/R-and-Ps/clients",
          },
        ],
      },
      {
        name: "Cost Jobs",
        icon: "fas fa-tools",
        url: "/costjobs",
      },
      {
        name: "Pay Service Providers",
        icon: "fas fa-money-bill",
        url: "/paybills",
      },
      {
        name: "Reports",
        icon: "fas fa-chart-line",
        url: "/financereports",
      },
      {
        name: "Profile",
        icon: "fas fa-user-cog",
        url: "/financeprofile",
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/financenotifications",
        badge: "8",
        badgeBg: "bg-warning",
      },
    ];
  }
}
