import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { CustomValidatorInitialCompanySetup } from "src/app/shared/validators/custom-validator-initial-company-setup";

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-supplier-register",
  templateUrl: "./supplier-register.component.html",
  styleUrls: ["./supplier-register.component.scss"]
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

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  department: Department[] = [
    { value: "management", viewValue: "Management" },
    { value: "front-desk", viewValue: "Front Desk" },
    { value: "finance", viewValue: "Finance" },
    { value: "production", viewValue: "Production" },
    { value: "quality-assurance", viewValue: "Quality assurance" },
    { value: "sales-marketing", viewValue: "Sales & Marketing" },
    { value: "transport-logistics", viewValue: "Transport & Logistics" }
  ];

  /** Returns a FormArray with the name 'formArray'. */
  // get formArray() {
  //   return this.userForm.get("formArray") as FormArray;
  // }

  ngOnInit() {
    this.userForm = this._formBuilder.group(
      {
        user_name: [
          "",
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
        confirm_password: ["", Validators.required]
      },
      {
        validator: CustomValidatorInitialCompanySetup.passwordMatchValidator
      }
    );

  }

  // /* Called on each input in either password field */
  // onPasswordInput() {
  //   if (this.userForm.hasError("NoPasswordMatch")) {
  //      this.userForm.controls.confirm_password.setErrors([{ NoPasswordMatch: true }]);
  //    } else {
  //      this.userForm.controls.confirm_password.setErrors(null);
  //    }
  // }

  // revert() {
  //   this.userForm.reset();
  // }

  // checkError = (controlName: string, errorName: string) => {
  //   const control = this.userForm.get(controlName);
  //   return control ? control.hasError(errorName) : true;
  // };

  // onFileChange(event) {
  //   const reader = new FileReader();

  //   if (event.target.files && event.target.files.length) {
  //     const [photo] = event.target.files;
  //     reader.readAsDataURL(photo);

  //     reader.onload = () => {
  //       this.imageSrc = reader.result as string;

  //       this.userForm.patchValue({
  //         fileSource: reader.result
  //       });
  //     };
  //   }
  // }

  // togglePhotoPreview() {
  //   this.previewPhoto = !this.previewPhoto;
  // }

  onSubmit() {
    console.log(this.userForm.value);

    this.submitted = true;
    this.spinner.show();
    if (this.userForm.invalid === true) {
      return;
    } else {
      this.authService.registerUser(this.userForm).subscribe(
        (data: string) => {
          if (data === "Posted Successfully") {
            this.serviceErrors = "Registration was Successful";
            // this.userForm.reset();
            setTimeout(() => {
              this.posted = true;
              this.spinner.hide();
              this.router.navigate(["userDashboard/dashboard"]);
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
