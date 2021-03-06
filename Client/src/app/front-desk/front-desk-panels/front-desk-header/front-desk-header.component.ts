import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/other-services/layout.service';
import { AuthServiceService } from 'src/app/shared/services/auth-services/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-front-desk-header",
  templateUrl: "./front-desk-header.component.html",
  styleUrls: ["./front-desk-header.component.scss"],
})
export class FrontDeskHeaderComponent implements OnInit {
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
  serviceErrors: any;
  constructor(
    private layoutService: LayoutService,
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  user = "../../../assets/img/man.svg";
  userName: string;

  ngOnInit() {}
  changeTheToggleStatus() {
    this.layoutService.getToggleStatus();
  }

  showDanger() {
    this.toastr.warning(this.serviceErrors, "Logout Successfully!!", {
      timeOut: 6000,
      positionClass: "toast-bottom-left",
    });
  }

  logoutUser() {
    // this.spinner.show();
    this.serviceErrors = "Buy buy!";
    this.showDanger();
    setTimeout(() => {
      this.authService.logoutUser();
      this.router.navigate(["authpage/home"]);

      // this.spinner.hide();
    }, 1000);
  }
}
