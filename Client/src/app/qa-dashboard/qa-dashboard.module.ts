import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaDashboardRoutingModule } from './qa-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreQaComponent } from './pages-core/pages-core-qa.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelQaComponent } from './common/left-panel/left-panel-qa.component';
import { RightPanelQaComponent } from './common/right-panel/right-panel-qa.component';
import { HeaderQaComponent } from './common/header/header-qa.component';
import { ContentSectionQaComponent } from './content-section/content-section-qa.component';
import { QaDashboardComponent } from './components/qa-dashboard/qa-dashboard.component';
import { QaNotificationsComponent } from './components/qa-notifications/qa-notifications.component';
import { QaProfileComponent } from './components/qa-profile/qa-profile.component';
import { QaReportsComponent } from './components/qa-reports/qa-reports.component';
import { QualityAssuranceComponent } from './components/quality-assurance/quality-assurance.component';


@NgModule({
  declarations: [
    PagesCoreQaComponent,
    LeftPanelQaComponent,
    RightPanelQaComponent,
    HeaderQaComponent,
    ContentSectionQaComponent,
    AuthenticationComponent,
    QaDashboardComponent,
    QaNotificationsComponent,
    QaProfileComponent,
    QaReportsComponent,
    QualityAssuranceComponent,

  ],
  imports: [
    CommonModule,
    QaDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class QaDashboardModule { }
