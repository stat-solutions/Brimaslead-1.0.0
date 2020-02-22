import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CustomValidatorInitialCompanySetup } from 'src/app/validators/custom-validator-initial-company-setup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  userForm: FormGroup;
  serviceErrors: any = {};
  value: string;
  mySubscription: any;
  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }


  ngOnInit() {

    this.userForm = this.createFormGroup();


  }


  createFormGroup() {

    return new FormGroup({
      main_contact_number: new FormControl('', Validators.compose([Validators.required,
      CustomValidatorInitialCompanySetup.
        patternValidator(
          /^(([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/, { hasNumber: true })
      ])),

      password: new FormControl('', Validators.compose(
        [

          // 1. Password Field is Required

          Validators.required,

          // 2. check whether the entered password has a number
          CustomValidatorInitialCompanySetup.patternValidator(/^(([1-9])([1-9])([1-9])([0-9]))$/, { hasNumber: true }),
          // 3. check whether the entered password has upper case letter
          // CustomValidatorInitialCompanySetup.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // 4. check whether the entered password has a lower-case letter
          // CustomValidatorInitialCompanySetup.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // 5. check whether the entered password has a special character
          // CustomValidatorInitialCompanySetup.
          //   patternValidator(/[!@#$%^&*_+-=;':"|,.<>/?/<mailto:!@#$%^&*_+-=;':"|,.<>/?]/, { hasSpecialCharacters: true }),

          // 6. Has a minimum length of 8 characters
          Validators.minLength(4),
          Validators.maxLength(4)])),


      first_name: new FormControl('', Validators.compose([Validators.required])),
      middle_name: new FormControl('', Validators.compose([Validators.required])),
      last_name: new FormControl('', Validators.compose([Validators.required])),
      sex: new FormControl('', Validators.compose([Validators.required])),
      date_of_birth: new FormControl('', Validators.compose([Validators.required])),
      kin_first_name: new FormControl('', Validators.compose([Validators.required])),
      kin_middle_name: new FormControl('', Validators.compose([Validators.required])),
      kin_last_name: new FormControl('', Validators.compose([Validators.required])),
      relation: new FormControl('', Validators.compose([Validators.required])),


    });
  }

  revert() {
    this.userForm.reset();
  }

  get fval() { return this.userForm.controls; }





  onSubmit() {

    this.submitted = true;
    this.spinner.show();
    if (this.userForm.invalid === true) {
      return;
    } else {

      this.authService.registerUser(this.userForm).subscribe(


        (data: string) => {
          if (data === 'Posted Successfully') {







            this.serviceErrors = 'Registration was Successfull';
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
