import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignCreativeDashboardRoutingModule } from './design-creative-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreDesignCreativeComponent } from './pages-core/pages-core-design-creative.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelDesignCreativeComponent } from './common/left-panel/left-panel-design-creative.component';
import { RightPanelDesignCreativeComponent } from './common/right-panel/right-panel-design-creative.component';
import { HeaderDesignCreativeComponent } from './common/header/header-design-creative.component';
import { ContentSectionDesignCreativeComponent } from './content-section/content-section-design-creative.component';
import { DesignCreativeDashboardComponent } from './components/design-creative-dashboard/design-creative-dashboard.component';
import { DesignCreativeNotificationsComponent } from './components/design-creative-notifications/design-creative-notifications.component';
import { DesignCreativeProfileComponent } from './components/design-creative-profile/design-creative-profile.component';
import { DesignCreativeReportsComponent } from './components/design-creative-reports/design-creative-reports.component';
import { CreatedDesignsComponent } from './components/created-designs/created-designs.component';
import { QualityAssuranceComponent } from './components/quality-assurance/quality-assurance.component';


@NgModule({
  declarations: [
    PagesCoreDesignCreativeComponent,
    LeftPanelDesignCreativeComponent,
    RightPanelDesignCreativeComponent,
    HeaderDesignCreativeComponent,
    ContentSectionDesignCreativeComponent,
    AuthenticationComponent,
    DesignCreativeDashboardComponent,
    DesignCreativeNotificationsComponent,
    DesignCreativeProfileComponent,
    DesignCreativeReportsComponent,
    CreatedDesignsComponent,
    QualityAssuranceComponent,

  ],
  imports: [
    CommonModule,
    DesignCreativeDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DesignCreativeDashboardModule { }
