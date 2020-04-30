import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isHovering: boolean;
  files: File[] = [];
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
  loginFormGroup: FormGroup;
  personalFormGroup: FormGroup;
  employeeFormGroup: FormGroup;

  constructor(
    private authService: AuthServiceService,
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
    this.loginFormGroup = this._formBuilder.group(
      {
        user_name: [
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
        ],
        phone_number: [
          '',
          Validators.compose([
            Validators.required,
            CustomValidatorInitialCompanySetup.patternValidator(
              /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
              { hasNumber: true }
            )
          ])
        ],
        password: [
          '',
          Validators.compose([
            // 1. Password Field is Required

            Validators.required,

            // 2. check whether the entered password has a number
            // CustomValidatorInitialCompanySetup.patternValidator(/^(([1-9])([1-9])([1-9])([0-9]))$/, { hasNumber: true }),
            // 6. Has a minimum length of 8 characters
            Validators.minLength(8),
            // Validators.maxLength(4),
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
        confirm_password: ['', Validators.required]
      },
      {
        validator: CustomValidatorInitialCompanySetup.passwordMatchValidator
      }
    );

    this.personalFormGroup = this._formBuilder.group({
      national_id: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14)
          // ,
          // CustomValidatorInitialCompanySetup.patternValidator(
          //   /^(([a-zA-Z])([a-zA-Z])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([a-zA-Z])([a-zA-Z])([a-zA-Z])([a-zA-Z])([a-zA-Z]))$/,
          //   { nationalIdCheck: true }
          // )

        ])
      ],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.email],
      photo: ['', Validators.required],
      fileSource: ['', [Validators.required]]
    });

    this.employeeFormGroup = this._formBuilder.group({
      employee_id: [
        '',
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([a-zA-Z])([a-zA-Z])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { employeeIdCheck: true }
          )
        ])
      ],
      job_title: ['', Validators.required],
      department: ['', Validators.required],
      commence_date: ['', Validators.required]
    });
  }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }


  /* Called on each input in either password field */
  // onPasswordInput() {
  //   if (this.userForm.hasError("NoPasswordMatch")) {
  //     this.userForm.controls.confirm_password.setErrors([{ NoPasswordMatch: true }]);
  //   } else {
  //     this.userForm.controls.confirm_password.setErrors(null);
  //   }
  // }

  // revert() {
  //   this.userForm.reset();
  // }

  // checkError = (controlName: string, errorName: string) => {
  //   const control = this.userForm.get(controlName);
  //   return control ? control.hasError(errorName) : true;
  // };
 //24691119
  

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  form1() {
    console.log(this.loginFormGroup.value);
  }
  form2() {
    console.log(this.personalFormGroup.value);
  }
  form3() {
    console.log(this.employeeFormGroup.value);
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    if (this.userForm.invalid === true) {
      return;
    } else {
      this.authService.registerUser(this.userForm).subscribe(
        (data: string) => {
          if (data === 'Posted Successfully') {
            this.serviceErrors = 'Registration was Successful';
            // this.userForm.reset();
            setTimeout(() => {
              this.posted = true;
              this.spinner.hide();
              this.router.navigate(['userDashboard/dashboard']);
            }, 2000);
          }
        },

        (error: string) => {
          this.spinner.hide();
          this.errored = true;
          this.serviceErrors = error;
        }
      );
    }
  }
}
