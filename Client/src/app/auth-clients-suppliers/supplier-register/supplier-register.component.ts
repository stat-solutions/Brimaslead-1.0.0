import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-services/auth-service.service';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { OtherBackendApiService } from 'src/app/shared/services/auth-services/other-backend-api.service';
import { AuthUser } from 'src/app/shared/models/user-profile/auth-user';
import { ToastrService } from 'ngx-toastr';

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-supplier-register',
  templateUrl: './supplier-register.component.html',
  styleUrls: ['./supplier-register.component.scss']
})
export class SupplierRegisterComponent implements OnInit {
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
  previewPhoto = false;
  authData: AuthUser;
  appData: any;
  constructor(
    private authService: AuthServiceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  department: Department[] = [
    { value: 'management', viewValue: 'Management' },
    { value: 'front-desk', viewValue: 'Front Desk' },
    { value: 'finance', viewValue: 'Finance' },
    { value: 'production', viewValue: 'Production' },
    { value: 'quality-assurance', viewValue: 'Quality assurance' },
    { value: 'sales-marketing', viewValue: 'Sales & Marketing' },
    { value: 'transport-logistics', viewValue: 'Transport & Logistics' }
  ];

  /** Returns a FormArray with the name 'formArray'. */
  // get formArray() {
  //   return this.userForm.get("formArray") as FormArray;
  // }

  ngOnInit() {
    this.userForm = new FormGroup(
      {
        user_name: this._formBuilder.control(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(128),
            // 4. check whether the entered password has a lower-case letter
            CustomValidatorInitialCompanySetup.patternValidator(/[a-zA-Z]/, {
              hasCharacters: true
            })
          ])
        ),
        phone_number: this._formBuilder.control(
          '',
          Validators.compose([
            Validators.required,
            CustomValidatorInitialCompanySetup.patternValidator(
              /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
              { hasNumber: true }
            )
          ])

          ),
        email: this._formBuilder.control('', Validators.email),
        password: this._formBuilder.control(
          '',
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
        ),
        confirmPassword: this._formBuilder.control('', Validators.required)
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
    // console.log(this.userForm.value);

    this.submitted = true;
    this.spinner.show();
    if (this.userForm.invalid === true) {
      return;
    } else {

      this.appData = {...this.userForm.value};
      this.authData = {email: this.appData.email, password: this.appData.password};
      this.submitted = true;
      delete this.appData.password;
      delete this.appData.confirmPassword;
      // console.log(this.authData);

      this.authService.registerSupplier(this.authData, this.appData).subscribe(


        (data: string) => {
          if (data === 'Posted Successfully') {
            this.serviceErrors = 'Registration was Successful';
            // this.userForm.reset();
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
}
