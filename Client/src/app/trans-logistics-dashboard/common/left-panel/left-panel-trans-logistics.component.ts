import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/other-services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-trans-logistics.component.html',
  styleUrls: ['./left-panel-trans-logistics.component.scss']
})
export class LeftPanelTransLogisticsComponent implements OnInit {
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
        url: "/translogistics",
      },
      {
        name: "Order Delivery",
        icon: "fas fa-truck",
        url: "/orderdelivery",
      },
      {
        name: "Invoice Delivery",
        icon: "fas fa-file",
        url: "/invoicedelivery",
      },
      {
        name: "Reports",
        icon: "fas fa-chart-line",
        url: "/translogisticsreports",
      },
      {
        name: "Profile",
        icon: "fas fa-user-cog",
        url: "/translogisticsprofile",
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/transnotifications",
        badge: "8",
        badgeBg: "bg-warning",
      },
    ];
  }
}
