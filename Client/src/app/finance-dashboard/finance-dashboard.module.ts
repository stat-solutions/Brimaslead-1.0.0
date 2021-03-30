import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceDashboardRoutingModule } from './finance-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreFinanceComponent } from './pages-core/pages-core-finance.component';
import { FilterPipeModule } from "ngx-filter-pipe";
import { TagInputModule } from "ngx-chips";
import { AlertModule } from "ngx-bootstrap";
import { TabsModule } from "ngx-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalModule } from "ngx-bootstrap";
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
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LeftPanelFinanceComponent } from './common/left-panel/left-panel-finance.component';
import { RightPanelFinanceComponent } from './common/right-panel/right-panel-finance.component';
import { HeaderFinanceComponent } from './common/header/header-finance.component';
import { ContentSectionFinanceComponent } from './content-section/content-section-finance.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { FinanceNotificationsComponent } from './components/finance-notifications/finance-notifications.component';
import { PayServiceProvidersComponent } from './components/pay-service-providers/pay-service-providers.component';
import { CostJobsComponent } from './components/cost-jobs/cost-jobs.component';
import { ReceivablesPayablesComponent } from './components/receivables-payables/receivables-payables.component';
import { RpSuppliersComponent } from './components/receivables-payables/rp-suppliers/rp-suppliers.component';
import { RpClientsComponent } from './components/receivables-payables/rp-clients/rp-clients.component';
import { FinanceReportsComponent } from './components/finance-reports/finance-reports.component';
import { FinanceProfileComponent } from './components/finance-profile/finance-profile.component';


@NgModule({
  declarations: [
    PagesCoreFinanceComponent,
    LeftPanelFinanceComponent,
    RightPanelFinanceComponent,
    HeaderFinanceComponent,
    ContentSectionFinanceComponent,
    AuthenticationComponent,
    FinanceDashboardComponent,
    FinanceNotificationsComponent,
    PayServiceProvidersComponent,
    CostJobsComponent,
    ReceivablesPayablesComponent,
    RpSuppliersComponent,
    RpClientsComponent,
    FinanceReportsComponent,
    FinanceProfileComponent,
  ],
  imports: [
    CommonModule,
    FinanceDashboardRoutingModule,
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
    TabsModule.forRoot(),
    FilterPipeModule,
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
    MatTreeModule
  ],
})
export class FinanceDashboardModule {}
