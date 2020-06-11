import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServiceService } from 'src/app/shared/services/auth-services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DbServiceService } from 'src/app/shared/services/firestore-db/DbServiceService';
import { UserData } from 'src/app/shared/models/user-profile/user-data';
import { switchMap, tap } from 'rxjs/operators';
import { AuthUser } from 'src/app/shared/models/user-profile/auth-user';
import { AngularFireAuth } from '@angular/fire/auth';
import { RfqSerialNumberService } from 'src/app/shared/services/front-desk-services/rfq-serial-number.service';

export interface AccessRights {
  accessCategory: string;
  accessType: string;
  createdAt: firebase.firestore.FieldValue;
  updatedAt: firebase.firestore.FieldValue;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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

  empAccess: string;
  customerAccess: string;

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private db: DbServiceService,
    private afa: AngularFireAuth,
    private aa: RfqSerialNumberService
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          // CustomValidatorInitialCompanySetup.patternValidator(/\d/, {
          //   hasNumber: true
          // }),
          // Validators.maxLength(10),
          Validators.email,
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          // 1. Password Field is Required

          Validators.required,
        ])
      ),
    });
  }
viewIt() {

this.aa.rfqSerialNumber().subscribe(x => console.log(x));
}
  revert() {
    this.userForm.reset();
  }

  get fval() {
    return this.userForm.controls;
  }

  showSuccess() {
    this.toastr.success('Over to Brimaslead Dashboard', this.serviceErrors, {
      timeOut: 6000,
      positionClass: 'toast-top-right',
    });
  }
  showDanger() {
    this.toastr.warning(this.serviceErrors, 'Login Failed!!', {
      timeOut: 6000,
      positionClass: 'toast-bottom-left',
    });
  }

  login() {
    this.submitted = true;

    this.spinner.show();

    if (this.userForm.invalid === true) {
      return;
    } else {


    // if(this.afa.auth.currentUser==null){
// console.log(this.afa.auth.currentUser.isAnonymous);
      this.authService.loginEmployee(this.userForm.value).subscribe(
        (user) => {
          if (user) {

            if (user.emailVerified) {
        console.log(user);
        this.db
                .doc$<AuthUser>(`commonUser/${user.uid}`)
                .pipe(
                  tap(x => console.log(x)),
                  switchMap((authUsers) =>
                    this.db.doc$<any>(authUsers.profileColRef)
                  )

                )
                .pipe(
                  tap(x => console.log(x)), tap(x => this.empAccess = x.approvalStatus),

                  switchMap((theEmpCusData) =>
                    this.db.doc$<AccessRights>(theEmpCusData.accessColRef)
                  )
                )
                .subscribe((accessRights) => {

                if (this.empAccess === 'APPROVED') {

                  if (accessRights.accessType === 'employeeAccess') {
                    this.db
                      .doc$<UserData>(`employeeProfile/${user.uid}`)
                      .subscribe((accessRights) => {
                        this.serviceErrors = `Hello ${user.displayName}, You signed in successfully!!!`;
                        this.posted = true;
                        this.spinner.hide();
                        this.showSuccess();

                        switch (accessRights.department) {
                          case 'Management':
                            setTimeout(() => {
                              this.router.navigate(['managementdashboard']);
                            }, 2000);
                            break;
                          case 'Production':
                            setTimeout(() => {
                              this.router.navigate(['dashboardproduction']);
                            }, 2000);
                            break;

                          case 'Finance':
                            setTimeout(() => {
                              this.router.navigate(['dashboardfinance']);
                            }, 2000);
                            break;

                          case 'Front Desk':
                            setTimeout(() => {
                              this.router.navigate(['frontdeskdashboard']);
                            }, 2000);

                            break;

                          case 'Sales & Marketing':
                            setTimeout(() => {
                              this.router.navigate(['dashboardsalesmarket']);
                            }, 2000);
                            break;

                          case 'Transport & Logistics':
                            setTimeout(() => {
                              this.router.navigate(['dashboardtranslogistics']);
                            }, 2000);
                            break;

                          case 'Quality assurance':
                            setTimeout(() => {
                              this.router.navigate(['dashboardqa']);
                            }, 2000);
                            break;
                            case 'System Administration':
                              setTimeout(() => {
                                this.router.navigate(['dashboardadmin']);
                              }, 2000);
                              break;

                          default:
                        }
                      });
                  } else if (accessRights.accessType === 'customerAccess') {
                  } else if (accessRights.accessType === 'supplierAccess') {
                  }} else if (this.empAccess === 'NOTAPPROVED') {

                    this.serviceErrors =
                    'Your account is not Approved!! Please contact Brimas Media Ltd Management for approval then you can proceed to login';
                    setTimeout(() => {
                    this.posted = true;
                    this.spinner.hide();
                    this.showDanger();
                    // this.router.navigate(['userDashboard/dashboard']);
                  }, 2000);
                  }
                });
            } else {
              this.serviceErrors =
                'Email not verified!! Please first login into your email address and verify the email by click on the link';

              setTimeout(() => {
                this.posted = true;
                this.spinner.hide();
                this.showDanger();
                // this.router.navigate(['userDashboard/dashboard']);
              }, 2000);
            }
          }
        },
        (error: string) => {
          this.spinner.hide();
          this.errored = true;
          this.serviceErrors = error;
          this.showDanger();
        }
      );
    // }else {
    //   // console.log(this.afa.auth.currentUser.isAnonymous);
    //   this.spinner.hide();
    //   this.errored = true;
    //   this.serviceErrors = 'Already logged on this device ';
    //   this.showDanger();
    //   location.reload;
    // }
    }
  }
}

// tap(x=>console.log(x)),
// switchMap(authUsers=>this.db.doc$<UserData>(authUsers.profileRef))
//  ).pipe(
