import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontDeskLayoutComponent } from './front-desk-layout/front-desk-layout.component';
import { FrontDeskDashboardComponent } from './front-desk-dashboard/front-desk-dashboard.component';
import { LeaveManagementComponent } from './front-desk-dashboard/employee-service/leave-management/leave-management.component';
import { RequestForQuoteComponent } from './front-desk-dashboard/request-for-quote/request-for-quote.component';
import { PayrollModuleComponent } from './front-desk-dashboard/employee-service/payroll-module/payroll-module.component';
// tslint:disable-next-line:max-line-length
import { PerformanceManagementComponent } from './front-desk-dashboard/employee-service/performance-management/performance-management.component';
// tslint:disable-next-line:max-line-length
import { HireComponent } from './front-desk-dashboard/employee-service/hire/hire.component';
import { RfqDetailsComponent } from './front-desk-dashboard/request-for-quote/rfq-details/rfq-details.component';
import { AddRfqItemsComponent } from './front-desk-dashboard/request-for-quote/add-rfq-items/add-rfq-items.component';
import { CreateCatalogItemComponent } from './front-desk-dashboard/create-catalog-item/create-catalog-item.component';


const routes: Routes = [
  {
    path: "",
    component: FrontDeskLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "frontdeskdashboard"
      },
      {
        path: "frontdeskdashboard",
        component: FrontDeskDashboardComponent
      },
      {
        path: "requestforquote",
        component: RequestForQuoteComponent
      },
      {
        path: "detailquote",
        component: RfqDetailsComponent
      },
      {
        path: "employee-service/leavemanagement",
        component: LeaveManagementComponent
      },

      {
        path: "payrollmodule",
        component: PayrollModuleComponent
      },
      {
        path: "performancemanagement",
        component: PerformanceManagementComponent
      },
      {
        path: "employee-service/hire",
        component: HireComponent
      },
      {
        path: "addRfqItems",
        component: AddRfqItemsComponent
      },
      {
        path: "createCatalogItem",
        component: CreateCatalogItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
