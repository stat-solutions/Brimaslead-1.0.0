import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';

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
        name: 'Front Desk Dashboard',
        icon: 'fas fa-tachometer-alt',
        url: '/frontdeskdashboard'
      },

      {
        name: 'Request For Qoute',
        icon: 'fas fa-clipboard-list',
        url: '/requestforqoute',
        badge: '2',
        badgeBg: 'bg-success'
      },

      {
        name: 'Leave Management',
        icon: 'fas fa-calendar-minus',
        url: '/leave-management'
      },

      {
        name: 'Payroll Management',
        icon: 'fas fa-money-check',
        url: '/payroll-mgt'
      },

      {
        name: 'Sample Invoice',
        icon: 'far fa-sun',
        url: '/sample-invoice'
      },
      {
        name: 'Human Capital',
        icon: 'far fa-people',
        url: '/human-capital-mgt'
      },
      {
        name: 'Reports And Analysis',
        icon: 'fa fa-chart-line',
        url: '/reports-analysis'
      }
    ];
  }

}