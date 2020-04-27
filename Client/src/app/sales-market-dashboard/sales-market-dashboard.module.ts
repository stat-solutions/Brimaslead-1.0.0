import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesMarketDashboardRoutingModule } from './sales-market-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreSalesMarketComponent } from './pages-core/pages-core-sales-market.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateSalesMarketProfileComponent } from './components/update-sales-market-profile/update-sales-market-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelSalesMarketComponent } from './common/left-panel/left-panel-sales-market.component';
import { RightPanelSalesMarketComponent } from './common/right-panel/right-panel-sales-market.component';
import { HeaderSalesMarketComponent } from './common/header/header-sales-market.component';
import { ContentSectionSalesMarketComponent } from './content-section/content-section-sales-market.component';
import { SalesMarketDashboardComponent } from './components/sales-market-dashboard/sales-market-dashboard.component';
import { SalesMarketNotificationsComponent } from './components/sales-market-notifications/sales-market-notifications.component';


@NgModule({
  declarations: [
    PagesCoreSalesMarketComponent,
    LeftPanelSalesMarketComponent,
    RightPanelSalesMarketComponent,
    HeaderSalesMarketComponent,
    ContentSectionSalesMarketComponent,
    AuthenticationComponent,
    SalesMarketDashboardComponent,
    UpdateSalesMarketProfileComponent,
    SalesMarketNotificationsComponent,

  ],
  imports: [
    CommonModule,
    SalesMarketDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SalesMarketDashboardModule { }
