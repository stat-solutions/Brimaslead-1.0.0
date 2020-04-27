import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { CustomValidatorInitialCompanySetup } from "src/app/shared/validators/custom-validator-initial-company-setup";
import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  userForm: FormGroup;
  loginStatus: string;
  value: string;
  mySubscription: any;

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      phone_number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(/\d/, {
            hasNumber: true
          }),
          Validators.maxLength(10),
          Validators.minLength(10)
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          // 1. Password Field is Required

          Validators.required
        ])
      )
    });
  }

  revert() {
    this.userForm.reset();
  }

  get fval() {
    return this.userForm.controls;
  }

  login() {
    this.submitted = true;

    this.spinner.show();

    if (this.userForm.invalid === true) {
      return;
    } else {
      // this.authService.loginNormalUser(this.userForm)
      //   .subscribe(
      //     (success: boolean) => {
      //       if (success) {
      //         this.posted = true;
      //         this.loginStatus = 'Signed In Successfully';
      //         this.spinner.hide();
      //         if (jwt_decode(this.authService.getJwtToken()).user_role === 1000) {
      //           setTimeout(() => {
      //             this.router.navigate(['userDashboard/dashboard']);
      //           }, 1000);
      //         } else if (jwt_decode(this.authService.getJwtToken()).user_role === 1001) {
      //           setTimeout(() => {
      //             this.router.navigate(['admindashboard/thedashboard']);
      //           }, 1000);
      //         } else if (jwt_decode(this.authService.getJwtToken()).user_role === 1002) {
      //           setTimeout(() => {
      //             this.router.navigate(['superuserdashboard/thesuperuserdashboard']);
      //           }, 1000);
      //         }
      //       } else {
      //         this.spinner.hide();
      //         this.errored = true;
      //       }
      //     },
      //     (error: string) => {
      //       this.spinner.hide();
      //       this.errored = true;
      //       this.loginStatus = error;
      // console.log();
      //         if (this.loginStatus === 'Authorisation Failed!! User Not Registered') {
      //           setTimeout(() => {
      //             this.router.navigate(['userDashboard/registeruser']);
      //           }, 1000);
      //         }
      //         this.spinner.hide();
      //       }
      //     );
    }
  }
}
