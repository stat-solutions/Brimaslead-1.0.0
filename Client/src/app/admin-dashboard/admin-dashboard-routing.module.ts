import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreAdminComponent } from './pages-core/pages-core-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateAdminProfileComponent } from './components/update-admin-profile/update-admin-profile.component';
import { AdminNotificationsComponent } from './components/admin-notifications/admin-notifications.component';
import { UsersComponent } from './components/users/users.component';

import { AdminReportComponent } from './components/admin-report/admin-report.component';
import { ApproveUsersComponent } from './components/users/approve-users/approve-users.component';
import { ViewLoggedinComponent } from './components/users/view-loggedin/view-loggedin.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreAdminComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "admindashboard",
      },

      {
        path: "admindashboard",
        component: AdminDashboardComponent,
      },
     
      {
        path: "users",
        component: UsersComponent,
        children: [
              {
                path: 'loggedin',
                component: ViewLoggedinComponent,
              },
              {
                path: 'approveusers',
                component: ApproveUsersComponent,
              }]
      },
      {
        path: "adminprofile",
        component: UpdateAdminProfileComponent,
      },
      {
        path: "adminreports",
        component: AdminReportComponent,
      },
      {
        path: "notifications",
        component: AdminNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
