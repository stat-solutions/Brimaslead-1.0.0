import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransLogisticsDashboardRoutingModule } from './trans-logistics-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreTransLogisticsComponent } from './pages-core/pages-core-trans-logistics.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule
  ]
})
export class TransLogisticsDashboardModule { }
