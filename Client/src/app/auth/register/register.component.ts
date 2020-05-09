import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-services/auth-service.service';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { ToastrService } from 'ngx-toastr';
import { AuthUser } from 'src/app/shared/models/user-profile/auth-user';


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
  file: any;
  files: File[] = [];
 authData: AuthUser;
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
  appData: any;

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService
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
    this.loginFormGroup = this.createLoginFormControls();
    this.personalFormGroup  = this.createPersonalFormControls();
    this.employeeFormGroup = this.createEmployeeFormControls();
  }


  createLoginFormControls() {
  return  this._formBuilder.group(
      {
        userName: [
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
        phoneNumber: [
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


            Validators.required,

            Validators.minLength(8),

            CustomValidatorInitialCompanySetup.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),

            CustomValidatorInitialCompanySetup.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),

            CustomValidatorInitialCompanySetup.patternValidator(
              /[!@#$%^&*_+-=;':"|,.<>/?]/,
              { hasSpecialCharacters: true }
            )
          ])
        ],
        confirmPassword: ['', Validators.required]

      },
      {
        validator: CustomValidatorInitialCompanySetup.passwordMatchValidator
      }
    );
  }
    createPersonalFormControls() {
    return this._formBuilder.group(
      {
      nationalId: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14)

        ])
      ],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.email],
      photo: ['', Validators.required],


    });
    }
    // fileSource: ['', [Validators.required]]

    // CustomValidatorInitialCompanySetup.patternValidator(
    //   /^(([a-zA-Z])([a-zA-Z])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
    //   { employeeIdCheck: true }
    // )

    createEmployeeFormControls() {
  return this._formBuilder.group({
      employeeId: [
        '',
        Validators.compose([
          Validators.required,

        ])
      ],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      commenceDate: ['', Validators.required]
    });
  }

  onFileChange(event: boolean) {
    this.isHovering = event;
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
  //     this.userForm.controls.confirmPassword.setErrors([{ NoPasswordMatch: true }]);
  //   } else {
  //     this.userForm.controls.confirmPassword.setErrors(null);
  //   }
  // }

  // revert() {
  //   this.userForm.reset();
  // }

  // checkError = (controlName: string, errorName: string) => {
  //   const control = this.userForm.get(controlName);
  //   return control ? control.hasError(errorName) : true;
  // };
 // 24691119


  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  // form1() {
  //   console.log(this.loginFormGroup.value);
  // }
  form2() {
    console.log(this.personalFormGroup.value);
  }
  // form3() {
  //   console.log(this.employeeFormGroup.value);
  // }
  onFileSelected(event) {

    this.file = event.target.files[0];
    console.log( this.file);
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
    this.appData = {...this.loginFormGroup.value, ...this.personalFormGroup.value, ...this.employeeFormGroup.value, ...{photo: this.file}};

    this.authData = {email: this.appData.email, password: this.appData.password};
    this.submitted = true;
   
    this.authService.registerEmployee(this.authData, this.appData).subscribe(
        (data: string) => {
          console.log(data);
          if (data === 'User created successfully') {
            this.serviceErrors = 'Registration was Successful';

            setTimeout(() => {
              this.posted = true;
              this.spinner.hide();
              this.showSuccess();
              // this.router.navigate(['userDashboard/dashboard']);
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

    // this.spinner.hide();
    // this.errored = true;
    // this.serviceErrors = 'Errored';




  }

