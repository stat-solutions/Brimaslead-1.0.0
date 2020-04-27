import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrontDeskLayoutComponent } from './front-desk-layout/front-desk-layout.component';

import { FrontDeskRoutingModule } from './front-desk-routing.module';
import { FrontDeskDashboardComponent } from './front-desk-dashboard/front-desk-dashboard.component';
import { FrontDeskHeaderComponent } from './front-desk-panels/front-desk-header/front-desk-header.component';
import { FrontDeskLeftPanelComponent } from './front-desk-panels/front-desk-left-panel/front-desk-left-panel.component';
import { FrontDeskRightPanelComponent } from './front-desk-panels/front-desk-right-panel/front-desk-right-panel.component';
import { FrontDeskComponent } from './front-desk.component';
import { ServicesModule } from '../shared/services/services.module';
import { RequestForQuoteComponent } from './front-desk-dashboard/request-for-quote/request-for-quote.component';
import { LeaveManagementComponent } from './front-desk-dashboard/employee-service/leave-management/leave-management.component';
// tslint:disable-next-line:max-line-length
import { PerformanceManagementComponent } from './front-desk-dashboard/employee-service/performance-management/performance-management.component';
import { PayrollModuleComponent } from './front-desk-dashboard/employee-service/payroll-module/payroll-module.component';
// tslint:disable-next-line:max-line-length
import { HiringRetirementResignationComponent } from './front-desk-dashboard/employee-service/hiring-retirement-resignation/hiring-retirement-resignation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrontDeskLayoutComponent,
    FrontDeskDashboardComponent,
    FrontDeskHeaderComponent,
    FrontDeskLeftPanelComponent,
    FrontDeskRightPanelComponent,
    FrontDeskComponent,
    RequestForQuoteComponent,
    LeaveManagementComponent,
    PerformanceManagementComponent,
    PayrollModuleComponent,
    HiringRetirementResignationComponent,


  ],
  imports: [
    CommonModule,
    FrontDeskRoutingModule,
    FormsModule,
    ServicesModule,
    ReactiveFormsModule
  ],
  exports: [
    FrontDeskLayoutComponent,
    FrontDeskDashboardComponent,
    FrontDeskHeaderComponent,
    FrontDeskLeftPanelComponent,
    FrontDeskRightPanelComponent,
    FrontDeskComponent

  ]
})
export class FrontDeskModule { }
