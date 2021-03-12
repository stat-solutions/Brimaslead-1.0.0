import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/other-services/layout.service';

@Component({
  selector: "app-left-panel",
  templateUrl: "./left-panel-procurement.component.html",
  styleUrls: ["./left-panel-procurement.component.scss"]
})
export class LeftPanelProcurementComponent implements OnInit {
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
  imageurl = "../../../../assets/avatar3.jpg";
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

  @HostListener("window:resize", ["$event"])
  onResizeHeight(event: any) {
    this.asidebarHeight = window.innerHeight;
  }

  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(
      setSidebarHeight => (this.asidebarHeight = setSidebarHeight)
    );

    this.title = "Navigation";

    this.menuList = [
      {
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        url: "/procurement",
      },
      {
        name: "Suppliers & Service Providers",
        icon: "fas fa-truck",
        url: "/suppliers-serviceproviders",
        subMenu: [
          {
            name: "Identification",
            icon: "fas fa-clipboard-list",
            url: "/suppliers-serviceproviders/identify",
          },
          {
            name: "Management",
            icon: "fas fa-clipboard-list",
            url: "/suppliers-serviceproviders/manage",
          },
        ],
      },
      {
        name: "Buy Items",
        icon: "fas fa-cart-plus",
        url: "/buyitems",
      },
      {
        name: "Reports",
        icon: "fas fa-chart-line",
        url: "/procurementreports",
      },
      {
        name: "Profile",
        icon: "fas fa-user-cog",
        url: "/procurementprofile",
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/procurementnotification",
        badge: "8",
        badgeBg: "bg-warning",
      },
    ];
  }
}
