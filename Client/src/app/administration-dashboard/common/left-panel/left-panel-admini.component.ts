import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/other-services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-admini.component.html',
  styleUrls: ['./left-panel-admini.component.scss']
})
export class LeftPanelAdminiComponent implements OnInit {
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
        url: "/administration",
      },
      {
        name: "RFQ Preparation",
        icon: "fas fa-list",
        url: "/administration/rfqs",
      },
      {
        name: "Bid Preparation",
        icon: "fas fa-file",
        url: "/administration/bidpreps",
      },
      {
        name: "Debt Management",
        icon: "fas fa-balance-scale",
        url: "/administration/debtmanagement",
      },
      {
        name: "Procurement Management",
        icon: "fas fa-warehouse",
        url: "/administration/procurement",
      },
      {
        name: "Reports",
        icon: "fas fa-chart-line",
        url: "/administration/reports",
      },
      {
        name: "Profile",
        icon: "fas fa-user-cog",
        url: "/administration/profile",
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/administration/notifications",
        badge: "8",
        badgeBg: "bg-warning",
      },
    ];
  }
}
