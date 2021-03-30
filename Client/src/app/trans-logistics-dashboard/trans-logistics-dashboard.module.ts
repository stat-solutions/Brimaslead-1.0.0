import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransLogisticsDashboardRoutingModule } from './trans-logistics-dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesCoreTransLogisticsComponent } from './pages-core/pages-core-trans-logistics.component';
import { FilterPipeModule } from "ngx-filter-pipe";
import { TagInputModule } from "ngx-chips";
import { AlertModule, TabsModule, TooltipModule } from "ngx-bootstrap";
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
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LeftPanelTransLogisticsComponent } from './common/left-panel/left-panel-trans-logistics.component';
import { RightPanelTransLogisticsComponent } from './common/right-panel/right-panel-trans-logistics.component';
import { HeaderTransLogisticsComponent } from './common/header/header-trans-logistics.component';
import { ContentSectionTransLogisticsComponent } from './content-section/content-section-trans-logistics.component';
import { TransLogisticsDashboardComponent } from './components/trans-logistics-dashboard/trans-logistics-dashboard.component';
import { TransLogisticsNotificationsComponent } from './components/trans-logistics-notifications/trans-logistics-notifications.component';
import { TransLogisticsProfileComponent } from './components/trans-logistics-profile/trans-logistics-profile.component';
import { TransLogisticsReportsComponent } from './components/trans-logistics-reports/trans-logistics-reports.component';
import { ItemsVerificationComponent } from './components/items-verification/items-verification.component';
import { OrderDeliveryComponent } from './components/order-delivery/order-delivery.component';
import { InvoiceDeliveryComponent } from './components/invoice-delivery/invoice-delivery.component';


@NgModule({
  declarations: [
    PagesCoreTransLogisticsComponent,
    LeftPanelTransLogisticsComponent,
    RightPanelTransLogisticsComponent,
    HeaderTransLogisticsComponent,
    ContentSectionTransLogisticsComponent,
    AuthenticationComponent,
    TransLogisticsDashboardComponent,
    TransLogisticsNotificationsComponent,
    TransLogisticsProfileComponent,
    TransLogisticsReportsComponent,
    ItemsVerificationComponent,
    OrderDeliveryComponent,
    InvoiceDeliveryComponent,
  ],
  imports: [
    CommonModule,
    TransLogisticsDashboardRoutingModule,
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
export class TransLogisticsDashboardModule {}
