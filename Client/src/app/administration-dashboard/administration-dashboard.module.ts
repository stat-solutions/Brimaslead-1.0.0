import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationDashboardRoutingModule } from "./administration-dashboard-routing.module";
import { SharedModule } from '../shared/shared.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TagInputModule } from 'ngx-chips';
import { AlertModule } from "ngx-bootstrap";
import { PagesCoreadminiComponent } from './pages-core/pages-core-admini.component';
import { AdministrationProfileComponent } from "./components/administration-profile/administration-profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalModule } from "ngx-bootstrap";
import { AngularSlickgridModule } from "angular-slickgrid";
import { AgGridModule } from "ag-grid-angular";
import { TabsModule } from "ngx-bootstrap";
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
import { LeftPanelAdminiComponent } from './common/left-panel/left-panel-admini.component';
import { RightPanelAdminiComponent } from './common/right-panel/right-panel-admini.component';
import { HeaderAdministrationComponent } from "./common/header/header-administration.component";
import { ContentSectionAdminiComponent } from './content-section/content-section-admini.component';
import { AdministrationDashboardComponent } from './components/administration-dashboard/administration-dashboard.component';
import { AdminiNotificationsComponent } from './components/admini-notifications/admini-notifications.component';
import { RfqPreparationComponent } from './components/rfq-preparation/rfq-preparation.component';
import { BidPreparationComponent } from './components/bid-preparation/bid-preparation.component';
import { DebtManagementComponent } from './components/debt-management/debt-management.component';
import { ProcurementManagementComponent } from './components/procurement-management/procurement-management.component';
import { AddRfqItemComponent } from './components/rfq-preparation/add-rfq-item/add-rfq-item.component';
import { RfqDetailsComponent } from './components/rfq-preparation/rfq-details/rfq-details.component';
import { RfqsComponent } from './components/rfq-preparation/rfqs/rfqs.component';
import { FrontDeskComponent } from './components/front-desk/front-desk.component';
import { MakeAppointmentComponent } from './components/front-desk/make-appointment/make-appointment.component';
import { CreateCatalogItemsComponent } from './components/front-desk/create-catalog-items/create-catalog-items.component';
import { CreateClientsComponent } from './components/front-desk/create-clients/create-clients.component';
import { PhoneRfqsComponent } from './components/front-desk/phone-rfqs/phone-rfqs.component';
import { FileAndArchiveComponent } from './components/front-desk/file-and-archive/file-and-archive.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    PagesCoreadminiComponent,
    LeftPanelAdminiComponent,
    RightPanelAdminiComponent,
    HeaderAdministrationComponent,
    ContentSectionAdminiComponent,
    AdministrationDashboardComponent,
    AdministrationProfileComponent,
    AdminiNotificationsComponent,
    RfqPreparationComponent,
    BidPreparationComponent,
    DebtManagementComponent,
    ProcurementManagementComponent,
    AddRfqItemComponent,
    RfqDetailsComponent,
    RfqsComponent,
    FrontDeskComponent,
    MakeAppointmentComponent,
    CreateCatalogItemsComponent,
    CreateClientsComponent,
    PhoneRfqsComponent,
    FileAndArchiveComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    TagInputModule,
    AdministrationDashboardRoutingModule,
    SharedModule,
    FormsModule,
    ServicesModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    DatepickerModule,
    BsDatepickerModule,
    NgbModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    AngularSlickgridModule.forRoot(),
    AgGridModule.withComponents([]),
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
export class AdministrationDashboardModule {}
