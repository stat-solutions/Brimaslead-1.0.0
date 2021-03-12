import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementDashboardRoutingModule } from './management-dashboard-routing.module';
import { PagesCoreManagementComponent } from './pages-core/pages-core-management.component';
import { FilterPipeModule } from "ngx-filter-pipe";
import { TagInputModule } from "ngx-chips";
import { AlertModule } from "ngx-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalModule } from "ngx-bootstrap";
import { AngularSlickgridModule } from "angular-slickgrid";
import { AgGridModule } from "ag-grid-angular";
import { ServicesModule } from "../shared/services/services.module";
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
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgChartjsModule } from "ng-chartjs";
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LeftPanelManagementComponent } from './common/left-panel/left-panel-management.component';
import { RightPanelManagementComponent } from './common/right-panel/right-panel-management.component';
import { HeaderManagementComponent } from './common/header/header-management.component';
import { ContentSectionManagementComponent } from './content-section/content-section-management.component';
import { ManagementDashboardComponent } from './components/management-dashboard/management-dashboard.component';
import { ManagementNotificationsComponent } from './components/management-notifications/management-notifications.component';
import { SharedModule } from '../shared/shared.module';
import { RfqApprovalComponent } from './components/rfq-approval/rfq-approval.component';
import { TabsModule } from "ngx-bootstrap/tabs";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { EditRfqComponent } from './components/rfq-approval/edit-rfq.component';
import { ManagementProfileComponent } from './components/management-profile/management-profile.component';
import { ManagementReportsComponent } from './components/management-reports/management-reports.component';
@NgModule({
  declarations: [
    PagesCoreManagementComponent,
    LeftPanelManagementComponent,
    RightPanelManagementComponent,
    HeaderManagementComponent,
    ContentSectionManagementComponent,
    AuthenticationComponent,
    ManagementDashboardComponent,
    ManagementNotificationsComponent,
    RfqApprovalComponent,
    EditRfqComponent,
    ManagementProfileComponent,
    ManagementReportsComponent,
  ],
  imports: [
    CommonModule,
    ManagementDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ServicesModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    DatepickerModule,
    BsDatepickerModule,
    NgbModule,
    AlertModule.forRoot(),
    AngularSlickgridModule.forRoot(),
    AgGridModule.withComponents([]),
    TabsModule.forRoot(),
    FilterPipeModule,
    TooltipModule.forRoot(),
    NgChartjsModule,
    NgChartjsModule.registerPlugin(["inlinePlugin"]),
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
  ],
})
export class ManagementDashboardModule {}
