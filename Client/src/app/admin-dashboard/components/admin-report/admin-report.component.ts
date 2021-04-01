import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
// import { CustomValidator } from "src/app/validators/custom-validator";
// import { ReportService } from "src/app/shared/services/report.service";
// import { ExportService } from "src/app/shared/services/export.service";
// import { BranchesService } from "src/app/shared/services/branches.service";
// import { UsersService } from "src/app/shared/services/users.service";

@Component({
  selector: "app-admin-report",
  templateUrl: "./admin-report.component.html",
  styleUrls: ["./admin-report.component.scss"],
})
export class AdminReportComponent implements OnInit {
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  userForm: FormGroup;
  serviceErrors: any = {};
  value: string;
  fieldType: boolean;
  mySubscription: any;
  myDateValue: Date;
  positionValue: string;
  loanTable = [];
  filteredLoans = [];
  specificLoanTable = [];
  searchCustomer: string;
  totalItems: number;
  id: string;
  currentPage = 1;
  loading: boolean;
  pageSize = 10;
  age: number;
  key = "Id";
  csvTable = [];
  type: any;
  reverse = false;
  reportTypes = [
    { id: 1, reportType: "Comprehensive report" },
    { id: 2, reportType: "Running Loans" },
    { id: 3, reportType: "Disbursed Loans" },
    { id: 4, reportType: "Rejected Loans" },
    { id: 5, reportType: "Approved Loans" },
    { id: 6, reportType: "Forwarded Loans" },
    { id: 7, reportType: "Deferred Loans" },
    { id: 8, reportType: "Received Loans" },
    { id: 9, reportType: "Running By Branch" },
    { id: 10, reportType: "Running By Movement stage" },
    { id: 11, reportType: "Running By User" },
  ];
  AllBranches: any;
  users: any;
  roles: any;
  branchId: number;
  userId: number;
  roleId: number;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): any {
    this.loading = true;
    this.myDateValue = new Date();
    this.userForm = this.createFormGroup();
  }
  pageChanged(event): any {
    this.currentPage = event;
  }
  getBranchId(val: string): any {
    this.AllBranches.forEach((branch) => {
      if (val === branch.branchName) {
        this.branchId = branch.branchId;
      }
    });
  }
  getRoleId(val: string): any {
    this.roles.forEach((role) => {
      if (val === role.roleName) {
        this.roleId = role.roleId;
      }
    });
  }
  getUserId(val: string): any {
    this.users.forEach((user) => {
      if (val === user.userName) {
        this.userId = user.userId;
      }
    });
  }
  getComprehensive(data: any): any {
    this.loanTable = [];
    this.filteredLoans = [];
    this.totalItems = 0;
  }

  returnHome(): any {
    this.spinner.hide();
    this.revert();

    // setTimeout(() => {
    //   this.router.navigate(["admin/dashboard"]);
    // }, 2000);
  }
  createFormGroup(): any {
    return new FormGroup({
      range_date: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      report_type: this.fb.control(
        "",
        Validators.compose([Validators.required])
      ),
      branch: this.fb.control(""),
      user: this.fb.control(""),
      stage: this.fb.control(""),
    });
  }
  exportToExcel(): any {}
  fetchReport(val: any): any {
    if (val.length > 1) {
      const startDate = `${val[0].getFullYear()}-${
        val[0].getMonth() + 1
      }-${val[0].getDate()}`;
      const endDate = `${val[1].getFullYear()}-${
        val[1].getMonth() + 1
      }-${val[1].getDate()}`;
      this.fetchReports([startDate, endDate], this.type);
      // this.userForm.controls.range_date.setValue('');
    }
  }
  fetchReports(dates: Array<string>, typeOfReport: string): any {
    this.loading = true;
    const data = {
      startDate: dates[0],
      endDate: dates[1],
    };
    switch (typeOfReport) {
      case "Comprehensive report":
        this.getComprehensive(data);
        break;
    }
  }
  revert(): any {
    this.userForm.reset();
  }

  get fval(): any {
    return this.userForm.controls;
  }
  getReport(val: any): any {
    this.type = val;
    this.loanTable = [];
    this.filteredLoans = [];
    this.totalItems = 0;
    this.loading = true;
    switch (this.type) {
      case "Running By Branch":
        this.userForm.controls.branch.setValidators([Validators.required]);
        break;
      case "Running By User":
        this.userForm.controls.user.setValidators([Validators.required]);
        break;
      case "Running By Movement stage":
        this.userForm.controls.stage.setValidators([Validators.required]);
        break;
    }
  }
}
