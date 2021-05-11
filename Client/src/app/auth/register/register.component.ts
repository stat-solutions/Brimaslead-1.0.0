import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-services/auth-service.service';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { ToastrService } from 'ngx-toastr';
import { AuthUser } from 'src/app/shared/models/user-profile/auth-user';
import { throwIfEmpty } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
export interface Department {
  roleName:string,
  roleId:number
  };

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   roleId:any;
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
  department$:Observable<Department[]>;
   departments:Department[];
  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}


  // = [
  //   { value: 'management', viewValue: 'Management' },
  //   { value: 'front-desk', viewValue: 'Front Desk' },
  //   { value: 'finance', viewValue: 'Finance' },
  //   { value: 'production', viewValue: 'Production' },
  //   { value: 'quality-assurance', viewValue: 'Quality assurance' },
  //   { value: 'sales-marketing', viewValue: 'Sales & Marketing' },
  //   { value: 'transport-logistics', viewValue: 'Transport & Logistics' }
  // ];

  /** Returns a FormArray with the name 'formArray'. */
  // get formArray() {
  //   return this.userForm.get("formArray") as FormArray;
  // }

  ngOnInit() {
    this.loginFormGroup = this.createLoginFormControls();
    this.personalFormGroup  = this.createPersonalFormControls();
    this.employeeFormGroup = this.createEmployeeFormControls();
    this.getDepartments();
    this.createDepartments();
  }

 getDepartments(){
 this.department$= this.authService.getAllDepartments();
}

createDepartments(){

   this.department$.subscribe(x=>{
     this.departments=x;
    //  console.log(this.departments);
   });
}
  createLoginFormControls() {

  return  this.fb.group(
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
        userPhone1: [
          '',
          Validators.compose([
            Validators.required,
            CustomValidatorInitialCompanySetup.patternValidator(
              /^(([0])([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
              { hasNumber: true }
            )
          ])
        ],
        userPassword: [
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
    return this.fb.group(
      {
      userIdNumber: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14)

        ])
      ],
      userDateOfBirth: ['', Validators.required],
      userGender: ['', Validators.required],
      userHomeAreaDetails: ['', Validators.required],
      userEmail: ['', Validators.email],



    });
    }


    createEmployeeFormControls() {
  return this.fb.group({
      employmentNumber: [
        '',
        Validators.compose([
          Validators.required,

        ])
      ],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      userRecruitmentDate: ['', Validators.required]
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


updateRoleId(selectedChange: any) {
 
 this.roleId= this.departments.find(x=>{

return x.roleName===selectedChange.value

 }).roleId; 
// console.log( this.roleId);
}

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }


  onFileSelected(event) {

    this.file = event.target.files[0];
    // console.log( this.file);
  }

  showSuccess() {

    this.toastr.success('Please first verify your email and then proceed to login', this.serviceErrors,
                         {timeOut: 6000, positionClass: 'toast-top-right'});
  }
  showDanger() {

    this.toastr.error(this.serviceErrors, 'Registration Failed!!', {timeOut: 6000, positionClass: 'toast-bottom-left'});
  }

  onSubmit() {

    this.spinner.show();

    this.appData = {...this.loginFormGroup.value, ...this.personalFormGroup.value, ...this.employeeFormGroup.value};
  //  console.log(  this.appData );
    // this.authData = {email: this.appData.email, password: this.appData.password};

    
    this.submitted = true;
    // delete this.appData.password;
    delete this.appData.confirmPassword;
      // console.log(jwt_decode(this.authService.getJwtToken()).user_id);
    this.appData={...this.appData,
      userDateOfBirth: `${this.appData.userDateOfBirth.getFullYear()}-${this.appData.userDateOfBirth.getMonth() + 1}-${this.appData.userDateOfBirth.getDate()}`,
      userRecruitmentDate:`${this.appData.userRecruitmentDate.getFullYear()}-${this.appData.userRecruitmentDate.getMonth() + 1}-${this.appData.userRecruitmentDate.getDate()}`,roleId:this.roleId
    };
    // console.table(this.appData);
    this.authService.registerEmployee(this.appData).subscribe(
        (data: boolean) => {

          if (data) {
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

  setTimeout(() => {
                this.spinner.hide();
          this.errored = true;
          this.serviceErrors = error;
          this.showDanger();
              this.router.navigate(['authpage/loginpage']);
            }, 2000);

        
        }
      );
    }






  }
