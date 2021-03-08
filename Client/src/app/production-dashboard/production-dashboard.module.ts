import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionDashboardRoutingModule } from './production-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreProductionComponent } from './pages-core/pages-core-production.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelProductionComponent } from './common/left-panel/left-panel-production.component';
import { RightPanelProductionComponent } from './common/right-panel/right-panel-production.component';
import { HeaderProductionComponent } from './common/header/header-production.component';
import { ContentSectionProductionComponent } from './content-section/content-section-production.component';
import { ProductionDashboardComponent } from './components/production-dashboard/production-dashboard.component';
import { ProductionNotificationsComponent } from './components/production-notifications/production-notifications.component';
import { ProductionProfileComponent } from './components/production-profile/production-profile.component';
import { ProductionReportsComponent } from './components/production-reports/production-reports.component';
import { DesignImplementationComponent } from './components/design-implementation/design-implementation.component';


@NgModule({
  declarations: [
    PagesCoreProductionComponent,
    LeftPanelProductionComponent,
    RightPanelProductionComponent,
    HeaderProductionComponent,
    ContentSectionProductionComponent,
    AuthenticationComponent,
    ProductionDashboardComponent,
    ProductionNotificationsComponent,
    ProductionProfileComponent,
    ProductionReportsComponent,
    DesignImplementationComponent,

  ],
  imports: [
    CommonModule,
    ProductionDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductionDashboardModule { }
