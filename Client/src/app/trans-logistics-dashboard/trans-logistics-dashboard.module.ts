import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransLogisticsDashboardRoutingModule } from './trans-logistics-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreTransLogisticsComponent } from './pages-core/pages-core-trans-logistics.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateTransLogisticsProfileComponent } from './components/update-trans-logistics-profile/update-trans-logistics-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelTransLogisticsComponent } from './common/left-panel/left-panel-trans-logistics.component';
import { RightPanelTransLogisticsComponent } from './common/right-panel/right-panel-trans-logistics.component';
import { HeaderTransLogisticsComponent } from './common/header/header-trans-logistics.component';
import { ContentSectionTransLogisticsComponent } from './content-section/content-section-trans-logistics.component';
import { TransLogisticsDashboardComponent } from './components/trans-logistics-dashboard/trans-logistics-dashboard.component';
import { TransLogisticsNotificationsComponent } from './components/trans-logistics-notifications/trans-logistics-notifications.component';


@NgModule({
  declarations: [
    PagesCoreTransLogisticsComponent,
    LeftPanelTransLogisticsComponent,
    RightPanelTransLogisticsComponent,
    HeaderTransLogisticsComponent,
    ContentSectionTransLogisticsComponent,
    AuthenticationComponent,
    TransLogisticsDashboardComponent,
    UpdateTransLogisticsProfileComponent,
    TransLogisticsNotificationsComponent,

  ],
  imports: [
    CommonModule,
    TransLogisticsDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TransLogisticsDashboardModule { }
