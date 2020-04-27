import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceDashboardRoutingModule } from './finance-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreFinanceComponent } from './pages-core/pages-core-finance.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateFinanceProfileComponent } from './components/update-finance-profile/update-finance-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelFinanceComponent } from './common/left-panel/left-panel-finance.component';
import { RightPanelFinanceComponent } from './common/right-panel/right-panel-finance.component';
import { HeaderFinanceComponent } from './common/header/header-finance.component';
import { ContentSectionFinanceComponent } from './content-section/content-section-finance.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { FinanceNotificationsComponent } from './components/finance-notifications/finance-notifications.component';


@NgModule({
  declarations: [
    PagesCoreFinanceComponent,
    LeftPanelFinanceComponent,
    RightPanelFinanceComponent,
    HeaderFinanceComponent,
    ContentSectionFinanceComponent,
    AuthenticationComponent,
    FinanceDashboardComponent,
    UpdateFinanceProfileComponent,
    FinanceNotificationsComponent,

  ],
  imports: [
    CommonModule,
    FinanceDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FinanceDashboardModule { }
