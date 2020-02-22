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
import { HiringRetirementResignationComponent } from './front-desk-dashboard/employee-service/hiring-retirement-resignation/hiring-retirement-resignation.component';


const routes: Routes = [

  {
    path: '',
    component: FrontDeskLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'frontdeskdashboard'
      },
      {
        path: 'frontdeskdashboard',
        component: FrontDeskDashboardComponent,
      },
      {
        path: 'requestforqoute',
        component: RequestForQuoteComponent,
      },
      {
        path: 'leavemanagement',
        component: LeaveManagementComponent,
      },

      {
        path: 'payrollmodule',
        component: PayrollModuleComponent,
      },
      {
        path: 'performancemanagement',
        component: PerformanceManagementComponent,
      },
      {
        path: 'hiringretirementresignation',
        component: HiringRetirementResignationComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
