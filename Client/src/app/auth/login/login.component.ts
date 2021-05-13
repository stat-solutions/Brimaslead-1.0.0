import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServiceService } from 'src/app/shared/services/auth-services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { AlertService } from "ngx-alerts";
import { DbServiceService } from 'src/app/shared/services/firestore-db/DbServiceService';
import { UserData } from 'src/app/shared/models/user-profile/user-data';
import { switchMap, tap } from 'rxjs/operators';
import { AuthUser } from 'src/app/shared/models/user-profile/auth-user';
import { AngularFireAuth } from '@angular/fire/auth';
import { RfqSerialNumberService } from 'src/app/shared/services/front-desk-services/rfq-serial-number.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrMessagesService } from 'src/app/shared/services/other-services/toastr-messages.service';

export interface AccessRights {
  accessCategory: string;
  accessType: string;
  createdAt: firebase.firestore.FieldValue;
  updatedAt: firebase.firestore.FieldValue;
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  userForm: FormGroup;
  loginStatus: string;
  value: string;
  fieldType: boolean;
  mySubscription: any;
  serviceErrors: any = {};
  empAccess: string;
  customerAccess: string;

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private aa: RfqSerialNumberService,
    private jwtHelper: JwtHelperService,
      private popMsg:ToastrMessagesService
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      userEmail: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          // CustomValidatorInitialCompanySetup.patternValidator(/\d/, {
          //   hasNumber: true
          // }),
          // Validators.maxLength(10),
          Validators.email,
        ])
      ),
      userPassword: new FormControl(
        "",
        Validators.compose([
          // 1. Password Field is Required

          Validators.required,
        ])
      ),
    });
  }
  viewIt() {
    this.aa.rfqSerialNumber().subscribe((x) => console.log(x));
  }
  revert() {
    this.userForm.reset();
  }

  get fval() {
    return this.userForm.controls;
  }

  // toggle visibility of password field
  toggleFieldType(): any {
    this.fieldType = !this.fieldType;
  }

  showSuccess() {
    this.toastr.success("Over to Brimaslead Dashboard", this.serviceErrors, {
      timeOut: 6000,
      positionClass: "toast-top-right",
    });
  }

  showDanger() {
    this.toastr.error(this.serviceErrors, "Login Failed!", {
      timeOut: 6000,
      positionClass: "toast-bottom-left",
    });
  }
  
//  userId   | userName               | userPhone1 | userEmail         | userStatus | userEmailVerify | roleId

