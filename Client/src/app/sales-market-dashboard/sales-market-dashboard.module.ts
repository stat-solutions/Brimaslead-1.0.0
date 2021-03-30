import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesMarketDashboardRoutingModule } from './sales-market-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreSalesMarketComponent } from './pages-core/pages-core-sales-market.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftPanelSalesMarketComponent } from './common/left-panel/left-panel-sales-market.component';
import { RightPanelSalesMarketComponent } from './common/right-panel/right-panel-sales-market.component';
import { HeaderSalesMarketComponent } from './common/header/header-sales-market.component';
import { ContentSectionSalesMarketComponent } from './content-section/content-section-sales-market.component';
import { SalesMarketDashboardComponent } from './components/sales-market-dashboard/sales-market-dashboard.component';
import { SalesMarketNotificationsComponent } from './components/sales-market-notifications/sales-market-notifications.component';
import { FieldRfqsComponent } from './components/field-rfqs/field-rfqs.component';
import { SalesMarketProfileComponent } from './components/sales-market-profile/sales-market-profile.component';
import { SalesMarketReportsComponent } from './components/sales-market-reports/sales-market-reports.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, AlertModule, TabsModule } from 'ngx-bootstrap';
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ServicesModule } from '../shared/services/services.module';


@NgModule({
  declarations: [
    PagesCoreSalesMarketComponent,
    LeftPanelSalesMarketComponent,
    RightPanelSalesMarketComponent,
    HeaderSalesMarketComponent,
    ContentSectionSalesMarketComponent,
    AuthenticationComponent,
    SalesMarketDashboardComponent,
    SalesMarketNotificationsComponent,
    FieldRfqsComponent,
    SalesMarketProfileComponent,
    SalesMarketReportsComponent,
  ],
  imports: [
    CommonModule,
    SalesMarketDashboardRoutingModule,
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
    MatTreeModule,
  ],
})
export class SalesMarketDashboardModule {}
