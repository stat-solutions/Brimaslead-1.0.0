import { Component, OnInit, Input } from "@angular/core";
// import { LayoutService } from "../../../shared/services/layout.service";
// import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header-finance.component.html",
  styleUrls: ["./header-finance.component.scss"],
})
export class HeaderFinanceComponent implements OnInit {
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() leftHeaderColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  @Input() headerHeight: number;
  @Input() collapsedLeftHeader: boolean;

  user = "../../../assets/img/man.svg";
  userName: string;
  serviceErrors: any;
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router // private toastr: ToastrService
  ) {}

  ngOnInit() {}

  changeTheToggleStatus() {
    // this.layoutService.getToggleStatus();
  }

  showDanger() {
    // this.toastr.warning(this.serviceErrors, 'Logout Successfully!!', {timeOut: 6000, positionClass: 'toast-bottom-left'});
  }

  logoutUser() {
    this.serviceErrors = "Bye bye!";
    this.showDanger();
    setTimeout(() => {
      // this.authService.doLogoutUser();
      this.router.navigate(["authpage/loginpage"]);
    }, 1000);
  }
}
