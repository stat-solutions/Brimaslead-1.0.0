import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreFinanceComponent } from './pages-core/pages-core-finance.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { UpdateFinanceProfileComponent } from './components/update-finance-profile/update-finance-profile.component';
import { FinanceNotificationsComponent } from './components/finance-notifications/finance-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreFinanceComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboardfinance',
       component: FinanceDashboardComponent,
      },
      {
        path: 'updatefinanceprofile',
       component: UpdateFinanceProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: FinanceNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceDashboardRoutingModule { }
