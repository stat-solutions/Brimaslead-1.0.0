import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementDashboardRoutingModule } from './management-dashboard-routing.module';
import { PagesCoreManagementComponent } from './pages-core/pages-core-management.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateManagementProfileComponent } from './components/update-management-profile/update-management-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelManagementComponent } from './common/left-panel/left-panel-management.component';
import { RightPanelManagementComponent } from './common/right-panel/right-panel-management.component';
import { HeaderManagementComponent } from './common/header/header-management.component';
import { ContentSectionManagementComponent } from './content-section/content-section-management.component';
import { ManagementDashboardComponent } from './components/management-dashboard/management-dashboard.component';
import { ManagementNotificationsComponent } from './components/management-notifications/management-notifications.component';
import { SharedModule } from '../shared/shared.module';
import { RfqApprovalComponent } from './components/rfq-approval/rfq-approval.component';
import { TabsModule } from "ngx-bootstrap/tabs";
import { EditRfqComponent } from './components/rfq-approval/edit-rfq.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    PagesCoreManagementComponent,
    LeftPanelManagementComponent,
    RightPanelManagementComponent,
    HeaderManagementComponent,
    ContentSectionManagementComponent,
    AuthenticationComponent,
    ManagementDashboardComponent,
    UpdateManagementProfileComponent,
    ManagementNotificationsComponent,
    RfqApprovalComponent,
    EditRfqComponent
  ],
  imports: [
    CommonModule,
    ManagementDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    NgxSpinnerModule
  ]
})
export class ManagementDashboardModule { }
