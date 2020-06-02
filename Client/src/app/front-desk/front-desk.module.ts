import { FilterPipeModule } from 'ngx-filter-pipe';
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
import { HireComponent } from './front-desk-dashboard/employee-service/hire/hire.component';
import { AlertModule } from "ngx-bootstrap";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { NgxSpinnerModule } from 'ngx-spinner';

import { RfqDetailsComponent } from './front-desk-dashboard/request-for-quote/rfq-details/rfq-details.component';
import { ModalModule } from "ngx-bootstrap";
import { AddRfqItemsComponent } from './front-desk-dashboard/request-for-quote/add-rfq-items/add-rfq-items.component';
import { DocPipe } from '../shared/pipes/doc.pipe';
import { DbDatePipe } from '../shared/pipes/db-date.pipe';
import { FieldPathGenPipe } from '../shared/pipes/field-path-gen.pipe';
import { TimevaluePipe } from '../shared/pipes/timevalue.pipe';
import { CreateCatalogItemComponent } from './front-desk-dashboard/create-catalog-item/create-catalog-item.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { AgGridModule } from 'ag-grid-angular';
import { TabsModule } from 'ngx-bootstrap';

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
    HireComponent,
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
    NgxSpinnerModule,
    AlertModule.forRoot(),
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AngularSlickgridModule.forRoot(),
    AgGridModule.withComponents([]),
    TabsModule.forRoot(),
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
