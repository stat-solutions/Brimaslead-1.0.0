import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersDashboardRoutingModule } from './suppliers-dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesCoreSuppliersComponent } from './pages-core/pages-core-suppliers.component';
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
import { UpdateSuppliersProfileComponent } from './components/update-suppliers-profile/update-suppliers-profile.component';
import { LeftPanelSuppliersComponent } from './common/left-panel/left-panel-suppliers.component';
import { RightPanelSuppliersComponent } from './common/right-panel/right-panel-suppliers.component';
import { HeaderSuppliersComponent } from './common/header/header-suppliers.component';
import { ContentSectionSuppliersComponent } from './content-section/content-section-suppliers.component';
import { SuppliersDashboardComponent } from './components/suppliers-dashboard/suppliers-dashboard.component';
import { SuppliersNotificationsComponent } from './components/suppliers-notifications/suppliers-notifications.component';


@NgModule({
  declarations: [
    PagesCoreSuppliersComponent,
    LeftPanelSuppliersComponent,
    RightPanelSuppliersComponent,
    HeaderSuppliersComponent,
    ContentSectionSuppliersComponent,
    AuthenticationComponent,
    SuppliersDashboardComponent,
    UpdateSuppliersProfileComponent,
    SuppliersNotificationsComponent,
  ],
  imports: [
    CommonModule,
    SuppliersDashboardRoutingModule,
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
    MatTreeModule
  ],
})
export class SuppliersDashboardModule {}
