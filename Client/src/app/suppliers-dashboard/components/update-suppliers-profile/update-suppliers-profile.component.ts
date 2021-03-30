import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/shared/services/auth-services/auth-service.service";
import { CustomValidatorInitialCompanySetup } from "src/app/shared/validators/custom-validator-initial-company-setup";

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-update-suppliers-profile",
  templateUrl: "./update-suppliers-profile.component.html",
  styleUrls: ["./update-suppliers-profile.component.scss"],
})
export class UpdateSuppliersProfileComponent implements OnInit {
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
  personalFormGroup: FormGroup;
  employeeFormGroup: FormGroup;

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
    { value: "transport-logistics", viewValue: "Transport & Logistics" },
  ];

  /** Returns a FormArray with the name 'formArray'. */
  // get formArray() {
  //   return this.userForm.get("formArray") as FormArray;
  // }

  ngOnInit() {
    this.personalFormGroup = this._formBuilder.group({
      userName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(128),
          // 4. check whether the entered password has a lower-case letter
          CustomValidatorInitialCompanySetup.patternValidator(/[a-zA-Z]/, {
            hasCharacters: true,
          }),
        ]),
      ],
      phoneNumber: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { hasNumber: true }
          ),
        ]),
      ],
      kinRelation: ["", Validators.required],
      kinName: ["", Validators.required],
      dateOfBirth2: ["", Validators.required],
      emergencyName: ["", Validators.required],
      emergencyRelation: ["", Validators.required],
      emergencyNumber: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { hasNumber: true }
          ),
        ]),
      ],
      bankName: ["", Validators.required],
      accountName: ["", Validators.required],
      accountNumber: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { hasNumber: true }
          ),
        ]),
      ],
      national_id: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([a-zA-Z])([a-zA-Z])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([a-zA-Z])([a-zA-Z])([a-zA-Z])([a-zA-Z])([a-zA-Z]))$/,
            { nationalIdCheck: true }
          ),
        ]),
      ],
      date_of_birth: ["", Validators.required],
      gender: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.email],
      photo: ["", Validators.required],
      fileSource: ["", [Validators.required]],
    });

    this.employeeFormGroup = this._formBuilder.group({
      employeeId: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([a-zA-Z])([a-zA-Z])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { employeeIdCheck: true }
          ),
        ]),
      ],
      jobTitle: ["", Validators.required],
      salaryScale: ["", Validators.required],
      supervisor: ["", Validators.required],
      department: ["", Validators.required],
      commenceDate: ["", Validators.required],
    });
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

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [photo] = event.target.files;
      reader.readAsDataURL(photo);

      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(this.imageSrc);

        this.personalFormGroup.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  form1() {
    console.log(this.personalFormGroup.value);
  }
  form2() {
    console.log(this.employeeFormGroup.value);
  }

  onSubmit() {
    // this.submitted = true;
    // this.spinner.show();
    // if (this.userForm.invalid === true) {
    //   return;
    // } else {
    //   this.authService.registerUser(this.userForm).subscribe(
    //     (data: string) => {
    //       if (data === "Posted Successfully") {
    //         this.serviceErrors = "Registration was Successful";
    //         // this.userForm.reset();
    //         setTimeout(() => {
    //           this.posted = true;
    //           this.spinner.hide();
    //           this.router.navigate(["userDashboard/dashboard"]);
    //         }, 2000);
    //       }
    //     },
    //     (error: string) => {
    //       this.spinner.hide();
    //       this.errored = true;
    //       this.serviceErrors = error;
    //     }
    //   );
    // }
  }
}
