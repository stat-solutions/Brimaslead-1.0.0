import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { AuthServiceService } from 'src/app/shared/services/auth-services/auth-service.service';
import { CustomValidatorInitialCompanySetup } from "src/app/shared/validators/custom-validator-initial-company-setup";

interface Department {
  value: string;
  viewValue: string;
}
interface LeaveType {
  value: string;
  viewValue: string;
}
interface SupervisorTitle {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-leave-management",
  templateUrl: "./leave-management.component.html",
  styleUrls: ["./leave-management.component.scss"]
})
export class LeaveManagementComponent implements OnInit {
  hide = true;
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  serviceErrors: any = {};
  value: string;
  mySubscription: any;
  personalFormGroup: FormGroup;
  leaveRequest = [];
  showLeaveDays = false;
  // total: number; taken: number; booked: number; remaining: number;

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  departments: Department[] = [
    { value: "management", viewValue: "Management" },
    { value: "frontDesk", viewValue: "Front Desk" },
    { value: "finance", viewValue: "Finance" },
    { value: "production", viewValue: "Production" },
    { value: "qualityAssurance", viewValue: "Quality assurance" },
    { value: "salesMarketing", viewValue: "Sales & Marketing" },
    { value: "transportLogistics", viewValue: "Transport & Logistics" }
  ];

  leaveTypes: LeaveType[] = [
    { value: "sickLeave", viewValue: "Sick leave" },
    { value: "annualLeave", viewValue: "Annual leave" },
    { value: "studyLeave", viewValue: "Study leave" },
    { value: "maternityLeave", viewValue: "Maternity leave" }
  ];

  supervisorTitles: SupervisorTitle[] = [
    { value: "managingDirector", viewValue: "Managing Director" },
    { value: "productionManager", viewValue: "Production Manager" },
    { value: "qaManager", viewValue: "QA Manager" },
    { value: "financeManager", viewValue: "Finance Manager" },
    { value: "salesMktingManager", viewValue: "Sales/Marketing Manager" },
    { value: "logisticsManager", viewValue: "Logistics Manager" },
    { value: "hrManager", viewValue: "HR Manager" }
  ];
  annualLeaveDays = {
    totalDays: 28,
    takenDays: 7,
    bookedDays: null,
    remainingDays: null
  };

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
            hasCharacters: true
          })
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
      phoneNumber2: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { hasNumber: true }
          )
        ])
      ],
      supervisor: ["", Validators.required],
      supervisorTitle: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      leaveType: ["", Validators.required],
      totalDays: ["", Validators.required],
      takenDays: ["", Validators.required],
      bookedDays: ["", Validators.required],
      remainingDays: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.email],
      employeeId: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^(([a-zA-Z])([a-zA-Z])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { employeeIdCheck: true }
          )
        ])
      ],
      jobTitle: ["", Validators.required],
      department: ["", Validators.required]
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
  form1() {
    console.log(this.personalFormGroup.value);
  }
  //method for filtering rfqs
  filterLeave(pick: any) {
    if (pick === "annualLeave") {
      this.showLeaveDays = true;
    } else {
      this.showLeaveDays = false;
    }
  }

  //method for posting
  onSubmit() {
    // this.submitted = true;
    // this.spinner.show();
    // if (this.personalFormGroup.invalid === true) {
    //   return;
    // } else {
    //   this.authService.registerUser(this.personalFormGroup).subscribe(
    //     (data: string) => {
    //       if (data === "Posted Successfully") {
    //         this.serviceErrors = "Submission was Successful";
    //         // this.userForm.reset();
    //         setTimeout(() => {
    //           this.posted = true;
    //           this.spinner.hide();
    //           this.router.navigate(["employee-service/leavemanagement"]);
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
