import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    userForm: FormGroup;
    sideBarChanged = true;
    boxBalance: any;
    user = '/../../../assets/avatar3.jpeg';
    boxinError: any;
    savingsBalance: any;
    interestEarnings: any;
    agencyEarnings: any;
    userName: string;
    TxnsHistory: any;
    notRead = true;
    numberOfItems = 3;
    // TxnsHistory: TxnsHistory[];
    constructor(
      // private sharedService: TogglesidebarServiceService,
      // private boxtxns: EdadboxTransactionsService,
      // private authService: AuthServiceService,

    ) { }

    ngOnInit() {
      // this.getTxnHistoryBox();
      this.initializeBoxBalance();
      this.toggleSideBar();
    }

    toggleSideBar() {
      this.sideBarChanged = !this.sideBarChanged;
      // this.sharedService.emitChange(this.sideBarChanged);
    }


    createFormGroup() {
      return new FormGroup({

        search_value: new FormControl('', Validators.compose([Validators.required,
        // CustomValidatorInitialCompanySetup.patternValidator(/\d/, { hasNumber: true }),
        Validators.maxLength(12), Validators.maxLength(12), Validators.minLength(12)
        ]))
      });
    }

    revert() {
      this.userForm.reset();
    }

    get fval() { return this.userForm.controls; }


    readAlread() {
      this.notRead = true;
    }


    private initializeBoxBalance() {
      // this.boxtxns.mainBoxBalance(jwt_decode(this.authService.getJwtToken()).user_id).subscribe(
        // balance => this.boxBalance = balance,
        // error => this.boxinError = error);
    }
    // private getTxnHistoryBox() {
    //   // this.boxtxns.txnHistoryBox(jwt_decode(this.authService.getJwtToken()).user_id).subscribe(
    //     history =>
    //       // console.log(history),
    //     this.TxnsHistory = history,

    //     error => this.boxinError = error);
    // }





}
