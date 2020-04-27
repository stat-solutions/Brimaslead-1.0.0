import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionDashboardRoutingModule } from './production-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreProductionComponent } from './pages-core/pages-core-production.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateProductionProfileComponent } from './components/update-production-profile/update-production-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelProductionComponent } from './common/left-panel/left-panel-production.component';
import { RightPanelProductionComponent } from './common/right-panel/right-panel-production.component';
import { HeaderProductionComponent } from './common/header/header-production.component';
import { ContentSectionProductionComponent } from './content-section/content-section-production.component';
import { ProductionDashboardComponent } from './components/production-dashboard/production-dashboard.component';
import { ProductionNotificationsComponent } from './components/production-notifications/production-notifications.component';


@NgModule({
  declarations: [
    PagesCoreProductionComponent,
    LeftPanelProductionComponent,
    RightPanelProductionComponent,
    HeaderProductionComponent,
    ContentSectionProductionComponent,
    AuthenticationComponent,
    ProductionDashboardComponent,
    UpdateProductionProfileComponent,
    ProductionNotificationsComponent,

  ],
  imports: [
    CommonModule,
    ProductionDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductionDashboardModule { }
