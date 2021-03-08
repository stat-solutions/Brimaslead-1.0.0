import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceDashboardRoutingModule } from './finance-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreFinanceComponent } from './pages-core/pages-core-finance.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule
  ]
})
export class FinanceDashboardModule { }
