import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-sales-market.component.html',
  styleUrls: ['./left-panel-sales-market.component.scss']
})
export class LeftPanelSalesMarketComponent implements OnInit {
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
        name: this.userName,
        icon: 'far fa-user-circle',
        url: '/none',
        image: this.imageurl
      },

      {
        name: 'sales-market Dashboard',
        icon: 'far fa-clone',
        url: '/dashboard'
        // badge: '2',
        // badgeBg: 'bg-success',
      },

      {
        name: 'Add Tokens To Stock',
        icon: 'far fa-calendar-alt text-danger',
        url: '/addtokens'
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: 'Sell Tokens',
        icon: 'far fa-user-circle text-success',
        url: '/selltokens'
        // badge: '3',
        // badgeBg: 'bg-danger',
      }
      ,
      {
        name: 'Transfer Tokens To Savings',
        icon: 'far fa-user-circle text-info',
        url: '/transfertokenstosavingsbox'
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: 'Withdraw Tokens',
        icon: 'far fa-clone text-warning',
        url: '/withdrawTokens'
        // badge: '2',
        // badgeBg: 'bg-success',
      },


      {
        name: 'Update Profile',
        icon: 'far fa-user text-danger',
        url: '/updatesales-marketprofile'
        // badge: '3',
        // badgeBg: 'bg-danger',
      }

      ,


      {
        name: 'Notifications',
        icon: 'fas fa-envelope text-info',
        url: '/notifications',
        badge: '8',
        badgeBg: 'bg-danger',
      }


    ];
  }
}
