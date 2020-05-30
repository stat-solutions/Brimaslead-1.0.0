import { TagInputModule } from 'ngx-chips';
import { SharedModule } from './shared/shared.module';
import { TransLogisticsDashboardModule } from './trans-logistics-dashboard/trans-logistics-dashboard.module';
import { SuppliersDashboardModule } from './suppliers-dashboard/suppliers-dashboard.module';
import { SalesMarketDashboardModule } from './sales-market-dashboard/sales-market-dashboard.module';
import { QaDashboardModule } from './qa-dashboard/qa-dashboard.module';
import { ProductionDashboardModule } from './production-dashboard/production-dashboard.module';
import { ManagementDashboardModule } from './management-dashboard/management-dashboard.module';
import { FinanceDashboardModule } from './finance-dashboard/finance-dashboard.module';
import { CustomerDashboardModule } from './customers-dashboard/customer-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FrontDeskModule } from './front-desk/front-desk.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RequestInterceptorServiceService } from './shared/services/other-services/request-interceptor-service.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent,],
  imports: [
    TagInputModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgxSpinnerModule,
    AdminDashboardModule,
    CustomerDashboardModule,
    FinanceDashboardModule,
    FrontDeskModule,
    SharedModule,
    ManagementDashboardModule,
    ProductionDashboardModule,
    QaDashboardModule,
    SalesMarketDashboardModule,
    SuppliersDashboardModule,
    TransLogisticsDashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDatepickerModule,
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
    ToastrModule.forRoot(), // ToastrModule added

    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorServiceService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
