import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreAdminComponent } from './pages-core/pages-core-admin.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateadminProfileComponent } from './components/update-admin-profile/update-admin-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelAdminComponent } from './common/left-panel/left-panel-admin.component';
import { RightPanelAdminComponent } from './common/right-panel/right-panel-admin.component';
import { HeaderAdminComponent } from './common/header/header-admin.component';
import { ContentSectionAdminComponent } from './content-section/content-section-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminNotificationsComponent } from './components/admin-notifications/admin-notifications.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { AdminTicketsComponent } from './components/admin-tickets/admin-tickets.component';


@NgModule({
  declarations: [
    PagesCoreAdminComponent,
    LeftPanelAdminComponent,
    RightPanelAdminComponent,
    HeaderAdminComponent,
    ContentSectionAdminComponent,
    AuthenticationComponent,
    AdminDashboardComponent,
    UpdateadminProfileComponent,
    AdminNotificationsComponent,
    AdminTicketsComponent,
    RoleManagementComponent,
    AccountManagementComponent

  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminDashboardModule { }
