import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreSalesMarketComponent } from './pages-core/pages-core-sales-market.component';
import { SalesMarketDashboardComponent } from './components/sales-market-dashboard/sales-market-dashboard.component';
import { UpdateSalesMarketProfileComponent } from './components/update-sales-market-profile/update-sales-market-profile.component';
import { SalesMarketNotificationsComponent } from './components/sales-market-notifications/sales-market-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreSalesMarketComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboardsalesmarket',
       component: SalesMarketDashboardComponent,
      },
      {
        path: 'updatealesmarketprofile',
       component: UpdateSalesMarketProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: SalesMarketNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesMarketDashboardRoutingModule { }
