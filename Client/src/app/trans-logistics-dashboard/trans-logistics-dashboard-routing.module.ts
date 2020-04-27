import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreTransLogisticsComponent } from './pages-core/pages-core-trans-logistics.component';
import { TransLogisticsDashboardComponent } from './components/trans-logistics-dashboard/trans-logistics-dashboard.component';
import { UpdateTransLogisticsProfileComponent } from './components/update-trans-logistics-profile/update-trans-logistics-profile.component';
import { TransLogisticsNotificationsComponent } from './components/trans-logistics-notifications/trans-logistics-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreTransLogisticsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboardtranslogistics',
       component: TransLogisticsDashboardComponent,
      },
      {
        path: 'updatetranslogisticsprofile',
       component: UpdateTransLogisticsProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: TransLogisticsNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransLogisticsDashboardRoutingModule { }
