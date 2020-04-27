import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreAdminComponent } from './pages-core/pages-core-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateadminProfileComponent } from './components/update-admin-profile/update-admin-profile.component';
import { AdminNotificationsComponent } from './components/admin-notifications/admin-notifications.component';
import { AdminTicketsComponent } from './components/admin-tickets/admin-tickets.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreAdminComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
      },

      {
        path: "dashboardadmin",
        component: AdminDashboardComponent
      },
      {
        path: "updateadminprofile",
        component: UpdateadminProfileComponent
      },
      {
        path: "role-mgt",
        component: RoleManagementComponent
      },
      {
        path: "account-mgt",
        component: AccountManagementComponent
      },
      {
        path: "tickets",
        component: AdminTicketsComponent
      },
      {
        path: "notifications",
        component: AdminNotificationsComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
