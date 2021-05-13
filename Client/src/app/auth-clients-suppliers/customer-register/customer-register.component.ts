import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/shared/services/auth-services/auth-service.service";
import { CustomValidatorInitialCompanySetup } from "src/app/shared/validators/custom-validator-initial-company-setup";
import { OtherBackendApiService } from 'src/app/shared/services/auth-services/other-backend-api.service';
import { ToastrService } from 'ngx-toastr';
import { AuthUser } from 'src/app/shared/models/user-profile/auth-user';

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-customer-register",
  templateUrl: "./customer-register.component.html",
  styleUrls: ["./customer-register.component.scss"]
})
export class CustomerRegisterComponent implements OnInit {
  hide = true;
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  serviceErrors: any = {};
  value: string;
  mySubscription: any;
  userForm: FormGroup;
  imageSrc: string;
 authData: AuthUser;
  appData: any;


  constructor(
    private authService: AuthServiceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}



  ngOnInit() {
    this.userForm = this._formBuilder.group(
      {
        clientName: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(128),
            // 4. check whether the entered password has a lower-case letter
            CustomValidatorInitialCompanySetup.patternValidator(
              /[a-zA-Z]/,
              {
                hasCharacters: true
              }
            )
          ])
        ],
        phoneNumber: [
          "",
          Validators.compose([
            Validators.required,
            CustomValidatorInitialCompanySetup.patternValidator(
              /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
              { hasNumber: true }
            )
          ])
        ],
        email: ["", Validators.email],
        password: [
          "",
          Validators.compose([
            // 1. Password Field is Required

            Validators.required,

            // 2. check whether the entered password has a number
            //CustomValidatorInitialCompanySetup.patternValidator(/^(([1-9])([1-9])([1-9])([0-9]))$/, { hasNumber: true }),
            // 6. Has a minimum length of 8 characters
            Validators.minLength(8),
            //Validators.maxLength(4),
            // 3. check whether the entered password has upper case letter
            CustomValidatorInitialCompanySetup.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // 4. check whether the entered password has a lower-case letter
            CustomValidatorInitialCompanySetup.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // 5. check whether the entered password has a special character
            CustomValidatorInitialCompanySetup.patternValidator(
              /[!@#$%^&*_+-=;':"|,.<>/?]/,
              { hasSpecialCharacters: true }
            )
          ])
        ],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: CustomValidatorInitialCompanySetup.passwordMatchValidator
      }
    );
  }
  showSuccess() {

    this.toastr.success('Please first verify your email and then proceed to login', this.serviceErrors,
                         {timeOut: 6000, positionClass: 'toast-top-right'});
  }
  showDanger() {

    this.toastr.warning(this.serviceErrors, 'Registration Failed!!', {timeOut: 6000, positionClass: 'toast-bottom-left'});
  }

  onSubmit() {

    this.spinner.show();
    this.appData = {...this.userForm.value};
    this.authData = {email: this.appData.email, password: this.appData.password};
    this.submitted = true;
    delete this.appData.password;
    delete this.appData.confirmPassword;
    console.log(this.authData);

    this.authService.registerCustomer(this.appData).subscribe(
        (data: string) => {

          if (data === 'User created successfully') {
            this.serviceErrors = 'Registration was Successful';

            setTimeout(() => {
              this.posted = true;
              this.spinner.hide();
              this.showSuccess();
              this.router.navigate(['authpage/loginpage']);
            }, 2000);
          }
        },

        (error: string) => {
          this.spinner.hide();
          this.errored = true;
          this.serviceErrors = error;
          this.showDanger();
        }
      );
  }
}
