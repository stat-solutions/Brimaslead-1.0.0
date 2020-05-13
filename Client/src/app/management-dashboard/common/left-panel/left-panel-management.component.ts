import { Component, OnInit, Input, HostListener } from "@angular/core";
import { LayoutService } from "../../../shared/services/layout.service";

@Component({
  selector: "app-left-panel",
  templateUrl: "./left-panel-management.component.html",
  styleUrls: ["./left-panel-management.component.scss"]
})
export class LeftPanelManagementComponent implements OnInit {
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
      // {
      //   name: this.userName,
      //   icon: 'far fa-user-circle',
      //   url: '/none',
      //   image: this.imageurl
      // },

      {
        name: "Management Dashboard",
        icon: "fas fa-tachometer-alt",
        url: "/managementdashboard"
        // badge: '2',
        // badgeBg: 'bg-success',
      },

      {
        name: "Request for Quotation(RFQ)",
        icon: "fas fa-clipboard-list",
        url: "/rfq-approval"
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: "Purchases",
        icon: "fas fa-warehouse",
        url: "/purchases-approval"
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: "Production",
        icon: "fas fa-building",
        url: "/production-approvals"
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: "Quality Assurance(QA)",
        icon: "fas fa-gem",
        url: "/qa-approvals"
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: "HR Management",
        icon: "fas fa-users",
        url: "/hr-approvals"
        // badge: '2',
        // badgeBg: 'bg-success',
      },
      // {
      //   name: "Leave Approval",
      //   icon: "far fa-calendar-minus",
      //   url: "/leave-approval"
      //   // badge: '2',
      //   // badgeBg: 'bg-success',
      // },
      // {
      //   name: "Hiring Approval",
      //   icon: "fas fa-hourglass-start",
      //   url: "/hiring-approval"
      //   // badge: '2',
      //   // badgeBg: 'bg-success',
      // },
      {
        name: "Appointments",
        icon: "far fa-calendar-plus",
        url: "/appointments",
        badge: "2",
        badgeBg: "bg-warning"
      },

      {
        name: "Finance",
        icon: "fas fa-coins",
        url: "/finance-approvals"
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: "Reports and Analysis",
        icon: "fa fa-chart-line",
        url: "/reports-analysis"
      },
      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/notifications",
        badge: "8",
        badgeBg: "bg-warning"
      }
    ];
  }
}
