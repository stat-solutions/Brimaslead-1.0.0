import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaDashboardRoutingModule } from './qa-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreQaComponent } from './pages-core/pages-core-qa.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateQaProfileComponent } from './components/update-qa-profile/update-qa-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelQaComponent } from './common/left-panel/left-panel-qa.component';
import { RightPanelQaComponent } from './common/right-panel/right-panel-qa.component';
import { HeaderQaComponent } from './common/header/header-qa.component';
import { ContentSectionQaComponent } from './content-section/content-section-qa.component';
import { QaDashboardComponent } from './components/qa-dashboard/qa-dashboard.component';
import { QaNotificationsComponent } from './components/qa-notifications/qa-notifications.component';


@NgModule({
  declarations: [
    PagesCoreQaComponent,
    LeftPanelQaComponent,
    RightPanelQaComponent,
    HeaderQaComponent,
    ContentSectionQaComponent,
    AuthenticationComponent,
    QaDashboardComponent,
    UpdateQaProfileComponent,
    QaNotificationsComponent,

  ],
  imports: [
    CommonModule,
    QaDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class QaDashboardModule { }
