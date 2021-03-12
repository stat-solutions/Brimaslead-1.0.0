import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/other-services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-design-creative.component.html',
  styleUrls: ['./left-panel-design-creative.component.scss']
})
export class LeftPanelDesignCreativeComponent implements OnInit {
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
        url: "/designcreative",
      },
      {
        name: "Created Designs",
        icon: "fas fa-star",
        url: "/createddesigns",
      },
      {
        name: "Quality Assurance",
        icon: "fas fa-balance-scale",
        url: "/qualityassurance",
      },
      {
        name: "Reports",
        icon: "fas fa-chart-line",
        url: "/designcreativereports",
      },
      {
        name: "Profile",
        icon: "fas fa-user-cog",
        url: "/designcreativeprofile",
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/designcreativenotifications",
        badge: "8",
        badgeBg: "bg-warning",
      },
    ];
  }
}
