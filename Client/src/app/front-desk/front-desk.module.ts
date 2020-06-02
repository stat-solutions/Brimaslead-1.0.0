import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RfqDetailsComponent } from './front-desk-dashboard/request-for-quote/rfq-details/rfq-details.component';
import { ModalModule } from "ngx-bootstrap";
import { AddRfqItemsComponent } from './front-desk-dashboard/request-for-quote/add-rfq-items/add-rfq-items.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DocPipe } from '../shared/pipes/doc.pipe';
import { DbDatePipe } from '../shared/pipes/db-date.pipe';
import { FieldPathGenPipe } from '../shared/pipes/field-path-gen.pipe';
import { TimevaluePipe } from '../shared/pipes/timevalue.pipe';
import { CreateCatalogItemComponent } from './front-desk-dashboard/create-catalog-item/create-catalog-item.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { AgGridModule } from 'ag-grid-angular';

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
    RfqDetailsComponent,
    AddRfqItemsComponent,
    DocPipe,
    DbDatePipe,
    FieldPathGenPipe,
    TimevaluePipe,
    CreateCatalogItemComponent
  ],
  imports: [
    TagInputModule,
    BrowserAnimationsModule,
    CommonModule,
    FrontDeskRoutingModule,
    FormsModule,
    ServicesModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AngularSlickgridModule.forRoot(),
    AgGridModule.withComponents([]),
    FilterPipeModule,
    NgxSpinnerModule
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
export class FrontDeskModule {}
