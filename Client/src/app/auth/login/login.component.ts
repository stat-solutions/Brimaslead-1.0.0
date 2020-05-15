import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { CustomValidatorInitialCompanySetup } from "src/app/shared/validators/custom-validator-initial-company-setup";
import { AuthServiceService } from "src/app/shared/services/auth-services/auth-service.service";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
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
  serviceErrors: any = {};
  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
     email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          // CustomValidatorInitialCompanySetup.patternValidator(/\d/, {
          //   hasNumber: true
          // }),
          // Validators.maxLength(10),
          Validators.email
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

  showSuccess() {

    this.toastr.success('Over to Brimaslead Dashboard', this.serviceErrors,
                         {timeOut: 6000, positionClass: 'toast-top-right'});
  }
  showDanger() {

    this.toastr.warning(this.serviceErrors, 'Login Failed!!', {timeOut: 6000, positionClass: 'toast-bottom-left'});
  }


  login() {
    
    this.submitted = true;

    this.spinner.show();

    if (this.userForm.invalid === true) {
      return;
    } else {
      // console.log(this.userForm.value);
   this.authService.loginEmployee(this.userForm.value).subscribe(
     
    (user) => {
         
      if (user){
        //  console.log(loggedInUser);
         console.log(user.emailVerified);
        //  console.log(loggedInUser.user.emailVerified);
        //  console.log(loggedInUser.user.displayName);
          if (user.emailVerified) {
            this.serviceErrors = `Hello ${user.displayName}, You signed in successfully!!!`;

            setTimeout(() => {
              this.posted = true;
              this.spinner.hide();
              this.showSuccess();
              this.router.navigate(['frontdeskdashboard']);
            }, 2000);
          }else{
            
            this.serviceErrors = 'Email not verified!! Please first login into your email address and verify the email by click on the link';

            setTimeout(() => {
              this.posted = true;
              this.spinner.hide();
              this.showDanger();
              // this.router.navigate(['userDashboard/dashboard']);
            }, 2000);
            
          } 
          }
      
      }
        ,

        (error: string) => {
          this.spinner.hide();
          this.errored = true;
          this.serviceErrors = error;
          this.showDanger();
        } 
      );
    
    }
  }}