login(): any {
 
    this.submitted = true;
    if (this.userForm.invalid === true) {
      return;
    } else {
      //  this.popMsg.logInError(5,"");
      this.spinner.show();
      this.authService.loginEmployee(
        {
          userEmail: this.fval.userEmail.value,
          userPassword: this.fval.userPassword.value
        }
      ).subscribe(
        
        (success: boolean) => {
        if (success) {
          this.posted = true;
          if (this.jwtHelper.decodeToken(this.authService.getJwtToken()).userStatus === 2) {

          if (this.jwtHelper.decodeToken(this.authService.getJwtToken()).userEmailVerify === 2) {

            switch (this.jwtHelper.decodeToken(this.authService.getJwtToken()).roleId){

              case 99:
                 this.popMsg.signIn(99);
                this.spinner.hide();
                break;


              case 100:
               
                  this.popMsg.signIn(100);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/admindashboard']);
                }, 1000);
                break;
                
              case 200:
                     this.popMsg.signIn(200);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/frontdeskdashboard']);
                }, 1000);
                break;
                
              case 300:
                     this.popMsg.signIn(300);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/administration']);
                }, 1000);
                break;
                
              case 400:
                this.popMsg.signIn(400);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/finance']);
                }, 1000);
                break;
                
              case 500:
                   this.popMsg.signIn(500);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/designcreative']);
                }, 1000);
                break;
                
              case 600:
                  this.popMsg.signIn(600);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/designcreative']);
                }, 1000);
                break;
                
              case 700:
                    this.popMsg.signIn(700);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/production']);
                }, 1000);
                break;
                
              case 800:
                this.popMsg.signIn(800);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/salesmarket']);
                }, 1000);
                break;
                
              case 900:
              this.popMsg.signIn(900);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/translogistics']);
                }, 1000);
                break;
                
              case 1000:
                this.popMsg.signIn(1000);
                this.spinner.hide();
                setTimeout(() => {
                  this.spinner.hide();
                  this.router.navigate(['/management']);
                }, 1000);
                break;
              
            }
            
            
          }else if (this.jwtHelper.decodeToken(this.authService.getJwtToken()).userEmailVerify === 1) {
    
        this.popMsg.logInError(5,"");
            this.spinner.hide();
            return;
          }

         } else if (this.jwtHelper.decodeToken(this.authService.getJwtToken()).userStatus === 3) {
              this.popMsg.logInError(3,"");
            this.spinner.hide();
            return;
          }
          else if (this.jwtHelper.decodeToken(this.authService.getJwtToken()).userStatus === 1) {
           this.popMsg.logInError(1,"");
            this.spinner.hide();
            return;
          }
          
        } else {
          this.spinner.hide();
          this.errored = true;
        }
      },

      (error: any) => {
        
        this.spinner.hide();
        // this.errored = true;
         this.popMsg.logInError(6,error);

      });
    }
  }
  // login() {
  //   this.submitted = true;

  //   this.spinner.show();

  //   if (this.userForm.invalid === true) {
  //     return;
  //   } else {
      // if(this.afa.auth.currentUser==null){
      // console.log(this.afa.auth.currentUser.isAnonymous);
      // this.authService.loginEmployee(this.userForm.value).subscribe(
      //   (user) => {
      //     if (user) {
      //       if (user.emailVerified) {
      //         console.log(user);
      //         this.db
      //           .doc$<AuthUser>(`commonUser/${user.uid}`)
      //           .pipe(
      //             tap((x) => console.log(x)),
      //             switchMap((authUsers) =>
      //               this.db.doc$<any>(authUsers.profileColRef)
      //             )
      //           )
      //           .pipe(
      //             tap((x) => console.log(x)),
      //             tap((x) => (this.empAccess = x.approvalStatus)),

      //             switchMap((theEmpCusData) =>
      //               this.db.doc$<AccessRights>(theEmpCusData.accessColRef)
      //             )
      //           )
      //           .subscribe((accessRights) => {
      //             if (this.empAccess === "APPROVED") {
      //               if (accessRights.accessType === "employeeAccess") {
      //                 this.db
      //                   .doc$<UserData>(`employeeProfile/${user.uid}`)
      //                   .subscribe((accessRights) => {
      //                     this.serviceErrors = `Hello ${user.displayName}, You signed in successfully`;
      //                     this.posted = true;
      //                     this.spinner.hide();
      //                     this.showSuccess();

      //                     switch (accessRights.department) {
      //                       case "Management":
      //                         setTimeout(() => {
      //                           this.router.navigate(["managementdashboard"]);
      //                         }, 2000);
      //                         break;
      //                       case "Production":
      //                         setTimeout(() => {
      //                           this.router.navigate(["dashboardproduction"]);
      //                         }, 2000);
      //                         break;

      //                       case "Finance":
      //                         setTimeout(() => {
      //                           this.router.navigate(["dashboardfinance"]);
      //                         }, 2000);
      //                         break;

      //                       case "Front Desk":
      //                         setTimeout(() => {
      //                           this.router.navigate(["frontdeskdashboard"]);
      //                         }, 2000);

      //                         break;

      //                       case "Sales & Marketing":
      //                         setTimeout(() => {
      //                           this.router.navigate(["dashboardsalesmarket"]);
      //                         }, 2000);
      //                         break;

      //                       case "Transport & Logistics":
      //                         setTimeout(() => {
      //                           this.router.navigate([
      //                             "dashboardtranslogistics",
      //                           ]);
      //                         }, 2000);
      //                         break;

      //                       case "Quality assurance":
      //                         setTimeout(() => {
      //                           this.router.navigate(["dashboardqa"]);
      //                         }, 2000);
      //                         break;
      //                       case "System Administration":
      //                         setTimeout(() => {
      //                           this.router.navigate(["dashboardadmin"]);
      //                         }, 2000);
      //                         break;

      //                       default:
      //                     }
      //                   });
      //               } else if (accessRights.accessType === "customerAccess") {
      //               } else if (accessRights.accessType === "supplierAccess") {
      //               }
      //             } else if (this.empAccess === "NOTAPPROVED") {
      //               this.serviceErrors =
      //                 "Your account is not Approved!! Please contact Brimas Media Ltd Management for approval then you can proceed to login";
      //               setTimeout(() => {
      //                 this.posted = true;
      //                 this.spinner.hide();
      //                 this.showDanger();
                      // this.router.navigate(['userDashboard/dashboard']);
            //         }, 2000);
            //       }
            //     });
            // } else {
            //   this.serviceErrors =
            //     "Email not verified!! Please first login into your email address and verify the email by click on the link";

            //   setTimeout(() => {
            //     this.posted = true;
            //     this.spinner.hide();
            //     this.showDanger();
                // this.router.navigate(['userDashboard/dashboard']);
      //         }, 2000);
      //       }
      //     }
      //   },
      //   (error: string) => {
      //     this.spinner.hide();
      //     this.errored = true;
      //     this.serviceErrors = error;
      //     this.showDanger();
      //   }
      // );
      // }else {
      //   // console.log(this.afa.auth.currentUser.isAnonymous);
      //   this.spinner.hide();
      //   this.errored = true;
      //   this.serviceErrors = 'Already logged on this device ';
      //   this.showDanger();
      //   location.reload;
      // }
  //   }
  // }
}

// tap(x=>console.log(x)),
// switchMap(authUsers=>this.db.doc$<UserData>(authUsers.profileRef))
//  ).pipe(
