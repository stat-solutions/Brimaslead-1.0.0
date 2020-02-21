import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreManagementComponent } from './pages-core/pages-core-management.component';
import { ManagementDashboardComponent } from './components/management-dashboard/management-dashboard.component';
import { UpdateManagementProfileComponent } from './components/update-management-profile/update-management-profile.component';
import { ManagementNotificationsComponent } from './components/management-notifications/management-notifications.component';
import { RfqApprovalComponent } from './components/rfq-approval/rfq-approval.component';
import { EditRfqComponent } from './components/rfq-approval/edit-rfq.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreManagementComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'managementdashboard'
      },

      {
        path: 'managementdashboard',
        component: ManagementDashboardComponent
      },
      {
        path: 'rfq-approval',
        component: RfqApprovalComponent
      },
      {
        path: 'rfq-approval/edit-rfq',
        component: EditRfqComponent
      },
      {
        path: 'updatemanagementprofile',
        component: UpdateManagementProfileComponent
      },
      {
        path: 'notifications',
        component: ManagementNotificationsComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementDashboardRoutingModule { }
