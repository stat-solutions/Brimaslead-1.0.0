import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreManagementComponent } from './pages-core/pages-core-management.component';
import { ManagementDashboardComponent } from './components/management-dashboard/management-dashboard.component';
import { UpdateManagementProfileComponent } from './components/update-management-profile/update-management-profile.component';
import { ManagementNotificationsComponent } from './components/management-notifications/management-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreManagementComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboardmanagement',
       component: ManagementDashboardComponent,
      },
      {
        path: 'updatemanagementprofile',
       component: UpdateManagementProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: ManagementNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementDashboardRoutingModule { }
