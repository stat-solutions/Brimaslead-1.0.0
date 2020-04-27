import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreCustomerComponent } from './pages-core/pages-core-customer.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { UpdateCustomerProfileComponent } from './components/update-customer-profile/update-customer-profile.component';
import { CustomerNotificationsComponent } from './components/customer-notifications/customer-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreCustomerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboardcustomer',
       component: CustomerDashboardComponent,
      },
      {
        path: 'updatecustomerprofile',
       component: UpdateCustomerProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: CustomerNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }
